import { useState, useMemo } from 'react';
import {
  Alert, Box, Button, Chip, Dialog, DialogActions, DialogContent,
  DialogTitle, FormControlLabel, IconButton, InputAdornment, MenuItem,
  Paper, Stack, Switch, TextField, Typography, useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { DataGrid } from '@mui/x-data-grid';
import usersSeed from '../../data/users.json';

const roles = ['admin', 'editor', 'viewer'];
const genders = ['male', 'female', 'other'];
const statusOptions = ['active', 'inactive'];

const blankForm = {
  firstName: '', lastName: '', age: '', gender: '',
  contactNumber: '', email: '', role: 'editor',
  username: '', password: '', address: '', isActive: true,
};

const labelize = (value) =>
  value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : '';

const loadUsers = () => {
  try {
    return {
      users: usersSeed.map((user, index) => ({
        id: index + 1,
        firstName: String(user.firstName ?? '').trim(),
        lastName: String(user.lastName ?? '').trim(),
        age: String(user.age ?? '').trim(),
        gender: genders.includes(String(user.gender ?? '').trim().toLowerCase())
          ? String(user.gender ?? '').trim().toLowerCase() : '',
        contactNumber: String(user.contactNumber ?? '').trim(),
        email: String(user.email ?? '').trim().toLowerCase(),
        role: roles.includes(String(user.role ?? '').trim().toLowerCase())
          ? String(user.role ?? '').trim().toLowerCase() : 'editor',
        username: String(user.username ?? '').trim().toLowerCase(),
        password: String(user.password ?? '').trim(),
        address: String(user.address ?? '').trim(),
        isActive: typeof user.isActive === 'boolean' ? user.isActive : true,
      })),
      error: '',
    };
  } catch {
    return { users: [], error: 'Unable to read users from src/data/users.json.' };
  }
};

const seed = loadUsers();

const UsersPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [users, setUsers] = useState(seed.users);
  const [modal, setModal] = useState({ open: false, id: null });
  const [form, setForm] = useState(blankForm);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [search, setSearch] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterGender, setFilterGender] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredUsers = useMemo(() => {
    const term = search.trim().toLowerCase();
    return users.filter((user) => {
      const matchesSearch =
        !term ||
        user.firstName.toLowerCase().includes(term) ||
        user.lastName.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term) ||
        user.username.toLowerCase().includes(term);
      const matchesRole = filterRole === 'all' || user.role === filterRole;
      const matchesGender = filterGender === 'all' || user.gender === filterGender;
      const matchesStatus =
        filterStatus === 'all' ||
        (filterStatus === 'active' && user.isActive) ||
        (filterStatus === 'inactive' && !user.isActive);
      return matchesSearch && matchesRole && matchesGender && matchesStatus;
    });
  }, [users, search, filterRole, filterGender, filterStatus]);

  const hasActiveFilters =
    search || filterRole !== 'all' || filterGender !== 'all' || filterStatus !== 'all';

  const clearFilters = () => {
    setSearch('');
    setFilterRole('all');
    setFilterGender('all');
    setFilterStatus('all');
  };

  const openModal = (user) => {
    setModal({ open: true, id: user?.id ?? null });
    setForm(user ? { ...blankForm, ...user } : { ...blankForm });
    setErrors({});
  };

  const closeModal = () => {
    setModal({ open: false, id: null });
    setShowPassword(false);
    setForm({ ...blankForm });
    setErrors({});
  };

  const handleChange = ({ target: { name, value, checked, type } }) => {
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const nextErrors = {};
    const email = form.email.trim().toLowerCase();
    const username = form.username.trim().toLowerCase();
    const isEditing = modal.id !== null;

    [
      ['firstName', 'First name'],
      ['lastName', 'Last name'],
      ['age', 'Age'],
      ['gender', 'Gender'],
      ['contactNumber', 'Contact number'],
      ['email', 'Email'],
      ['role', 'Role'],
      ['username', 'Username'],
      ['password', 'Password'],
      ['address', 'Address'],
    ].forEach(([key, label]) => {
      if (!String(form[key]).trim()) nextErrors[key] = `${label} is required.`;
    });

    if (!nextErrors.age && !/^\d+$/.test(form.age.trim()))
      nextErrors.age = 'Age must be a number only.';

    if (!nextErrors.contactNumber && !/^\d{11}$/.test(form.contactNumber.trim()))
      nextErrors.contactNumber = 'Contact number must be exactly 11 digits.';

    if (!nextErrors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = 'Enter a valid email address.';

    if (!nextErrors.email) {
      const emailTaken = isEditing
        ? users.some((u) => u.id !== modal.id && u.email === email)
        : users.some((u) => u.email === email);
      if (emailTaken) nextErrors.email = 'Email address already exists.';
    }

    if (!nextErrors.username && /\s/.test(form.username.trim()))
      nextErrors.username = 'Username must not contain spaces.';

    if (!nextErrors.username) {
      const usernameTaken = isEditing
        ? users.some((u) => u.id !== modal.id && u.username === username)
        : users.some((u) => u.username === username);
      if (usernameTaken) nextErrors.username = 'Username already exists.';
    }

    if (!nextErrors.password && form.password.length < 8)
      nextErrors.password = 'Password must be at least 8 characters.';

    return nextErrors;
  };

  // ── KEY FIX: no longer relies on form submit event ──
  const handleSave = () => {
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const newUser = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      age: form.age.trim(),
      gender: form.gender.trim().toLowerCase(),
      contactNumber: form.contactNumber.trim(),
      email: form.email.trim().toLowerCase(),
      role: form.role.trim().toLowerCase(),
      username: form.username.trim().toLowerCase(),
      password: form.password,
      address: form.address.trim(),
      isActive: form.isActive,
    };

    if (modal.id !== null) {
      setUsers((prev) =>
        prev.map((u) => (u.id === modal.id ? { ...u, ...newUser } : u))
      );
    } else {
      setUsers((prev) => {
        const nextId = prev.reduce((max, u) => Math.max(max, Number(u.id) || 0), 0) + 1;
        return [...prev, { id: nextId, ...newUser }];
      });
    }

    closeModal();
  };

  const toggleStatus = (id) =>
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, isActive: !u.isActive } : u))
    );

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
    {
      field: 'fullName', headerName: 'Full Name', flex: 1, minWidth: 170,
      valueGetter: (_, row) => `${row.firstName} ${row.lastName}`.trim(),
    },
    { field: 'username', headerName: 'Username', minWidth: 150 },
    { field: 'age', headerName: 'Age', width: 90 },
    {
      field: 'gender', headerName: 'Gender', minWidth: 110,
      valueGetter: (_, row) => labelize(row.gender),
    },
    { field: 'contactNumber', headerName: 'Contact Number', minWidth: 160 },
    { field: 'email', headerName: 'Email', flex: 1.1, minWidth: 220 },
    {
      field: 'role', headerName: 'Role', minWidth: 120,
      valueGetter: (_, row) => labelize(row.role),
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
      field: 'actions', headerName: 'Actions', minWidth: 220, sortable: false,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1} sx={{ py: 0.5 }}>
          <Button size="small" variant="outlined" onClick={() => openModal(row)}>
            Edit
          </Button>
          <Button
            size="small" variant="contained"
            color={row.isActive ? 'warning' : 'success'}
            onClick={() => toggleStatus(row.id)}
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
        <Typography variant="h4">Users</Typography>
        <Button variant="contained" onClick={() => openModal()}>Add User</Button>
      </Box>

      {seed.error ? <Alert severity="error" sx={{ mb: 2 }}>{seed.error}</Alert> : null}

      {/* Enhancement 2 — Search & Filters */}
      <Paper sx={{ p: 2, mb: 2 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ xs: 'stretch', md: 'center' }}>
          <TextField
            placeholder="Search by name, email, or username..."
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
          <TextField select label="Role" size="small" value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)} sx={{ flex: 1, minWidth: 130 }}>
            <MenuItem value="all">All Roles</MenuItem>
            {roles.map((r) => <MenuItem key={r} value={r}>{labelize(r)}</MenuItem>)}
          </TextField>
          <TextField select label="Gender" size="small" value={filterGender}
            onChange={(e) => setFilterGender(e.target.value)} sx={{ flex: 1, minWidth: 130 }}>
            <MenuItem value="all">All Genders</MenuItem>
            {genders.map((g) => <MenuItem key={g} value={g}>{labelize(g)}</MenuItem>)}
          </TextField>
          <TextField select label="Status" size="small" value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)} sx={{ flex: 1, minWidth: 130 }}>
            <MenuItem value="all">All Statuses</MenuItem>
            {statusOptions.map((s) => <MenuItem key={s} value={s}>{labelize(s)}</MenuItem>)}
          </TextField>
          {hasActiveFilters && (
            <Button variant="outlined" size="small" startIcon={<ClearIcon />} onClick={clearFilters}>
              Clear
            </Button>
          )}
        </Stack>
        {hasActiveFilters && (
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1.5 }}>
            Showing {filteredUsers.length} of {users.length} users
          </Typography>
        )}
      </Paper>

      <Paper sx={{ p: { xs: 1.5, sm: 2 }, minWidth: 0, overflow: 'hidden' }}>
        {filteredUsers.length ? (
          <Box sx={{ height: { xs: 460, sm: 520 }, width: '100%', minWidth: 0 }}>
            <DataGrid
              rows={filteredUsers}
              columns={columns}
              disableRowSelectionOnClick
              pageSizeOptions={[5, 10]}
              initialState={{ pagination: { paginationModel: { pageSize: 5, page: 0 } } }}
              sx={{ minWidth: 0, '& .MuiDataGrid-cell, & .MuiDataGrid-columnHeader': { outline: 'none' } }}
            />
          </Box>
        ) : (
          <Alert severity="info">
            {users.length === 0
              ? 'No users found. Use Add User to create your first record.'
              : 'No users match the current search and filters.'}
          </Alert>
        )}
      </Paper>

      {/* Add / Edit Dialog — no form tag, button uses onClick directly */}
      <Dialog open={modal.open} onClose={closeModal} fullWidth fullScreen={isMobile} maxWidth="md">
        <DialogTitle>{modal.id !== null ? 'Edit User' : 'Add User'}</DialogTitle>
        <DialogContent dividers sx={{ px: { xs: 2, sm: 3 } }}>
          <Stack spacing={2} sx={{ pt: 1 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField {...fieldProps('firstName', 'First Name')} />
              <TextField {...fieldProps('lastName', 'Last Name')} />
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField {...fieldProps('age', 'Age', { helperText: errors.age || 'Numbers only' })} />
              <TextField {...fieldProps('gender', 'Gender', { select: true })}>
                {genders.map((g) => <MenuItem key={g} value={g}>{labelize(g)}</MenuItem>)}
              </TextField>
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField {...fieldProps('contactNumber', 'Contact Number', { helperText: errors.contactNumber || 'Must be 11 digits' })} />
              <TextField {...fieldProps('email', 'Email Address', { type: 'email' })} />
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField {...fieldProps('role', 'Role', { select: true })}>
                {roles.map((r) => <MenuItem key={r} value={r}>{labelize(r)}</MenuItem>)}
              </TextField>
              <TextField {...fieldProps('username', 'Username', { helperText: errors.username || 'No spaces allowed' })} />
            </Stack>
            <TextField
              {...fieldProps('password', 'Password', {
                type: showPassword ? 'text' : 'password',
                helperText: errors.password || 'At least 8 characters',
                slotProps: {
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          onClick={() => setShowPassword((prev) => !prev)}
                          onMouseDown={(e) => e.preventDefault()}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                },
              })}
            />
            <TextField {...fieldProps('address', 'Address', { multiline: true, rows: 3 })} />
            <FormControlLabel
              control={<Switch name="isActive" checked={form.isActive} onChange={handleChange} />}
              label={form.isActive ? 'User status: Active' : 'User status: Inactive'}
            />
          </Stack>
        </DialogContent>
        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button onClick={closeModal}>Cancel</Button>
          {/* ── KEY FIX: onClick instead of type="submit" ── */}
          <Button variant="contained" onClick={handleSave}>
            {modal.id !== null ? 'Update User' : 'Save User'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UsersPage;