import "tailwindcss/tailwind.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Header />
            <div className="-z-10 w-96 md:h-screen h-3/5 bg-rectangle bg-no-repeat fixed top-0 md:-left-28 -left-52 right-0"></div>
            <main className="container mt-20 md:mt-24 md:pb-0">
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
}

export default MyApp;
