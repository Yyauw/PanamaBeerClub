import "@/src/app/globals.css";
import Navbar from "@/src/components/navegacion/navbar";
import Footer from "@/src/components/footer/Footer";
import Head from "next/head";

export const metadata = {
    title: "Panamá Beer Club",
    description:
        "Panama Beer Club - Conectando la comunidad cervcera de Panamá",
};

export default function RootLayout({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Panamá Beer Club</title>
                <meta
                    name="description"
                    content="Panama Beer Club - Conectando la comunidad cervcera de Panamá"
                />
            </Head>
            <Navbar />
            <main>
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    );
}
