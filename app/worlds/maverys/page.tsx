import Link from "next/link";

export const metadata = { title: "Maverys — theDesigning Worlds Lab" };

export default function MaverysPage() {
    return (
        <main className="min-h-dvh flex items-center justify-center px-6 py-20">
            <article className="max-w-3xl space-y-6 text-black/90 dark:text-white/90">
                <Link
                    href="/"
                    className="inline-block text-black/50 dark:text-white/50 hover:text-black/80 dark:hover:text-white/80 transition-colors mb-4"
                >
                    ← Back to Rolodex
                </Link>

                <h1 className="text-4xl md:text-5xl font-semibold text-black/90 dark:text-white/90">Maverys</h1>
                <p className="text-xl text-black/70 dark:text-white/70">Maverick guild for makers.</p>

                <div className="space-y-4 pt-4 text-black/90 dark:text-white/90">
                    <p>
                        Maverys is a collective of independent creators, technologists, and designers
                        who value craft, collaboration, and creative freedom. We&apos;re building an
                        alternative to traditional studio models—one that puts makers first.
                    </p>

                    <p>
                        Members share resources, collaborate on projects, and support each other&apos;s
                        growth. We believe the best work comes from giving talented people space to
                        experiment, fail, and discover their unique voice.
                    </p>

                    <h2 className="text-2xl font-semibold pt-4 text-black/90 dark:text-white/90">What We Offer</h2>
                    <ul className="list-disc list-inside space-y-2 text-black/80 dark:text-white/80">
                        <li>Shared studio space and tools</li>
                        <li>Project collaboration opportunities</li>
                        <li>Skill-sharing workshops</li>
                        <li>Client project coordination</li>
                        <li>Community funding and grants</li>
                        <li>Exhibition and showcase events</li>
                    </ul>

                    <h2 className="text-2xl font-semibold pt-6 text-black/90 dark:text-white/90">Join the Guild</h2>
                    <p className="text-black/70 dark:text-white/70">
                        Maverys is currently accepting applications from makers in all disciplines.
                        We&apos;re looking for people who are curious, generous, and committed to their craft.
                    </p>

                    <div className="pt-6">
                        <a
                            href="mailto:join@maverys.guild"
                            className="inline-block px-6 py-3 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-lg transition-colors font-medium"
                        >
                            Apply to Join →
                        </a>
                    </div>
                </div>
            </article>
        </main>
    );
}

