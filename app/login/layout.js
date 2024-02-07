// import Navbar from "@/components/nav/navbar/Navbar";
import styles from './page.module.css';

// export const metadata = {
//     title: 'BehandlerNet | Login',
// }

export default function LoginLayout({ children }) {
    return (
        <>
            <main className={styles.main} style={{margin: 0, height: '100%', overflow: 'hidden'}}>
                {children}
            </main>
        </>
    )
}