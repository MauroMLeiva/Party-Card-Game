import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const GameCard = ({
	carta,
	click,
	selected = [],
	isChoosing = false,
}) => {
	let isChosen = selected.includes(carta);

	return (
		<Box sx={{ widht: 100, height: 500, mr: 2 }}>
			<Card
				variant='outlined'
				sx={{
					backgroundColor: '#f3f0e9',
					width: 300,
					heigth: 400,
					border: isChosen ? '3px solid green' : 'none',
					borderRadius: 4,
				}}
				className='animate__animated animate__fadeIn'>
				<CardContent>
					<Box
						sx={{
							backgroundColor: '#e64550',
							mt: 2,
							height: 90,
							borderRadius: 1,
						}}>
						<Typography
							sx={{ fontSize: 14, fontWeight: 'bold' }}
							color='text.secondary'
							gutterBottom>
							Título
						</Typography>
						<Typography variant='h5' component='div' align='center'>
							{carta.titulo.nombre}
						</Typography>
					</Box>

					<Box
						sx={{
							backgroundColor: '#45dbe6',
							mt: 2,
							height: 90,
							borderRadius: 1,
						}}>
						<Typography
							sx={{ fontSize: 14, fontWeight: 'bold' }}
							color='text.secondary'
							gutterBottom>
							Personaje
						</Typography>
						<Typography variant='h5' component='div' align='center'>
							{carta.personaje.nombre}
						</Typography>
					</Box>

					<Box
						sx={{
							backgroundColor: '#45e660',
							mt: 2,
							height: 90,
							borderRadius: 1,
						}}>
						<Typography
							sx={{ fontSize: 14, fontWeight: 'bold' }}
							color='text.secondary'
							gutterBottom>
							Vale Todo
						</Typography>
						<Typography variant='h5' component='div' align='center'>
							{carta.valeTodo.nombre}
						</Typography>
					</Box>

					<Typography
						sx={{
							mt: 2,
							fontSize: 24,
							textAlign: 'center',
							fontWeight: 'bold',
						}}
						color='#191919'>
						{carta.palabraClave}
					</Typography>
				</CardContent>

				{isChoosing ? (
					<CardActions>
						<Button
							size='medium'
							fullWidth={true}
							variant='contained'
							onClick={() => click(carta)}>
							Elegir
						</Button>
					</CardActions>
				) : (
					<></>
				)}
			</Card>
		</Box>
	);
};
