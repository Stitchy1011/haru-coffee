import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

type MenuItem = {
    name: string;
    description?: string;
    price: string;
};

type MenuCategory = {
    title: string;
    subtitle?: string;
    items: MenuItem[];
};

const categories: MenuCategory[] = [
    {
        title: "Café",
        subtitle: "Iced / Hot",
        items: [
            { name: "Espresso", price: "2,50 €" },
            { name: "Double Espresso", price: "2,80 €" },
            { name: "Americano", price: "3 €" },
            { name: "Latte", price: "4,50 €" },
            { name: "Flat White", price: "4,50 €" },
            { name: "Cappuccino", price: "4,50 €" },
            { name: "Mocha", price: "5,50 €" },
            { name: "Caramel Macchiato", price: "5,50 €" },
        ],
    },
    {
        title: "Not Café",
        subtitle: "Iced / Hot",
        items: [
            { name: "Matcha Latte", price: "5 €" },
            { name: "Matcha Latte Mangue", price: "6 €" },
            { name: "Matcha Latte Fraise", price: "6 €" },
            { name: "Chaï Latte", price: "5 €" },
            {
                name: "Thé",
                description: "Earl grey / thé vert menthe",
                price: "3,50 €",
            },
            {
                name: "Thé glacé",
                description:
                    "Thé vert - Hibiscus - Jasmin - sirop de pêche",
                price: "4,50 €",
            },
            { name: "Chocolat", price: "5 €" },
            { name: "Babyccino", price: "3 €" },
            {
                name: "Smoothie Haru Sunshine",
                description: "Mangue - Banane - Jus d'orange",
                price: "6 €",
            },
            {
                name: "Smoothie protéiné",
                description:
                    "Beurre de cacahuète - Banane - lait d'avoine - whey",
                price: "6,50 €",
            },
        ],
    },
    {
        title: "Sucré",
        items: [
            {
                name: "Cookie",
                description:
                    "Chocolat noir - Chocolat au lait - fleur de sel",
                price: "3,50 €",
            },
            {
                name: "Banana Bread",
                description: "Chocolat noir - Banane",
                price: "3,50 €",
            },
            {
                name: "Barre protéinée",
                description:
                    "Flocons d'avoine - Beurre de cacahuète - sirop d'agave - chocolat noir - fleur de sel",
                price: "3,50 €",
            },
            {
                name: "Cake au citron",
                price: "3,50 €",
            },
        ],
    },
];

const supplements = [
    {
        name: "Lait végétal (amande, soja, avoine, coco)",
        price: "gratuit !",
    },
    {
        name: "Sirop (vanille, caramel, noisette)",
        price: "+0,50 €",
    },
    {
        name: "Extra shot",
        price: "+0,50 €",
    },
    {
        name: "Protéine",
        price: "+1,50 €",
    },
];

export default function MenuPage() {
    return (
        <>
            <Header />

            <main className="bg-[#F6E9CE]">

                {/* INTRODUCTION */}
                <section className="py-12 lg:py-16">
                    <div className="container-custom">

                        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

                            <div>

                                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c98a6b]">
                                    À déguster
                                </p>

                                <h1 className="mt-5 text-5xl font-black tracking-tight text-[#45251d] sm:text-6xl">
                                    Notre carte
                                </h1>

                                <p className="mt-5 max-w-xl text-lg leading-8 text-[#45251d]/75">
                                    Découvrez notre sélection de cafés, boissons,
                                    matchas et douceurs préparés avec soin.
                                </p>

                            </div>

                            <a
                                href="/images/haru-menu.png"
                                download
                                className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#45251d] px-7 py-4 font-semibold text-[#F6E9CE] transition hover:bg-[#c98a6b]"
                            >
                                Télécharger la carte
                            </a>

                        </div>

                    </div>
                </section>


                {/* CARTE */}
                <section className="bg-[#fffaf0] py-12 lg:py-16">
                    <div className="container-custom">

                        <div className="space-y-16">

                            {categories.map((category) => (
                                <div key={category.title}>

                                    {/* TITRE DE LA CATÉGORIE */}
                                    <div className="flex items-baseline gap-4 border-b-2 border-[#45251d] pb-3">

                                        <h2 className="text-3xl font-black text-[#45251d] sm:text-4xl">
                                            {category.title.toUpperCase()}
                                        </h2>

                                        {category.subtitle && (
                                            <span className="text-lg font-semibold text-[#c98a6b]">
                                                {category.subtitle}
                                            </span>
                                        )}

                                    </div>


                                    {/* PRODUITS */}
                                    <div className="mt-8 grid gap-x-12 gap-y-6 sm:grid-cols-2">

                                        {category.items.map((item) => (
                                            <div
                                                key={`${category.title}-${item.name}`}
                                                className="flex items-start justify-between gap-4"
                                            >

                                                <div>

                                                    <h3 className="text-xl font-serif text-[#45251d]">
                                                        {item.name}
                                                    </h3>

                                                    {item.description && (
                                                        <p className="mt-1 text-sm text-[#45251d]/70">
                                                            {item.description}
                                                        </p>
                                                    )}

                                                </div>

                                                <span className="whitespace-nowrap text-xl font-serif text-[#45251d]">
                                                    {item.price}
                                                </span>

                                            </div>
                                        ))}

                                    </div>


                                    {/* SUPPLÉMENTS */}
                                    {category.title === "Not Café" && (
                                        <div className="mt-10 border-t border-[#45251d]/20 pt-6">

                                            <h4 className="font-bold text-[#45251d]">
                                                Suppléments
                                            </h4>

                                            <ul className="mt-3 space-y-2 text-sm text-[#45251d]/80">

                                                {supplements.map((supplement) => (
                                                    <li
                                                        key={supplement.name}
                                                        className="flex justify-between gap-4"
                                                    >

                                                        <span>
                                                            {supplement.name}
                                                        </span>

                                                        <span className="whitespace-nowrap font-semibold text-[#c98a6b]">
                                                            {supplement.price}
                                                        </span>

                                                    </li>
                                                ))}

                                            </ul>

                                        </div>
                                    )}

                                </div>
                            ))}

                        </div>

                    </div>
                </section>


                {/* CTA */}
                <section className="bg-[#45251d] py-16 text-[#F6E9CE] lg:py-20">
                    <div className="container-custom">

                        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

                            <div>

                                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c98a6b]">
                                    Une envie particulière ?
                                </p>

                                <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                                    Venez découvrir HARU COFFEE.
                                </h2>

                            </div>

                            <Link
                                href="/contact"
                                className="inline-flex shrink-0 rounded-full bg-[#F6E9CE] px-7 py-4 font-semibold text-[#45251d] transition hover:bg-[#c98a6b] hover:text-white"
                            >
                                Nous contacter
                            </Link>

                        </div>

                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}