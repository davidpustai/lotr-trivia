import type { MapLocation } from "./types";

export const firstAgeLocations: MapLocation[] = [
    {
        id: "angband",
        name: "Angband",
        era: "first-age",
        category: "fortress",
        coords: [850, 500],
        description:
            "The great fortress of Morgoth in the Iron Mountains, north of Beleriand. Beneath it lay vast underground halls where Morgoth bred his armies of orcs, trolls, dragons, and Balrogs. The Silmarils were kept in his iron crown here.",
        relatedCharacters: ["Morgoth", "Sauron", "Gothmog"],
        relatedEvents: ["Siege of Angband", "Nirnaeth Arnoediad"],
    },
    {
        id: "gondolin",
        name: "Gondolin",
        era: "first-age",
        category: "city",
        coords: [650, 550],
        description:
            "The Hidden City of King Turgon, built in a secret valley encircled by the Echoriath mountains. It was the last great Elven stronghold to fall, betrayed by Maeglin. Glorfindel fell here fighting a Balrog to protect fleeing refugees.",
        relatedCharacters: ["Turgon", "Idril", "Tuor", "Maeglin", "Glorfindel"],
        relatedEvents: ["Fall of Gondolin"],
    },
    {
        id: "nargothrond",
        name: "Nargothrond",
        era: "first-age",
        category: "fortress",
        coords: [450, 400],
        description:
            "Underground fortress-city built by Finrod Felagund along the River Narog, inspired by Menegroth. Finrod left his throne to aid Beren, and was killed by Sauron's werewolf. Later ruled by Orodreth, it was destroyed by Glaurung the dragon.",
        relatedCharacters: ["Finrod Felagund", "Turin Turambar", "Glaurung"],
    },
    {
        id: "menegroth",
        name: "Menegroth (Thousand Caves)",
        era: "first-age",
        category: "city",
        coords: [500, 600],
        description:
            "The halls of King Thingol and Melian in Doriath, carved by Dwarves of Belegost. Protected by the Girdle of Melian. It was sacked twice: first by Dwarves who coveted the Nauglamir with the Silmaril, then by the sons of Feanor.",
        relatedCharacters: ["Thingol", "Melian", "Luthien", "Beren"],
    },
    {
        id: "thangorodrim",
        name: "Thangorodrim",
        era: "first-age",
        category: "mountain",
        coords: [880, 500],
        description:
            "Three volcanic peaks raised by Morgoth above the gates of Angband. Made from the slag and refuse of his underground delving. Fingolfin rode alone to their gates to challenge Morgoth to single combat. Destroyed in the War of Wrath.",
        relatedCharacters: ["Morgoth", "Fingolfin", "Maedhros"],
    },
    {
        id: "hithlum",
        name: "Hithlum",
        era: "first-age",
        category: "realm",
        coords: [700, 350],
        description:
            "The realm of Fingolfin and later Fingon in northwest Beleriand, bordered by the Ered Wethrin. 'Land of Mist' in Sindarin. After the Nirnaeth Arnoediad, it was given to Easterlings loyal to Morgoth.",
        relatedCharacters: ["Fingolfin", "Fingon", "Hurin", "Turin"],
    },
    {
        id: "sirion-havens",
        name: "Havens of Sirion",
        era: "first-age",
        category: "city",
        coords: [250, 500],
        description:
            "Refugee settlement at the mouths of the River Sirion where survivors of Gondolin, Doriath, and other fallen realms gathered. Earendil and Elwing lived here. It was attacked by the remaining sons of Feanor seeking the Silmaril.",
        relatedCharacters: ["Earendil", "Elwing", "Maedhros", "Maglor"],
    },
    {
        id: "doriath",
        name: "Doriath",
        era: "first-age",
        category: "realm",
        coords: [500, 580],
        description:
            "The forested realm of King Thingol and Melian the Maia in central Beleriand. Protected by the Girdle of Melian, an enchantment that prevented any from entering without permission. Home of Luthien Tinuviel, the most beautiful of all the Children of Iluvatar.",
        relatedCharacters: ["Thingol", "Melian", "Luthien"],
    },
    {
        id: "tol-sirion",
        name: "Tol Sirion / Tol-in-Gaurhoth",
        era: "first-age",
        category: "fortress",
        coords: [600, 450],
        description:
            "Island fortress on the River Sirion, originally held by Finrod Felagund. Captured by Sauron who renamed it Tol-in-Gaurhoth (Isle of Werewolves). Luthien and Huan defeated Sauron here to rescue Beren. Sauron fled in the form of a vampire.",
        relatedCharacters: [
            "Finrod Felagund",
            "Sauron",
            "Luthien",
            "Huan",
            "Beren",
        ],
    },
    {
        id: "battle-unnumbered-tears",
        name: "Anfauglith (Nirnaeth Arnoediad)",
        era: "first-age",
        category: "battle",
        coords: [750, 500],
        description:
            "The desert plain north of Beleriand where the Battle of Unnumbered Tears was fought — the fifth and most devastating battle of the Wars of Beleriand. The Elven-Human alliance was destroyed through treachery. Hurin was captured here after his legendary last stand.",
        relatedCharacters: ["Fingon", "Maedhros", "Hurin", "Turgon"],
    },
];

