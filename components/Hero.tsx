import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="bg-[#F6E9CE] py-12 lg:py-16">
            <div className="container-custom">

                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

                    {/* TEXTE */}
                    <div>

                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c98a6b]">
                            HARU COFFEE
                        </p>

                        <h1 className="mt-4 max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-[#45251d] sm:text-6xl lg:text-8xl">
                            Un havre
                            <br />
                            <span className="font-normal italic">
                                de paix.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-7 text-[#45251d]/75 sm:text-lg sm:leading-8">
                            HARU COFFEE, un lieu paisible où déguster un café de
                            spécialité préparé avec amour et soin. Reconnectez-vous
                            avec vos sens.
                        </p>

                        {/* BOUTON DESKTOP */}
                        <div className="mt-8 hidden lg:block">

                            <Link
                                href="/carte"
                                className="inline-flex rounded-full bg-[#45251d] px-7 py-4 font-semibold text-[#F6E9CE] transition hover:bg-[#c98a6b]"
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


                    {/* BOUTON MOBILE */}
                    <div className="lg:hidden">

                        <Link
                            href="/carte"
                            className="inline-flex rounded-full bg-[#45251d] px-7 py-4 font-semibold text-[#F6E9CE] transition hover:bg-[#c98a6b]"
                        >
                            Explorez notre menu
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    );
}