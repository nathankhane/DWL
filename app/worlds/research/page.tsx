import Link from "next/link";

export const metadata = { title: "DW-L Research — theDesigning Worlds Lab" };

export default function ResearchPage() {
    return (
        <main className="min-h-dvh flex items-center justify-center px-6 py-20">
            <article className="max-w-3xl space-y-6 text-black/90 dark:text-white/90">
                <Link
                    href="/"
                    className="inline-block text-black/50 dark:text-white/50 hover:text-black/80 dark:hover:text-white/80 transition-colors mb-4"
                >
                    ← Back to Rolodex
                </Link>

                <h1 className="text-4xl md:text-5xl font-semibold text-black/90 dark:text-white/90">DW-L Research</h1>
                <p className="text-xl text-black/70 dark:text-white/70">Prototyping futures, responsibly.</p>

                <div className="space-y-4 pt-4 text-black/90 dark:text-white/90">
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

                    <h2 className="text-2xl font-semibold pt-4 text-black/90 dark:text-white/90">Research Areas</h2>
                    <ul className="list-disc list-inside space-y-2 text-black/80 dark:text-white/80">
                        <li>Spatial computing UX patterns</li>
                        <li>AI alignment for creative tools</li>
                        <li>Decentralized cultural archives</li>
                        <li>Low-power immersive experiences</li>
                        <li>Accessible XR interfaces</li>
                    </ul>

                    <h2 className="text-2xl font-semibold pt-6 text-black/90 dark:text-white/90">Publications & Talks</h2>
                    <p className="text-black/70 dark:text-white/70">
                        Our research is shared through conference papers, open-source tools, and
                        public workshops. Contact us to collaborate or commission research.
                    </p>
                </div>
            </article>
        </main>
    );
}

