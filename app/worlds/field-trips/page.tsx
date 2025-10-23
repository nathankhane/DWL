import Link from "next/link";

export const metadata = { title: "Field Trips — theDesigning Worlds Lab" };

export default function FieldTripsPage() {
    return (
        <main className="min-h-dvh flex items-center justify-center px-6 py-20">
            <article className="max-w-3xl space-y-6 text-black/90 dark:text-white/90">
                <Link
                    href="/"
                    className="inline-block text-black/50 dark:text-white/50 hover:text-black/80 dark:hover:text-white/80 transition-colors mb-4"
                >
                    ← Back to Rolodex
                </Link>

                <h1 className="text-4xl md:text-5xl font-semibold text-black/90 dark:text-white/90">Field Trips</h1>
                <p className="text-xl text-black/70 dark:text-white/70">Embodied learning in the wild.</p>

                <div className="space-y-4 pt-4 text-black/90 dark:text-white/90">
                    <p>
                        Field Trips reimagines learning by taking it out of classrooms and into the world.
                        We design experiences that blend exploration, discovery, and reflection—using
                        technology to enhance rather than replace physical presence.
                    </p>

                    <p>
                        Our approach combines location-based narratives, AR overlays, and collaborative
                        challenges to create memorable learning journeys. Each trip is designed to spark
                        curiosity and foster deep understanding through direct experience.
                    </p>

                    <h2 className="text-2xl font-semibold pt-4 text-black/90 dark:text-white/90">Experience Types</h2>
                    <ul className="list-disc list-inside space-y-2 text-black/80 dark:text-white/80">
                        <li>Urban exploration and historical walks</li>
                        <li>Nature-based science investigations</li>
                        <li>Cultural exchange programs</li>
                        <li>Art and design studio visits</li>
                        <li>Maker workshops in real contexts</li>
                    </ul>
                </div>
            </article>
        </main>
    );
}

