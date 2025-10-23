import Link from "next/link";

export const metadata = { title: "DW-L Research — theDesigning Worlds Lab" };

export default function ResearchPage() {
    return (
        <main className="min-h-dvh flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
            <article className="max-w-3xl w-full space-y-4 sm:space-y-6 text-black/90 dark:text-white/90">
                <Link
                    href="/"
                    className="inline-block text-sm sm:text-base text-black/50 dark:text-white/50 hover:text-black/80 dark:hover:text-white/80 transition-colors mb-2 sm:mb-4 touch-manipulation"
                >
                    ← Back to Rolodex
                </Link>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black/90 dark:text-white/90 leading-tight">DW-L Research</h1>
                <p className="text-lg sm:text-xl text-black/70 dark:text-white/70 leading-snug">Prototyping futures, responsibly.</p>

                <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4 text-black/90 dark:text-white/90 text-sm sm:text-base leading-relaxed">
                    <p>
                        DW-L Research explores emerging technologies and their cultural implications
                        through hands-on prototyping. We believe the best way to understand new
                        possibilities is to build them, test them, and share our findings openly.
                    </p>

                    <p>
                        Our work spans spatial computing, AI ethics, sustainable tech, and community-owned
                        platforms. We prioritize responsible innovation—creating technologies that serve
                        people and planet, not just profit.
                    </p>

                    <h2 className="text-xl sm:text-2xl font-semibold pt-3 sm:pt-4 text-black/90 dark:text-white/90">Research Areas</h2>
                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-sm sm:text-base text-black/80 dark:text-white/80 pl-1">
                        <li>Spatial computing UX patterns</li>
                        <li>AI alignment for creative tools</li>
                        <li>Decentralized cultural archives</li>
                        <li>Low-power immersive experiences</li>
                        <li>Accessible XR interfaces</li>
                    </ul>

                    <h2 className="text-xl sm:text-2xl font-semibold pt-5 sm:pt-6 text-black/90 dark:text-white/90">Publications & Talks</h2>
                    <p className="text-black/70 dark:text-white/70">
                        Our research is shared through conference papers, open-source tools, and
                        public workshops. Contact us to collaborate or commission research.
                    </p>
                </div>
            </article>
        </main>
    );
}

