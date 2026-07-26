import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <>
            <Header />

            <main>

                {/* INTRODUCTION */}
                <section className="bg-[#F6E9CE] py-12 lg:py-16">
                    <div className="container-custom">

                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c98a6b]">
                            Qui nous sommes
                        </p>

                        <h1 className="mt-4 text-5xl font-black tracking-tight text-[#45251d] sm:text-6xl">
                            À propos de HARU
                        </h1>

                    </div>
                </section>


                {/* HISTOIRE */}
                <section className="bg-white py-12 lg:py-16">
                    <div className="container-custom">

                        <div className="grid items-start gap-16 lg:grid-cols-2">

                            {/* IMAGE */}
                            <div className="relative lg:sticky lg:top-28">

                                <Image
                                    src="/images/qui-sommes-nous.jpg"
                                    alt="L'histoire de HARU Coffee"
                                    width={1000}
                                    height={1200}
                                    className="h-[650px] w-full rounded-[2rem] object-cover"
                                />

                            </div>


                            {/* TEXTE */}
                            <div className="max-w-2xl">

                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c98a6b]">
                                    L'histoire de HARU
                                </p>

                                <h2 className="mt-5 text-4xl font-black leading-tight text-[#45251d] lg:text-5xl">
                                    Un coffee shop imaginé bien avant d'ouvrir ses portes.
                                </h2>

                                <div className="mt-10 space-y-6 text-lg leading-8 text-[#6d4536]">

                                    <p>
                                        L’histoire de HARU commence bien avant l’ouverture du coffee shop.
                                    </p>

                                    <p>
                                        Elle commence par des voyages, des découvertes et une curiosité profonde pour les lieux de vie.
                                    </p>

                                    <p>
                                        Au fil de ses expériences dans les pays anglo-saxons, puis en Corée du Sud, où elle a vécu, et au Japon, Laetitia découvre une autre manière de penser le café.
                                    </p>

                                    <p>
                                        Dans ces pays, les coffee shops sont conçus comme de véritables espaces de respiration : des lieux à l’identité forte, où l’esthétique, l’ambiance et l’expérience comptent autant que ce que l’on y consomme.
                                    </p>

                                    <p>
                                        C’est en Corée du Sud que cette vision prend tout son sens. La scène café y est foisonnante, créative, inspirante. Chaque coffee shop raconte une histoire, affirme un style et invite à ralentir.
                                    </p>

                                    <p>
                                        Peu à peu, une idée germe : transposer cet esprit dans un lieu qui lui ressemble, ancré dans le quotidien, accessible et profondément humain.
                                    </p>

                                </div>


                                {/* HARU */}
                                <div className="my-12 h-px w-24 bg-[#c98a6b]" />

                                <h3 className="text-3xl font-black text-[#45251d]">
                                    Pourquoi HARU ?
                                </h3>

                                <div className="mt-6 space-y-6 text-lg leading-8 text-[#6d4536]">

                                    <p>
                                        Le nom HARU incarne cette rencontre culturelle.
                                    </p>

                                    <p>
                                        En japonais, il signifie{" "}
                                        <strong>
                                            le printemps
                                        </strong>
                                        , symbole de renouveau et de douceur.
                                    </p>

                                    <p>
                                        En coréen, il signifie{" "}
                                        <strong>
                                            le jour
                                        </strong>
                                        , évoquant le quotidien et le rituel.
                                    </p>

                                    <p>
                                        HARU COFFEE SHOP est ainsi né : un lieu pensé comme un rituel du jour, une pause simple et essentielle, inspirée de voyages, de cultures et d’une envie sincère de créer un espace où l’on se sent bien.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}