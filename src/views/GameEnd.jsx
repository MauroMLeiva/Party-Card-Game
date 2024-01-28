import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

export const GameEnd = () => {
	const { scores } = useSelector((state) => state.game);

	return (
		<>
			<Grid container direction='row' justifyContent='center'>
				<Grid container direction='row' justifyContent='center'>
					<h1>Fin del Juego</h1>
				</Grid>
				<Grid container direction='row' justifyContent='center'>
					<h2>Puntuación:</h2>
				</Grid>

				{scores.map((score, index) => (
					<Grid container direction='row' justifyContent='center'>
						<h3>
							Equipo {index + 1}: {score} Puntos
						</h3>
					</Grid>
				))}
			</Grid>
		</>
	);
};
