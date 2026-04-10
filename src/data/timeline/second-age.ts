import type { TimelineEvent } from "./types";

export const secondAgeEvents: TimelineEvent[] = [
    {
        id: "sa-founding-lindon",
        age: "second-age",
        year: "SA 1",
        title: "Founding of Lindon and Gil-galad's Realm",
        summary:
            "Gil-galad, the last High King of the Noldor, established his realm in Lindon, the surviving remnant of Beleriand.",
        details:
            "After the War of Wrath and the sinking of Beleriand, Gil-galad became High King of the Noldor in Middle-earth. He ruled from Lindon, the land west of the Blue Mountains (Ered Luin) that survived the cataclysm. The Grey Havens (Mithlond) were built by Cirdan the Shipwright on the Gulf of Lhun. Lindon became the chief Elven realm in Middle-earth for the early Second Age and the seat of Elven power. Gil-galad's rule would last until the end of the Age.",
        tags: ["kingdom"],
        significance: 2,
        relatedCharacters: ["Gil-galad", "Cirdan"],
        relatedLocations: ["Lindon", "Mithlond", "Ered Luin"],
    },
    {
        id: "sa-founding-numenor",
        age: "second-age",
        year: "SA 32",
        title: "Founding of Numenor",
        summary:
            "The Valar raised the island of Numenor from the sea as a gift to the Edain, the Men who had fought against Morgoth.",
        details:
            "In reward for the suffering and valor of the Edain in the wars against Morgoth, the Valar raised a great star-shaped island in the sea between Middle-earth and Aman called Numenor (Westernesse in the Common Speech, or Elenna, 'Starwards', for the Edain followed the Star of Earendil to find it). Elros Half-Elven, who chose mortality, became the first King with the name Tar-Minyatur. The Numenoreans were granted long life (thrice that of other Men), great stature, and wisdom. The capital was Armenelos, and the sacred mountain was the Meneltarma.",
        tags: ["kingdom", "divine"],
        significance: 3,
        relatedCharacters: ["Elros"],
        relatedLocations: ["Numenor", "Armenelos", "Meneltarma"],
    },
    {
        id: "sa-founding-eregion",
        age: "second-age",
        year: "SA 750",
        title: "Founding of Eregion",
        summary:
            "Noldorin Elves founded the realm of Eregion near the gates of Khazad-dum, establishing friendship with the Dwarves of Moria.",
        details:
            "The realm of Eregion (Hollin) was founded by Noldor who desired to be near the Dwarves of Khazad-dum (Moria) for the purpose of craft and trade. The capital was Ost-in-Edhil. Celebrimbor, grandson of Feanor and last of Feanor's line, became the lord of the Gwaith-i-Mirdain (People of the Jewel-smiths). The proximity to Khazad-dum, the greatest of all Dwarven mansions, was crucial, for the Elven smiths prized mithril above all metals, and it was found nowhere else in Middle-earth.",
        tags: ["kingdom", "alliance"],
        significance: 2,
        relatedCharacters: ["Celebrimbor"],
        relatedLocations: ["Eregion", "Ost-in-Edhil", "Khazad-dum"],
    },
    {
        id: "sa-sauron-annatar",
        age: "second-age",
        year: "SA 1200",
        title: "Sauron Appears as Annatar",
        summary:
            "Sauron disguised himself as Annatar, 'Lord of Gifts', and approached the Elven-smiths of Eregion with offers of knowledge.",
        details:
            "Sauron, who had been a Maia of Aule before his corruption by Morgoth, took a fair form and called himself Annatar, the Lord of Gifts. He approached Gil-galad and Elrond, who distrusted him, but the smiths of Eregion under Celebrimbor welcomed his teachings. Sauron shared knowledge of ring-making and other crafts with the Gwaith-i-Mirdain. His true purpose was to dominate the Elves and ultimately all free peoples of Middle-earth. He spent nearly 300 years among the Elven-smiths, guiding their work toward his own ends.",
        tags: ["corruption", "ring"],
        significance: 3,
        relatedCharacters: ["Sauron", "Celebrimbor", "Gil-galad", "Elrond"],
        relatedLocations: ["Eregion", "Ost-in-Edhil"],
    },
    {
        id: "sa-rings-forged",
        age: "second-age",
        year: "SA 1500",
        title: "Forging of the Rings of Power",
        summary:
            "The Elven-smiths of Eregion, taught by Sauron, forged the Rings of Power, including the Sixteen and later the Three.",
        details:
            "Under Sauron's tutelage, Celebrimbor and the Gwaith-i-Mirdain forged the Rings of Power between SA 1500 and 1590. The lesser rings were practice works. Seven were given to Dwarf-lords and Nine to great Men. Celebrimbor alone, without Sauron's direct hand, forged the Three Elven Rings: Narya (Fire, set with a ruby), Nenya (Water, made of mithril with a white stone), and Vilya (Air, made of gold with a sapphire, the mightiest of the Three). Because the Three were made without Sauron's touch, they were uncorrupted, though still subject to the One.",
        tags: ["artifact", "ring"],
        significance: 3,
        relatedCharacters: ["Celebrimbor", "Sauron"],
        relatedLocations: ["Eregion", "Ost-in-Edhil"],
    },
    {
        id: "sa-one-ring-forged",
        age: "second-age",
        year: "SA 1600",
        title: "Forging of the One Ring",
        summary:
            "Sauron secretly forged the One Ring in the fires of Mount Doom to control all other Rings of Power.",
        details:
            "In the volcanic fires of Orodruin (Mount Doom) in the land of Mordor, Sauron forged the One Ring, the Ruling Ring. He poured much of his own power and will into it, making it the master of all other Rings of Power. When Sauron first put on the One Ring, the Elves immediately perceived his intent and removed their Three Rings. The Ring bore the inscription in the Black Speech: 'Ash nazg durbatuluk, ash nazg gimbatul, ash nazg thrakatuluk, agh burzum-ishi krimpatul' ('One Ring to rule them all, One Ring to find them, One Ring to bring them all, and in the darkness bind them').",
        tags: ["artifact", "ring", "corruption"],
        significance: 3,
        relatedCharacters: ["Sauron", "Celebrimbor"],
        relatedLocations: ["Mordor", "Mount Doom"],
    },
    {
        id: "sa-war-elves-sauron",
        age: "second-age",
        year: "SA 1693",
        title: "War of the Elves and Sauron",
        summary:
            "Sauron waged war on the Elves, destroying Eregion and slaying Celebrimbor, but was eventually driven back by the Numenoreans.",
        details:
            "When the Elves refused to submit, Sauron demanded the return of all the Rings of Power. The Elves refused, and Sauron invaded Eriador in SA 1695. He overran Eregion, sacked Ost-in-Edhil, and killed Celebrimbor, displaying his body pierced with arrows as a banner. The Three Rings were saved: Celebrimbor had sent Vilya and Narya to Gil-galad, and Nenya to Galadriel. Elrond founded Rivendell (Imladris) as a refuge during this war. Sauron nearly conquered all of Eriador, but a great Numenorean fleet sent by King Tar-Minastir arrived and crushed Sauron's forces, driving him back to Mordor.",
        tags: ["war", "ring"],
        significance: 3,
        relatedCharacters: [
            "Sauron",
            "Celebrimbor",
            "Gil-galad",
            "Elrond",
            "Galadriel",
        ],
        relatedLocations: ["Eregion", "Mordor", "Rivendell"],
    },
    {
        id: "sa-rivendell-founded",
        age: "second-age",
        year: "SA 1697",
        title: "Founding of Rivendell",
        summary:
            "Elrond founded Imladris (Rivendell) as a refuge during the war against Sauron.",
        details:
            "During the War of the Elves and Sauron, Elrond was sent by Gil-galad with a force to aid Eregion, but arrived too late. Retreating with the survivors, Elrond established Imladris (Rivendell) in a hidden valley in the foothills of the Misty Mountains. It became the chief Noldorin settlement in Eriador and a refuge for Elves and all free peoples. Gil-galad gave Elrond the ring Vilya, the mightiest of the Three Elven Rings. Rivendell would endure for over 6,000 years, until the departure of Elrond at the end of the Third Age.",
        tags: ["kingdom"],
        significance: 2,
        relatedCharacters: ["Elrond", "Gil-galad"],
        relatedLocations: ["Rivendell", "Imladris"],
    },
    {
        id: "sa-nine-rings-men",
        age: "second-age",
        year: "SA 2251",
        title: "The Nazgul Appear",
        summary:
            "The nine mortal Men who received Rings of Power fell under Sauron's dominion and became the Nazgul, the Ringwraiths.",
        details:
            "Nine great lords of Men had received Rings of Power and used them to gain wealth, glory, and extended life. But over the centuries, the Rings consumed them. They became invisible to mortal eyes, existing in the wraith-world, slaves utterly to Sauron's will. They became the Nazgul (Ringwraiths), Sauron's most terrible servants. The chief among them was the Witch-king, who had been a great king of Men. The Nazgul appeared around SA 2251 and would remain bound to the One Ring for the rest of its existence, spreading terror for over 4,000 years.",
        tags: ["corruption", "ring", "tragedy"],
        significance: 3,
        relatedCharacters: ["Sauron", "Witch-king"],
        relatedLocations: ["Mordor"],
    },
    {
        id: "sa-numenor-colonization",
        age: "second-age",
        year: "SA 1800",
        title: "Numenorean Colonization of Middle-earth",
        summary:
            "The Numenoreans began building havens and settlements along the coasts of Middle-earth, growing into a mighty maritime empire.",
        details:
            "Beginning around SA 1800, the Numenoreans established permanent harbors and coastal settlements in Middle-earth, most notably Umbar in the south and Pelargir in the north (on the Anduin). Initially they came as teachers and benefactors, sharing knowledge with the lesser Men of Middle-earth. But as the Shadow fell on Numenor and the kings turned away from the Valar, the Numenoreans became imperial conquerors, exacting tribute and ruling as tyrants. Their naval power was unmatched, and even Sauron feared their military might.",
        tags: ["kingdom"],
        significance: 2,
        relatedCharacters: [],
        relatedLocations: ["Numenor", "Umbar", "Pelargir", "Middle-earth"],
    },
    {
        id: "sa-shadow-numenor",
        age: "second-age",
        year: "SA 2899",
        title: "The Shadow Falls on Numenor",
        summary:
            "The Numenorean Kings grew proud and resentful of the Ban of the Valar, envying the immortality of the Elves.",
        details:
            "Despite their long lives, the Numenoreans envied the Elves' immortality. The later Kings grew proud, turning away from the Valar and the Elven-tongues. They ceased visiting the Meneltarma and abandoned the tradition of offering thanks to Iluvatar. The Faithful, led by the Lords of Andunie (ancestors of Aragorn), maintained friendship with the Elves and loyalty to the Valar, but were increasingly persecuted. The Kings' Men, who formed the majority, built ever-greater monuments to their power and feared death above all things. This was precisely the seed of corruption Sauron would later exploit.",
        tags: ["corruption"],
        significance: 2,
        relatedCharacters: [],
        relatedLocations: ["Numenor", "Armenelos", "Meneltarma"],
    },
    {
        id: "sa-sauron-captured",
        age: "second-age",
        year: "SA 3262",
        title: "Ar-Pharazon Captures Sauron",
        summary:
            "King Ar-Pharazon, the most powerful and proudest of the Numenorean kings, sailed to Middle-earth and forced Sauron to surrender.",
        details:
            "Ar-Pharazon the Golden, the 25th and last King of Numenor, seized the throne by marrying his cousin Miriel (the rightful queen) against her will. When he learned that Sauron had proclaimed himself 'King of Men' and 'Lord of the Earth,' Ar-Pharazon's pride was enraged. He sailed to Middle-earth with such a vast army that Sauron's forces deserted him. Sauron, unable to match Numenor militarily, submitted and was brought to Numenor as a hostage. But this was part of Sauron's deeper plan to destroy Numenor from within.",
        tags: ["corruption", "war"],
        significance: 3,
        relatedCharacters: ["Ar-Pharazon", "Sauron"],
        relatedLocations: ["Numenor", "Mordor"],
    },
    {
        id: "sa-sauron-corrupts-numenor",
        age: "second-age",
        year: "SA 3262",
        title: "Sauron Corrupts Numenor",
        summary:
            "Sauron rose from prisoner to chief counselor of Ar-Pharazon, introducing the worship of Morgoth and human sacrifice.",
        details:
            "Within three years, Sauron went from hostage to the King's most trusted advisor. He built a great temple to Morgoth in Armenelos, 500 feet in diameter, in which the White Tree Nimloth was burned as the first sacrifice. Isildur, of the Faithful, risked his life to steal a fruit of Nimloth before its destruction, preserving the line of the White Tree. Sauron introduced human sacrifice and worship of Morgoth, claiming that Morgoth could grant immortality. He convinced Ar-Pharazon that the Ban of the Valar was a selfish ploy to keep immortality for themselves.",
        tags: ["corruption", "divine"],
        significance: 3,
        relatedCharacters: ["Sauron", "Ar-Pharazon", "Isildur"],
        relatedLocations: ["Numenor", "Armenelos"],
    },
    {
        id: "sa-downfall-numenor",
        age: "second-age",
        year: "SA 3319",
        title: "The Downfall of Numenor (Akallabeth)",
        summary:
            "Ar-Pharazon sailed against Valinor in defiance of the Ban; Iluvatar intervened, sinking Numenor and reshaping the world.",
        details:
            "Persuaded by Sauron that he could seize immortality by conquering Valinor, the aging Ar-Pharazon assembled the Great Armament and sailed west. When he set foot on the Blessed Realm, the Valar laid down their governance and called upon Iluvatar. The world was changed: Numenor was swallowed by the sea in a great cataclysm, and Aman was removed from the circles of the world, making it unreachable by any ship. The world was made round (it had been flat before). Sauron's physical body was destroyed in the Downfall, and he could never again take a fair form. Only the Faithful, led by Elendil and his sons Isildur and Anarion, escaped in nine ships.",
        tags: ["tragedy", "divine", "corruption"],
        significance: 3,
        relatedCharacters: [
            "Ar-Pharazon",
            "Sauron",
            "Iluvatar",
            "Elendil",
            "Isildur",
            "Anarion",
        ],
        relatedLocations: ["Numenor", "Valinor", "Aman"],
    },
    {
        id: "sa-founding-gondor-arnor",
        age: "second-age",
        year: "SA 3320",
        title: "Founding of Gondor and Arnor",
        summary:
            "The Faithful Numenoreans, led by Elendil, founded the kingdoms of Arnor in the north and Gondor in the south of Middle-earth.",
        details:
            "Elendil and his sons escaped the Downfall of Numenor with nine ships bearing the palantiri, a seedling of the White Tree, and other treasures. Elendil established Arnor in the north, with its capital at Annuminas on the shores of Lake Evendim. His sons Isildur and Anarion founded Gondor in the south, building the cities of Minas Ithil (Tower of the Moon), Minas Anor (Tower of the Sun), and the capital of Osgiliath on the Anduin. Elendil was High King over both realms. These Dunedain kingdoms would shape the history of Middle-earth for the next three thousand years.",
        tags: ["kingdom"],
        significance: 3,
        relatedCharacters: ["Elendil", "Isildur", "Anarion"],
        relatedLocations: [
            "Gondor",
            "Arnor",
            "Annuminas",
            "Osgiliath",
            "Minas Ithil",
            "Minas Anor",
        ],
    },
    {
        id: "sa-sauron-returns",
        age: "second-age",
        year: "SA 3320",
        title: "Sauron Returns to Mordor",
        summary:
            "Sauron's spirit returned to Mordor and took a new and terrible form, wielding the One Ring once more.",
        details:
            "Though Sauron's body was destroyed in the Downfall of Numenor, his spirit was preserved by the power of the One Ring. He fled back to Mordor and took a new form, terrible and dark; he could never again appear fair. He found that his servants, including the Nazgul, had maintained Mordor in his absence. He rebuilt Barad-dur, his great fortress, and prepared for war against the Dunedain kingdoms. He attacked Gondor and captured Minas Ithil, taking the palantir that was kept there. This became Minas Morgul, the Tower of Sorcery.",
        tags: ["corruption", "ring", "war"],
        significance: 2,
        relatedCharacters: ["Sauron"],
        relatedLocations: ["Mordor", "Barad-dur", "Minas Ithil"],
    },
    {
        id: "sa-last-alliance",
        age: "second-age",
        year: "SA 3430",
        title: "The Last Alliance of Elves and Men",
        summary:
            "Elendil and Gil-galad formed the Last Alliance to challenge Sauron, assembling the greatest army since the War of Wrath.",
        details:
            "After Sauron attacked Gondor and slew Anarion's forces, Elendil and Gil-galad formed the Last Alliance of Elves and Men. They gathered their armies at Rivendell for three years, assembling Elves from Lindon, Rivendell, and Lorien alongside the armies of Arnor and Gondor. Dwarves also joined. It was the greatest military force assembled in Middle-earth since the Host of Valinor. They marched south to Mordor, and the Alliance represented the last time Elves and Men united in such numbers against a common foe.",
        tags: ["alliance", "war"],
        significance: 3,
        relatedCharacters: [
            "Elendil",
            "Gil-galad",
            "Elrond",
            "Isildur",
            "Anarion",
        ],
        relatedLocations: ["Rivendell", "Mordor"],
    },
    {
        id: "sa-battle-dagorlad",
        age: "second-age",
        year: "SA 3434",
        title: "Battle of Dagorlad and Siege of Barad-dur",
        summary:
            "The Last Alliance won the Battle of Dagorlad before the Black Gate and laid siege to Barad-dur for seven years.",
        details:
            "The Last Alliance fought the Battle of Dagorlad on the plain before the Morannon (Black Gate of Mordor). The battle was the greatest since the War of Wrath, and all living things were divided in their allegiance. The Alliance was victorious and entered Mordor, besieging Barad-dur for seven years. During the siege, Anarion, son of Elendil and co-founder of Gondor, was slain by a stone cast from the tower. The siege lasted from SA 3434 to SA 3441, an incredibly prolonged and costly effort.",
        tags: ["war"],
        significance: 3,
        relatedCharacters: ["Elendil", "Gil-galad", "Sauron", "Anarion"],
        relatedLocations: ["Dagorlad", "Mordor", "Barad-dur"],
    },
    {
        id: "sa-sauron-defeated",
        age: "second-age",
        year: "SA 3441",
        title: "Defeat of Sauron and Isildur Takes the Ring",
        summary:
            "Sauron was overthrown in combat with Elendil and Gil-galad; Isildur cut the One Ring from Sauron's hand.",
        details:
            "Sauron came forth from Barad-dur and fought Elendil and Gil-galad on the slopes of Mount Doom. Both Elendil and Gil-galad were slain, but they overthrew Sauron. Elendil's sword Narsil broke beneath him as he fell. Isildur took up the hilt-shard of Narsil and cut the One Ring from Sauron's finger. Sauron's spirit fled and his physical form was destroyed. Elrond and Cirdan counseled Isildur to destroy the Ring in the fires of Mount Doom, but Isildur claimed it as weregild for his father and brother, calling it 'precious.' This refusal would haunt Middle-earth for three thousand years.",
        tags: ["war", "ring", "tragedy"],
        significance: 3,
        relatedCharacters: [
            "Sauron",
            "Elendil",
            "Gil-galad",
            "Isildur",
            "Elrond",
            "Cirdan",
        ],
        relatedLocations: ["Mount Doom", "Barad-dur", "Mordor"],
    },
];
