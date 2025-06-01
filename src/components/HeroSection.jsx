import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Stack, useTheme } from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android';
import { motion } from 'framer-motion';

const phoneMockups = [
  {
    rotate: '-10deg',
    top: 40,
    left: 0,
    src: '/screenshots/mainscreen.jpg',
    label: 'Main',
  },
  {
    rotate: '10deg',
    top: 80,
    left: 60,
    src: '/screenshots/lockscreen.jpg',
    label: 'Lockscreen',
  },
  {
    rotate: '0deg',
    top: 0,
    left: 30,
    src: '/screenshots/insightsscreen.jpg',
    label: 'Insights',
  },
];

const rollingWords = [
  "better habits",
  "more focus",
  "improved productivity",
  "healthier routines",
  "mindful living",
  "personal growth",
  "time management",
]

const ROTATE_INTERVAL = 3500; // ms

const HeroSection = () => {
  const theme = useTheme();
  const [focusIndex, setFocusIndex] = useState(0);
  const [rollingIndex, setRollingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFocusIndex((prev) => (prev + 1) % phoneMockups.length);
    }, ROTATE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRollingIndex((prev) => (prev + 1) % rollingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 8,
        background: `linear-gradient(120deg, ${theme.palette.primary.main}11 0%, ${theme.palette.secondary.main}11 100%)`,
        px: { xs: 1, sm: 2 },
        py: { xs: 0, md: 1 }, // Further reduce vertical padding
        position: 'relative',
        overflow: 'hidden',
      }}
      id="hero"
    >
      <Stack spacing={1} maxWidth={420} zIndex={2}>
        <Typography variant="h2" fontWeight={700} color="primary" component={motion.div} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          TimeLock
        </Typography>
        <Typography variant="h4" fontWeight={500} color="text.primary" component={motion.div} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
          sx={{ lineHeight: 1.5, display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}
        >
          Effortless Tracking For
          <Box sx={{ display: 'inline-block', verticalAlign: 'middle', minWidth: 180, position: 'relative', height: '2em', overflow: 'hidden' }}>
            <motion.span
              key={rollingIndex}
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{
                display: 'inline-block',
                padding: '0.1em 0.5em',
                borderRadius: 8,
                background: theme.palette.secondary.main,
                color: '#fff',
                fontWeight: 700,
                fontSize: '1.1em',
                boxShadow: `0 2px 8px 0 ${theme.palette.secondary.main}22`,
                position: 'relative',
                left: 0,
                top: 0,
                width: '100%',
                textAlign: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              {rollingWords[rollingIndex]}
            </motion.span>
          </Box>
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component={motion.div} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
          Track your day right from the lockscreen
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<AndroidIcon />}
          href="https://play.google.com/store/apps/details?id=com.meancoder.timelock"
          sx={{
            boxShadow: `0 2px 16px 0 ${theme.palette.primary.main}44`,
            fontSize: 18,
            width: { xs: '100%', sm: 'auto' },
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          }}
          component={motion.a}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Download on Google Play
        </Button>
      </Stack>
      <Box
        sx={{
          position: 'relative',
          width: { xs: 260, sm: 400 },
          height: { xs: 480, sm: 600 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mt: { xs: 6, md: 0 },
        }}
      >
        {phoneMockups.map((mockup, i) => {
          const total = phoneMockups.length;
          const pos = (i - focusIndex + total) % total;
          let rotate = 0, scale = 1, z = 1, x = 0, y = 0, filter = 'none', boxShadow = '';
          if (pos === 0) {
            // Center (focused)
            rotate = 0;
            scale = 1.1;
            z = 3;
            x = 0;
            y = 0;
            boxShadow = `0 12px 48px 0 ${theme.palette.primary.main}44`;
          } else if (pos === 1 || (pos === -total + 1)) {
            // Right
            rotate = 18;
            scale = 0.92;
            z = 2;
            x = 70;
            y = 40;
            filter = 'blur(1.5px)';
            boxShadow = `0 4px 24px 0 ${theme.palette.primary.main}22`;
          } else if (pos === total - 1) {
            // Left
            rotate = -18;
            scale = 0.92;
            z = 2;
            x = -70;
            y = 40;
            filter = 'blur(1.5px)';
            boxShadow = `0 4px 24px 0 ${theme.palette.primary.main}22`;
          } else {
            // Hidden (for >3 images)
            rotate = 0;
            scale = 0.8;
            z = 1;
            x = 0;
            y = 0;
            filter = 'blur(2.5px)';
            boxShadow = 'none';
          }
          return (
            <Box
              key={mockup.label}
              component={motion.div}
              animate={{
                opacity: (pos === 0 || pos === 1 || pos === total - 1) ? 1 : 0,
                x,
                y,
                scale,
                rotate,
                zIndex: z,
                filter,
                boxShadow,
              }}
              transition={{ type: 'spring', stiffness: 180, damping: 18 }}
              sx={{
                position: 'absolute',
                // top: '50%',
                left: '50%',
                width: { xs: 156, sm: 208 }, // 30% larger than 120/160
                height: { xs: 312, sm: 442 }, // 30% larger than 240/340
                borderRadius: 6,
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `2.5px solid ${theme.palette.primary.main}22`,
                overflow: 'hidden',
                transform: 'translate(-50%, -50%)',
                transition: 'box-shadow 0.3s, filter 0.3s, scale 0.3s',
                zIndex: z,
              }}
            >
              <img
                src={mockup.src}
                alt={`${mockup.label} screenshot`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 6 }}
                loading="lazy"
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default HeroSection;
