import Navbar from "@/components/nav/navbar/Navbar";

export const metadata = {
    title: 'BehandlerPaycheck',
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