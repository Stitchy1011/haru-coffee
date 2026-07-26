import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
    return (
        <>
            <Header />

            <main className="bg-[#fffaf0] py-12">
                <div className="container-custom max-w-4xl">

                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c8793e]">
                        Vos données
                    </p>

                    <h1 className="mt-6 text-5xl font-black text-[#45251d] sm:text-6xl">
                        Politique de confidentialité
                    </h1>

                    <div className="mt-8 space-y-12 text-[#6d4536]">

                        <section>
                            <h2 className="text-2xl font-bold text-[#45251d]">
                                Contrôleur de données
                            </h2>

                            <p className="mt-4 leading-8">
                                Veuillez saisir le nom de votre responsable du traitement des
                                données.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[#45251d]">
                                Données personnelles collectées
                            </h2>

                            <p className="mt-4 leading-8">
                                Veuillez saisir les données à caractère personnel collectées.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[#45251d]">
                                Objectif de la collecte des données
                            </h2>

                            <p className="mt-4 leading-8">
                                Veuillez saisir vos coordonnées.
                            </p>
                        </section>

                    </div>

                </div>
            </main>

            <Footer />
        </>
    );
}