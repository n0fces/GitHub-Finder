import { LocalGitHubUser } from 'types';
import styles from './UserStat.module.scss';

// То мы достали из уже существующего типа те поля, которые нам нужны
// если мы переименуем там, то тс будет ругаться, чтобы мы везде, где используем поля, поменяли значения
export interface UserStatProps
	extends Pick<LocalGitHubUser, 'repos' | 'followers' | 'following'> {}

export const UserStat = ({ repos, followers, following }: UserStatProps) => {
	return <div className={styles.userStat}>
		{/* Можно было бы создать отдельный компонент для этой сущности */}
		<div className={styles.info}>
			<div className={styles.intoTitle}>Repos</div>
			<div className={styles.infoNumber}>{repos}</div>
		</div>
		<div className={styles.info}>
			<div className={styles.intoTitle}>Following</div>
			<div className={styles.infoNumber}>{following}</div>
		</div>
		<div className={styles.info}>
			<div className={styles.intoTitle}>Followers</div>
			<div className={styles.infoNumber}>{followers}</div>
		</div>
	</div>;
};