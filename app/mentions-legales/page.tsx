import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalPage() {
    return (
        <>
            <Header />

            <main className="bg-[#fffaf0] py-12">
                <div className="container-custom max-w-4xl">

                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c8793e]">
                        Informations légales
                    </p>

                    <h1 className="mt-6 text-5xl font-black text-[#45251d] sm:text-6xl">
                        Mentions légales
                    </h1>

                    <div className="mt-16 space-y-12 text-[#6d4536]">

                        <section>
                            <h2 className="text-2xl font-bold text-[#45251d]">
                                Nom de l'entreprise
                            </h2>

                            <p className="mt-4 leading-8">
                                SASU HARU COFFEE
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[#45251d]">
                                Siège social
                            </h2>

                            <p className="mt-4 leading-8">
                                Veuillez saisir votre siège social
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[#45251d]">
                                Coordonnées
                            </h2>

                            <p className="mt-4 leading-8">
                                Veuillez saisir vos coordonnées
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[#45251d]">
                                Numéro d'identification de l'entreprise
                            </h2>

                            <div className="mt-4 space-y-2 leading-8">
                                <p>
                                    <strong>N° SIRET :</strong> 99915852000018
                                </p>

                                <p>
                                    <strong>RCS :</strong> 999 158 520 R.C.S. Creteil
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[#45251d]">
                                N° de TVA
                            </h2>

                            <p className="mt-4 leading-8">
                                FR02999158520
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[#45251d]">
                                Autorité de régulation
                            </h2>

                            <div className="mt-4 space-y-2 leading-8">
                                <p>
                                    Direction générale de la concurrence, de la consommation et
                                    de la répression des fraudes
                                </p>

                                <p>
                                    Direction départementale de la protection des populations
                                </p>
                            </div>
                        </section>

                    </div>

                </div>
            </main>

            <Footer />
        </>
    );
}