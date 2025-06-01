import React from 'react';
import { Box, Typography, Button, Stack, IconButton, useTheme } from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const CTAFooter = () => {
  const theme = useTheme();
  return (
    <Box sx={{
      py: 6,
      px: 2,
      background: `linear-gradient(90deg, ${theme.palette.primary.main}11 0%, ${theme.palette.secondary.main}11 100%)`,
      textAlign: 'center',
      mt: 8,
    }}>
      <Typography variant="h4" fontWeight={700} color="primary" mb={2}>
        Ready to take control of your time?
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<AndroidIcon />}
        href="https://play.google.com/store/apps/details?id=com.meancoder.timelock"
        sx={{
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          fontSize: 18,
          borderRadius: 8,
          boxShadow: `0 2px 16px 0 ${theme.palette.primary.main}44`,
          mb: 3,
        }}
      >
        Download on Google Play
      </Button>
      {/* <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" mt={2} mb={2}>
        <IconButton href="mailto:hello@timelock.app" color="primary" aria-label="email">
          <EmailIcon />
        </IconButton>
        <IconButton href="https://github.com/yourrepo" color="secondary" aria-label="github">
          <GitHubIcon />
        </IconButton>
      </Stack> */}
      <Typography variant="body2" color="text.secondary" mt={2}>
        © {new Date().getFullYear()} TimeLock. All rights reserved.
      </Typography>
    </Box>
  );
};

export default CTAFooter;
