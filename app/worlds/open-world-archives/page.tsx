import Link from "next/link";

export const metadata = { title: "theOpen World Archives — theDesigning Worlds Lab" };

export default function OpenWorldArchivesPage() {
    return (
        <main className="min-h-dvh flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
            <article className="max-w-3xl w-full space-y-4 sm:space-y-6 text-black/90 dark:text-white/90">
                <Link
                    href="/"
                    className="inline-block text-sm sm:text-base text-black/50 dark:text-white/50 hover:text-black/80 dark:hover:text-white/80 transition-colors mb-2 sm:mb-4 touch-manipulation"
                >
                    ← Back to Rolodex
                </Link>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black/90 dark:text-white/90 leading-tight">theOpen World Archives</h1>
                <p className="text-lg sm:text-xl text-black/70 dark:text-white/70 leading-snug">Living memory + spatial media.</p>

                <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4 text-black/90 dark:text-white/90 text-sm sm:text-base leading-relaxed">
                    <p>
                        theOpen World Archives (OWA) is a platform for preserving and sharing cultural
                        memory through spatial media. We&apos;re building tools that let communities capture,
                        organize, and experience their stories in immersive formats.
                    </p>

                    <p>
                        Unlike traditional archives, OWA emphasizes living memory—stories that evolve,
                        connect, and remain accessible across generations. Our spatial approach lets
                        you walk through history, not just read about it.
                    </p>

                    <h2 className="text-xl sm:text-2xl font-semibold pt-3 sm:pt-4 text-black/90 dark:text-white/90">Key Features</h2>
                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-sm sm:text-base text-black/80 dark:text-white/80 pl-1">
                        <li>3D spatial capture and reconstruction</li>
                        <li>Community-curated collections</li>
                        <li>Cross-platform viewing (VR, AR, web)</li>
                        <li>AI-powered metadata and tagging</li>
                        <li>Collaborative storytelling tools</li>
                    </ul>
                </div>
            </article>
        </main>
    );
}

