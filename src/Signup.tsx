import React from 'react';
import { useAuth } from 'firebase-hooks-react';
const Signup: React.FC = () => {
	const [
		loading,
		error,
		{ email, password, onSignup },
	] = useAuth('emailPassword', () => console.log('did it work?'));

	return (
		<form {...onSignup}>
			<input autoFocus {...email} />
			<input {...password} />
			<button disabled={loading} type='submit'>
				Sign up
			</button>
			<p>{JSON.stringify(error)}</p>
		</form>
	);
};
