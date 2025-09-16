
interface PagesHeroProps {
    title: string;
    subtitle: string;
}
const PagesHero = ({ title, subtitle }: PagesHeroProps) => {
    return (
        <section className="hero-pattern py-12">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 font-heading dark:text-white">{title}</h1>
                <p className="text-lg text-primary-700 max-w-3xl mx-auto dark:text-primary-300">{subtitle}</p>
            </div>
        </section>
    );
}

export default PagesHero;
