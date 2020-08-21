import { useAuth } from 'firebase-hooks-react';
import React from 'react';

export const Facebook: React.FC = () => {
	const [loading, error, { popup }] = useAuth('facebook', () =>
		console.log('is this working?'),
	);

	return (
		<>
			{error && JSON.stringify(error)}
			<button disabled={loading} {...popup}>
				Sign up with Facebook
			</button>
		</>
	);
};
