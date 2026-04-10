import type { TimelineEvent } from "./types";

export const firstAgeEvents: TimelineEvent[] = [
    {
        id: "fa-dagor-nuin-giliath",
        age: "first-age",
        year: "FA 1",
        title: "Dagor-nuin-Giliath (Battle Under the Stars)",
        summary:
            "The first battle in Beleriand, where Feanor's host defeated Morgoth's Orcs upon their arrival in Middle-earth.",
        details:
            "When Feanor's Noldor arrived at Losgar and burned the ships, Morgoth sent armies of Orcs against them. The Noldor, filled with the fire of Valinor, routed Morgoth's forces in a great victory. However, Feanor recklessly pursued the fleeing Orcs toward Angband and was surrounded by Balrogs. He was mortally wounded by Gothmog, Lord of Balrogs. As he died, Feanor cursed Morgoth three times, and his body was so consumed by the fire of his spirit that it turned to ash.",
        tags: ["war"],
        significance: 3,
        relatedCharacters: ["Feanor", "Gothmog", "Morgoth"],
        relatedLocations: ["Mithrim", "Angband", "Losgar"],
    },
    {
        id: "fa-maedhros-rescue",
        age: "first-age",
        year: "FA 5",
        title: "Rescue of Maedhros from Thangorodrim",
        summary:
            "Fingon rescued Maedhros, who had been captured by Morgoth and hung from Thangorodrim by his right wrist.",
        details:
            "After Feanor's death, Morgoth captured his eldest son Maedhros during false parley and hung him by his right hand from a precipice of Thangorodrim, the volcanic peaks above Angband. Fingon, son of Fingolfin and Maedhros's friend, rode alone to Thangorodrim and called for aid. The great eagle Thorondor, King of Eagles, bore Fingon up to Maedhros, but the bond could not be cut. Maedhros begged Fingon to cut off his hand, which he did. In gratitude, Maedhros waived his claim to the Noldor kingship in favor of Fingolfin.",
        tags: ["quest", "alliance"],
        significance: 2,
        relatedCharacters: ["Maedhros", "Fingon", "Thorondor", "Morgoth"],
        relatedLocations: ["Thangorodrim", "Angband"],
    },
    {
        id: "fa-fingolfin-arrival",
        age: "first-age",
        year: "FA 1",
        title: "Arrival of Fingolfin's Host",
        summary:
            "Fingolfin's host completed the crossing of the Helcaraxe and entered Middle-earth as the Moon first rose.",
        details:
            "After enduring terrible losses on the Grinding Ice, Fingolfin's people arrived in Middle-earth at the Firth of Drengist. Their arrival coincided with the first rising of the Moon and shortly after, the Sun. The Noldor of Fingolfin were hardened by their suffering and bore lasting anger at Feanor's betrayal. Despite their losses, the arrival of Fingolfin's host doubled the Noldor strength in Beleriand and established a second center of power.",
        tags: ["quest"],
        significance: 2,
        relatedCharacters: ["Fingolfin", "Fingon", "Turgon"],
        relatedLocations: ["Helcaraxe", "Mithrim", "Beleriand"],
    },
    {
        id: "fa-founding-gondolin",
        age: "first-age",
        year: "FA 52",
        title: "Founding of Gondolin",
        summary:
            "Turgon, guided by the Vala Ulmo, built the hidden city of Gondolin in the encircling mountains of Tumladen.",
        details:
            "Turgon, son of Fingolfin, discovered the hidden valley of Tumladen guided by Ulmo, Lord of Waters. Over many years he secretly built Gondolin, the Hidden Rock, modeled after Tirion in Valinor. The city was ringed by the Echoriath mountains and its location was kept secret from all. Gondolin became the greatest Elven stronghold in Beleriand, and Turgon ruled it for over 500 years. Its secrecy was its chief defense against Morgoth.",
        tags: ["kingdom"],
        significance: 2,
        relatedCharacters: ["Turgon", "Ulmo"],
        relatedLocations: ["Gondolin", "Tumladen"],
    },
    {
        id: "fa-dagor-aglareb",
        age: "first-age",
        year: "FA 60",
        title: "Dagor Aglareb (The Glorious Battle)",
        summary:
            "The Noldor and Sindar won a decisive victory over Morgoth, beginning the Siege of Angband.",
        details:
            "Morgoth sent armies through the passes east and west of the highland of Dorthonion, but the Elven forces led by Fingolfin and Maedhros counterattacked and destroyed the Orc armies in the plains of Ard-galen. This third great battle was called Dagor Aglareb, the Glorious Battle. After this victory, the Noldor established the Siege of Angband, a long watch maintained by the various Elven realms around Morgoth's fortress. The Siege lasted nearly 400 years.",
        tags: ["war", "alliance"],
        significance: 2,
        relatedCharacters: ["Fingolfin", "Maedhros"],
        relatedLocations: ["Ard-galen", "Angband", "Dorthonion"],
    },
    {
        id: "fa-siege-angband",
        age: "first-age",
        year: "FA 60",
        title: "The Siege of Angband Begins",
        summary:
            "The Noldor established a centuries-long watch around Morgoth's fortress of Angband, maintaining relative peace in Beleriand.",
        details:
            "Following the Dagor Aglareb, the Elven lords maintained a network of fortifications around Angband. Fingolfin held Hithlum, Fingon held Dor-lomin, the sons of Feanor held the eastern march, and Finrod Felagund built the fortress of Nargothrond. The Siege lasted from FA 60 to FA 455, nearly 400 years of watchful peace. During this time, the Elven kingdoms of Beleriand reached their greatest power and glory, but Morgoth was merely biding his time, breeding new terrors beneath the earth.",
        tags: ["war", "kingdom"],
        significance: 2,
        relatedCharacters: ["Fingolfin", "Finrod", "Maedhros"],
        relatedLocations: ["Angband", "Hithlum", "Nargothrond"],
    },
    {
        id: "fa-coming-of-men",
        age: "first-age",
        year: "FA 310",
        title: "The Coming of Men into Beleriand",
        summary:
            "The first Men, the Edain, crossed the Blue Mountains into Beleriand and allied with the Elves.",
        details:
            "The first Men to enter Beleriand were the people of Beor the Old, who were discovered by Finrod Felagund while they camped by the pool of Tarn Aeluin. Three great houses of the Edain (Elf-friends) established themselves in Beleriand: the House of Beor (who served Finrod), the Haladin (the People of Haleth, who settled in the Forest of Brethil), and the House of Hador (who served Fingolfin in Hithlum and were the greatest in valor). These three houses would play crucial roles in the wars against Morgoth.",
        tags: ["alliance", "kingdom"],
        significance: 2,
        relatedCharacters: ["Beor", "Finrod", "Haleth", "Hador"],
        relatedLocations: ["Beleriand", "Ered Luin", "Dorthonion", "Hithlum"],
    },
    {
        id: "fa-dagor-bragollach",
        age: "first-age",
        year: "FA 455",
        title: "Dagor Bragollach (The Battle of Sudden Flame)",
        summary:
            "Morgoth broke the Siege of Angband by unleashing rivers of fire from Thangorodrim, devastating the Elven defenses.",
        details:
            "After nearly 400 years of siege, Morgoth struck without warning. Rivers of fire poured from Thangorodrim across the plain of Ard-galen, turning it into the desolate waste of Anfauglith (the Gasping Dust). Glaurung, the Father of Dragons, led the assault. The highland of Dorthonion was overrun, the sons of Feanor scattered from the eastern marches, and many Elven lords fell. Angrod and Aegnor, sons of Finarfin, were slain. Fingolfin's realm of Hithlum survived, but the northern defenses were shattered permanently.",
        tags: ["war", "tragedy"],
        significance: 3,
        relatedCharacters: ["Morgoth", "Glaurung", "Fingolfin"],
        relatedLocations: [
            "Angband",
            "Ard-galen",
            "Anfauglith",
            "Dorthonion",
            "Thangorodrim",
        ],
    },
    {
        id: "fa-fingolfin-morgoth",
        age: "first-age",
        year: "FA 456",
        title: "Fingolfin's Duel with Morgoth",
        summary:
            "High King Fingolfin rode alone to Angband and challenged Morgoth to single combat before the gates.",
        details:
            "Driven to despair by the devastation of the Dagor Bragollach, Fingolfin rode alone across Anfauglith to the gates of Angband and challenged Morgoth to single combat. Morgoth, though reluctant, could not refuse before his captains. Fingolfin wounded Morgoth seven times with his sword Ringil, and Morgoth's cries of pain shook the earth. But Morgoth finally crushed Fingolfin beneath his great hammer Grond. Even as he died, Fingolfin cut Morgoth's foot with a final stroke, and Morgoth limped ever after. Thorondor scarred Morgoth's face and bore Fingolfin's body to Gondolin.",
        tags: ["war", "tragedy"],
        significance: 3,
        relatedCharacters: ["Fingolfin", "Morgoth", "Thorondor"],
        relatedLocations: ["Angband", "Anfauglith", "Gondolin"],
    },
    {
        id: "fa-beren-luthien",
        age: "first-age",
        year: "FA 466",
        title: "The Quest of Beren and Luthien",
        summary:
            "Beren, a mortal Man, and Luthien, an Elven princess, undertook a quest to recover a Silmaril from Morgoth's crown.",
        details:
            "Beren son of Barahir, a Man of the House of Beor, fell in love with Luthien Tinuviel, daughter of King Thingol of Doriath and the Maia Melian. Thingol demanded a Silmaril from Morgoth's crown as bride-price, thinking it impossible. Beren and Luthien journeyed to Angband, where Luthien's song put Morgoth himself to sleep, and Beren cut a Silmaril from the Iron Crown with the knife Angrist. They were attacked by Carcharoth, the great wolf, who bit off Beren's hand and swallowed the Silmaril. Beren was slain in the subsequent Wolf-hunt of Carcharoth, but Luthien pleaded with Mandos and both were returned to life as mortals.",
        tags: ["quest", "artifact", "tragedy"],
        significance: 3,
        relatedCharacters: ["Beren", "Luthien", "Thingol", "Melian", "Morgoth"],
        relatedLocations: ["Doriath", "Angband", "Mandos"],
    },
    {
        id: "fa-nirnaeth-arnoediad",
        age: "first-age",
        year: "FA 472",
        title: "Nirnaeth Arnoediad (Unnumbered Tears)",
        summary:
            "The disastrous fifth battle against Morgoth, where the united Elven and Mannish forces were utterly defeated through treachery.",
        details:
            "Maedhros organized the Union of Maedhros, the greatest alliance of Elves, Men, and Dwarves against Morgoth. The plan called for a two-pronged attack on Angband. However, Uldor the Accursed, an Easterling in the service of the sons of Feanor, betrayed the alliance to Morgoth. The western host under Fingon was drawn out prematurely and overwhelmed. Fingon was slain by Gothmog, Lord of Balrogs. Hurin of the House of Hador fought a famous last stand, slaying seventy trolls before his capture. Morgoth's victory was complete; the Elven kingdoms never recovered.",
        tags: ["war", "tragedy", "alliance"],
        significance: 3,
        relatedCharacters: [
            "Maedhros",
            "Fingon",
            "Hurin",
            "Gothmog",
            "Morgoth",
            "Uldor",
        ],
        relatedLocations: ["Anfauglith", "Angband", "Hithlum"],
    },
    {
        id: "fa-turin-turambar",
        age: "first-age",
        year: "FA 499",
        title: "The Tragedy of Turin Turambar",
        summary:
            "Turin, son of Hurin, lived a cursed life that ended when he slew the dragon Glaurung but then killed himself upon learning the truth of his deeds.",
        details:
            "Turin Turambar, son of the captured Hurin, was raised in Doriath but was cursed by Morgoth. He lived under many names and performed great deeds, but tragedy followed him. He unknowingly married his own sister Nienor, who had lost her memory due to Glaurung's spell. Turin slew Glaurung the dragon at Cabed-en-Aras with his black sword Gurthang, but the dying dragon revealed the truth to Nienor, who threw herself into the ravine. Turin, learning what had happened, fell upon his own sword. Morgoth's curse on the children of Hurin was among the cruelest acts in the history of Arda.",
        tags: ["tragedy", "corruption", "war"],
        significance: 2,
        relatedCharacters: ["Turin", "Hurin", "Nienor", "Glaurung", "Morgoth"],
        relatedLocations: ["Doriath", "Nargothrond", "Brethil"],
    },
    {
        id: "fa-fall-nargothrond",
        age: "first-age",
        year: "FA 495",
        title: "Fall of Nargothrond",
        summary:
            "The hidden fortress of Nargothrond was sacked by the dragon Glaurung and Morgoth's armies.",
        details:
            "Nargothrond, the great underground fortress built by Finrod Felagund along the River Narog, was betrayed when Turin persuaded King Orodreth to abandon secrecy and build a bridge over the Narog. Morgoth sent Glaurung and a great Orc army, which used the bridge to storm the gates. Orodreth was slain in the battle, and Glaurung took up residence in the ruined halls as his hoard. Turin, under the dragon-spell of Glaurung, was unable to save Finduilas, Orodreth's daughter, who was slain by Orcs at the Crossings of Teiglin.",
        tags: ["war", "tragedy"],
        significance: 2,
        relatedCharacters: ["Turin", "Glaurung", "Orodreth", "Finduilas"],
        relatedLocations: ["Nargothrond"],
    },
    {
        id: "fa-second-kinslaying",
        age: "first-age",
        year: "FA 503",
        title: "The Second Kinslaying: Fall of Doriath",
        summary:
            "The sons of Feanor attacked Doriath to recover the Silmaril, slaying King Dior and destroying the greatest Sindarin realm.",
        details:
            "After Thingol was slain by Dwarves of Nogrod over the Nauglamir (a necklace set with the Silmaril), his grandson Dior inherited the Silmaril and the kingship of Doriath. The sons of Feanor demanded the jewel, and when Dior refused, Celegorm, Curufin, and Caranthir led an assault on Menegroth. All three sons of Feanor were slain in the battle, as was Dior and his wife Nimloth. Dior's daughter Elwing escaped with the Silmaril to the Havens of Sirion. The Girdle of Melian had already failed when Thingol died, leaving Doriath vulnerable.",
        tags: ["war", "tragedy", "artifact"],
        significance: 2,
        relatedCharacters: [
            "Dior",
            "Celegorm",
            "Curufin",
            "Caranthir",
            "Elwing",
            "Thingol",
        ],
        relatedLocations: ["Doriath", "Menegroth"],
    },
    {
        id: "fa-fall-gondolin",
        age: "first-age",
        year: "FA 510",
        title: "The Fall of Gondolin",
        summary:
            "Morgoth's armies, guided by the traitor Maeglin, destroyed the hidden city of Gondolin, the last great Elven stronghold.",
        details:
            "Maeglin, nephew of King Turgon, was captured by Morgoth and revealed Gondolin's location in exchange for promises of power and Turgon's daughter Idril. Morgoth sent Balrogs, dragons, and vast armies against the hidden city. Turgon died defending his city. Glorfindel of the House of the Golden Flower slew a Balrog in the Echoriath but fell with it into the abyss. Ecthelion of the Fountain slew Gothmog, Lord of Balrogs, but also perished. Tuor and Idril escaped with their son Earendil through a secret passage, leading survivors to the Mouths of Sirion.",
        tags: ["war", "tragedy"],
        significance: 3,
        relatedCharacters: [
            "Turgon",
            "Maeglin",
            "Glorfindel",
            "Ecthelion",
            "Tuor",
            "Idril",
            "Earendil",
            "Gothmog",
        ],
        relatedLocations: ["Gondolin", "Echoriath"],
    },
    {
        id: "fa-third-kinslaying",
        age: "first-age",
        year: "FA 538",
        title: "The Third Kinslaying at the Havens of Sirion",
        summary:
            "The remaining sons of Feanor attacked the refugee settlement at the Mouths of Sirion to claim the Silmaril held by Elwing.",
        details:
            "The surviving sons of Feanor -- Maedhros, Maglor, Amrod, and the twins -- demanded the Silmaril from Elwing at the Havens of Sirion. When she refused, they attacked the settlement of Elven refugees. Amrod was slain. Elwing, holding the Silmaril, cast herself into the sea rather than surrender it; Ulmo transformed her into a white bird and she flew to her husband Earendil on his ship Vingilot. The young sons of Earendil and Elwing, Elrond and Elros, were captured but treated kindly by Maglor, who fostered them.",
        tags: ["war", "tragedy", "artifact"],
        significance: 2,
        relatedCharacters: [
            "Maedhros",
            "Maglor",
            "Elwing",
            "Earendil",
            "Elrond",
            "Elros",
        ],
        relatedLocations: ["Havens of Sirion"],
    },
    {
        id: "fa-earendil-voyage",
        age: "first-age",
        year: "FA 542",
        title: "The Voyage of Earendil",
        summary:
            "Earendil, bearing a Silmaril, sailed to Valinor and pleaded with the Valar to intervene against Morgoth.",
        details:
            "Earendil the Mariner, half-Elven son of Tuor and Idril, sailed his ship Vingilot across the Shadowy Seas to Valinor, guided by the light of the Silmaril bound to his brow. His wife Elwing accompanied him in the form of a bird. Earendil was the first mortal to set foot in Valinor since the Exile of the Noldor. He pleaded on behalf of both Elves and Men before the Valar, and they were moved to act. The Valar gave Earendil and Elwing the choice of which kindred to belong to: Earendil chose the Elves for Elwing's sake, and Elwing chose likewise. Their sons, Elrond and Elros, were also given the choice.",
        tags: ["quest", "divine", "artifact"],
        significance: 3,
        relatedCharacters: ["Earendil", "Elwing", "Manwe"],
        relatedLocations: ["Valinor", "Vingilot"],
    },
    {
        id: "fa-war-of-wrath",
        age: "first-age",
        year: "FA 545",
        title: "The War of Wrath",
        summary:
            "The Valar sent the Host of Valinor against Morgoth in the greatest battle in the history of Arda, lasting over 40 years.",
        details:
            "In response to Earendil's plea, the Valar assembled the Host of Valinor: Vanyar, Noldor of Valinor, and Maiar. The war lasted over 40 years and was fought across all of Beleriand. Morgoth unleashed his most terrible weapons, including winged dragons, the first of which was Ancalagon the Black, the greatest dragon ever to exist. Earendil, sailing Vingilot through the sky with the Silmaril, slew Ancalagon, whose fall destroyed Thangorodrim. The Valar were victorious, and Morgoth was captured. His two remaining Silmarils were taken, and Maedhros and Maglor stole them but were burned; Maedhros cast himself into a fiery chasm, and Maglor threw his into the Sea.",
        tags: ["war", "divine"],
        significance: 3,
        relatedCharacters: [
            "Earendil",
            "Morgoth",
            "Ancalagon",
            "Maedhros",
            "Maglor",
        ],
        relatedLocations: ["Beleriand", "Angband", "Thangorodrim"],
    },
    {
        id: "fa-destruction-beleriand",
        age: "first-age",
        year: "FA 587",
        title: "Destruction of Beleriand",
        summary:
            "The War of Wrath was so violent that most of Beleriand was broken and sank beneath the sea.",
        details:
            "The cataclysmic forces unleashed in the War of Wrath shattered Beleriand. The land was broken and most of it sank beneath the waves of Belegaer, the Great Sea. The great Elven realms of Hithlum, Nevrast, Dorthonion, and the lands of the sons of Feanor were all lost. Only a few fragments survived, including the isle of Balar and parts of Ossiriand (later called Lindon). The Blue Mountains (Ered Luin) became the new western coastline of Middle-earth, and the Gulf of Lhun was carved where once there was land.",
        tags: ["war", "tragedy"],
        significance: 2,
        relatedCharacters: [],
        relatedLocations: ["Beleriand", "Lindon", "Ered Luin"],
    },
    {
        id: "fa-morgoth-banished",
        age: "first-age",
        year: "FA 587",
        title: "Morgoth Cast into the Void",
        summary:
            "The Valar captured Morgoth, broke his Iron Crown, and cast him through the Door of Night into the Timeless Void.",
        details:
            "After the Host of Valinor breached Angband, Morgoth was found hiding in the deepest pit beneath his fortress. His feet were hewn from under him, and he fell upon his face. His Iron Crown was beaten into a collar for his neck, and the two remaining Silmarils were taken from it. Morgoth was thrust through the Door of Night into the Timeless Void beyond the Walls of the World, where he remains. However, his servant Sauron, a Maia, escaped the judgment of the Valar. The First Age ended with Morgoth's defeat, and the Elves were summoned back to Valinor.",
        tags: ["war", "divine"],
        significance: 3,
        relatedCharacters: ["Morgoth", "Sauron", "Eonwe"],
        relatedLocations: ["Angband", "Timeless Void"],
    },
    {
        id: "fa-choice-half-elven",
        age: "first-age",
        year: "FA 587",
        title: "The Choice of the Half-Elven",
        summary:
            "Elrond and Elros, the twin sons of Earendil and Elwing, were given the choice to live as Elves or Men.",
        details:
            "The Valar decreed that the Half-Elven must choose irrevocably which kindred they would belong to. Elrond chose to be counted among the Elves and became immortal, eventually becoming the Lord of Rivendell and a bearer of the Elven ring Vilya. Elros chose to be counted among Men but was granted an extended lifespan; he became the first King of Numenor, taking the name Tar-Minyatur. His line, the Dunedain, had far longer lives than ordinary Men. This choice would have profound consequences throughout the remaining ages of Middle-earth.",
        tags: ["divine", "kingdom"],
        significance: 2,
        relatedCharacters: ["Elrond", "Elros", "Earendil", "Elwing"],
        relatedLocations: ["Numenor", "Lindon"],
    },
    {
        id: "fa-finrod-death",
        age: "first-age",
        year: "FA 465",
        title: "Death of Finrod Felagund",
        summary:
            "Finrod Felagund, King of Nargothrond, died in the dungeons of Sauron on Tol-in-Gaurhoth while protecting Beren.",
        details:
            "Finrod Felagund, noblest of the Noldor princes, had sworn an oath of friendship to Barahir, Beren's father. When Beren came seeking aid for his quest for a Silmaril, Finrod honored this oath. They traveled to Tol-in-Gaurhoth (the former watchtower of Minas Tirith, seized by Sauron). Finrod and Sauron engaged in a great contest of songs of power, but Sauron prevailed. In the dungeons, Finrod broke his bonds and slew a werewolf with his bare hands to protect Beren, but died from his wounds. He was the first Elven king to die for a mortal.",
        tags: ["tragedy", "quest", "alliance"],
        significance: 2,
        relatedCharacters: ["Finrod", "Beren", "Sauron", "Barahir"],
        relatedLocations: ["Tol-in-Gaurhoth", "Nargothrond"],
    },
    {
        id: "fa-luthien-sauron",
        age: "first-age",
        year: "FA 466",
        title: "Luthien Overthrows Sauron",
        summary:
            "Luthien and Huan the great hound defeated Sauron and freed the prisoners of Tol-in-Gaurhoth.",
        details:
            "After Finrod's death, Luthien came to Tol-in-Gaurhoth with Huan, the great wolfhound of Valinor. Sauron sent wolves against them, but Huan slew each one. Finally Sauron himself took wolf-form and fought Huan, but Huan was fated to be slain only by the greatest wolf ever to live. Sauron was overthrown and Luthien forced him to surrender the tower. Sauron fled in vampire form to Taur-nu-Fuin. The tower was broken and the island cleansed, becoming Tol Sirion once more. Beren was freed from the dungeons.",
        tags: ["war", "quest"],
        significance: 2,
        relatedCharacters: ["Luthien", "Sauron", "Huan", "Beren"],
        relatedLocations: ["Tol-in-Gaurhoth", "Tol Sirion"],
    },
    {
        id: "fa-hurin-released",
        age: "first-age",
        year: "FA 500",
        title: "Release of Hurin",
        summary:
            "Morgoth released Hurin after 28 years of captivity, during which Hurin had been forced to watch his children's doom through Morgoth's eyes.",
        details:
            "Hurin of the House of Hador had been captured at the Nirnaeth Arnoediad after his legendary last stand. Morgoth cursed him and his family, then bound Hurin to a seat on Thangorodrim for 28 years, forcing him to see through Morgoth's distorted vision the fates of his children Turin and Nienor. After their deaths, Morgoth released Hurin, hoping he would spread further ruin. Hurin wandered in grief, inadvertently revealing the approximate location of Gondolin to Morgoth's spies. He later brought the Nauglamir to Thingol in Doriath before dying.",
        tags: ["tragedy", "corruption"],
        significance: 2,
        relatedCharacters: ["Hurin", "Morgoth", "Turin", "Nienor"],
        relatedLocations: ["Thangorodrim", "Gondolin", "Doriath"],
    },
    {
        id: "fa-thingol-slain",
        age: "first-age",
        year: "FA 502",
        title: "Slaying of Thingol and Loss of Doriath's Protection",
        summary:
            "King Thingol was murdered by Dwarves of Nogrod in Menegroth over the Nauglamir set with the Silmaril.",
        details:
            "Thingol had the Silmaril recovered from Beren set into the Nauglamir, a Dwarf-made necklace of surpassing beauty. The Dwarves of Nogrod who did the work coveted both treasures and slew Thingol in Menegroth. They fled with the Nauglamir but were pursued. An army of Dwarves later sacked Menegroth, but was destroyed by Beren and a host of Green-Elves at the Battle of Sarn Athrad. With Thingol's death, Melian's Girdle of enchantment that had protected Doriath for thousands of years faded, and the Maia Melian returned to Valinor in grief.",
        tags: ["tragedy", "artifact"],
        significance: 2,
        relatedCharacters: ["Thingol", "Melian", "Beren"],
        relatedLocations: ["Menegroth", "Doriath", "Nogrod"],
    },
    {
        id: "fa-silmaril-fates",
        age: "first-age",
        year: "FA 587",
        title: "The Three Silmarils Find Their Final Resting Places",
        summary:
            "The three Silmarils were separated forever: one in the sky, one in the sea, and one in the earth.",
        details:
            "After the War of Wrath, the three Silmarils each came to rest in a different element. The Silmaril of Beren and Luthien was borne into the sky by Earendil on his ship Vingilot, becoming the brightest star (known as the Star of Earendil or Gil-Estel). Maglor, last surviving son of Feanor, cast his Silmaril into the Sea in agony, for it burned his hand. Maedhros threw himself and his Silmaril into a fiery chasm in the earth. Thus the hallowed jewels of the light of the Two Trees were lost: one in sky, one in sea, one in earth.",
        tags: ["artifact", "tragedy"],
        significance: 3,
        relatedCharacters: ["Earendil", "Maedhros", "Maglor"],
        relatedLocations: ["Beleriand"],
    },
];