export const thirdAgeLocations: MapLocation[] = [
    {
        id: "minas-tirith",
        name: "Minas Tirith",
        era: "third-age",
        category: "city",
        coords: [400, 850],
        description:
            "The White City, capital of Gondor, built on seven levels carved into Mount Mindolluin. Originally named Minas Anor (Tower of the Sun). The White Tree in the Court of the Fountain is a descendant of Telperion. Defended in the Battle of Pelennor Fields.",
        relatedCharacters: [
            "Denethor",
            "Gandalf",
            "Aragorn",
            "Boromir",
            "Faramir",
        ],
        relatedEvents: ["Battle of Pelennor Fields", "Coronation of Aragorn"],
    },
    {
        id: "minas-morgul",
        name: "Minas Morgul",
        era: "third-age",
        category: "fortress",
        coords: [400, 900],
        description:
            "Originally Minas Ithil (Tower of the Moon), twin city to Minas Anor. Captured by the Nazgul in TA 2002 and renamed Minas Morgul. The Witch-king made it his base. Frodo and Sam passed it on the way to Cirith Ungol.",
        relatedCharacters: ["Witch-king", "Frodo", "Sam"],
    },
    {
        id: "rivendell",
        name: "Rivendell (Imladris)",
        era: "third-age",
        category: "city",
        coords: [650, 600],
        description:
            "The Last Homely House East of the Sea, founded by Elrond in SA 1697 during the war against Sauron. The Council of Elrond met here to decide the fate of the One Ring. Elrond bore Vilya, the Ring of Air, mightiest of the Three Elven Rings.",
        relatedCharacters: ["Elrond", "Arwen", "Aragorn", "Bilbo", "Frodo"],
        relatedEvents: ["Council of Elrond"],
    },
    {
        id: "mordor",
        name: "Barad-dur",
        era: "third-age",
        category: "fortress",
        coords: [380, 950],
        description:
            "The Dark Tower of Sauron in Mordor, built with the power of the One Ring during the Second Age. It took the Last Alliance seven years to besiege it. Rebuilt after Sauron's return. Collapsed when the One Ring was destroyed in Mount Doom.",
        relatedCharacters: ["Sauron"],
        relatedEvents: ["War of the Last Alliance", "Destruction of the Ring"],
    },
    {
        id: "mount-doom",
        name: "Mount Doom (Orodruin)",
        era: "third-age",
        category: "mountain",
        coords: [370, 930],
        description:
            "The volcanic mountain in Mordor where Sauron forged the One Ring. The only place where the Ring could be destroyed. Frodo carried the Ring here but was unable to willingly destroy it — Gollum bit off his finger and fell into the fire with the Ring.",
        relatedCharacters: ["Sauron", "Frodo", "Sam", "Gollum"],
        relatedEvents: ["Forging of the One Ring", "Destruction of the Ring"],
    },
    {
        id: "isengard",
        name: "Isengard (Orthanc)",
        era: "third-age",
        category: "fortress",
        coords: [500, 550],
        description:
            "Fortress at the southern end of the Misty Mountains containing the tower of Orthanc, an unbreakable tower built by Numenoreans. Saruman made it his base and bred the Uruk-hai here. Destroyed by the Ents led by Treebeard in the Battle of Isengard.",
        relatedCharacters: ["Saruman", "Treebeard", "Merry", "Pippin"],
        relatedEvents: ["Battle of Isengard"],
    },
    {
        id: "moria",
        name: "Moria (Khazad-dum)",
        era: "third-age",
        category: "ruins",
        coords: [550, 650],
        description:
            "Greatest mansion of the Dwarves, delved by Durin the Deathless beneath the Misty Mountains. The Dwarves mined too deep and awakened a Balrog (Durin's Bane) in TA 1980. Balin attempted to recolonize it but his colony was destroyed. The Fellowship passed through here; Gandalf fell fighting the Balrog.",
        relatedCharacters: ["Durin", "Balin", "Gandalf", "Balrog"],
        relatedEvents: ["Battle of Azanulbizar", "Gandalf vs Balrog"],
    },
    {
        id: "the-shire",
        name: "The Shire",
        era: "third-age",
        category: "realm",
        coords: [700, 350],
        description:
            "Homeland of the Hobbits in Eriador, granted to them by King Argeleb II of Arnor in TA 1601. Four farthings: North, South, East, and West. Bag End in Hobbiton is the home of Bilbo and Frodo. Protected unknowingly by the Rangers of the North (Dunedain).",
        relatedCharacters: ["Bilbo", "Frodo", "Sam", "Merry", "Pippin"],
    },
    {
        id: "lothlorien",
        name: "Lothlorien",
        era: "third-age",
        category: "forest",
        coords: [500, 700],
        description:
            "The Golden Wood, realm of Galadriel and Celeborn. The mallorn trees with golden leaves were unique to this forest (grown from seeds given by Gil-galad). Galadriel bore Nenya, the Ring of Water. The Fellowship rested here after Gandalf's fall in Moria.",
        relatedCharacters: ["Galadriel", "Celeborn"],
    },
    {
        id: "helms-deep",
        name: "Helm's Deep",
        era: "third-age",
        category: "fortress",
        coords: [470, 520],
        description:
            "Fortress in the White Mountains of Rohan, named after Helm Hammerhand. The Hornburg fortress guarded the entrance. Site of one of the major battles of the War of the Ring where Rohan, aided by Gandalf and the Huorns, defeated Saruman's army of 10,000 Uruk-hai.",
        relatedCharacters: [
            "Theoden",
            "Aragorn",
            "Legolas",
            "Gimli",
            "Gandalf",
        ],
        relatedEvents: ["Battle of Helm's Deep"],
    },
    {
        id: "edoras",
        name: "Edoras",
        era: "third-age",
        category: "city",
        coords: [460, 550],
        description:
            "Capital of Rohan, built on a hill at the feet of the White Mountains. Meduseld, the Golden Hall of the Kings of Rohan, sits at its summit. When Gandalf arrived to free Theoden from Saruman's influence, the city had fallen into despair under Grima Wormtongue's counsel.",
        relatedCharacters: ["Theoden", "Eowyn", "Eomer", "Grima Wormtongue"],
    },
    {
        id: "erebor",
        name: "Erebor (The Lonely Mountain)",
        era: "third-age",
        category: "mountain",
        coords: [750, 900],
        description:
            "Dwarf kingdom founded by Thrain I after the Dwarves were driven from Moria. Smaug the dragon drove the Dwarves out in TA 2770. Reclaimed by Thorin Oakenshield's Company with Bilbo's help in TA 2941. The Arkenstone, a great white gem, was its most prized treasure.",
        relatedCharacters: ["Thorin", "Bilbo", "Smaug", "Bard"],
        relatedEvents: ["Quest of Erebor", "Battle of Five Armies"],
    },
    {
        id: "fangorn",
        name: "Fangorn Forest",
        era: "third-age",
        category: "forest",
        coords: [530, 600],
        description:
            "One of the oldest forests in Middle-earth, home to the Ents led by Treebeard (Fangorn), the oldest living creature. Merry and Pippin fled here after escaping the Uruk-hai and convinced the Ents to march on Isengard. Gandalf the White was found here by Aragorn, Legolas, and Gimli.",
        relatedCharacters: ["Treebeard", "Merry", "Pippin", "Gandalf"],
    },
    {
        id: "pelennor-fields",
        name: "Pelennor Fields",
        era: "third-age",
        category: "battle",
        coords: [395, 840],
        description:
            "The townlands before Minas Tirith, site of the greatest battle of the War of the Ring. The Witch-king was slain by Eowyn and Merry (fulfilling the prophecy: 'not by the hand of man'). Theoden King fell here. Aragorn arrived with the Army of the Dead on the Corsair ships.",
        relatedCharacters: [
            "Theoden",
            "Eowyn",
            "Merry",
            "Aragorn",
            "Witch-king",
        ],
        relatedEvents: ["Battle of Pelennor Fields"],
    },
    {
        id: "grey-havens",
        name: "Grey Havens (Mithlond)",
        era: "third-age",
        category: "city",
        coords: [650, 200],
        description:
            "Elven port on the Gulf of Lhun, ruled by Cirdan the Shipwright (oldest Elf in Middle-earth). From here the Elves sailed West to Valinor. Gandalf, Frodo, Bilbo, Galadriel, and Elrond departed from here at the end of the Third Age. Cirdan gave Narya (Ring of Fire) to Gandalf upon his arrival.",
        relatedCharacters: [
            "Cirdan",
            "Gandalf",
            "Frodo",
            "Bilbo",
            "Galadriel",
            "Elrond",
        ],
        relatedEvents: ["Departure to Valinor"],
    },
];

export const allLocations: MapLocation[] = [
    ...firstAgeLocations,
    ...thirdAgeLocations,
];
