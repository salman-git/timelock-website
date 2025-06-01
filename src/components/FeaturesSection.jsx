import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, Card, useTheme } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
	{
		icon: <LockIcon color="primary" sx={{ fontSize: 48 }} />,
		title: 'Lockscreen Overlay',
		text: 'Track time without unlocking',
		screenshot: '/screenshots/lockscreen.jpg',
	},
	{
		icon: <LabelImportantIcon color="secondary" sx={{ fontSize: 48 }} />,
		title: 'Smart Activity Tagging',
		text: 'Categorize your time easily',
		screenshot: '/screenshots/mainscreen.jpg',
	},
	{
		icon: <AutoAwesomeIcon sx={{ color: '#00e6e6', fontSize: 48 }} />,
		title: 'AI Insights',
		text: 'Get patterns and suggestions weekly',
		screenshot: '/screenshots/insightsscreen.jpg',
	},
];

const FeaturesSection = () => {
	const theme = useTheme();
	const [activeIndex, setActiveIndex] = useState(0);
	const featureRefs = useRef([]);

	// Add IntersectionObserver to update screenshot on scroll
	useEffect(() => {
		const observers = [];
		featureRefs.current = featureRefs.current.slice(0, features.length);
		features.forEach((_, idx) => {
			if (!featureRefs.current[idx]) return;
			const observer = new window.IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting && entry.intersectionRatio > 0.7) {
						setActiveIndex(idx);
					}
				},
				{ threshold: [0.7] }
			);
			observer.observe(featureRefs.current[idx]);
			observers.push(observer);
		});
		return () => observers.forEach((obs) => obs.disconnect());
	}, []);

	return (
		<Box
			sx={{
				minHeight: '100vh',
				width: '100%',
				background: `linear-gradient(120deg, #fff 60%, ${theme.palette.primary.main}07 100%)`,
				fontFamily: 'Inter, Roboto, Arial, sans-serif',
				display: 'flex',
				flexDirection: { xs: 'column', md: 'row' },
				alignItems: 'stretch',
				position: 'relative',
				py: { xs: 4, md: 10 },
				px: { xs: 1, sm: 3, md: 8 },
				gap: { xs: 6, md: 0 },
			}}
		>
			{/* Left: Features list */}
			<Box
				sx={{
					flex: 1,
					minWidth: 0,
					maxWidth: { md: 520 },
					mr: { md: 8 },
					position: 'relative',
					zIndex: 2,
				}}
			>
				<Box
					sx={{
						position: 'sticky',
						top: 0,
						background: 'linear-gradient(120deg, #fff 60%, transparent 100%)',
						// py: 2,
						zIndex: 10,
					}}
				>
					<Typography
						variant="h3"
						fontWeight={700}
						align="center"
						color="primary.main"
						mb={4}
					>
						Features
					</Typography>
				</Box>
				<Box
					sx={{
						height: 'auto',
						overflowY: 'auto',
						scrollSnapType: 'y mandatory',
						paddingBottom: { xs: 6, md: 12, ml:12 },
						position: 'relative',
						zIndex: 1,
					}}
				>
					<Box sx={{ position: 'relative', zIndex: 2 }}>
						{/* Spacer to prevent feature text from appearing under sticky title */}
						<Box sx={{ height: { xs: 64, md: 88 } }} />
					</Box>
					{features.map((f, i) => (
						<Box
							key={f.title}
							sx={{
								height: 'auto',
								minHeight: 320,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								scrollSnapAlign: 'start',
							}}
							ref={(el) => (featureRefs.current[i] = el)}
						>
							<Card
								sx={{
									minWidth: 280,
									maxWidth: 420,
									p: 4,
									borderRadius: 5,
									boxShadow: `0 2px 24px 0 ${theme.palette.primary.main}11`,
									background: '#fff',
									border: `1.5px solid ${theme.palette.primary.main}11`,
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
									gap: 2,
								}}
							>
								{f.icon}
								<Typography
									variant="h5"
									fontWeight={600}
									mt={2}
									mb={1}
									color="text.primary"
									align="center"
								>
									{f.title}
								</Typography>
								<Typography
									variant="body1"
									color="text.secondary"
									align="center"
								>
									{f.text}
								</Typography>
							</Card>
						</Box>
					))}
				</Box>
			</Box>
			{/* Right: Phone frame, always show first feature */}
			<Box
				sx={{
					flex: 1,
					minWidth: 0,
					display: 'flex',
					alignItems: 'flex-start',
					justifyContent: 'center',
					position: { xs: 'static', md: 'sticky' },
					top: { md: '96px' },
					height: { xs: 320, md: 420 },
					width: { xs: '100%', md: 200 },
					zIndex: 1,
					pointerEvents: 'none',
					mt: { xs: 6, md: 0 },
				}}
			>
				<Box
					sx={{
						width: { xs: 208, md: 234 }, // 30% larger than 160/180
						height: { xs: 416, md: 494 }, // 30% larger than 320/380
						borderRadius: 6,
						background: '#fff',
						border: `2.5px solid ${theme.palette.primary.main}22`,
						boxShadow: `0 8px 40px 0 ${theme.palette.primary.main}22`,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						overflow: 'hidden',
						position: 'relative',
						transition: 'box-shadow 0.3s',
						mx: 'auto',
						mt: { xs: 0, md: 0 },
					}}
				>
					<AnimatePresence mode="wait">
						<motion.img
							key={features[activeIndex].screenshot}
							src={features[activeIndex].screenshot}
							alt={features[activeIndex].title + ' screenshot'}
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -40 }}
							transition={{ duration: 0.5, ease: 'easeInOut' }}
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'cover',
								borderRadius: 6,
								display: 'block',
								margin: '0 auto',
								position: 'absolute',
								left: 0,
								top: 0,
							}}
						/>
					</AnimatePresence>
				</Box>
			</Box>
		</Box>
	);
};

export default FeaturesSection;
