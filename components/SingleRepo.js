import moment from "moment"
import styles from "../styles/SingleRepo.module.css"


export const SingleRepo = (repo) => {
    return (
        <div className={styles.container}>
            <div className={styles.avatar} style={{ backgroundImage: `url("${repo.owner.avatar_url}")` }}></div>
            <div className={styles.desc}>
                <div className={styles.title}>
                    <h2>{repo.name}</h2>
                </div>

                <div className={styles.description}>
                    {repo.description || "No description..."}
                </div>

                <div className={styles.extras}>
                    <ul>
                        <li className={styles.stars}>
                            <button>Stars: <b>{repo.stargazers_count}</b></button>
                        </li>
                        <li className={styles.issues}>
                            <button>Issues: <b>{repo.open_issues_count}</b></button>
                        </li>
                        <li className={styles.submitted}>
                            <p>
                                <small>Submitted {moment(`${repo.updated_at}`).fromNow()} by {repo.owner.login}</small>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

