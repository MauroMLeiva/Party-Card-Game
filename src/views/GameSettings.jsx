import {
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayerNumber, setTeams, startChoose } from '../store/gameSlice';

export const GameSettings = () => {
	const { playerNumber, teams } = useSelector((state) => state.game);
	const dispatch = useDispatch();

	const playerChange = ({ target }) => {
		dispatch(setPlayerNumber(target.value));
	};

	const teamChange = ({ target }) => {
		dispatch(setTeams(target.value));
	};

	const handleContinue = () => {
		dispatch(startChoose());
	};
	console.log(teams);

	return (
		<Grid>
			<Grid
				container
				spacing={0}
				direction='row'
				alignItems='center'
				justifyContent='center'>
				<Grid item>
					<FormControl sx={{ width: 150, mr: 5 }}>
						<InputLabel id='demo-simple-select-label'>
							Equipos
						</InputLabel>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={teams}
							label='Equipos'
							onChange={teamChange}>
							<MenuItem value={2}>Dos</MenuItem>
							<MenuItem value={3}>Tres</MenuItem>
							<MenuItem value={4}>Cuatro</MenuItem>
						</Select>
					</FormControl>
				</Grid>

				<Grid item>
					<FormControl sx={{ width: 150 }}>
						<InputLabel id='demo-simple-select-label'>
							Jugadores
						</InputLabel>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={playerNumber}
							label='Jugadores'
							onChange={playerChange}>
							<MenuItem value={2}>Dos</MenuItem>
							<MenuItem value={3}>Tres</MenuItem>
							<MenuItem value={4}>Cuatro</MenuItem>
							<MenuItem value={5}>Cinco</MenuItem>
							<MenuItem value={6}>Seis</MenuItem>
							<MenuItem value={7}>Siete</MenuItem>
							<MenuItem value={8}>Ocho</MenuItem>
						</Select>
					</FormControl>
				</Grid>
			</Grid>

			<Grid
				container
				spacing={0}
				direction='column'
				alignItems='center'
				justifyContent='center'>
				<Grid item>
					<Button
						onClick={handleContinue}
						sx={{ mt: 2 }}
						variant='contained'
						size='large'
						color='success'>
						Continuar
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
};
