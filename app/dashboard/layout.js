// import Navbar from "@/components/nav/navbar/Navbar";
// import styles from './page.module.css';

import Navbar from "@/components/nav/navbar/Navbar";

// export const metadata = {
//     title: 'BehandlerNet | Login',
// }

export default function LoginLayout({ children }) {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
        </>
    )
}