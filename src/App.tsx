import { Container } from 'components/Container';
import { Search } from 'components/Search';
import { TheHeader } from 'components/TheHeader';
import { UserCard } from 'components/UserCard';

import { useEffect, useState } from 'react';
import { GitHubError, GitHubUser, LocalGitHubUser } from 'types';
import { extractLocalUser } from 'utils/extract-local-user';
import { isGithubUser } from 'utils/typeguards';

function App() {
	const [user, setUser] = useState<LocalGitHubUser | null | undefined>(null);

	useEffect(() => {
		fetchUser('n0fces');
	}, [])

	const fetchUser = async (userName: string) => {
		const res = await fetch(`https://api.github.com/users/${userName}`)
		const user = await res.json() as GitHubUser | GitHubError;

		if(isGithubUser(user)) {
			setUser(extractLocalUser(user));
		} else {
			setUser(undefined);
		}
	};

	return (
		<Container>
			<TheHeader />
			<Search
				hasError={user === undefined}
				onSubmit={fetchUser}
			/>
			{user && <UserCard {...user} />}
		</Container>
	);
}

export default App;
