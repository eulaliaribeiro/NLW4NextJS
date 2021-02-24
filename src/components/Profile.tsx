import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/eulaliaribeiro.png" alt="Eulália Ribeiro" />
            <div>
                <strong>
                    Eulália Ribeiro
                </strong>       
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}