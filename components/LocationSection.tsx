import Link from "next/link";

export default function LocationSection() {
    return (
        <section className="bg-white py-12 lg:py-16">
            <div className="container-custom">

                <div className="grid gap-12 lg:grid-cols-2">

                    <div>

                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#698980]">
                            Venez nous rencontrer
                        </p>

                        <h2 className="mt-5 text-5xl font-black text-[#45251d]">
                            Retrouvez HARU
                        </h2>

                        <p className="mt-6 max-w-lg text-lg leading-8 text-[#45251d]/75">
                            Au cœur de Champigny-sur-Marne, HARU COFFEE vous accueille
                            pour un café, un matcha, une douceur ou simplement un moment
                            pour vous.
                        </p>

                        <div className="mt-8 space-y-4 text-[#45251d]">

                            <p>
                                <strong>37 Av. du Général de Gaulle</strong>
                                <br />
                                94500 Champigny-sur-Marne
                            </p>

                            <p>
                                <strong>Horaires</strong>
                                <br />
                                Lundi – Mardi : Fermé
                                <br />
                                Mercredi – Vendredi : 09:00 – 18:30
                                <br />
                                Samedi – Dimanche : 09:30 – 18:00
                            </p>

                        </div>

                        <Link
                            href="https://www.google.com/maps/dir/?api=1&destination=HARU+COFFEE,+37+Av.+du+Général+de+Gaulle,+94500+Champigny-sur-Marne"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex rounded-full bg-[#698980] px-7 py-4 font-semibold text-white transition hover:bg-[#45251d]"
                        >
                            Voir l'itinéraire
                        </Link>

                    </div>


                    <div className="min-h-[400px] overflow-hidden rounded-[2rem]">

                        <iframe
                            src="https://www.google.com/maps?q=HARU+COFFEE,+37+Av.+du+Général+de+Gaulle,+94500+Champigny-sur-Marne&output=embed"
                            width="100%"
                            height="100%"
                            style={{
                                border: 0,
                                minHeight: "400px",
                            }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localisation de HARU COFFEE"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
}