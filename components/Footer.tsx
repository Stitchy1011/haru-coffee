import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#45251d] py-16 text-[#F4F1EB]">
            <div className="container-custom">

                <div className="grid gap-12 md:grid-cols-3">

                    {/* BRAND */}
                    <div>

                        <Link href="/" className="inline-block">
                            <Image
                                src="/images/haru-logo.png"
                                alt="Haru Coffee"
                                width={150}
                                height={100}
                                className="w-[130px]"
                            />
                        </Link>

                        <p className="mt-6 max-w-xs leading-7 text-[#F4F1EB]/70">
                            Un lieu imaginé entre plusieurs cultures, pour prendre le temps
                            de savourer chaque instant.
                        </p>

                        <p className="mt-5 text-sm text-[#F4F1EB]/50">
                            37 Av. du Général de Gaulle
                            <br />
                            94500 Champigny-sur-Marne
                        </p>

                    </div>

                    {/* NAVIGATION */}
                    <div>

                        <h3 className="font-bold">
                            Navigation
                        </h3>

                        <nav className="mt-5 flex flex-col gap-3 text-[#F4F1EB]/70">

                            <Link
                                href="/"
                                className="transition hover:text-[#698980]"
                            >
                                Accueil
                            </Link>

                            <Link
                                href="/a-propos"
                                className="transition hover:text-[#698980]"
                            >
                                Qui sommes-nous ?
                            </Link>

                            <Link
                                href="/carte"
                                className="transition hover:text-[#698980]"
                            >
                                Notre carte
                            </Link>

                            <Link
                                href="/actualites"
                                className="transition hover:text-[#698980]"
                            >
                                Actualités
                            </Link>

                            <Link
                                href="/contact"
                                className="transition hover:text-[#698980]"
                            >
                                Contact
                            </Link>

                        </nav>

                    </div>

                    {/* INFORMATIONS */}
                    <div>

                        <h3 className="font-bold">
                            Informations
                        </h3>

                        <nav className="mt-5 flex flex-col gap-3 text-[#F4F1EB]/70">

                            <Link
                                href="/mentions-legales"
                                className="transition hover:text-[#698980]"
                            >
                                Mentions légales
                            </Link>

                            <Link
                                href="/politique-confidentialite"
                                className="transition hover:text-[#698980]"
                            >
                                Politique de confidentialité
                            </Link>

                        </nav>

                    </div>

                </div>

                {/* COPYRIGHT */}
                <div className="mt-8 border-t border-[#F4F1EB]/15 pt-8">

                    <p className="text-sm text-[#F4F1EB]/50">
                        © {new Date().getFullYear()} HARU COFFEE. Tous droits réservés.
                    </p>

                </div>

            </div>
        </footer>
    );
}