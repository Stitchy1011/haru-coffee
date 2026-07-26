import Link from "next/link";

const items = [
    {
        name: "Cafés de Spécialité",
        description:
            "Savourez une variété de cafés de spécialité, soigneusement sélectionnés, pour un goût exceptionnel.",
        link: "Explorez notre menu",
    },
    {
        name: "Thés Exotiques",
        description:
            "Explorez notre gamme de thés provenant des meilleurs jardins du monde, pour éveiller vos sens.",
        link: "Explorez notre menu",
    },
    {
        name: "Ambiance Détendue",
        description:
            "Un espace chaleureux et accueillant, idéal pour partager ou se ressourcer.",
        link: "Explorez notre coffee shop",
    },
    {
        name: "Événements et Ateliers",
        description:
            "Participez à nos événements exclusifs et ateliers pour les passionnés de café et de thé.",
        link: "Contactez-nous",
    },
];

export default function MenuPreview() {
    return (
        <section className="bg-[#F4F1EB] py-12 lg:py-16">
            <div className="container-custom">

                <div className="mb-10">

                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#698980]">
                        L'expérience HARU
                    </p>

                    <h2 className="mt-5 text-4xl font-black text-[#45251d] lg:text-6xl">
                        Découvrez HARU
                    </h2>

                </div>


                <div className="grid gap-6 md:grid-cols-2">

                    {items.map((item) => (

                        <div
                            key={item.name}
                            className="rounded-3xl bg-white p-8"
                        >

                            <h3 className="text-2xl font-black text-[#45251d]">
                                {item.name}
                            </h3>

                            <p className="mt-4 leading-7 text-[#45251d]/75">
                                {item.description}
                            </p>

                            <Link
                                href={
                                    item.name === "Ambiance Détendue"
                                        ? "/le-coffee-shop"
                                        : item.name === "Événements et Ateliers"
                                            ? "/contact"
                                            : "/carte"
                                }
                                className="mt-6 inline-flex font-semibold text-[#698980] transition hover:text-[#45251d]"
                            >
                                {item.link} →
                            </Link>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}