import type { TimelineEvent } from "./types";

export const beforeFirstAgeEvents: TimelineEvent[] = [
    {
        id: "bfa-ainulindale",
        age: "before-time",
        title: "The Ainulindale",
        summary:
            "Iluvatar created the Ainur from his thought and taught them music, leading to the Great Music that envisioned the world.",
        details:
            "Iluvatar, the supreme creator, brought the Ainur into being before all else. He proposed to them great musical themes, and they sang before him in the Ainulindale, the Music of the Ainur. This Great Music contained the blueprint of all creation, known as Ea, the World that Is. The Ainur were the first beings to exist, also called the Holy Ones.",
        tags: ["creation", "divine"],
        significance: 3,
        relatedCharacters: ["Iluvatar"],
        relatedLocations: ["Timeless Halls"],
    },
    {
        id: "bfa-melkor-discord",
        age: "before-time",
        title: "Melkor's Discord",
        summary:
            "Melkor, the mightiest of the Ainur, introduced discord into the Great Music, seeking to dominate the theme with his own designs.",
        details:
            "Melkor had gone often alone into the Void seeking the Imperishable Flame to create life of his own. His pride and desire for dominion led him to weave themes of his own imagining into the Music, clashing with Iluvatar's design. Iluvatar responded with three themes; each time Melkor's discord was woven into the greater harmony. This discord would become the source of all evil in Middle-earth.",
        tags: ["corruption", "divine"],
        significance: 3,
        relatedCharacters: ["Melkor", "Iluvatar"],
        relatedLocations: ["Timeless Halls"],
    },
    {
        id: "bfa-creation-arda",
        age: "before-time",
        title: "Creation of Arda",
        summary:
            "Iluvatar spoke 'Ea!' and the world came into being, giving physical form to the vision of the Great Music.",
        details:
            "After the Ainulindale, Iluvatar showed the Ainur a vision of the world their music had designed. He then spoke the word 'Ea!' meaning 'Let it Be!', and Arda, the world, was created within the vast expanse of the Void. Arda existed within Ea, the universe, and would be shaped over ages by the Valar. The word Ea became the name for the entire created universe.",
        tags: ["creation", "divine"],
        significance: 3,
        relatedCharacters: ["Iluvatar"],
        relatedLocations: ["Arda", "Ea"],
    },
    {
        id: "bfa-valar-enter-arda",
        age: "before-time",
        title: "The Valar Enter Arda",
        summary:
            "Many Ainur descended into Arda to shape it, becoming known as the Valar and Maiar.",
        details:
            "Of the Ainur, fourteen of the greatest chose to enter Arda to prepare it for the coming of Iluvatar's Children (Elves and Men). These became the Valar, the Powers of the World. Lesser Ainur who accompanied them were called the Maiar. The fourteen Valar were led by Manwe, brother in thought to Melkor. Melkor also entered Arda, but sought to claim it for himself rather than serve Iluvatar's vision.",
        tags: ["creation", "divine"],
        significance: 3,
        relatedCharacters: [
            "Manwe",
            "Melkor",
            "Varda",
            "Ulmo",
            "Aule",
            "Yavanna",
        ],
        relatedLocations: ["Arda"],
    },
    {
        id: "bfa-spring-arda",
        age: "years-of-lamps",
        title: "The Spring of Arda",
        summary:
            "The Valar shaped the lands and seas of Arda, and light was brought forth with the raising of the Two Lamps.",
        details:
            "During the earliest shaping of Arda, the Valar labored to make the world habitable. Aule, the smith of the Valar, crafted the substances of the earth. Yavanna brought forth the first growing things. The Valar raised two great pillars and set lamps upon them to illuminate the world: Illuin in the north and Ormal in the south. Their light mingled at the isle of Almaren, where the Valar dwelt.",
        tags: ["creation", "divine"],
        significance: 2,
        relatedCharacters: ["Aule", "Yavanna"],
        relatedLocations: ["Arda", "Almaren"],
    },
    {
        id: "bfa-two-lamps",
        age: "years-of-lamps",
        title: "The Two Lamps: Illuin and Ormal",
        summary:
            "The Valar raised two mighty lamps upon great pillars to illuminate Arda, with Illuin in the north and Ormal in the south.",
        details:
            "Aule forged the two great lamps from the substance of Arda. Illuin stood upon a pillar in the north, and Ormal upon a pillar in the south. Varda filled them with light. Where their light mingled in the middle of the world, the Valar established their first dwelling on the green isle of Almaren, in the midst of a great lake. This was the most blessed time in the Spring of Arda.",
        tags: ["creation", "divine", "artifact"],
        significance: 2,
        relatedCharacters: ["Aule", "Varda"],
        relatedLocations: ["Almaren", "Illuin", "Ormal"],
    },
    {
        id: "bfa-almaren",
        age: "years-of-lamps",
        title: "Dwelling at Almaren",
        summary:
            "The Valar established their first home on the isle of Almaren, in the middle of a great lake where the light of the Two Lamps mingled.",
        details:
            "Almaren was a green island in the center of a vast lake in Middle-earth. The Valar rested there after their labors and celebrated a great feast. It was during this time that Melkor secretly gathered evil spirits to his fortress of Utumno in the far north, building his strength unseen. Tulkas, the last Valar to enter Arda, had driven Melkor away temporarily, but he returned in secret.",
        tags: ["divine", "kingdom"],
        significance: 1,
        relatedCharacters: ["Tulkas", "Melkor"],
        relatedLocations: ["Almaren", "Utumno"],
    },
    {
        id: "bfa-destruction-lamps",
        age: "years-of-lamps",
        title: "Destruction of the Two Lamps",
        summary:
            "Melkor attacked and overthrew the Two Lamps, destroying Almaren and reshaping the world in catastrophe.",
        details:
            "Melkor assailed the pillars of the Two Lamps, toppling both Illuin and Ormal. The fall of the Lamps broke the symmetry of Arda and caused devastating destruction; great seas poured forth and the lands were reshaped. The isle of Almaren was utterly destroyed. The Valar were unable to prevent the disaster and retreated westward to the continent of Aman, where they established Valinor. Melkor retreated to Utumno in the north.",
        tags: ["war", "tragedy", "divine"],
        significance: 3,
        relatedCharacters: ["Melkor"],
        relatedLocations: ["Almaren", "Valinor", "Aman", "Utumno"],
    },
    {
        id: "bfa-founding-valinor",
        age: "years-of-trees",
        title: "Founding of Valinor",
        summary:
            "The Valar established the Blessed Realm of Valinor in Aman, raising the Pelori Mountains as a defensive wall.",
        details:
            "After the destruction of the Two Lamps, the Valar removed to Aman, the westernmost continent, and there founded Valinor. They raised the Pelori, the tallest mountains in the world, along the eastern coast of Aman as a fence against Melkor. The city of Valmar was built with golden gates, and Manwe and Varda dwelt atop Taniquetil, the highest peak of the Pelori and the tallest mountain in Arda.",
        tags: ["kingdom", "divine"],
        significance: 2,
        relatedCharacters: ["Manwe", "Varda"],
        relatedLocations: ["Valinor", "Aman", "Pelori", "Taniquetil", "Valmar"],
    },
    {
        id: "bfa-two-trees",
        age: "years-of-trees",
        year: "YT 1",
        title: "The Two Trees of Valinor",
        summary:
            "Yavanna sang into being the Two Trees, Telperion and Laurelin, which lit Valinor with silver and golden light.",
        details:
            "Yavanna, the Vala of growing things, sang before the Valar on the green mound of Ezellohar, and Nienna watered the mound with her tears. Two great Trees sprang forth: Telperion the Silver, with leaves of dark green and silver beneath, and Laurelin the Gold, with leaves of pale green edged with gold. Each Tree waxed and waned in a seven-hour cycle, together providing continuous light. Telperion was the elder tree and flowered first.",
        tags: ["creation", "divine", "artifact"],
        significance: 3,
        relatedCharacters: ["Yavanna", "Nienna"],
        relatedLocations: ["Valinor", "Ezellohar"],
    },
    {
        id: "bfa-awakening-elves",
        age: "years-of-trees",
        year: "YT 1050",
        title: "Awakening of the Elves at Cuivienen",
        summary:
            "The Firstborn Children of Iluvatar, the Elves, awoke beside the waters of Cuivienen under the stars.",
        details:
            "The Elves, called the Firstborn or Quendi ('those who speak with voices'), awoke on the shores of the inland sea of Cuivienen in the far east of Middle-earth. They awoke under starlight, for the Two Trees lit only Valinor. The first thing they saw was the stars of Varda, and thus they revered her above all other Valar, calling her Elbereth. Orome the Hunter, a Vala, discovered them during his wanderings and named them Eldar, 'People of the Stars'.",
        tags: ["creation", "divine"],
        significance: 3,
        relatedCharacters: ["Orome", "Varda"],
        relatedLocations: ["Cuivienen", "Middle-earth"],
    },
    {
        id: "bfa-great-journey",
        age: "years-of-trees",
        year: "YT 1105",
        title: "The Great Journey of the Elves",
        summary:
            "The Valar summoned the Elves to Valinor, and many undertook the Great Journey westward, though some refused and remained in Middle-earth.",
        details:
            "After the War of the Valar against Melkor and the destruction of Utumno, Orome invited the Elves to dwell in Valinor. Three ambassadors were brought to see the light of the Trees: Ingwe of the Vanyar, Finwe of the Noldor, and Elwe of the Teleri. They returned and urged their peoples to make the journey west. Those who accepted were called the Eldar; those who refused were the Avari, the 'Unwilling'. The journey took many years across the breadth of Middle-earth.",
        tags: ["quest", "divine"],
        significance: 3,
        relatedCharacters: ["Orome", "Ingwe", "Finwe", "Elwe"],
        relatedLocations: ["Cuivienen", "Valinor", "Middle-earth"],
    },
    {
        id: "bfa-sundering-elves",
        age: "years-of-trees",
        year: "YT 1150",
        title: "The Sundering of the Elves",
        summary:
            "The Elves divided into many groups during the Great Journey: the Vanyar, Noldor, and Teleri who went west, and various groups who stayed behind.",
        details:
            "The Elves sundered into many branches. The Vanyar, led by Ingwe, were the smallest group and most devoted to the Valar. The Noldor, led by Finwe, were the most skilled in craft and lore. The Teleri, the largest group led by Elwe and Olwe, were lovers of the sea. Some Teleri lingered and became the Sindar (Grey Elves) of Beleriand under Elwe (later called Thingol), who was enchanted by the Maia Melian. The Nandor turned south along the Anduin. The Avari never left the east at all.",
        tags: ["kingdom"],
        significance: 2,
        relatedCharacters: ["Ingwe", "Finwe", "Elwe", "Olwe", "Melian"],
        relatedLocations: ["Valinor", "Beleriand", "Doriath"],
    },
    {
        id: "bfa-feanor-silmarils",
        age: "years-of-trees",
        year: "YT 1450",
        title: "Feanor Creates the Silmarils",
        summary:
            "Feanor, greatest of the Noldor, crafted the three Silmarils, jewels containing the light of the Two Trees.",
        details:
            "Feanor, son of Finwe and Miriel, was the most gifted of all the Noldor in skill and craft. He captured the blended light of Telperion and Laurelin within three great jewels called the Silmarils. They were hallowed by Varda so that no mortal or evil hand could touch them without being burned. Feanor also invented the Tengwar script and the Palantiri (seeing stones). The Silmarils were the most beautiful objects ever created by the Children of Iluvatar.",
        tags: ["artifact", "creation"],
        significance: 3,
        relatedCharacters: ["Feanor", "Varda"],
        relatedLocations: ["Valinor", "Tirion"],
    },
    {
        id: "bfa-morgoth-unchained",
        age: "years-of-trees",
        year: "YT 1490",
        title: "Melkor Released and Sows Discord",
        summary:
            "Melkor was released from imprisonment in Mandos after three ages, and began secretly sowing discord among the Noldor.",
        details:
            "After his defeat in the War of the Valar, Melkor was imprisoned in the Halls of Mandos for three ages. He feigned repentance and was released by the judgment of Manwe. Melkor then spread lies among the Noldor, whispering that the Valar kept them captive and that Men would usurp their lands. He stoked the pride of Feanor and the rivalry between the sons of Finwe: Feanor, Fingolfin, and Finarfin. Feanor was eventually banished from Tirion for threatening Fingolfin.",
        tags: ["corruption", "tragedy"],
        significance: 2,
        relatedCharacters: [
            "Melkor",
            "Feanor",
            "Fingolfin",
            "Finarfin",
            "Manwe",
        ],
        relatedLocations: ["Valinor", "Tirion", "Mandos"],
    },
    {
        id: "bfa-darkening-valinor",
        age: "years-of-trees",
        year: "YT 1495",
        title: "The Darkening of Valinor",
        summary:
            "Morgoth and the great spider Ungoliant destroyed the Two Trees of Valinor, plunging the Blessed Realm into darkness.",
        details:
            "Melkor, now called Morgoth ('Dark Enemy') by Feanor, allied with Ungoliant, a terrible spirit in spider form who dwelt in Avathar south of Aman. Together they struck at the Two Trees: Morgoth pierced them with a great spear, and Ungoliant drank their sap and light until both Trees were dead. Morgoth then stormed Formenos, slew Finwe (King of the Noldor and Feanor's father), and stole the three Silmarils. The light of the Trees was lost forever, surviving only in the Silmarils.",
        tags: ["tragedy", "corruption", "war"],
        significance: 3,
        relatedCharacters: ["Morgoth", "Ungoliant", "Finwe", "Feanor"],
        relatedLocations: ["Valinor", "Formenos", "Avathar"],
    },
    {
        id: "bfa-oath-feanor",
        age: "years-of-trees",
        year: "YT 1495",
        title: "The Oath of Feanor",
        summary:
            "Feanor and his seven sons swore a terrible and unbreakable oath to recover the Silmarils from anyone who withheld them.",
        details:
            "Enraged by the murder of his father and the theft of his Silmarils, Feanor spoke to the Noldor in Tirion and urged them to leave Valinor and pursue Morgoth to Middle-earth. He and his seven sons -- Maedhros, Maglor, Celegorm, Caranthir, Curufin, Amrod, and Amras -- swore an oath by Iluvatar and the Everlasting Darkness to pursue with hatred any who kept the Silmarils from them. This oath would drive them to terrible deeds including three Kinslayings and ultimately to their ruin.",
        tags: ["tragedy", "artifact"],
        significance: 3,
        relatedCharacters: [
            "Feanor",
            "Maedhros",
            "Maglor",
            "Celegorm",
            "Caranthir",
            "Curufin",
            "Amrod",
            "Amras",
        ],
        relatedLocations: ["Tirion", "Valinor"],
    },
    {
        id: "bfa-kinslaying-alqualonde",
        age: "years-of-trees",
        year: "YT 1495",
        title: "The First Kinslaying at Alqualonde",
        summary:
            "The Noldor under Feanor attacked the Teleri at the haven of Alqualonde to seize their swan-ships, committing the first slaying of Elf by Elf.",
        details:
            "Feanor needed ships to cross the Great Sea to Middle-earth. The Teleri, led by Olwe, refused to give or lend their swan-ships. Feanor's host attacked the Teleri in their harbor of Alqualonde (the Swan Haven), and many Teleri were slain. The host of Fingolfin arrived during the fighting and, seeing Elves under attack, joined the battle not knowing who had started it. This was the First Kinslaying, the most grievous of the crimes of the Noldor, and the white ships were taken by force.",
        tags: ["war", "tragedy"],
        significance: 3,
        relatedCharacters: ["Feanor", "Olwe", "Fingolfin"],
        relatedLocations: ["Alqualonde", "Valinor"],
    },
    {
        id: "bfa-doom-mandos",
        age: "years-of-trees",
        year: "YT 1495",
        title: "The Doom of Mandos (Prophecy of the North)",
        summary:
            "The Vala Mandos pronounced a doom upon the Noldor, warning that their oath would lead to sorrow, betrayal, and ultimate failure.",
        details:
            "At the border of Aman, near the Helcaraxe, a dark figure (either Mandos himself or his herald) appeared and pronounced the Doom of the Noldor, also called the Prophecy of the North. The Noldor were cursed: everything they built would fail, they would be slain or tormented, and their oath would drive them to betray one another. Upon hearing this, Finarfin repented and returned to Valinor with some followers. But Feanor and Fingolfin pressed on, leading the majority of the Noldor into exile.",
        tags: ["divine", "tragedy"],
        significance: 3,
        relatedCharacters: ["Mandos", "Feanor", "Fingolfin", "Finarfin"],
        relatedLocations: ["Araman", "Helcaraxe"],
    },
    {
        id: "bfa-flight-noldor",
        age: "years-of-trees",
        year: "YT 1496",
        title: "The Flight of the Noldor and Crossing of the Helcaraxe",
        summary:
            "The Noldor departed Valinor; Feanor's host crossed by ship and burned them, while Fingolfin's host endured the deadly Grinding Ice.",
        details:
            "Feanor led the first host of Noldor across the sea on the stolen Teleri ships, but there were not enough ships for all. Upon reaching Middle-earth at Losgar, Feanor burned the ships, betraying Fingolfin's host. Fingolfin, refusing to turn back, led his people across the Helcaraxe (Grinding Ice), a treacherous frozen strait between Aman and Middle-earth. Many Noldor perished in the crossing, including Fingolfin's wife Elenwe. The burning ships were seen from afar, and the betrayal forever poisoned relations between the houses.",
        tags: ["tragedy", "quest"],
        significance: 3,
        relatedCharacters: ["Feanor", "Fingolfin"],
        relatedLocations: ["Losgar", "Helcaraxe", "Middle-earth"],
    },
    {
        id: "bfa-sun-moon",
        age: "years-of-trees",
        year: "YT 1500",
        title: "Creation of the Sun and Moon",
        summary:
            "The Valar created the Sun and Moon from the last fruit of Laurelin and the last flower of Telperion.",
        details:
            "After the destruction of the Two Trees, Yavanna and Nienna could not revive them, but coaxed from them one last fruit and one last flower. From the golden last fruit of Laurelin, the Valar made Anar, the Sun, guided across the sky by the Maia Arien. From the silver last flower of Telperion, they made Isil, the Moon, guided by the Maia Tilion. The Moon rose first, and its rising coincided with the Awakening of Men in the east. The Sun was the more powerful vessel, and its first rising marked the end of the Years of the Trees.",
        tags: ["creation", "divine"],
        significance: 3,
        relatedCharacters: ["Yavanna", "Nienna", "Arien", "Tilion"],
        relatedLocations: ["Valinor"],
    },
];
