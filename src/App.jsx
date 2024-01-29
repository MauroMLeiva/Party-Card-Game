import { useSelector } from 'react-redux';
import { GameCard } from './components/GameCard';
import { ChooseCards } from './views/ChooseCards';
import { GameRound1 } from './views/GameRound1';
import { GameSettings } from './views/GameSettings';
import { GameRound2 } from './views/GameRound2';
import { GameRoundRelampago } from './views/GameRoundRelampago';
import { GameRound3 } from './views/GameRound3';
import { GameEnd } from './views/GameEnd';

export const App = () => {
	const { status } = useSelector((state) => state.game);
	const renderSwitch = (status) => {
		switch (status) {
			case 'setup':
				return <GameSettings />;
				break;

			case 'choose':
				return <ChooseCards />;
				break;

			case 'round1':
				return <GameRound1 />;
				break;

			case 'round2':
				return <GameRound2 />;
				break;

			case 'round3':
				return <GameRound3 />;
				break;

			case 'relampago':
				return <GameRoundRelampago />;
				break;

			case 'fin':
				return <GameEnd />;
				break;
		}
	};

	return (
		<>
			<h1>.</h1>
			{renderSwitch(status)}
			{/* <GameSettings /> */}
			{/* <ChooseCards /> */}
			{/* <GameRound /> */}
		</>
	);
};
