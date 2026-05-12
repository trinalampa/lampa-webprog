import { useRef } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { Gauge } from '@mui/x-charts/Gauge';
import { DataGrid } from '@mui/x-data-grid';
import { Card, CardContent, Typography, Stack, Box, Button } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150, editable: true },
  { field: 'lastName', headerName: 'Last name', width: 150, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', width: 110, editable: true },
  {
    field: 'fullName',
    headerName: 'Full name',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const ReportsPage = () => {
  const printRef = useRef(null);

  const handlePrint = () => {
    const printContent = printRef.current;
    if (!printContent) return;

    const printWindow = window.open('', '_blank', 'width=1200,height=900');
    if (!printWindow) return;

    const headMarkup = Array.from(
      document.querySelectorAll('style, link[rel="stylesheet"]')
    ).map((node) => node.outerHTML).join('');

    const exportedAt = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'long',
      timeStyle: 'short',
    }).format(new Date());

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Print Report</title>
          ${headMarkup}
          <style>
            @page { size: A4; margin: 16mm; }
            * { box-sizing: border-box; }

            body {
              margin: 0;
              font-family: Arial, Helvetica, sans-serif;
              background: #fff;
              color: #1f2937;
            }

            .report-shell { padding: 28px; }

            /* ── Header ── */
            .report-header {
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              margin-bottom: 24px;
              padding-bottom: 16px;
              border-bottom: 2px solid #1e3a5f;
            }
            .report-header-left h1 {
              margin: 0 0 4px;
              font-size: 24px;
              font-weight: 700;
              color: #1e3a5f;
            }
            .report-header-left p {
              margin: 0;
              font-size: 13px;
              color: #6b7280;
              max-width: 400px;
              line-height: 1.5;
            }
            .report-header-right {
              text-align: right;
              font-size: 12px;
              color: #9ca3af;
              line-height: 1.8;
            }
            .report-header-right strong {
              display: block;
              color: #374151;
              font-size: 13px;
            }

            /* ── Summary badges ── */
            .report-summary {
              display: flex;
              gap: 12px;
              margin-bottom: 24px;
            }
            .summary-badge {
              flex: 1;
              background: #f3f4f6;
              border-radius: 8px;
              padding: 12px 16px;
              border-left: 4px solid #1e3a5f;
            }
            .summary-badge .badge-label {
              font-size: 11px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              color: #6b7280;
              margin: 0 0 4px;
            }
            .summary-badge .badge-value {
              font-size: 22px;
              font-weight: 700;
              color: #1e3a5f;
              margin: 0;
            }

            /* ── Cards ── */
            .report-content .MuiCard-root {
              box-shadow: none !important;
              border: 1px solid #e5e7eb;
              break-inside: avoid;
              page-break-inside: avoid;
              margin-bottom: 16px;
              border-radius: 8px;
            }
            .report-content .MuiCardContent-root { padding: 20px; }
            .report-content svg { max-width: 100%; }

            /* ── Footer ── */
            .report-footer {
              margin-top: 24px;
              padding-top: 12px;
              border-top: 1px solid #e5e7eb;
              display: flex;
              justify-content: space-between;
              font-size: 11px;
              color: #9ca3af;
            }
          </style>
        </head>
        <body>
          <main class="report-shell">
            <header class="report-header">
              <div class="report-header-left">
                <h1>Reports Summary</h1>
                <p>Analytics overview for generated reports, category breakdown, and completion performance.</p>
              </div>
              <div class="report-header-right">
                <strong>Prepared on</strong>
                ${exportedAt}
              </div>
            </header>

            <div class="report-summary">
              <div class="summary-badge">
                <p class="badge-label">Total Generated</p>
                <p class="badge-value">89</p>
              </div>
              <div class="summary-badge">
                <p class="badge-label">Total Completed</p>
                <p class="badge-value">71</p>
              </div>
              <div class="summary-badge">
                <p class="badge-label">Completion Rate</p>
                <p class="badge-value">70%</p>
              </div>
              <div class="summary-badge">
                <p class="badge-label">Categories</p>
                <p class="badge-value">4</p>
              </div>
            </div>

            <section class="report-content">
              ${printContent.outerHTML}
            </section>

            <footer class="report-footer">
              <span>Reports Summary — Confidential</span>
              <span>Generated: ${exportedAt}</span>
            </footer>
          </main>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <Box>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', md: 'center' }}
        spacing={2}
        sx={{ mb: 4 }}
      >
        <Box>
          <Typography variant="h4" gutterBottom>Reports</Typography>
          <Typography variant="body1" color="text.secondary">
            Report analytics overview showing generated reports, category breakdown, and current completion performance.
          </Typography>
        </Box>
        <Stack direction="row" spacing={1.5}>
          <Button variant="contained">Generate</Button>
          <Button variant="outlined" onClick={handlePrint}>Export</Button>
          <Button variant="outlined">Filter</Button>
        </Stack>
      </Stack>

      <Stack ref={printRef} spacing={3}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>Monthly Report Output</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              This chart compares how many reports were generated and how many were completed across the last four months.
            </Typography>
            <BarChart
              series={[
                { data: [18, 24, 20, 27], label: 'Generated' },
                { data: [12, 19, 17, 23], label: 'Completed' },
              ]}
              height={300}
              xAxis={[{ data: ['January', 'February', 'March', 'April'], scaleType: 'band', label: 'Months' }]}
            />
          </CardContent>
        </Card>

        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={3}>
          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>Report Category Share</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Distribution of report requests by category for the current reporting period.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <PieChart
                  series={[{ data: [
                    { id: 0, value: 14, label: 'Sales' },
                    { id: 1, value: 10, label: 'Users' },
                    { id: 2, value: 8, label: 'Inventory' },
                    { id: 3, value: 6, label: 'Finance' },
                  ]}]}
                  width={208}
                  height={220}
                />
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>Completion Rate</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Current percentage of reports completed on time based on the latest reporting cycle.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', minHeight: 220 }}>
                <Gauge width={180} height={180} value={70} />
              </Box>
            </CardContent>
          </Card>
        </Stack>

        <Card>
          <CardContent>
            <DataGrid
              rows={rows}
              columns={columns}
              experimentalFeatures={{ newEditingApi: true }}
              initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
};

export default ReportsPage;