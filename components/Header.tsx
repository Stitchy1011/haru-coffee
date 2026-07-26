"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-[#45251d]/10 bg-[#F4F1EB]/95 backdrop-blur">
            <div className="container-custom">
                <div className="flex h-24 items-center justify-between">
                    <Link
                        href="/"
                        onClick={closeMenu}
                        className="flex h-20 w-[190px] items-center overflow-hidden"
                    >
                        <Image
                            src="/images/haru-logo.png"
                            alt="Haru Coffee"
                            width={220}
                            height={100}
                            className="max-h-[78px] w-full object-contain object-left"
                            priority
                        />
                    </Link>
                    <nav className="hidden items-center gap-8 md:flex">
                        <Link
                            href="/"
                            className="text-sm font-medium text-[#45251d] transition hover:text-[#698980]"
                        >
                            Accueil
                        </Link>

                        <Link
                            href="/a-propos"
                            className="text-sm font-medium text-[#45251d] transition hover:text-[#698980]"
                        >
                            À propos de nous
                        </Link>

                        <Link
                            href="/carte"
                            className="text-sm font-medium text-[#45251d] transition hover:text-[#698980]"
                        >
                            Notre carte
                        </Link>

                        <Link
                            href="/actualites"
                            className="text-sm font-medium text-[#45251d] transition hover:text-[#698980]"
                        >
                            Actualités
                        </Link>

                        <Link
                            href="/contact"
                            className="rounded-full bg-[#698980] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#45251d]"
                        >
                            Contactez-nous
                        </Link>
                    </nav>

                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="text-3xl text-[#45251d] md:hidden"
                        aria-label="Ouvrir le menu"
                    >
                        {open ? "×" : "☰"}
                    </button>

                </div>

                {open && (

                    <nav className="border-t border-[#45251d]/10 py-6 md:hidden">

                        <div className="flex flex-col gap-5">

                            <Link href="/" onClick={closeMenu}>
                                Accueil
                            </Link>

                            <Link href="/a-propos" onClick={closeMenu}>
                                À propos de nous
                            </Link>

                            <Link href="/carte" onClick={closeMenu}>
                                Notre carte
                            </Link>

                            <Link href="/actualites" onClick={closeMenu}>
                                Actualités
                            </Link>

                            <Link href="/contact" onClick={closeMenu}>
                                Contactez-nous
                            </Link>

                        </div>

                    </nav>

                )}

            </div>

        </header>
    );
}