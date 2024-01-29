import { Button, Grid } from '@mui/material';
import { GameCard } from '../components/GameCard';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
	addMultipleToDeck,
	addToDeck,
	createRelampago,
	getCard,
	removeCards,
	startRound1,
} from '../store/gameSlice';

export const ChooseCards = () => {
	const dispatch = useDispatch();
	const { cartas, mazo, playerNumber } = useSelector((state) => state.game);
	const selection = cartas.slice(cartas.length - 8);

	const [selected, setSelected] = useState([]);
	const [notSelected, setNotSelected] = useState(selection);

	const handleCardChoice = (carta) => {
		if (selected.includes(carta)) {
			setSelected([...selected.filter((x) => x !== carta)]);
			setNotSelected([...notSelected, carta]);
		} else {
			setSelected([...selected, carta]);
			setNotSelected([...notSelected.filter((x) => x !== carta)]);
		}
	};

	const handleSelection = () => {
		dispatch(removeCards(notSelected));
		dispatch(addMultipleToDeck(selected));
		setSelected([]);

		if (mazo.length >= (playerNumber - 1) * 5) {
			dispatch(createRelampago());
			dispatch(getCard());
			dispatch(startRound1());
		}
	};
	return (
		<>
			<Grid
				container
				direction='row'
				justifyContent='center'
				sx={{ mb: 2, mt: 1 }}>
				<h1>Elegí 5 cartas</h1>
			</Grid>

			<Grid container direction='row' justifyContent='center'>
				{selection.map((carta) => (
					<GameCard
						key={carta.titulo.nombre}
						carta={carta}
						click={handleCardChoice}
						selected={selected}
						isChoosing={true}
					/>
				))}
			</Grid>

			{selected.length == 5 ? (
				<Grid container direction='row' justifyContent='center'>
					<Button
						size='large'
						color='success'
						variant='contained'
						onClick={handleSelection}>
						Terminar selección
					</Button>
				</Grid>
			) : (
				<></>
			)}
		</>
	);
};
