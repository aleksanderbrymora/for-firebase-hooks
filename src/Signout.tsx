import React from 'react';
import { useR, useAuth } from 'firebase-hooks-react';
export const Signout: React.FC = () => {
	const [loading, error, { onSignout }] = useAuth('signout');
	const { user } = useR();
	return (
		<>
			<p>{user && user.email}</p>
			{error && <p>{JSON.stringify(error)}</p>}
			<button disabled={loading} {...onSignout}>
				Sign out
			</button>
		</>
	);
};
