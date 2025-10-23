export const metadata = { title: "About — theDesigning Worlds Lab" };

export default function AboutPage() {
    return (
        <main className="min-h-dvh flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
            <article className="max-w-2xl w-full space-y-3 sm:space-y-4">
                <h1 className="text-2xl sm:text-3xl font-semibold text-black/90 dark:text-white/90 leading-tight">About theDesigning Worlds Lab</h1>
                <p className="text-sm sm:text-base text-black/90 dark:text-white/90 leading-relaxed">
                    theDesigning Worlds Lab explores new forms of cultural memory, spatial media,
                    and research through production. We prototype experiences and systems that feel
                    inevitable in hindsight—then we open them to collaborators.
                </p>
                <p className="text-sm sm:text-base text-black/90 dark:text-white/90 leading-relaxed">
                    This prototype site is a doorway into a few of our current &quot;worlds.&quot; The Rolodex on
                    the homepage is our index.
                </p>
            </article>
        </main>
    );
}

