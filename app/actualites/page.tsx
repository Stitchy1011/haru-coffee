import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NewsPage() {
    return (
        <>
            <Header />

            <main>

                {/* HERO */}
                <section className="bg-[#F6E9CE] py-12 lg:py-16">
                    <div className="container-custom">

                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c98a6b]">
                            La vie de HARU
                        </p>

                        <h1 className="mt-4 text-5xl font-black tracking-tight text-[#45251d] sm:text-6xl">
                            Actualités
                        </h1>

                    </div>
                </section>


                {/* ACTUALITÉS */}
                <section className="bg-[#fffaf0] py-12 lg:py-16">
                    <div className="container-custom">

                        <div className="grid gap-10 lg:grid-cols-2">


                            {/* ULULE */}
                            <article className="overflow-hidden rounded-[2rem] bg-[#F6E9CE]">

                                <div className="relative pt-0 sm:pt-8">

                                    <div className="relative overflow-hidden rounded-[2rem]">

                                        <Image
                                            src="/images/ulule.jpg"
                                            alt="HARU Coffee Shop"
                                            width={1000}
                                            height={1200}
                                            priority
                                            className="
                                                mx-auto
                                                h-auto
                                                w-full
                                                max-w-full
                                                rounded-[2rem]
                                                object-contain
                                                sm:w-auto
                                                sm:max-w-full
                                                sm:max-h-[500px]
                                            "
                                        />

                                    </div>

                                </div>


                                <div className="p-8 lg:p-10">

                                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c98a6b]">
                                        Participez au projet
                                    </p>

                                    <h2 className="mt-4 text-3xl font-black text-[#45251d]">
                                        Chaque jour, un instant pour soi.
                                    </h2>

                                    <div className="mt-6 space-y-5 leading-7 text-[#45251d]/75">

                                        <p>
                                            Et si vous participiez à la naissance d’un lieu pensé pour ralentir ?
                                        </p>

                                        <p>
                                            HARU COFFEE SHOP est un projet indépendant né d’une envie simple mais essentielle : créer un espace où l’on prend le temps, où l’on se retrouve, où l’on savoure un bon café dans une atmosphère chaleureuse et apaisante.
                                        </p>

                                        <p>
                                            Un coffee shop comme une pause dans le quotidien.
                                            <br />
                                            Un rituel.
                                            <br />
                                            Un moment pour soi.
                                        </p>

                                        <p>
                                            Découvrez la campagne Ulule et participez à l’aventure HARU.
                                        </p>

                                    </div>


                                    <a
                                        href="https://fr.ulule.com/harucoffeeshop/?utm_campaign=presale_224259&utm_source=ig&utm_medium=social&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaeewLy1FV3Y0ykU_xIfg7RKy0oiyschfG_tffMGmRTs2EzMSdVy8QiuFCAPWA_aem_AACWtjaWacfk4-oQP4HDyg&utm_content=link_in_bio"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-8 inline-flex rounded-full bg-[#45251d] px-6 py-3 font-semibold text-[#F6E9CE] transition hover:bg-[#c98a6b]"
                                    >
                                        Découvrir la campagne Ulule
                                    </a>

                                </div>

                            </article>


                            {/* OUVERTURE */}
                            <article className="rounded-[2rem] border border-[#45251d]/10 bg-white p-8 lg:p-10">

                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c98a6b]">
                                    Une nouvelle aventure
                                </p>

                                <h2 className="mt-4 text-3xl font-black text-[#45251d]">
                                    HARU Coffee ouvre ses portes à Champigny-sur-Marne le 30 juin.
                                </h2>

                                <div className="mt-6 space-y-5 leading-7 text-[#45251d]/75">

                                    <p>
                                        Après plusieurs mois de préparation, de travaux et de réflexion, HARU Coffee est heureux de vous annoncer son ouverture le 30 juin à Champigny-sur-Marne.
                                    </p>

                                    <p>
                                        HARU Coffee est bien plus qu'un simple café. C'est un lieu pensé pour offrir une parenthèse de douceur au cœur du quotidien.
                                    </p>

                                    <p>
                                        Un espace où l'on peut prendre le temps de savourer un café de spécialité, partager un moment entre amis, travailler dans un cadre agréable ou simplement faire une pause.
                                    </p>

                                    <p>
                                        Le nom « HARU » signifie « printemps » en japonais et « jour » en coréen. Il évoque le renouveau, la lumière et les nouveaux départs.
                                    </p>

                                    <p>
                                        À la carte, vous retrouverez une sélection de cafés de spécialité préparés avec soin, des boissons gourmandes, du matcha, des pâtisseries artisanales ainsi qu'une offre de restauration légère pensée pour accompagner chaque moment de la journée.
                                    </p>

                                    <p>
                                        HARU Coffee est également fier d'être le premier coffee shop indépendant de Champigny-sur-Marne, avec l'ambition de contribuer à la vie locale en créant un lieu de rencontre, d'échange et de convivialité.
                                    </p>

                                    <p>
                                        Derrière ce projet se cache une aventure entrepreneuriale portée avec passion, soutenue par de nombreux proches, partenaires et habitants qui ont cru en cette idée depuis ses débuts.
                                    </p>

                                    <p>
                                        Nous avons hâte de vous accueillir dès le 30 juin pour découvrir le lieu, partager un café et écrire ensemble les premières pages de cette belle aventure.
                                    </p>

                                    <p className="font-semibold text-[#45251d]">
                                        À très bientôt chez HARU Coffee.
                                    </p>

                                </div>

                            </article>

                        </div>

                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}