import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar, Stack, useTheme } from '@mui/material';

const testimonials = [
	{
		name: 'Alex P.',
		text: 'TimeLock made tracking my work hours so easy. The AI insights are spot on!',
		avatar: 'A',
	},
	{
		name: 'Jamie L.',
		text: 'I love the lockscreen overlay. No more forgetting to start or stop the timer.',
		avatar: 'J',
	},
	{
		name: 'Morgan S.',
		text: 'The premium insights helped me optimize my daily routine. Highly recommend!',
		avatar: 'M',
	},
];

const TestimonialsSection = () => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				py: { xs: 6, md: 10 },
				px: { xs: 1, sm: 3, md: 6 },
				background: `linear-gradient(120deg, #f7fafd 60%, ${theme.palette.secondary.main}07 100%)`,
			}}
		>
			<Typography
				variant="h3"
				align="center"
				fontWeight={700}
				mb={6}
				color="secondary.main"
			>
				What Users Say
			</Typography>
			<Grid container spacing={{ xs: 3, md: 5 }} justifyContent="center">
				{testimonials.map((t, i) => (
					<Grid item xs={12} md={4} key={t.name}>
						<Card
							sx={{
								p: 3,
								minHeight: 180,
								border: `1.5px solid ${theme.palette.primary.main}11`,
								boxShadow: '0 2px 16px 0 #00e6e611',
								background: '#fff',
							}}
						>
							<CardContent>
								<Stack
									direction="row"
									spacing={2}
									alignItems="center"
									mb={2}
								>
									<Avatar
										sx={{
											bgcolor: theme.palette.primary.main,
											color: '#fff',
										}}
									>
										{t.avatar}
									</Avatar>
									<Typography
										variant="subtitle1"
										fontWeight={600}
										color="text.primary"
									>
										{t.name}
									</Typography>
								</Stack>
								<Typography
									variant="body2"
									color="text.secondary"
								>
									“{t.text}”
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default TestimonialsSection;
