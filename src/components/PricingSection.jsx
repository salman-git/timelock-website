import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Table, TableBody, TableCell, TableRow, TableHead, Button, useTheme } from '@mui/material';

const features = [
  { label: 'Local Tracking', free: true, premium: true },
  { label: 'Cloud Sync', free: false, premium: true },
  { label: 'AI Insights', free: false, premium: true },
];

const PricingSection = () => {
  const theme = useTheme();
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 1, sm: 3, md: 6 }, background: `linear-gradient(120deg, #fff 60%, ${theme.palette.secondary.main}07 100%)` }}>
      <Typography variant="h3" align="center" fontWeight={700} mb={6} color="primary.main">
        Pricing
      </Typography>
      <Grid container spacing={{ xs: 3, md: 5 }} justifyContent="center">
        <Grid item xs={12} md={5}>
          <Card sx={{ p: 4, border: `1.5px solid ${theme.palette.primary.main}11`, boxShadow: 'none', minHeight: 340 }}>
            <CardContent>
              <Typography variant="h5" fontWeight={600} color="primary.main">Free</Typography>
              <Typography variant="h6" color="text.secondary" mb={2}>$0</Typography>
              <Table size="small">
                <TableBody>
                  {features.map(f => (
                    <TableRow key={f.label}>
                      <TableCell>{f.label}</TableCell>
                      <TableCell align="center">{f.free ? '✔️' : '—'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ p: 4, border: `1.5px solid ${theme.palette.secondary.main}22`, boxShadow: '0 2px 24px 0 #ff00cc11', minHeight: 340 }}>
            <CardContent>
              <Typography variant="h5" fontWeight={600} color="secondary.main">Premium</Typography>
              <Typography variant="h6" color="text.secondary" mb={2}>$2.99/mo or $24.99/yr</Typography>
              <Table size="small">
                <TableBody>
                  {features.map(f => (
                    <TableRow key={f.label}>
                      <TableCell>{f.label}</TableCell>
                      <TableCell align="center">{f.premium ? '✔️' : '—'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Button variant="contained" color="secondary" sx={{ mt: 3, borderRadius: 8 }} href="https://play.google.com/store/apps/details?id=com.meancoder.timelock">Go Premium</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PricingSection;
