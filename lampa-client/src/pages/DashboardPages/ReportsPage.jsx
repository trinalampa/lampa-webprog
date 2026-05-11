import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { Gauge } from '@mui/x-charts/Gauge';
import { Card, CardContent, Typography, Stack, Box } from '@mui/material';

function ReportsPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Reports</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Report analytics overview showing generated reports, category breakdown, and current completion performance.
      </Typography>

      <Stack spacing={3}>
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
              xAxis={[{
                data: ['January', 'February', 'March', 'April'],
                scaleType: 'band',
                label: 'Months',
              }]}
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
                  series={[{
                    data: [
                      { id: 0, value: 14, label: 'Sales' },
                      { id: 1, value: 10, label: 'Users' },
                      { id: 2, value: 8, label: 'Inventory' },
                      { id: 3, value: 6, label: 'Finance' },
                    ],
                  }]}
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
      </Stack>
    </Box>
  );
}

export default ReportsPage;