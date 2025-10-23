export type WorldCard = {
    id: string;
    title: string;
    tagline: string;
    url: string;
};

export const CARDS: WorldCard[] = [
    { id: "bb", title: "Benjamin Bourne", tagline: "Design director. Narrative systems.", url: "/worlds/benjamin-bourne" },
    { id: "owa", title: "theOpen World Archives", tagline: "Living memory + spatial media.", url: "/worlds/open-world-archives" },
    { id: "fieldtrips", title: "Field Trips", tagline: "Embodied learning in the wild.", url: "/worlds/field-trips" },
    { id: "lisa", title: "LISA", tagline: "Lightweight Intelligence for Spatial Art.", url: "/worlds/lisa" },
    { id: "research", title: "DW-L Research", tagline: "Prototyping futures, responsibly.", url: "/worlds/research" },
    { id: "maverys", title: "Maverys", tagline: "Maverick guild for makers.", url: "/worlds/maverys" },
];

