import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
    return (
        <section className="bg-white py-12 sm:py-16 lg:py-20">
            <div className="container-custom">

                <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-16">

                    {/* IMAGE */}
                    <div className="overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">

                        <Image
                            src="/images/haru-table.jpg"
                            alt="L'univers de HARU COFFEE"
                            width={1000}
                            height={1200}
                            className="h-[380px] w-full object-cover object-center sm:h-[480px] lg:h-[560px]"
                        />

                    </div>


                    {/* TEXTE */}
                    <div>

                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#698980] sm:text-sm">
                            Qui Nous Sommes
                        </p>

                        <h2 className="mt-4 text-4xl font-black leading-tight text-[#45251d] sm:text-5xl lg:mt-5 lg:text-6xl">
                            Chaque tasse
                            <br />
                            <span className="font-normal italic">
                                raconte une histoire.
                            </span>
                        </h2>

                        <p className="mt-6 text-base leading-7 text-[#45251d]/75 sm:mt-8 sm:text-lg sm:leading-8">
                            HARU COFFEE est né de la passion pour le café de spécialité
                            et le désir de créer un espace où chacun peut savourer
                            chaque gorgée.
                        </p>

                        <p className="mt-4 text-base leading-7 text-[#45251d]/75 sm:mt-5 sm:text-lg sm:leading-8">
                            Nous croyons que chaque tasse raconte une histoire, et notre
                            objectif est de partager cette expérience avec nos clients.
                        </p>

                        <Link
                            href="/a-propos"
                            className="mt-6 inline-flex text-sm font-semibold text-[#698980] transition hover:text-[#45251d] sm:mt-8 sm:text-base"
                        >
                            Découvrir notre histoire →
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    );
}