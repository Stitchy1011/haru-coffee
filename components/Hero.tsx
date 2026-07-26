import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="bg-[#F4F1EB] py-12 sm:py-16 lg:py-16">
            <div className="container-custom">

                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

                    {/* TEXTE */}
                    <div>

                        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#698980]">
                            HARU COFFEE
                        </p>

                        <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-[#45251d] sm:text-7xl lg:text-8xl">
                            Un havre
                            <br />
                            <span className="font-normal italic">
                                de paix.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-xl text-base leading-7 text-[#45251d]/75 sm:text-lg sm:leading-8">
                            HARU COFFEE, un lieu paisible où déguster un café de
                            spécialité préparé avec amour et soin. Reconnectez-vous
                            avec vos sens.
                        </p>

                        {/* BOUTON DESKTOP UNIQUEMENT */}
                        <div className="mt-10 hidden lg:block">

                            <Link
                                href="/carte"
                                className="inline-flex rounded-full bg-[#698980] px-7 py-4 font-semibold text-white transition hover:bg-[#45251d]"
                            >
                                Explorez notre menu
                            </Link>

                        </div>

                    </div>


                    {/* IMAGE */}
                    <div className="overflow-hidden rounded-[2rem]">

                        <Image
                            src="/images/haru-interior.jpg"
                            alt="Boissons matcha et créations HARU COFFEE"
                            width={1000}
                            height={1200}
                            className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[600px]"
                            priority
                        />

                    </div>


                    {/* BOUTON MOBILE UNIQUEMENT */}
                    <div className="lg:hidden">

                        <Link
                            href="/carte"
                            className="inline-flex rounded-full bg-[#698980] px-7 py-4 font-semibold text-white transition hover:bg-[#45251d]"
                        >
                            Explorez notre menu
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    );
}