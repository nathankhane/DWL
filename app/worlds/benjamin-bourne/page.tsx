import Link from "next/link";

export const metadata = { title: "Benjamin Bourne — theDesigning Worlds Lab" };

export default function BenjaminBournePage() {
    return (
        <main className="min-h-dvh flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
            <article className="max-w-3xl w-full space-y-4 sm:space-y-6 text-black/90 dark:text-white/90">
                <Link
                    href="/"
                    className="inline-block text-sm sm:text-base text-black/50 dark:text-white/50 hover:text-black/80 dark:hover:text-white/80 transition-colors mb-2 sm:mb-4 touch-manipulation"
                >
                    ← Back to Rolodex
                </Link>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black/90 dark:text-white/90 leading-tight">Benjamin Bourne</h1>
                <p className="text-lg sm:text-xl text-black/70 dark:text-white/70 leading-snug">Design director. Narrative systems.</p>

                <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4 text-black/90 dark:text-white/90 text-sm sm:text-base leading-relaxed">
                    <p>
                        Benjamin Bourne is a design director specializing in narrative-driven systems
                        and spatial storytelling. With over a decade of experience crafting immersive
                        experiences, he leads projects that merge physical and digital worlds.
                    </p>

                    <p>
                        His work explores how technology can amplify human connection and cultural memory,
                        creating systems that feel both inevitable and magical. He&apos;s passionate about
                        building tools that empower creators and communities.
                    </p>

                    <h2 className="text-xl sm:text-2xl font-semibold pt-3 sm:pt-4 text-black/90 dark:text-white/90">Current Focus</h2>
                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-sm sm:text-base text-black/80 dark:text-white/80 pl-1">
                        <li>Spatial computing interfaces for cultural institutions</li>
                        <li>AI-assisted narrative design tools</li>
                        <li>Community-driven archival systems</li>
                        <li>Cross-platform storytelling frameworks</li>
                    </ul>
                </div>
            </article>
        </main>
    );
}

