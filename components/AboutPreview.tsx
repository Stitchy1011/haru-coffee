import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
    return (
        <section className="bg-white py-12 lg:py-16">
            <div className="container-custom">

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    <div className="overflow-hidden rounded-[2rem]">
                        <Image
                            src="/images/haru-table.jpg"
                            alt="L'univers de HARU COFFEE"
                            width={1000}
                            height={1200}
                            className="h-[560px] w-full object-cover"
                        />

                    </div>


                    <div>

                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#698980]">
                            Qui Nous Sommes
                        </p>

                        <h2 className="mt-5 text-4xl font-black leading-tight text-[#45251d] lg:text-6xl">
                            Chaque tasse
                            <br />
                            <span className="font-normal italic">
                                raconte une histoire.
                            </span>
                        </h2>

                        <p className="mt-8 text-lg leading-8 text-[#45251d]/75">
                            HARU COFFEE est né de la passion pour le café de spécialité
                            et le désir de créer un espace où chacun peut savourer
                            chaque gorgée.
                        </p>

                        <p className="mt-5 text-lg leading-8 text-[#45251d]/75">
                            Nous croyons que chaque tasse raconte une histoire, et notre
                            objectif est de partager cette expérience avec nos clients.
                        </p>

                        <Link
                            href="/a-propos"
                            className="mt-8 inline-flex font-semibold text-[#698980] transition hover:text-[#45251d]"
                        >
                            Découvrir notre histoire →
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    );
}