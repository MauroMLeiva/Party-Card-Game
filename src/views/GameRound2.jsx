import { Button, Grid } from '@mui/material';
import { GameCard } from '../components/GameCard';
import { useDispatch, useSelector } from 'react-redux';
import {
	addPoint,
	addToDeck,
	addToUsed,
	getCard,
	startRelampago,
	startRound3,
	toggleTeam,
} from '../store/gameSlice';
import { useState } from 'react';

export const GameRound2 = () => {
	const [started, setStarted] = useState(false);

	const dispatch = useDispatch();
	const { mazo, current, currentTeam } = useSelector((state) => state.game);
	const handleGuess = () => {
		dispatch(addToUsed(current));
		dispatch(addPoint());

		if (mazo.length > 0) {
			dispatch(getCard());
		} else {
			// dispatch(startRound3());
			dispatch(startRelampago());
		}
	};

	const handleSkip = () => {
		dispatch(addToDeck(current));
		dispatch(getCard());
	};

	const startRound = () => {
		setStarted(true);
	};

	const endTurn = () => {
		dispatch(toggleTeam());
		dispatch(getCard());
	};

	return (
		<>
			{!started ? (
				<Grid container direction='column' justifyContent='center'>
					<Grid container direction='row' justifyContent='center'>
						<h1>Ronda 2</h1>
					</Grid>
					<Grid container direction='row' justifyContent='center'>
						<h2>Instrucciones:</h2>
					</Grid>
					<hr />
					<Grid container direction='row' justifyContent='center'>
						<p>
							QUIEN DA PISTAS PUEDE: Decir una sola palabra por
							tarjeta (y repetirla todas las veces que quiera).
							Actuar. Pasar: podrá decir “paso” y colocar la
							tarjeta boca abajo a un costado. Luego podrá seguir
							con la tarjeta siguiente.
						</p>
					</Grid>
					<Grid container direction='row' justifyContent='center'>
						<p>
							QUIEN ADIVINA PUEDE: Arriesgar una sola vez por
							tarjeta, por equipo
						</p>
					</Grid>
					<Grid container direction='row' justifyContent='center'>
						<p>
							QUIEN DA PISTAS NO PUEDE: A excepción de “pasar” no
							puede hacer ninguna de las cosas prohibidas en la
							ronda 1. Usar más de una palabra ni emitir sonidos.
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
				<>
					<Grid>
						<Grid container direction='row' justifyContent='center'>
							<h1>Equipo {currentTeam}</h1>
						</Grid>
						<Grid container direction='row' justifyContent='center'>
							<GameCard carta={current} />
						</Grid>

						<Grid container direction='row' justifyContent='center'>
							<Button
								onClick={handleGuess}
								variant='contained'
								color='success'
								size='large'
								sx={{ mr: 2 }}>
								Adiviné!
							</Button>

							<Button
								onClick={handleSkip}
								variant='contained'
								color='error'
								size='large'>
								Paso!
							</Button>
						</Grid>
						<Grid container direction='row' justifyContent='center'>
							<Button
								onClick={endTurn}
								variant='contained'
								color='error'
								size='large'
								sx={{ mt: 2 }}>
								Terminar Turno
							</Button>
						</Grid>
					</Grid>
				</>
			)}
		</>
	);
};
