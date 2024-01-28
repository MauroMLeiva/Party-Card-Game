import { Button, Grid } from '@mui/material';
import { GameCard } from '../components/GameCard';
import { useDispatch, useSelector } from 'react-redux';
import {
	addPointRelampago,
	getCardRelampago,
	startRound3,
} from '../store/gameSlice';
import { useState } from 'react';

export const GameRoundRelampago = () => {
	const dispatch = useDispatch();
	const [started, setStarted] = useState(false);

	const { relampago, currentRelampago, scores } = useSelector(
		(state) => state.game
	);

	const handleGuess = (index) => {
		dispatch(addPointRelampago(index));

		if (relampago.length > 0) {
			dispatch(getCardRelampago());
		} else {
			dispatch(startRound3());
		}
	};

	const startRound = () => {
		setStarted(true);
	};

	return (
		<>
			{!started ? (
				<Grid container direction='column' justifyContent='center'>
					<Grid container direction='row' justifyContent='center'>
						<h1>Ronda Relámpago</h1>
					</Grid>
					<Grid container direction='row' justifyContent='center'>
						<h2>Instrucciones:</h2>
					</Grid>
					<hr />
					<Grid container direction='row' justifyContent='center'>
						<p>
							La ronda relámpago es completamente diferente a las
							anteriores, y se juega entre las rondas 2 y 3. Para
							comenzar esta ronda, cada jugador toma una de las
							tarjetas del mazo de la ronda relámpago (que se
							preparó al comienzo de la partida) al azar y sin
							mirarla. Empieza el jugador más joven. En su turno,
							cada jugador leerá el contenido de las 3 categorías
							de su tarjeta (títulos, personajes y vale todo).
							Todos los demás jugadores, sin importar de qué
							equipo sean, compiten para adivinar la palabra
							clave. El primero en adivinar se queda con la
							tarjeta.
						</p>
					</Grid>
					<Button
						onClick={startRound}
						variant='contained'
						color='success'
						size='large'>
						Empezar!
					</Button>
				</Grid>
			) : (
				<Grid>
					<Grid container direction='row' justifyContent='center'>
						<GameCard carta={currentRelampago} />
					</Grid>

					{scores.map((score, index) => (
						<Grid container direction='row' justifyContent='center'>
							<Button
								sx={{ mt: 2 }}
								key={index}
								onClick={() => handleGuess(index)}
								variant='contained'
								color='success'
								size='large'>
								Adivinó el equipo {index + 1}
							</Button>
						</Grid>
					))}
				</Grid>
			)}
		</>
	);
};
