import Link from "next/link";

export const metadata = { title: "Benjamin Bourne — theDesigning Worlds Lab" };

export default function BenjaminBournePage() {
    return (
        <main className="min-h-dvh flex items-center justify-center px-6 py-20">
            <article className="max-w-3xl space-y-6 text-black/90 dark:text-white/90">
                <Link
                    href="/"
                    className="inline-block text-black/50 dark:text-white/50 hover:text-black/80 dark:hover:text-white/80 transition-colors mb-4"
                >
                    ← Back to Rolodex
                </Link>

                <h1 className="text-4xl md:text-5xl font-semibold text-black/90 dark:text-white/90">Benjamin Bourne</h1>
                <p className="text-xl text-black/70 dark:text-white/70">Design director. Narrative systems.</p>

                <div className="space-y-4 pt-4 text-black/90 dark:text-white/90">
                    <p>
                        Benjamin Bourne is a design director specializing in narrative-driven systems
                        and spatial storytelling. With over a decade of experience crafting immersive
                        experiences, he leads projects that merge physical and digital worlds.
                    </p>

                    <p>
                        His work explores how technology can amplify human connection and cultural memory,
                        creating systems that feel both inevitable and magical. He's passionate about
                        building tools that empower creators and communities.
                    </p>

                    <h2 className="text-2xl font-semibold pt-4 text-black/90 dark:text-white/90">Current Focus</h2>
                    <ul className="list-disc list-inside space-y-2 text-black/80 dark:text-white/80">
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

