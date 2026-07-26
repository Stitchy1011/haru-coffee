import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="bg-[#F4F1EB] py-20 lg:py-16">
            <div className="container-custom">

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    <div>

                        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-[#698980]">
                            HARU COFFEE
                        </p>

                        <h1 className="max-w-3xl text-6xl font-black leading-[0.95] tracking-tight text-[#45251d] sm:text-7xl lg:text-8xl">
                            Un havre
                            <br />
                            <span className="font-normal italic">
                                de paix.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-[#45251d]/75">
                            HARU COFFEE, un lieu paisible où déguster un café de
                            spécialité préparé avec amour et soin. Reconnectez-vous
                            avec vos sens.
                        </p>

                        <div className="mt-10">

                            <Link
                                href="/carte"
                                className="inline-flex rounded-full bg-[#698980] px-7 py-4 font-semibold text-white transition hover:bg-[#45251d]"
                            >
                                Explorez notre menu
                            </Link>

                        </div>

                    </div>


                    <div className="overflow-hidden rounded-[2rem]">
                        <Image
                            src="/images/haru-interior.jpg"
                            alt="Boissons matcha et créations HARU COFFEE"
                            width={1000}
                            height={1200}
                            className="h-[600px] w-full object-cover"
                            priority
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}