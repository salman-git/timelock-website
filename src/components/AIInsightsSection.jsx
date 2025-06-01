import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Chip, Stack, useTheme } from '@mui/material';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { motion } from 'framer-motion';

const chartVariants = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.7 } },
  hover: { scale: 1.04, boxShadow: '0 8px 32px 0 #00e6e6aa' },
};

const phoneMockup = (label, src, color, rotate = 0, style = {}) => (
  <Box
    component={motion.div}
    initial={{ y: 40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    whileHover={{ scale: 1.05, rotate: rotate + 2 }}
    transition={{ type: 'spring', stiffness: 180, damping: 18 }}
    sx={{
      width: 80,
      height: 160,
      borderRadius: 4,
      background: color,
      border: `2px solid #00e6e6`,
      boxShadow: `0 2px 16px 0 #00e6e633`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 13,
      color: '#00e6e6',
      fontWeight: 700,
      letterSpacing: 1,
      position: 'absolute',
      zIndex: 2,
      rotate: `${rotate}deg`,
      overflow: 'hidden',
      ...style,
    }}
  >
    <img
      src={src}
      alt={`${label} screenshot`}
      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 4 }}
      loading="lazy"
    />
  </Box>
);

const sampleInsights = {
  most_productive_times: [
    { time_slot: '09:00-11:00' },
    { time_slot: '14:00-16:00' },
    { time_slot: '11:00-13:00' },
  ],
  focus_scores: {
    Monday: { score: 8, tags: ['morning_focus', 'few_interruptions'] },
    Tuesday: { score: 6, tags: ['multitasking', 'afternoon_dip'] },
    Wednesday: { score: 9, tags: ['deep_work', 'stable_morning'] },
    Thursday: { score: 7, tags: ['context_switching'] },
    Friday: { score: 7, tags: ['late_start'] },
    Saturday: { score: 5, tags: ['weekend_dip'] },
    Sunday: { score: 6, tags: ['weekend_dip'] },
  },
  cognitive_load_patterns: {
    multitasking: 'high',
    task_switching: 'frequent',
    mental_fatigue: 'moderate',
    tags: ['overloaded_afternoon', 'stable_mornings'],
  },
  fragmentation_summary: {
    fragmented_session_percentage: 22,
    tags: ['short_sessions', 'evening_interruptions'],
  },
  weekly_trends: {
    focus_trend: 'improved',
    consistency_trend: 'stable',
    tags: ['strong_start', 'weekend_drop'],
  },
  routine_consistency: {
    wake_time_variability: 'low',
    break_pattern: 'irregular',
    end_time_consistency: 'medium',
    tags: ['late_evening_sessions'],
  },
  personalized_suggestions: [
    'schedule_deep_work_in_morning',
    'limit_multitasking',
    'use_pomodoro_for_breaks',
    'avoid_evening_sessions',
  ],
};

