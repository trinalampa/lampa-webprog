import { useState, useMemo, useEffect } from 'react';
import {
  Alert, Box, Button, Chip, Dialog, DialogActions, DialogContent,
  DialogTitle, InputAdornment, MenuItem, Paper, Stack, TextField,
  Typography, useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid } from '@mui/x-data-grid';
import { fetchArticles, createArticle, updateArticle, deleteArticle } from '../../services/ArticleService';

const statusOptions = ['active', 'inactive'];

const blankForm = {
  slug: '',
  title: '',
  content: '',
  image: '',
  isActive: true,
};

const DashArticleListPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [modal, setModal] = useState({ open: false, id: null });
  const [form, setForm] = useState(blankForm);
  const [errors, setErrors] = useState({});
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const loadArticles = async () => {
    setLoading(true);
    try {
      const { data } = await fetchArticles();
      const mapped = data.articles.map((article) => ({
        id: article._id,
        slug: article.slug,
        title: article.title,
        content: Array.isArray(article.content) ? article.content.join(' ') : article.content,
        paragraphs: Array.isArray(article.content) ? article.content.length : 1,
        image: article.image ?? '',
        isActive: article.isActive,
      }));
      setArticles(mapped);
      setApiError('');
    } catch (err) {
      setApiError(err.response?.data?.message ?? 'Failed to load articles.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const filteredArticles = useMemo(() => {
    const term = search.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesSearch =
        !term ||
        article.slug.toLowerCase().includes(term) ||
        article.title.toLowerCase().includes(term);
      const matchesStatus =
        filterStatus === 'all' ||
        (filterStatus === 'active' && article.isActive) ||
        (filterStatus === 'inactive' && !article.isActive);
      return matchesSearch && matchesStatus;
    });
  }, [articles, search, filterStatus]);

  const openModal = (article) => {
    setModal({ open: true, id: article?.id ?? null });
    setForm(article
      ? {
          slug: article.slug,
          title: article.title,
          content: article.content,
          image: article.image ?? '',
          isActive: article.isActive,
        }
      : { ...blankForm }
    );
    setErrors({});
  };

  const closeModal = () => {
    setModal({ open: false, id: null });
    setForm({ ...blankForm });
    setErrors({});
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const nextErrors = {};
    [['slug', 'Slug'], ['title', 'Title'], ['content', 'Content']].forEach(([key, label]) => {
      if (!String(form[key]).trim()) nextErrors[key] = `${label} is required.`;
    });
    return nextErrors;
  };

  const handleSave = async () => {
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const payload = {
      slug: form.slug.trim(),
      title: form.title.trim(),
      content: form.content.split('\n').filter((p) => p.trim() !== ''),
      image: form.image.trim(),
      isActive: form.isActive,
    };

    try {
      if (modal.id !== null) {
        await updateArticle(modal.id, payload);
      } else {
        await createArticle(payload);
      }
      await loadArticles();
      closeModal();
    } catch (err) {
      setApiError(err.response?.data?.message ?? 'Failed to save article.');
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    try {
      await updateArticle(id, { isActive: !currentStatus });
      await loadArticles();
    } catch (err) {
      setApiError(err.response?.data?.message ?? 'Failed to update status.');
    }
  };

  const fieldProps = (name, label, extra = {}) => ({
    name,
    label,
    value: form[name],
    onChange: handleChange,
    error: Boolean(errors[name]),
    helperText: errors[name],
    fullWidth: true,
    ...extra,
  });

  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'slug', headerName: 'Slug', minWidth: 130 },
    { field: 'title', headerName: 'Title', flex: 1, minWidth: 180 },
    { field: 'paragraphs', headerName: 'Paragraphs', width: 110 },
    {
      field: 'content', headerName: 'Preview', flex: 1.5, minWidth: 200, sortable: false,
      valueGetter: (_, row) => row.content?.substring(0, 60) + '...',
    },
    {
      field: 'status', headerName: 'Status', minWidth: 120, sortable: false,
      renderCell: ({ row }) => (
        <Chip
          size="small"
          label={row.isActive ? 'Active' : 'Inactive'}
          color={row.isActive ? 'success' : 'default'}
          variant={row.isActive ? 'filled' : 'outlined'}
        />
      ),
    },
    {
      field: 'actions', headerName: 'Actions', minWidth: 200, sortable: false,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1} sx={{ py: 0.5 }}>
          <Button size="small" variant="outlined" onClick={() => openModal(row)}>
            Edit
          </Button>
          <Button
            size="small" variant="contained"
            color={row.isActive ? 'warning' : 'success'}
            onClick={() => toggleStatus(row.id, row.isActive)}
          >
            {row.isActive ? 'Disable' : 'Activate'}
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ width: '100%', minWidth: 0 }}>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
        <Typography variant="h4">Articles</Typography>
        <Button variant="contained" onClick={() => openModal()}>Add Article</Button>
      </Box>

      {apiError ? <Alert severity="error" sx={{ mb: 2 }}>{apiError}</Alert> : null}

      <Paper sx={{ p: 2, mb: 2 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ xs: 'stretch', md: 'center' }}>
          <TextField
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            size="small"
            sx={{ flex: 2, minWidth: 220 }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextField select label="Status Filter" size="small" value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)} sx={{ flex: 1, minWidth: 150 }}>
            <MenuItem value="all">All Statuses</MenuItem>
            {statusOptions.map((s) => (
              <MenuItem key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</MenuItem>
            ))}
          </TextField>
        </Stack>
      </Paper>

      <Paper sx={{ p: { xs: 1.5, sm: 2 }, minWidth: 0, overflow: 'hidden' }}>
        {!loading && filteredArticles.length ? (
          <Box sx={{ height: { xs: 460, sm: 520 }, width: '100%', minWidth: 0 }}>
            <DataGrid
              rows={filteredArticles}
              columns={columns}
              disableRowSelectionOnClick
              pageSizeOptions={[10, 20]}
              initialState={{ pagination: { paginationModel: { pageSize: 10, page: 0 } } }}
              sx={{ minWidth: 0, '& .MuiDataGrid-cell, & .MuiDataGrid-columnHeader': { outline: 'none' } }}
            />
          </Box>
        ) : (
          <Alert severity="info">
            {loading ? 'Loading articles...' : articles.length === 0
              ? 'No articles found. Use Add Article to create your first record.'
              : 'No articles match the current search and filters.'}
          </Alert>
        )}
      </Paper>

      <Dialog open={modal.open} onClose={closeModal} fullWidth fullScreen={isMobile} maxWidth="md">
        <DialogTitle>{modal.id !== null ? 'Edit Article' : 'Add Article'}</DialogTitle>
        <DialogContent dividers sx={{ px: { xs: 2, sm: 3 } }}>
          <Stack spacing={2} sx={{ pt: 1 }}>
            <TextField {...fieldProps('slug', 'Slug')} />
            <TextField {...fieldProps('title', 'Title')} />
            <TextField {...fieldProps('image', 'Image URL', {
              helperText: errors.image || 'Paste a full image URL (e.g. https://example.com/cat.jpg)',
            })} />
            <TextField {...fieldProps('content', 'Content', {
              multiline: true,
              rows: 6,
              helperText: errors.content || 'Each new line will be a separate paragraph.',
            })} />
            <TextField select label="Status" name="isActive" value={form.isActive}
              onChange={(e) => setForm((prev) => ({ ...prev, isActive: e.target.value === 'true' }))}
              fullWidth>
              <MenuItem value="true">Active</MenuItem>
              <MenuItem value="false">Inactive</MenuItem>
            </TextField>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button onClick={closeModal}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            {modal.id !== null ? 'Update Article' : 'Save Article'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DashArticleListPage;