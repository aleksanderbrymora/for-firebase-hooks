import React from 'react';
import { useR, useFirestore } from 'firebase-hooks-react';
import { Signout } from './Signout';
import { Facebook } from './Facebook';

const QueryWithUser: React.FC = () => {
	const [loading, error, data] = useFirestore('__user');

	return <div>{JSON.stringify(data)}</div>;
};

const App: React.FC = () => {
	const { loading, user } = useR();
	return loading ? (
		<p>Loading...</p>
	) : (
		<div className='App'>
			{user ? (
				<>
					<QueryWithUser />
					<Signout />
				</>
			) : (
				<Facebook />
			)}
		</div>
	);
};

export default App;
