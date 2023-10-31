import Navbar from "@/components/nav/navbar/Navbar";

export const metadata = {
    title: 'BehandlerNet',
}

export default function CalculatorLayout({ children }) {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
        </>
    )
}