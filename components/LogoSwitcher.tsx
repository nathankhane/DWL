"use client";

import { useTheme } from "./ThemeProvider";
import Image from "next/image";

export default function LogoSwitcher() {
    const { theme, mounted } = useTheme();

    // Show light logo by default until mounted (SSR)
    if (!mounted) {
        return (
            <Image
                src="/dwl_logo_black_transparent_3600w.png"
                alt="theDesigning Worlds Lab"
                width={300}
                height={45}
                priority
                className="h-6 sm:h-7 md:h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
        );
    }

    return (
        <Image
            src={theme === "dark" ? "/dwl_logo_white_transparent_3600w.png" : "/dwl_logo_black_transparent_3600w.png"}
            alt="theDesigning Worlds Lab"
            width={300}
            height={45}
            priority
            className="h-7 md:h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
        />
    );
}

