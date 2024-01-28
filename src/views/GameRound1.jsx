import { Button, Grid } from '@mui/material';
import { GameCard } from '../components/GameCard';
import { useDispatch, useSelector } from 'react-redux';
import {
	addPoint,
	addToUsed,
	getCard,
	startRound2,
	toggleTeam,
} from '../store/gameSlice';
import { useState } from 'react';

export const GameRound1 = () => {
	const [started, setStarted] = useState(false);
	const dispatch = useDispatch();
	const { mazo, current, currentTeam } = useSelector((state) => state.game);
	const handleGuess = () => {
		dispatch(addToUsed(current));
		dispatch(addPoint());

		if (mazo.length > 0) {
			dispatch(getCard());
		} else {
			dispatch(startRound2());
		}
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
						<h1>Ronda 1</h1>
					</Grid>

					<Grid container direction='row' justifyContent='center'>
						<h2>Instrucciones:</h2>
					</Grid>
					<hr />
					<Grid container direction='row' justifyContent='center'>
						<p>
							QUIEN DA PISTAS PUEDE: Hablar, actuar, hacer
							sonidos, señalar, cantar, tararear, etc.
						</p>
					</Grid>
					<Grid container direction='row' justifyContent='center'>
						<p>
							QUIEN ADIVINA PUEDE: Arriesgar sin límite de
							intentos (si arriesga y no acierta puede seguir
							intentándolo).
						</p>
					</Grid>
					<Grid container direction='row' justifyContent='center'>
						<p>
							QUIEN DA PISTAS NO PUEDE: Decir una palabra que
							figure en el nombre a adivinar, ni sus derivados,
							diminutivos ni partes. Traducir esas palabras a otro
							idioma ni decir la versión en otro país de ese
							título. Decir la palabra clave ni sus derivados,
							diminutivos, ni parte de ella. Deletrear, ni cortar
							palabras, ni nada parecido. Pasar: tendrá que seguir
							intentando hasta que su equipo adivine o hasta que
							se termine el tiempo.
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
							size='large'>
							Adiviné!
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
			)}
		</>
	);
};
