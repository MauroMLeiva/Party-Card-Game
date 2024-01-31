import { createSlice } from '@reduxjs/toolkit';
import { cartas } from '../helpers/cartas';
import { shuffle } from '../helpers/shuffle';

const initialState = {
	status: 'setup',
	// menu, setup, choose, round1, round2, relampago, round3, fin
	teams: 2,
	scores: [0, 0],
	currentTeam: 1,
	playerNumber: 2,
	currentPlayer: 1,
	cartas: shuffle(cartas),
	mazo: [],
	current: {},
	currentRelampago: {},
	mazoUsado: [],
	relampago: [],
};

export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		setTeams: (state, action) => {
			state.teams = action.payload;
			state.scores = Array(state.teams).fill(0);
		},
		setPlayerNumber: (state, action) => {
			state.playerNumber = action.payload;
		},
		addToDeck: (state, action) => {
			state.mazo = [action.payload, ...state.mazo];
		},
		addMultipleToDeck: (state, action) => {
			state.mazo.push(...action.payload);
		},
		addToUsed: (state, action) => {
			state.mazoUsado.push(action.payload);
		},
		removeCards: (state, action) => {
			state.cartas = state.cartas.slice(0, state.cartas.length - 8);
			state.cartas = [...action.payload, ...state.cartas];
		},
		startSetup: (state) => {
			state.status = 'setup';
		},
		startChoose: (state) => {
			state.status = 'choose';
		},
		startRound1: (state) => {
			state.status = 'round1';
		},
		startRound2: (state) => {
			state.status = 'round2';
			state.mazo = state.mazoUsado;
			state.mazoUsado = [];
			state.current = state.mazo.pop();
		},
		startRelampago: (state) => {
			state.status = 'relampago';
			state.currentRelampago = state.relampago.pop();
		},
		startRound3: (state) => {
			state.status = 'round3';
			state.mazo = state.mazoUsado;
			state.mazoUsado = [];
			state.current = state.mazo.pop();
		},
		startMenu: (state) => {
			state.status = 'menu';
		},
		getCard: (state) => {
			state.current = state.mazo.pop();
		},
		getCardRelampago: (state) => {
			state.currentRelampago = state.relampago.pop();
		},
		startFin: (state) => {
			state.status = 'fin';
		},
		toggleTeam: (state) => {
			state.currentTeam += 1;
			if (state.currentTeam > state.teams) {
				state.currentTeam = 1;
			}

			state.mazo.push(state.current);
			state.mazo = shuffle(state.mazo);
		},
		addPoint: (state) => {
			state.scores[state.currentTeam - 1] += 1;
		},
		addPointRelampago: (state, action) => {
			state.scores[action.payload] += 1;
		},
		createRelampago: (state) => {
			state.cartas = shuffle(state.cartas);
			state.relampago = state.cartas.slice(0, state.playerNumber);
		},
	},
});

export const {
	setTeams,
	setPlayerNumber,
	addToDeck,
	addMultipleToDeck,
	removeCards,
	startSetup,
	startChoose,
	startRound1,
	startRound2,
	startRelampago,
	startRound3,
	startMenu,
	startFin,
	getCard,
	addToUsed,
	toggleTeam,
	addPoint,
	createRelampago,
	getCardRelampago,
	addPointRelampago,
} = gameSlice.actions;
