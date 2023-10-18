import { GitHubUser } from 'types';

export const isGithubUser = (user: any): user is GitHubUser => 'id' in user;