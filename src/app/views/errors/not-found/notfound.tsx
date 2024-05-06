import styles from './notfound.module.scss';

function Notfound() {
    return (
        <div className={styles.container}>
            {' '}
            <div className={styles['boo-wrapper']}>
                <div className={styles.boo}>
                    <div className={styles.face}></div>
                </div>
                <div className={styles.shadow}></div>

                <h1>Whoops!</h1>
                <p>
                    We couldn't find the page you
                    <br />
                    were looking for.
                </p>
            </div>
        </div>
    );
}

export default Notfound;