const AIInsightsSection = () => {
  const theme = useTheme();
  const cardData = [
    {
      key: 'productive-times',
      icon: <ShowChartIcon sx={{ color: theme.palette.primary.main }} />, 
      title: 'Productive Times',
      content: (
        <>
          <Stack spacing={1} mb={1}>
            {sampleInsights.most_productive_times.map((slot, i) => (
              <Chip key={slot.time_slot} label={slot.time_slot} color={i === 0 ? 'primary' : 'default'} sx={{ color: '#fff', fontWeight: 600, fontSize: 15, background: i === 0 ? theme.palette.primary.main : '#222', opacity: i === 0 ? 1 : 0.7 }} />
            ))}
          </Stack>
          <Typography variant="body2" color="#b2ebf2">Best: {sampleInsights.most_productive_times[0].time_slot}</Typography>
        </>
      )
    },
    {
      key: 'focus-scores',
      icon: <TimelineIcon sx={{ color: theme.palette.secondary.main }} />, 
      title: 'Focus Scores',
      content: (
        <>
          <Stack direction="row" spacing={1} mb={1} flexWrap="wrap" useFlexGap sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
            {Object.entries(sampleInsights.focus_scores).map(([day, data], i) => (
              <Chip
                key={day}
                label={`${day.slice(0,3)}: ${data.score}`}
                sx={{ background: i === 2 ? theme.palette.primary.main : '#222', color: '#fff', fontWeight: 600, opacity: i === 2 ? 1 : 0.6, minWidth: 56, fontSize: 15 }}
                size="small"
              />
            ))}
          </Stack>
          <Typography variant="body2" color="#b2ebf2">Wed: Focus Score {sampleInsights.focus_scores.Wednesday.score}</Typography>
        </>
      )
    },
    {
      key: 'cognitive-load',
      icon: <TipsAndUpdatesIcon sx={{ color: theme.palette.primary.main }} />, 
      title: 'Cognitive Load',
      content: (
        <>
          <Stack spacing={0.5} mb={1}>
            <Typography variant="body2" color="#b2ebf2">Multitasking: {sampleInsights.cognitive_load_patterns.multitasking}</Typography>
            <Typography variant="body2" color="#b2ebf2">Task Switching: {sampleInsights.cognitive_load_patterns.task_switching}</Typography>
            <Typography variant="body2" color="#b2ebf2">Mental Fatigue: {sampleInsights.cognitive_load_patterns.mental_fatigue}</Typography>
          </Stack>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {sampleInsights.cognitive_load_patterns.tags.map((tag) => (
              <Chip key={tag} label={tag.replace(/_/g, ' ')} size="small" sx={{ color: theme.palette.primary.main, borderColor: theme.palette.primary.main, borderWidth: 1, borderStyle: 'solid', background: 'transparent', fontWeight: 600 }} />
            ))}
          </Stack>
        </>
      )
    },
    {
      key: 'fragmentation',
      icon: <ShowChartIcon sx={{ color: theme.palette.secondary.main }} />, 
      title: 'Fragmentation',
      content: (
        <>
          <Typography variant="body2" color="#b2ebf2" mb={1}>
            Fragmented Sessions: {sampleInsights.fragmentation_summary.fragmented_session_percentage}%
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {sampleInsights.fragmentation_summary.tags.map((tag) => (
              <Chip key={tag} label={tag.replace(/_/g, ' ')} size="small" sx={{ color: theme.palette.secondary.main, borderColor: theme.palette.secondary.main, borderWidth: 1, borderStyle: 'solid', background: 'transparent', fontWeight: 600 }} />
            ))}
          </Stack>
        </>
      )
    },
    {
      key: 'weekly-trends',
      icon: <TimelineIcon sx={{ color: theme.palette.primary.main }} />, 
      title: 'Weekly Trends',
      content: (
        <>
          <Typography variant="body2" color="#b2ebf2" mb={1}>
            Focus Trend: {sampleInsights.weekly_trends.focus_trend}
          </Typography>
          <Typography variant="body2" color="#b2ebf2" mb={1}>
            Consistency: {sampleInsights.weekly_trends.consistency_trend}
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {sampleInsights.weekly_trends.tags.map((tag) => (
              <Chip key={tag} label={tag.replace(/_/g, ' ')} size="small" sx={{ color: theme.palette.primary.main, borderColor: theme.palette.primary.main, borderWidth: 1, borderStyle: 'solid', background: 'transparent', fontWeight: 600 }} />
            ))}
          </Stack>
        </>
      )
    },
    {
      key: 'routine-consistency',
      icon: <ShowChartIcon sx={{ color: theme.palette.primary.main }} />, 
      title: 'Routine Consistency',
      content: (
        <>
          <Typography variant="body2" color="#b2ebf2" mb={1}>
            Wake Time: {sampleInsights.routine_consistency.wake_time_variability}
          </Typography>
          <Typography variant="body2" color="#b2ebf2" mb={1}>
            Breaks: {sampleInsights.routine_consistency.break_pattern}
          </Typography>
          <Typography variant="body2" color="#b2ebf2" mb={1}>
            End Time: {sampleInsights.routine_consistency.end_time_consistency}
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {sampleInsights.routine_consistency.tags.map((tag) => (
              <Chip key={tag} label={tag.replace(/_/g, ' ')} size="small" sx={{ color: theme.palette.secondary.main, borderColor: theme.palette.secondary.main, borderWidth: 1, borderStyle: 'solid', background: 'transparent', fontWeight: 600 }} />
            ))}
          </Stack>
        </>
      )
    },
    {
      key: 'suggestions',
      icon: <TipsAndUpdatesIcon sx={{ color: theme.palette.primary.main }} />, 
      title: 'AI Suggestions',
      content: (
        <>
          <Stack spacing={1} mb={1}>
            {sampleInsights.personalized_suggestions.map((s, i) => (
              <Chip key={s} label={s.replace(/_/g, ' ')} color={i === 0 ? 'primary' : 'default'} variant="outlined" sx={{ color: i === 0 ? theme.palette.primary.main : '#fff', fontWeight: 600, borderColor: i === 0 ? theme.palette.primary.main : '#fff', fontSize: 15 }} />
            ))}
          </Stack>
        </>
      )
    },
  ];

  const [activeIdx, setActiveIdx] = React.useState(0);
  const [infoIdx, setInfoIdx] = React.useState(0); // which card is showing info
  const scrollRef = React.useRef();

  const scrollToCard = (idx) => {
    if (!scrollRef.current) return;
    const children = scrollRef.current.children;
    if (children[idx]) {
      children[idx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setActiveIdx(idx);
    }
  };

  React.useEffect(() => {
    const ref = scrollRef.current;
    if (!ref) return;
    const handleScroll = () => {
      const children = Array.from(ref.children);
      let minDist = Infinity, idx = 0;
      children.forEach((child, i) => {
        const rect = child.getBoundingClientRect();
        const center = rect.left + rect.width / 2;
        const screenCenter = window.innerWidth / 2;
        const dist = Math.abs(center - screenCenter);
        if (dist < minDist) {
          minDist = dist;
          idx = i;
        }
      });
      setActiveIdx(idx);
    };
    ref.addEventListener('scroll', handleScroll, { passive: true });
    return () => ref.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Card descriptions for each card type ---
  const cardDescriptions = {
    most_productive_times: "Discover your peak focus hours to schedule deep work more effectively.",
    focus_scores: "See which days you stayed focused and what impacted your productivity.",
    cognitive_load_patterns: "Understand mental fatigue, multitasking, and task-switching patterns.",
    fragmentation_summary: "Track interruptions and structure longer, focused work blocks.",
    weekly_trends: "Spot focus and consistency trends to plan your week better.",
    routine_consistency: "Analyze habits like wake time, breaks, and end-of-day patterns.",
    personalized_suggestions: "Get actionable tips tailored to your weekly behavior patterns.",
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, px: { xs: 1, sm: 3, md: 6 }, background: `linear-gradient(120deg, #0a0f1a 60%, ${theme.palette.secondary.main}11 100%)`, position: 'relative', overflow: 'hidden' }}>
      <Typography variant="h3" align="center" fontWeight={700} mb={6} color="secondary.main">
        Premium AI Insights
      </Typography>
      <Box sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        mb: 4,
      }}>
        {/* Left Arrow Button (outside scroll area) */}
        <Box
          component="button"
          onClick={() => scrollToCard(activeIdx - 1)}
          disabled={activeIdx === 0}
          sx={{
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            opacity: activeIdx === 0 ? 0.3 : 1,
            fontSize: 32,
            color: theme.palette.primary.main,
            px: 1,
            zIndex: 2,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
          aria-label="Scroll left"
        >
          &#8592;
        </Box>
        {/* Scrollable Cards Row */}
        <Box
          sx={{
            width: '100%',
            overflowX: 'auto',
            overflowY: 'visible',
            display: 'flex',
            flexDirection: 'row',
            gap: { xs: 2, md: 4 },
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            position: 'relative',
            py:5,
            '::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE/Edge
          }}
          ref={scrollRef}
        >
          {cardData.map((card, idx) => {
            // Map card key to description
            const cardKey = card.key
              .replace('productive-times', 'most_productive_times')
              .replace('focus-scores', 'focus_scores')
              .replace('cognitive-load', 'cognitive_load_patterns')
              .replace('fragmentation', 'fragmentation_summary')
              .replace('weekly-trends', 'weekly_trends')
              .replace('routine-consistency', 'routine_consistency')
              .replace('suggestions', 'personalized_suggestions');
            return (
              <Card
                key={card.key}
                component={motion.div}
                variants={chartVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.4 }}
                sx={{
                  minWidth: { xs: 220, sm: 260, md: 280 },
                  maxWidth: 300,
                  flex: '0 0 85%',
                  md: '0 0 32%',
                  scrollSnapAlign: 'center',
                  p: 3,
                  minHeight: 380,
                  background: idx % 2 === 0 ? 'linear-gradient(120deg, #101624 80%, #00e6e6 120%)' : 'linear-gradient(120deg, #101624 80%, #ff00cc 120%)',
                  color: '#fff',
                  border: `1.5px solid ${theme.palette.primary.main}22`,
                  position: 'relative',
                  overflow: 'visible',
                  borderRadius: 5,
                  boxShadow: '0 4px 32px 0 #00e6e622',
                  transition: 'box-shadow 0.3s, transform 0.3s',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}
              >
                <CardContent sx={{ width: '100%', p: 0 }}>
                  <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                    {card.icon}
                    <Typography variant="h6" color="#fff">{card.title}</Typography>
                  </Stack>
                  {/* Show description by default, show data when info button is clicked */}
                  {infoIdx === idx ? (
                    <Box>
                      {card.content}
                      <Box sx={{ mt: 2, textAlign: 'right' }}>
                        <Box component="button" onClick={() => setInfoIdx(-1)} sx={{ color: theme.palette.primary.main, background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: 14, p: 0 }}>
                          Back
                        </Box>
                      </Box>
                    </Box>
                  ) : (
                    <Box>
                      <Typography variant="body2" color="#b2ebf2" sx={{ minHeight: 60, display: 'flex', alignItems: 'center' }}>{cardDescriptions[cardKey]}</Typography>
                      <Box sx={{ mt: 2, textAlign: 'right' }}>
                        <Box component="button" onClick={() => setInfoIdx(idx)} sx={{ color: theme.palette.primary.main, background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: 14, p: 0 }}>
                          See Example
                        </Box>
                      </Box>
                    </Box>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </Box>
        {/* Right Arrow Button (outside scroll area) */}
        <Box
          component="button"
          onClick={() => scrollToCard(activeIdx + 1)}
          disabled={activeIdx === cardData.length - 1}
          sx={{
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            opacity: activeIdx === cardData.length - 1 ? 0.3 : 1,
            fontSize: 32,
            color: theme.palette.primary.main,
            px: 1,
            zIndex: 2,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
          aria-label="Scroll right"
        >
          &#8594;
        </Box>
      </Box>
    </Box>
  );
};

export default AIInsightsSection;
