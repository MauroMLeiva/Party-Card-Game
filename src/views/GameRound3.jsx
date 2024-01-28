import { Button, Grid } from '@mui/material';
import { GameCard } from '../components/GameCard';
import { useDispatch, useSelector } from 'react-redux';
import {
	addPoint,
	addToDeck,
	addToUsed,
	getCard,
	startFin,
	startRelampago,
	toggleTeam,
} from '../store/gameSlice';
import { useState } from 'react';

export const GameRound3 = () => {
	const [mode, setMode] = useState('instructions');

	const dispatch = useDispatch();
	const { mazo, current, currentTeam } = useSelector((state) => state.game);
	const handleGuess = () => {
		dispatch(addToUsed(current));
		dispatch(addPoint());

		if (mazo.length > 0) {
			dispatch(getCard());
		} else {
			dispatch(startFin());
		}
	};

	const handleSkip = () => {
		dispatch(addToDeck(current));
		dispatch(getCard());
	};

	const readyUp = () => {
		setMode('ready');
	};

	const startRound = () => {
		setMode('playing');
	};

	const endTurn = () => {
		setMode('ready');
		dispatch(toggleTeam());
		dispatch(getCard());
	};

	const renderSwitch = (mode) => {
		switch (mode) {
			case 'instructions':
				return (
					<Grid container direction='column' justifyContent='center'>
						<Grid container direction='row' justifyContent='center'>
							<h1>Ronda 3</h1>
						</Grid>
						<Grid container direction='row' justifyContent='center'>
							<h2>Instrucciones:</h2>
						</Grid>
						<hr />
						<Grid container direction='row' justifyContent='center'>
							<p>
								QUIEN DA PISTAS PUEDE: Actuar. Pasar: podrá
								decir “paso” y colocar la tarjeta boca abajo a
								un costado. Luego podrá seguir con la tarjeta
								siguiente.
							</p>
						</Grid>
						<Grid container direction='row' justifyContent='center'>
							<p>
								QUIEN ADIVINA PUEDE: Arriesgar una sola vez por
								tarjeta, por equipo. Nota: en el caso de que se
								equivoquen al arriesgar, el jugador que da
								pistas colocará la tarjeta a un costado y
								continuará con la siguiente tarjeta del mazo.
							</p>
						</Grid>
						<Grid container direction='row' justifyContent='center'>
							<p>
								QUIEN DA PISTAS NO PUEDE: A excepción de “pasar”
								no puede hacer las cosas prohibidas en la ronda
								1 y 2. Decir ninguna palabra ni emitir sonidos.
							</p>
						</Grid>
						<Button
							onClick={readyUp}
							variant='contained'
							color='success'
							size='large'>
							Empezar!
						</Button>
					</Grid>
				);
				break;

			case 'ready':
				return (
					<>
						<Grid container direction='row' justifyContent='center'>
							<h1> Juega el equipo {currentTeam}</h1>
						</Grid>
						<Grid container direction='row' justifyContent='center'>
							<Button
								onClick={startRound}
								variant='contained'
								color='success'
								size='large'>
								Empezar
							</Button>
						</Grid>
					</>
				);
				break;

			case 'playing':
				return (
					<>
						<Grid>
							<Grid
								container
								direction='row'
								justifyContent='center'>
								<h1>Equipo {currentTeam}</h1>
							</Grid>

							<Grid
								container
								direction='row'
								justifyContent='center'>
								<GameCard carta={current} />
							</Grid>

							<Grid
								container
								direction='row'
								justifyContent='center'>
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

								<Grid
									container
									direction='row'
									justifyContent='center'>
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
						</Grid>
					</>
				);
		}
	};

	return <>{renderSwitch(mode)}</>;
};
