import Link from "next/link";

export const metadata = { title: "LISA — theDesigning Worlds Lab" };

export default function LISAPage() {
    return (
        <main className="min-h-dvh flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
            <article className="max-w-3xl w-full space-y-4 sm:space-y-6 text-black/90 dark:text-white/90">
                <Link
                    href="/"
                    className="inline-block text-sm sm:text-base text-black/50 dark:text-white/50 hover:text-black/80 dark:hover:text-white/80 transition-colors mb-2 sm:mb-4 touch-manipulation"
                >
                    ← Back to Rolodex
                </Link>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black/90 dark:text-white/90 leading-tight">LISA</h1>
                <p className="text-lg sm:text-xl text-black/70 dark:text-white/70 leading-snug">Lightweight Intelligence for Spatial Art.</p>

                <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4 text-black/90 dark:text-white/90 text-sm sm:text-base leading-relaxed">
                    <p>
                        LISA is an AI system designed specifically for spatial art creation and curation.
                        Unlike general-purpose AI, LISA understands the nuances of spatial composition,
                        environmental context, and embodied experience.
                    </p>

                    <p>
                        LISA assists artists and designers in creating works that respond to physical space,
                        lighting conditions, and viewer movement. It&apos;s a creative partner that enhances
                        artistic vision without imposing its own aesthetic.
                    </p>

                    <h2 className="text-xl sm:text-2xl font-semibold pt-3 sm:pt-4 text-black/90 dark:text-white/90">Capabilities</h2>
                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-sm sm:text-base text-black/80 dark:text-white/80 pl-1">
                        <li>Spatial analysis and composition suggestions</li>
                        <li>Real-time environmental response systems</li>
                        <li>Multi-sensory installation design</li>
                        <li>Visitor flow and interaction prediction</li>
                        <li>Adaptive lighting and sound design</li>
                    </ul>

                    <div className="pt-4 text-black/60 dark:text-white/60 text-sm border-t border-black/10 dark:border-white/10">
                        <p>Currently in beta with select artist collaborators.</p>
                    </div>
                </div>
            </article>
        </main>
    );
}

