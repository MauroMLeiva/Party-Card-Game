import React from 'react';
import { useTimer } from 'react-timer-hook';

export default function MyTimer({ expiryTimestamp, onExpire }) {
	const {
		totalSeconds,
		seconds,
		minutes,
		hours,
		days,
		isRunning,
		start,
		pause,
		resume,
		restart,
	} = useTimer({
		expiryTimestamp,
		onExpire,
	});

	return (
		<div style={{ fontSize: '100px' }}>
			<span>{seconds}</span>
		</div>
	);
}
