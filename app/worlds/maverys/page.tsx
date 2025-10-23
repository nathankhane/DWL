import Link from "next/link";

export const metadata = { title: "Maverys — theDesigning Worlds Lab" };

export default function MaverysPage() {
    return (
        <main className="min-h-dvh flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
            <article className="max-w-3xl w-full space-y-4 sm:space-y-6 text-black/90 dark:text-white/90">
                <Link
                    href="/"
                    className="inline-block text-sm sm:text-base text-black/50 dark:text-white/50 hover:text-black/80 dark:hover:text-white/80 transition-colors mb-2 sm:mb-4 touch-manipulation"
                >
                    ← Back to Rolodex
                </Link>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black/90 dark:text-white/90 leading-tight">Maverys</h1>
                <p className="text-lg sm:text-xl text-black/70 dark:text-white/70 leading-snug">Maverick guild for makers.</p>

                <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4 text-black/90 dark:text-white/90 text-sm sm:text-base leading-relaxed">
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

                    <h2 className="text-xl sm:text-2xl font-semibold pt-3 sm:pt-4 text-black/90 dark:text-white/90">What We Offer</h2>
                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-sm sm:text-base text-black/80 dark:text-white/80 pl-1">
                        <li>Shared studio space and tools</li>
                        <li>Project collaboration opportunities</li>
                        <li>Skill-sharing workshops</li>
                        <li>Client project coordination</li>
                        <li>Community funding and grants</li>
                        <li>Exhibition and showcase events</li>
                    </ul>

                    <h2 className="text-xl sm:text-2xl font-semibold pt-5 sm:pt-6 text-black/90 dark:text-white/90">Join the Guild</h2>
                    <p className="text-black/70 dark:text-white/70">
                        Maverys is currently accepting applications from makers in all disciplines.
                        We&apos;re looking for people who are curious, generous, and committed to their craft.
                    </p>

                    <div className="pt-4 sm:pt-6">
                        <a
                            href="mailto:join@maverys.guild"
                            className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-lg transition-colors font-medium touch-manipulation"
                        >
                            Apply to Join →
                        </a>
                    </div>
                </div>
            </article>
        </main>
    );
}

