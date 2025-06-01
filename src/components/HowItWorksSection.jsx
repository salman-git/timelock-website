import React from 'react';
import { Box, Typography, Grid, Stack, Avatar, useTheme } from '@mui/material';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import { Looks4, Looks4Outlined, Looks4Rounded, Looks4Sharp, Looks4TwoTone } from '@mui/icons-material';

const steps = [
	{
		icon: <LooksOneIcon color="primary" sx={{ fontSize: 40 }} />,
		title: 'Enable Lockscreen',
		text: 'Enable lockscreen option and allow accessbility permission',
	},
	{
		icon: <LooksTwoIcon color="secondary" sx={{ fontSize: 40 }} />,
		title: 'Select Activity',
		text: 'Choose what you want to track',
	},
	{
		icon: <Looks3Icon color="primary" sx={{ fontSize: 40 }} />,
		title: 'Track Effortlessly',
		text: 'Start timer from your lockscreen',
	},
	{
		icon: <Looks4Rounded color='secondary' sx={{ color: 'secondary', fontSize: 40 }} />,
		title: 'Get AI Insights',
		text: 'See your productivity patterns',
	},
];

const HowItWorksSection = () => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				py: { xs: 6, md: 10 },
				px: { xs: 1, sm: 3, md: 6 },
				background: `linear-gradient(120deg, #fff 60%, ${theme.palette.primary.main}07 100%)`,
			}}
		>
			<Typography
				variant="h3"
				align="center"
				fontWeight={700}
				mb={6}
				color="primary.main"
			>
				How It Works
			</Typography>
			<Grid
				container
				spacing={{ xs: 3, md: 5 }}
				justifyContent="center"
				alignItems="flex-start"
			>
				{steps.map((step, i) => (
					<Grid item xs={12} md={3} key={step.title}>
						<Stack alignItems="center" spacing={2}>
							<Avatar
								sx={{
									bgcolor: '#fff',
									boxShadow: `0 2px 12px 0 ${theme.palette.primary.main}22`,
									width: 64,
									height: 64,
								}}
							>
								{step.icon}
							</Avatar>
							<Typography
								variant="h6"
								fontWeight={600}
								color="text.primary"
							>
								{step.title}
							</Typography>
							<Typography
								variant="body2"
								color="text.secondary"
								align="center"
								maxWidth={220}
							>
								{step.text}
							</Typography>
						</Stack>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default HowItWorksSection;
