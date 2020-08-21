import React from 'react';
import { useAuth } from 'firebase-hooks-react';
export const Google: React.FC = () => {
	const [loading, error, { popup }] = useAuth('google', () =>
		console.log('did it work?'),
	);

	return (
		<>
			{error && JSON.stringify(error)}
			<button disabled={loading} {...popup}>
				Sign up with Google
			</button>
		</>
	);
};
