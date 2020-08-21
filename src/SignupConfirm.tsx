import React from 'react';
import { useAuth } from 'firebase-hooks-react';
export const SignupConfirm: React.FC = () => {
	const [loading, error, { email, password, confirmation, onSignup }] = useAuth(
		'emailPasswordConfirm',
	);

	return (
		<form {...onSignup}>
			<input {...email} autoFocus />
			<input {...password} />
			<input {...confirmation} />
			<button disabled={loading} type='submit'>
				Sign up
			</button>
			<p>{JSON.stringify(error)}</p>
		</form>
	);
};
