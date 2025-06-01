import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AIInsightsSection from './components/AIInsightsSection';
import PricingSection from './components/PricingSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTAFooter from './components/CTAFooter';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          overflowY: 'auto',
          height: '100vh',
        }}
      >
        <Box sx={{ minHeight: '100vh' }}>
          <HeroSection />
        </Box>
        <Box sx={{ minHeight: '100vh' }}>
          <FeaturesSection />
        </Box>
        <Box sx={{ minHeight: '100vh' }}>
          <AIInsightsSection />
        </Box>
        <Box sx={{ minHeight: '100vh' }}>
          <PricingSection />
        </Box>
        <Box sx={{ minHeight: '100vh' }}>
          <HowItWorksSection />
        </Box>
        {/* <Box sx={{ minHeight: '100vh' }}>
          <TestimonialsSection />
        </Box> */}
        <Box sx={{ minHeight: '100vh' }}>
          <CTAFooter />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
