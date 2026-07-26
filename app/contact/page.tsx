import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function ContactPage() {
    return (
        <>
            <Header />

            <main>

                {/* HERO */}
                <section className="bg-[#F6E9CE] py-12 lg:py-16">
                    <div className="container-custom">

                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c98a6b]">
                            Une question ?
                        </p>

                        <h1 className="mt-4 text-5xl font-black tracking-tight text-[#45251d] sm:text-6xl">
                            Contactez-nous
                        </h1>

                    </div>
                </section>


                {/* CONTACT */}
                <section className="bg-white py-12 lg:py-16">
                    <div className="container-custom">

                        <div className="grid gap-16 lg:grid-cols-2">

                            {/* INFORMATIONS */}
                            <div className="order-2 lg:order-1">

                                <h2 className="text-4xl font-black text-[#45251d]">
                                    Venez nous rendre visite
                                </h2>

                                <p className="mt-6 max-w-xl leading-8 text-[#6d4536]">
                                    Pour connaître nos horaires, notre adresse exacte et toutes
                                    les informations pratiques, retrouvez-nous directement sur
                                    nos réseaux sociaux.
                                </p>


                                {/* RÉSEAUX SOCIAUX */}
                                <div className="mt-8 flex items-center gap-4">

                                    {/* INSTAGRAM */}
                                    <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="Instagram"
                                        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#45251d] text-xl text-[#F6E9CE] transition hover:bg-[#c98a6b]"
                                    >
                                        <FaInstagram />
                                    </a>


                                    {/* FACEBOOK */}
                                    <a
                                        href="https://www.facebook.com/people/HARU-Coffee-France/61586714150234/"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="Facebook"
                                        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#45251d] text-xl text-[#F6E9CE] transition hover:bg-[#c98a6b]"
                                    >
                                        <FaFacebookF />
                                    </a>


                                    {/* TIKTOK */}
                                    <a
                                        href="https://www.tiktok.com/@harucoffeeshop"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="TikTok"
                                        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#45251d] text-xl text-[#F6E9CE] transition hover:bg-[#c98a6b]"
                                    >
                                        <FaTiktok />
                                    </a>

                                </div>

                            </div>


                            {/* FORMULAIRE */}
                            <form className="order-1 space-y-5 lg:order-2">

                                <input
                                    type="text"
                                    placeholder="Votre nom"
                                    className="w-full rounded-xl border border-[#45251d]/20 bg-transparent px-5 py-4 outline-none transition focus:border-[#c98a6b]"
                                />

                                <input
                                    type="email"
                                    placeholder="Votre adresse e-mail"
                                    className="w-full rounded-xl border border-[#45251d]/20 bg-transparent px-5 py-4 outline-none transition focus:border-[#c98a6b]"
                                />

                                <textarea
                                    placeholder="Votre message"
                                    rows={6}
                                    className="w-full rounded-xl border border-[#45251d]/20 bg-transparent px-5 py-4 outline-none transition focus:border-[#c98a6b]"
                                />

                                <button
                                    type="submit"
                                    className="rounded-full bg-[#45251d] px-7 py-4 font-semibold text-[#F6E9CE] transition hover:bg-[#c98a6b]"
                                >
                                    Envoyer le message
                                </button>

                            </form>

                        </div>

                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}