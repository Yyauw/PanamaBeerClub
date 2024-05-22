import "../app/globals.css";
import Navbar from "@/src/components/navegacion/navbar";
import Footer from "../components/footer/Footer";
export const metadata = {
    title: "Panamá Beer Club",
    description:
        "Panama Beer Club - Conectando la comunidad cervcera de Panamá",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
