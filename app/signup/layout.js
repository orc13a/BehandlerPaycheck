import styles from './page.module.css';

export default function SignupLayout({ children }) {
    return (
        <>
            <main className={styles.main} style={{margin: 0, height: '100%', overflow: 'hidden'}}>
                {children}
            </main>
        </>
    )
}