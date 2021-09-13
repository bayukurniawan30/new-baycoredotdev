import styles from './Preloader.module.css'

export default function Preloader() {
    return (
        <div className={styles.preloader}>
            <div className={styles.preloader_inner}>
                <div className={styles.preloader_icon}>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}