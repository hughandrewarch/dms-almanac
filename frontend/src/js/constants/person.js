//TODO move to db
export const PERSON = {
    RACE: {
        DRAGONBORN: {
            key: "DRAGONBORN",
            name: "Dragonborn"
        },
        DWARF: {
            key: "DWARF",
            name: "Dwarf",
            SUBRACE: [
                { key: "HILL", name: "Hill" },
                { key: "MOUNTAIN", name: "Mountain"}
            ]
        },
        ELF: {
            key: "ELF",
            name: "Elf",
            SUBRACE: [
                { key: "DROW", name: "Drow" },
                { key: "HIGH", name: "High" },
                { key: "WOOD", name: "Wood" }
            ]
        },
        GNOME: {
            key: "GNOME",
            name: "Gnome",
            SUBRACE: [
                { key: "FOREST", name: "Forest" },
                { key: "ROCK", name: "Rock" }
            ]
        },
        HALF_ELF: {
            key: "HALF_ELF",
            name: "Half-ELF"
        },
        HALF_ORC: {
            key: "HALF_ORC",
            name: "Half-Orc"
        },
        HALFLING: {
            key: "HALFLING",
            name: "Halfling",
            SUBRACE: [
                { key: "LIGHTFOOT", name: "Lightfoot" },
                { key: "STOUT", name: "Stout" }
            ]
        },
        HUMAN: {
            key: "HUMAN",
            name: "Human"
        },
        TIEFLING: {
            key: "TIEFLING",
            name: "Tiefling"
        }
    }
}
