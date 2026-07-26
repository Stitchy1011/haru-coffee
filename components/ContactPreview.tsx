import Link from "next/link";

export default function ContactPreview() {
    return (
        <section className="bg-[#F4F1EB] py-12 lg:py-16">
            <div className="container-custom">

                <div className="flex flex-col justify-between gap-8 border-t border-[#45251d]/15 pt-12 md:flex-row md:items-end">

                    <div>

                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#698980]">
                            Événements et Ateliers
                        </p>

                        <h2 className="mt-5 max-w-2xl text-4xl font-black leading-tight text-[#45251d] lg:text-6xl">
                            Partagez un moment autour du café et du thé.
                        </h2>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-[#45251d]/75">
                            Participez à nos événements exclusifs et ateliers pour les
                            passionnés de café et de thé.
                        </p>

                    </div>

                    <Link
                        href="/contact"
                        className="inline-flex shrink-0 rounded-full bg-[#698980] px-7 py-4 font-semibold text-white transition hover:bg-[#45251d]"
                    >
                        Contactez-nous
                    </Link>

                </div>

            </div>
        </section>
    );
}