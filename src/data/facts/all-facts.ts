import type { Fact } from "./types";

export const allFacts: Fact[] = [
    // ─────────────────────────────────────────────
    // LORE (~10 facts)
    // ─────────────────────────────────────────────
    {
        id: "fact-silmarils-light",
        title: "The Silmarils Contain the Light of the Two Trees",
        content:
            "The three Silmarils were crafted by Feanor, greatest of the Noldor, and they contained the blended light of the Two Trees of Valinor — Telperion and Laurelin. After Morgoth and Ungoliant destroyed the Trees, the Silmarils became the only remaining source of that original, unsullied light. The quest to recover the Silmarils from Morgoth's crown drove the central tragedy of the First Age.",
        category: "lore",
        sources: ["silmarillion"],
        quizPotential: true,
        tags: ["first-age", "feanor", "silmarils"],
    },
    {
        id: "fact-gandalf-olorin",
        title: "Gandalf's True Name Is Olorin",
        content:
            "Before being sent to Middle-earth, Gandalf was known as Olorin, a Maia who dwelt in the gardens of Lorien in Valinor. He was considered the wisest of the Maiar and was a servant of Manwe and Varda. In Middle-earth he was called Gandalf by Men, Mithrandir by the Elves, Tharkun by the Dwarves, and Incanus in the South.",
        category: "lore",
        sources: ["silmarillion", "unfinished-tales"],
        quizPotential: true,
        tags: ["gandalf", "maiar", "istari"],
    },
    {
        id: "fact-istari-maiar",
        title: "The Istari Are Maiar Sent by the Valar",
        content:
            "The five Istari — Gandalf, Saruman, Radagast, and the two Blue Wizards — are Maiar spirits sent to Middle-earth around the year 1000 of the Third Age. They were clothed in the bodies of old men to limit their power and ensure they would guide the Free Peoples through counsel rather than domination. Only Gandalf remained true to his mission throughout the age.",
        category: "lore",
        sources: ["silmarillion", "unfinished-tales"],
        quizPotential: true,
        tags: ["istari", "maiar", "valar"],
    },
    {
        id: "fact-balrogs-corrupted-maiar",
        title: "Balrogs Are Corrupted Maiar",
        content:
            "Balrogs were originally Maiar — angelic spirits of the same order as Gandalf and Sauron — who were seduced and corrupted by Morgoth in the earliest days of Arda. They became his most feared servants, wreathed in shadow and flame. Their number is debated, but Tolkien's later writings suggest there were relatively few, perhaps no more than seven.",
        category: "lore",
        sources: ["silmarillion"],
        quizPotential: true,
        tags: ["balrog", "maiar", "morgoth"],
    },
    {
        id: "fact-sauron-maia-aule",
        title: "Sauron Was Originally a Maia of Aule",
        content:
            "Before his fall, Sauron was a Maia of Aule the Smith, the Vala associated with craftsmanship and making. This origin explains Sauron's exceptional skill in forging and his ability to create the Rings of Power. He was originally named Mairon, meaning 'the Admirable,' before Morgoth corrupted him and he became the greatest of the Dark Lord's servants.",
        category: "lore",
        sources: ["silmarillion"],
        quizPotential: true,
        tags: ["sauron", "maiar", "aule"],
    },
    {
        id: "fact-tom-bombadil-mystery",
        title: "Tom Bombadil's True Nature Is Unknown",
        content:
            "Tom Bombadil is one of the greatest mysteries in Tolkien's legendarium. The One Ring has absolutely no effect on him — he can see Frodo while Frodo wears it, and the Ring itself becomes invisible when Bombadil puts it on. At the Council of Elrond, Gandalf states that Bombadil is not subject to the Ring's power but would not understand the need to destroy it. Tolkien himself said Bombadil represents something intentionally left enigmatic.",
        category: "lore",
        sources: ["lotr"],
        quizPotential: true,
        tags: ["tom-bombadil", "one-ring", "mystery"],
    },
    {
        id: "fact-eagles-manwe",
        title: "The Great Eagles Are Servants of Manwe",
        content:
            "The Great Eagles of Middle-earth were created by Manwe, King of the Valar and Lord of the Airs. They served as his eyes and messengers across Middle-earth. Thorondor, the greatest of their kind, had a wingspan of 30 fathoms (180 feet) and rescued Fingolfin's body from beneath Morgoth's feet. Their role explains why they intervene at pivotal moments but cannot simply fly the Ring to Mordor — they are not errand-runners for mortals.",
        category: "lore",
        sources: ["silmarillion", "lotr"],
        quizPotential: false,
        tags: ["eagles", "manwe", "valar"],
    },
    {
        id: "fact-shelob-ungoliant",
        title: "Shelob Is the Last Child of Ungoliant",
        content:
            "Shelob, the monstrous spider who guards the pass of Cirith Ungol, is described as the last child of Ungoliant — the primordial darkness spirit who helped Morgoth destroy the Two Trees of Valinor. Ungoliant took spider form and was so ravenous for light that she eventually devoured herself. Shelob had dwelt in the mountains of shadow since before Sauron established Mordor, and he considered her a useful guard for his borders.",
        category: "lore",
        sources: ["lotr", "silmarillion"],
        quizPotential: true,
        tags: ["shelob", "ungoliant", "cirith-ungol"],
    },
    {
        id: "fact-morgoth-ring",
        title: "Morgoth Poured His Power Into All of Arda",
        content:
            "Just as Sauron poured much of his power into the One Ring, Morgoth dispersed his power into the very fabric of Arda itself — a concept Tolkien called 'Morgoth's Ring.' This is why evil persists even after Morgoth's defeat: the world itself is tainted by his malice. Over time this dissipation weakened Morgoth to the point where he could be overthrown at the end of the First Age.",
        category: "lore",
        sources: ["silmarillion"],
        quizPotential: false,
        tags: ["morgoth", "arda", "first-age"],
    },
    {
        id: "fact-aragorn-age",
        title: "Aragorn Was 87 Years Old During the War of the Ring",
        content:
            "As a Dunedain of the North, Aragorn possessed the extended lifespan of the Numenoreans. He was born in 2931 of the Third Age and was 87 years old during the events of The Lord of the Rings. He eventually lived to the age of 210, choosing the time of his own death in the manner of the ancient Kings of Numenor. He had wandered Middle-earth for decades under the name Strider before claiming his throne.",
        category: "lore",
        sources: ["lotr"],
        quizPotential: true,
        tags: ["aragorn", "dunedain", "numenor"],
    },

    // ─────────────────────────────────────────────
    // LANGUAGE (~6 facts)
    // ─────────────────────────────────────────────
    {
        id: "fact-quenya-finnish",
        title: "Quenya Was Inspired by Finnish",
        content:
            "Tolkien created the Elvish language Quenya with a strong phonological and grammatical influence from Finnish, a language he fell in love with as a young student. Finnish's agglutinative structure and vowel harmony appealed to his aesthetic sense. Quenya became the 'High Elvish' tongue, used for ceremony and lore among the Elves of Valinor, much as Latin was used in medieval Europe.",
        category: "language",
        sources: ["general"],
        quizPotential: true,
        tags: ["quenya", "finnish", "elvish"],
    },
    {
        id: "fact-sindarin-welsh",
        title: "Sindarin Was Inspired by Welsh",
        content:
            "Sindarin, the everyday Elvish language most commonly spoken in Middle-earth, was modeled on the phonology and mutations of Welsh. Tolkien admired the beauty of Welsh and wanted to capture its consonant mutations and melodic quality. Sindarin is the language behind most Elvish names and phrases encountered in The Lord of the Rings, including place names like Minas Tirith and Osgiliath.",
        category: "language",
        sources: ["general"],
        quizPotential: true,
        tags: ["sindarin", "welsh", "elvish"],
    },
    {
        id: "fact-mae-govannen",
        title: "'Mae Govannen' Means 'Well Met'",
        content:
            "The Sindarin greeting 'Mae govannen' translates to 'well met' and is one of the most recognizable Elvish phrases in Tolkien's works. It is the greeting Glorfindel uses when he meets Aragorn and the hobbits on the road to Rivendell. In Peter Jackson's films, it became an iconic phrase that helped bring the Elvish languages to life for mainstream audiences.",
        category: "language",
        sources: ["lotr", "pj-lotr"],
        quizPotential: true,
        tags: ["sindarin", "greeting", "elvish"],
    },
    {
        id: "fact-one-ring-inscription",
        title: "The One Ring's Inscription Is in Black Speech",
        content:
            "The inscription on the One Ring — 'Ash nazg durbatuluk, ash nazg gimbatul, ash nazg thrakatuluk, agh burzum-ishi krimpatul' — is written in the Black Speech of Mordor, a language Sauron devised for his servants. It translates to 'One Ring to rule them all, One Ring to find them, One Ring to bring them all, and in the darkness bind them.' It is the only known example of Black Speech in a pure form.",
        category: "language",
        sources: ["lotr"],
        quizPotential: true,
        tags: ["one-ring", "black-speech", "inscription"],
    },
    {
        id: "fact-tolkien-philologist",
        title: "Tolkien Was a Philologist at Oxford",
        content:
            "J.R.R. Tolkien was Rawlinson and Bosworth Professor of Anglo-Saxon at Oxford University from 1925 to 1945, and later Merton Professor of English Language and Literature until 1959. His deep expertise in Old English, Old Norse, Gothic, and medieval literature directly shaped Middle-earth. He famously stated that his languages came first, and the stories grew from them to provide a world in which they could be spoken.",
        category: "language",
        sources: ["general"],
        quizPotential: true,
        tags: ["tolkien", "oxford", "philology"],
    },
    {
        id: "fact-elvish-two-branches",
        title: "Elvish Has Two Main Language Branches",
        content:
            "Tolkien's Elvish languages stem from a single ancestral tongue, Primitive Quendian, which split into two major branches: Quenya (High Elvish) and Sindarin (Grey Elvish). Quenya was preserved by the Elves who journeyed to Valinor, while Sindarin evolved among those who remained in Middle-earth under starlight. This mirrored real-world linguistic divergence patterns that Tolkien studied as a professional philologist.",
        category: "language",
        sources: ["silmarillion", "general"],
        quizPotential: false,
        tags: ["quenya", "sindarin", "linguistics"],
    },

    // ─────────────────────────────────────────────
    // ARTIFACTS (~8 facts)
    // ─────────────────────────────────────────────
    {
        id: "fact-narsil-anduril",
        title: "Narsil Was Reforged Into Anduril",
        content:
            "Narsil, the sword of Elendil, was broken when Elendil fell fighting Sauron at the end of the Second Age. His son Isildur used the broken hilt-shard to cut the One Ring from Sauron's hand. The shards were kept in Rivendell for nearly three thousand years until the Elves reforged the sword as Anduril, 'Flame of the West,' for Aragorn to wield as he claimed the throne of Gondor.",
        category: "artifacts",
        sources: ["lotr"],
        quizPotential: true,
        tags: ["narsil", "anduril", "aragorn", "sauron"],
    },
    {
        id: "fact-glamdring-orcrist",
        title: "Glamdring and Orcrist Were Forged in Gondolin",
        content:
            "Glamdring ('Foe-hammer') and Orcrist ('Goblin-cleaver') were ancient Elven blades forged in the hidden city of Gondolin during the First Age. They were discovered by Gandalf and Thorin's company in a troll hoard during the events of The Hobbit. Glamdring became Gandalf's sword, while Orcrist was claimed by Thorin Oakenshield. Both blades glowed blue in the presence of orcs, as did Bilbo's knife, Sting.",
        category: "artifacts",
        sources: ["hobbit", "lotr"],
        quizPotential: true,
        tags: ["glamdring", "orcrist", "gondolin", "swords"],
    },
    {
        id: "fact-palantiri-seven",
        title: "There Were Seven Palantiri, the Seeing Stones",
        content:
            "The Palantiri were seven crystal spheres made by Feanor in Valinor and brought to Middle-earth by the Numenoreans. They allowed communication across vast distances and could show visions of faraway places. By the time of the War of the Ring, only three remained in use: the Orthanc-stone used by Saruman, the Ithil-stone captured by Sauron, and the Anor-stone held by Denethor in Minas Tirith.",
        category: "artifacts",
        sources: ["lotr", "silmarillion", "unfinished-tales"],
        quizPotential: true,
        tags: ["palantiri", "seeing-stones", "feanor"],
    },
    {
        id: "fact-phial-galadriel",
        title: "The Phial of Galadriel Contains Earendil's Light",
        content:
            "The Phial of Galadriel, given to Frodo in Lothlorien, contains the light of Earendil's star — which is itself a Silmaril bound to the brow of Earendil as he sails the heavens. This means the Phial carries a fragment of the original light of the Two Trees of Valinor, passed down through the Silmaril. It proved crucial against Shelob, whose ancestor Ungoliant had tried to consume that very same light ages ago.",
        category: "artifacts",
        sources: ["lotr", "silmarillion"],
        quizPotential: true,
        tags: ["phial", "galadriel", "earendil", "silmaril"],
    },
    {
        id: "fact-mithril-coat",
        title: "Bilbo's Mithril Coat Was Worth More Than the Shire",
        content:
            "The coat of mithril rings given to Bilbo by Thorin Oakenshield in Erebor was later passed to Frodo and saved his life in the Mines of Moria. Gimli declared that its value was greater than that of the entire Shire and everything in it. Mithril was found only in the mines of Khazad-dum, and the Dwarves' delving ever deeper for it ultimately awoke the Balrog that destroyed their kingdom.",
        category: "artifacts",
        sources: ["hobbit", "lotr"],
        quizPotential: true,
        tags: ["mithril", "bilbo", "frodo", "khazad-dum"],
    },
    {
        id: "fact-sting-glows-blue",
        title: "Sting Glows Blue When Orcs Are Nearby",
        content:
            "Sting, the Elvish short sword found in the troll hoard alongside Glamdring and Orcrist, was named by Bilbo Baggins after he used it to fight off the giant spiders of Mirkwood. Like other blades forged in Gondolin during the First Age, Sting emits a blue glow when orcs or goblins are in close proximity, serving as an invaluable early warning system. Bilbo passed Sting to Frodo before the Fellowship departed Rivendell.",
        category: "artifacts",
        sources: ["hobbit", "lotr"],
        quizPotential: true,
        tags: ["sting", "bilbo", "frodo", "gondolin"],
    },
    {
        id: "fact-rings-of-power-numbers",
        title: "The Rings of Power: Three, Seven, Nine, and One",
        content:
            "The Rings of Power were forged by the Elven-smiths of Eregion under Sauron's guidance: Three Rings for the Elves, Seven for the Dwarf-lords, Nine for Mortal Men, and the One Ring made by Sauron alone in the fires of Mount Doom. The Three Elven Rings — Narya (Fire), Nenya (Water), and Vilya (Air) — were never touched by Sauron and were wielded by Gandalf, Galadriel, and Elrond respectively.",
        category: "artifacts",
        sources: ["lotr", "silmarillion"],
        quizPotential: true,
        tags: ["rings-of-power", "one-ring", "three-rings"],
    },
    {
        id: "fact-silmarils-fate",
        title: "The Three Silmarils Were Lost to Sky, Sea, and Earth",
        content:
            "After the War of Wrath at the end of the First Age, the three Silmarils were scattered forever. Earendil carried one into the sky aboard his ship Vingilot, where it became the Evening Star. Maedhros, tormented by the Oath of Feanor, cast himself into a fiery chasm with the second. Maglor threw the third into the sea and wandered the shores forever in grief. Thus the Silmarils were lost to sky, earth, and sea.",
        category: "artifacts",
        sources: ["silmarillion"],
        quizPotential: true,
        tags: ["silmarils", "feanor", "first-age"],
    },

    // ─────────────────────────────────────────────
    // CREATURES (~6 facts)
    // ─────────────────────────────────────────────
    {
        id: "fact-ents-oldest",
        title: "Ents Are Among the Oldest Living Things in Middle-earth",
        content:
            "Treebeard claims to be the oldest living thing in Middle-earth, having walked the forests since the Elder Days. The Ents were 'awakened' by the Elves to be shepherds of the trees after Yavanna, the Vala of growing things, feared that her creations would be defenseless against axes. By the time of the War of the Ring, the Ents had lost the Entwives and their numbers had dwindled, with many becoming tree-like and dormant.",
        category: "creatures",
        sources: ["lotr", "silmarillion"],
        quizPotential: true,
        tags: ["ents", "treebeard", "yavanna"],
    },
    {
        id: "fact-durins-bane",
        title: "The Balrog of Moria Is Known as Durin's Bane",
        content:
            "The Balrog encountered by the Fellowship in Moria had been lurking in the depths since at least the year 1980 of the Third Age, when the Dwarves of Khazad-dum awakened it through their deep mining for mithril. It slew King Durin VI and became known as Durin's Bane. Gandalf's battle with the Balrog lasted from the Bridge of Khazad-dum to the peak of Zirakzigil, spanning ten full days.",
        category: "creatures",
        sources: ["lotr"],
        quizPotential: true,
        tags: ["balrog", "moria", "gandalf", "durin"],
    },
    {
        id: "fact-smaug-last-dragon",
        title: "Smaug Was the Last of the Great Dragons",
        content:
            "Smaug, who destroyed the Dwarf kingdom of Erebor and the nearby city of Dale in 2770 of the Third Age, was the last great fire-drake of Middle-earth. He was killed by Bard the Bowman with a black arrow, shot into a bare patch in the hollow of his left breast revealed by the thrush. Tolkien described Smaug as the greatest of the dragons of his day, though far lesser than Ancalagon the Black of the First Age.",
        category: "creatures",
        sources: ["hobbit"],
        quizPotential: true,
        tags: ["smaug", "erebor", "dragons", "bard"],
    },
    {
        id: "fact-wargs-wolves",
        title: "Wargs Are Evil Wolf-like Creatures Distinct from Ordinary Wolves",
        content:
            "Wargs in Tolkien's world are a sinister breed of wolf-like creatures often allied with Orcs, who ride them as mounts. They possess a dark intelligence that sets them apart from ordinary wolves. In The Hobbit, Gandalf, Bilbo, and the Dwarves are treed by a combined pack of Wargs and Goblins. Peter Jackson's films depicted Wargs as hyena-like monstrosities rather than giant wolves.",
        category: "creatures",
        sources: ["lotr", "hobbit", "pj-lotr"],
        quizPotential: false,
        tags: ["wargs", "wolves", "orcs"],
    },
    {
        id: "fact-mumakil-oliphaunts",
        title: "Mumakil Were the Massive War-Beasts of Harad",
        content:
            "Mumakil, known to hobbits as Oliphaunts, were enormous elephant-like beasts used by the Haradrim in battle. Sam's famous rhyme about the Oliphaunt foreshadows his awe at seeing one during the Battle of the Pelennor Fields. In the films, Legolas famously single-handedly takes down a Mumakil in one of the trilogy's most spectacular action sequences. Tolkien described them as the largest land animals in Middle-earth.",
        category: "creatures",
        sources: ["lotr", "pj-lotr"],
        quizPotential: true,
        tags: ["mumakil", "oliphaunts", "harad", "pelennor"],
    },
    {
        id: "fact-fell-beasts-nazgul",
        title: "The Nazgul Rode Fell Beasts, Not Dragons",
        content:
            "The flying mounts of the Nazgul are never given a specific name by Tolkien — they are simply described as 'fell beasts.' They are not dragons but rather ancient creatures bred or corrupted by Sauron, described as featherless with vast pinions, beaked heads, and a nauseating stench. Eowyn and Merry destroyed the Witch-king's fell beast during the Battle of the Pelennor Fields before slaying the Nazgul lord himself.",
        category: "creatures",
        sources: ["lotr"],
        quizPotential: false,
        tags: ["nazgul", "fell-beasts", "eowyn"],
    },

    // ─────────────────────────────────────────────
    // FILM PRODUCTION (~10 facts)
    // ─────────────────────────────────────────────
    {
        id: "fact-filmed-simultaneously",
        title: "All Three LOTR Films Were Shot Simultaneously",
        content:
            "Peter Jackson made cinematic history by filming all three Lord of the Rings movies simultaneously in New Zealand over a continuous 438-day principal photography shoot from October 1999 to December 2000. This unprecedented approach allowed for a consistent vision across the trilogy and made economic sense given the massive New Zealand locations. Additional pickup shoots continued each year through 2003.",
        category: "film-production",
        sources: ["pj-lotr"],
        quizPotential: true,
        tags: ["peter-jackson", "new-zealand", "filming"],
    },
    {
        id: "fact-serkis-motion-capture",
        title: "Andy Serkis Pioneered Motion Capture as Gollum",
        content:
            "Andy Serkis's portrayal of Gollum in the LOTR trilogy was groundbreaking in its use of motion capture technology, setting a new standard for digital character performance. Serkis performed every scene on set with the other actors, and his facial expressions and movements were later translated onto the CGI character. This work paved the way for later motion-capture performances in films like Avatar, Planet of the Apes, and King Kong.",
        category: "film-production",
        sources: ["pj-lotr"],
        quizPotential: true,
        tags: ["gollum", "andy-serkis", "motion-capture", "cgi"],
    },
    {
        id: "fact-viggo-broken-toe",
        title: "Viggo Mortensen Broke His Toe Kicking the Orc Helmet",
        content:
            "In The Two Towers, when Aragorn kicks an Orc helmet near the burning pile of carcasses at Fangorn and screams in anguish, believing Merry and Pippin dead, Viggo Mortensen's scream was real — he broke two toes on the kick. Peter Jackson kept the take because the pain produced a genuinely raw emotional reaction. Mortensen was known for his intense dedication, including actually deflecting a real knife thrown at him during another scene.",
        category: "film-production",
        sources: ["pj-lotr"],
        quizPotential: true,
        tags: ["viggo-mortensen", "aragorn", "injury"],
    },
    {
        id: "fact-sean-bean-mountain",
        title: "Sean Bean Hiked to Filming Locations in Full Costume",
        content:
            "Sean Bean, who played Boromir, was so afraid of flying in helicopters that he would hike two hours up the mountain to the filming locations in New Zealand while the rest of the cast flew up. He would arrive in full Boromir costume and armor, already in character by the time shooting began. This dedication to the role became one of the most beloved behind-the-scenes stories from the production.",
        category: "film-production",
        sources: ["pj-lotr"],
        quizPotential: true,
        tags: ["sean-bean", "boromir", "new-zealand"],
    },
    {
        id: "fact-christopher-lee-tolkien",
        title: "Christopher Lee Was the Only Cast Member to Have Met Tolkien",
        content:
            "Sir Christopher Lee, who played Saruman, was the only member of the LOTR cast to have personally met J.R.R. Tolkien. Lee was a devoted fan who re-read The Lord of the Rings every year and had originally hoped to play Gandalf. He reportedly received Tolkien's blessing to play a role in any future adaptation. Lee also corrected Peter Jackson on the sound a person makes when stabbed in the back, drawing on his wartime intelligence experience.",
        category: "film-production",
        sources: ["pj-lotr"],
        quizPotential: true,
        tags: ["christopher-lee", "saruman", "tolkien"],
    },
    {
        id: "fact-pj-two-films",
        title: "Peter Jackson Originally Planned Only Two Films",
        content:
            "Peter Jackson initially developed The Lord of the Rings as a two-film project for Miramax. When Miramax wanted to cut it down to a single film, Jackson took the project to New Line Cinema, where executive Robert Shaye made the legendary decision to greenlight three films instead of two. This decision proved to be one of the most commercially successful gambles in cinema history, with the trilogy earning nearly $3 billion worldwide.",
        category: "film-production",
        sources: ["pj-lotr"],
        quizPotential: true,
        tags: ["peter-jackson", "new-line", "miramax"],
    },
    {
        id: "fact-rotk-eleven-oscars",
        title: "Return of the King Won All 11 Oscars It Was Nominated For",
        content:
            "The Return of the King swept the 2004 Academy Awards, winning all eleven categories in which it was nominated, including Best Picture and Best Director. This tied the record for most Oscar wins held by Ben-Hur and Titanic. It was the first fantasy film to win Best Picture and remains the final film in a trilogy to receive the award. The clean sweep was seen as a recognition of the entire trilogy's achievement.",
        category: "film-production",
        sources: ["pj-lotr"],
        quizPotential: true,
        tags: ["oscars", "return-of-the-king", "awards"],
    },
    {
        id: "fact-helms-deep-shoot",
        title: "The Battle of Helm's Deep Took Four Months of Night Shoots",
        content:
            "The Battle of Helm's Deep in The Two Towers required approximately four months of grueling night shoots to complete. The crew filmed in rain and mud at the massive Helm's Deep set built at a quarry in Dry Creek, near Wellington. The relentless nighttime schedule was so exhausting that many cast members, including Orlando Bloom and John Rhys-Davies, later described it as the most physically demanding period of the entire production.",
        category: "film-production",
        sources: ["pj-lotr"],
        quizPotential: true,
        tags: ["helms-deep", "two-towers", "battle"],
    },
    {
        id: "fact-weta-armor",
        title: "WETA Workshop Created 48,000 Pieces of Armor",
        content:
            "WETA Workshop, the New Zealand-based effects company founded by Peter Jackson and partners, manufactured approximately 48,000 individual pieces of armor, 10,000 arrows, and 500 bows for the Lord of the Rings trilogy. Every piece of armor and weaponry was handcrafted in detail, even for background extras. The workshop also created over 1,800 pairs of hobbit feet made from silicone and individually hand-painted each morning.",
        category: "film-production",
        sources: ["pj-lotr"],
        quizPotential: false,
        tags: ["weta-workshop", "props", "armor"],
    },
    {
        id: "fact-shire-planted-early",
        title: "The Shire Set Was Planted a Year Before Filming",
        content:
            "Peter Jackson had the Hobbiton set in Matamata, New Zealand, constructed and landscaped a full year before filming began so that the gardens, hedges, and vegetation would look naturally established and lived-in by the time cameras rolled. Real vegetables were grown in the hobbit gardens, and every detail was curated to look authentically rustic. The set has since become one of New Zealand's most popular tourist attractions.",
        category: "film-production",
        sources: ["pj-lotr"],
        quizPotential: true,
        tags: ["hobbiton", "shire", "new-zealand", "set-design"],
    },

    // ─────────────────────────────────────────────
    // CAST TRIVIA (~8 facts)
    // ─────────────────────────────────────────────
    {
        id: "fact-connery-gandalf",
        title: "Sean Connery Was Offered the Role of Gandalf",
        content:
            "Sean Connery was reportedly offered the role of Gandalf and a substantial percentage of the box office gross, which would have earned him hundreds of millions of dollars. He turned it down, famously saying he 'didn't understand the material.' Ian McKellen's casting proved to be one of the defining decisions of the trilogy, earning him an Academy Award nomination for The Fellowship of the Ring.",
        category: "cast-trivia",
        sources: ["pj-lotr"],
        quizPotential: true,
        tags: ["sean-connery", "ian-mckellen", "gandalf", "casting"],
    },
    {
        id: "fact-townsend-replaced",
        title: "Stuart Townsend Was Fired as Aragorn After Four Days",
        content:
            "Irish actor Stuart Townsend was originally cast as Aragorn and traveled to New Zealand for rehearsals and early filming. After about four days, Peter Jackson realized Townsend was too young for the role and replaced him with Viggo Mortensen, who was contacted by his son and agreed to join the production with almost no preparation time. Mortensen arrived in New Zealand and began filming almost immediately.",
        category: "cast-trivia",
        sources: ["pj-lotr"],
        quizPotential: true,
        tags: ["stuart-townsend", "viggo-mortensen", "aragorn", "casting"],
    },
    {
        id: "fact-rhys-davies-tallest",
        title: "John Rhys-Davies Is the Tallest Actor Playing the Shortest Race",
        content:
            "John Rhys-Davies, who played Gimli the Dwarf, stands 6 feet 1 inch tall — making him the tallest of the principal actors in the Fellowship, yet he played a member of the shortest race. The production used scale doubles, forced perspective, and camera tricks to make him appear dwarf-sized. Rhys-Davies also suffered severe allergic reactions to his prosthetic makeup throughout filming, requiring frequent medical attention.",
        category: "cast-trivia",
        sources: ["pj-lotr"],
        quizPotential: true,
        tags: ["john-rhys-davies", "gimli", "scale"],
    },
    {
        id: "fact-bloom-broken-rib",
        title: "Orlando Bloom Cracked a Rib Falling Off a Horse",
        content:
            "Orlando Bloom, who played Legolas, cracked a rib when he fell off a horse during filming. Despite the injury, he continued to perform many of his own stunts throughout the production. Bloom also broke his nose in a separate incident during a fight scene. The physical toll on the cast was considerable, with nearly every principal actor sustaining at least one injury during the 438-day shoot.",
        category: "cast-trivia",
        sources: ["pj-lotr"],
        quizPotential: false,
        tags: ["orlando-bloom", "legolas", "injury"],
    },
    {
        id: "fact-hobbit-tattoos",
        title: "The Four Hobbit Actors Got Matching Elvish Tattoos",
        content:
            "Elijah Wood, Sean Astin, Billy Boyd, and Dominic Monaghan — the four hobbit actors — got matching tattoos of the Elvish word for 'nine' (referring to the nine members of the Fellowship) in Tengwar script. The other Fellowship members Orlando Bloom, Viggo Mortensen, Ian McKellen, and John Rhys-Davies also got the tattoo, though Rhys-Davies had his scale double Brett Beattie get it instead. Only Sean Bean declined.",
        category: "cast-trivia",
        sources: ["pj-lotr"],
        quizPotential: true,
        tags: ["hobbits", "tattoo", "fellowship", "tengwar"],
    },
    {
        id: "fact-blanchett-ears",
        title: "Cate Blanchett Kept Galadriel's Prosthetic Ears",
        content:
            "Cate Blanchett asked to keep her prosthetic Elf ears from the production as a memento. She later revealed that her children loved playing with them. Blanchett's ethereal portrayal of Galadriel was so iconic that she was invited to reprise the role in Peter Jackson's Hobbit trilogy and later in Amazon's Rings of Power series, making her one of the few actors to appear across multiple Tolkien adaptations.",
        category: "cast-trivia",
        sources: ["pj-lotr"],
        quizPotential: false,
        tags: ["cate-blanchett", "galadriel", "prosthetics"],
    },
    {
        id: "fact-elijah-wood-audition",
        title: "Elijah Wood Filmed His Audition in the Woods Wearing a Homemade Costume",
        content:
            "Elijah Wood created a homemade audition tape for the role of Frodo, filming himself in a wooded area while wearing a hobbit-like costume he had assembled himself. He read passages directly from the book, and the tape so impressed Peter Jackson and the casting team that Wood was cast as the lead. His passion for the material was evident from the start and set the tone for the entire production's reverence for Tolkien's work.",
        category: "cast-trivia",
        sources: ["pj-lotr"],
        quizPotential: true,
        tags: ["elijah-wood", "frodo", "audition", "casting"],
    },
    {
        id: "fact-mortensen-bought-horses",
        title: "Viggo Mortensen Bought His Horses After Filming",
        content:
            "Viggo Mortensen became so attached to the horses he worked with during filming that he purchased them after production wrapped. He bought Brego, the horse he rode as Aragorn, as well as two other horses used in the films. Mortensen is an accomplished horseman, and his bond with the animals lent an authenticity to Aragorn's riding scenes that would have been difficult to replicate with a less experienced actor.",
        category: "cast-trivia",
        sources: ["pj-lotr"],
        quizPotential: true,
        tags: ["viggo-mortensen", "aragorn", "horses"],
    },

    // ─────────────────────────────────────────────
    // ADAPTATION DIFFERENCES (~8 facts)
    // ─────────────────────────────────────────────
    {
        id: "fact-bombadil-cut",
        title: "Tom Bombadil Was Cut from the Films",
        content:
            "Tom Bombadil, who rescues the hobbits in the Old Forest and from the Barrow-wights early in The Fellowship of the Ring, was entirely cut from Peter Jackson's films. Jackson felt the character, while beloved by readers, did not advance the central plot and would slow down the film's pacing. This remains one of the most debated omissions among Tolkien fans, as the Barrow-wight encounter is also where the hobbits obtain their Westernesse blades.",
        category: "adaptation-differences",
        sources: ["lotr", "pj-lotr"],
        quizPotential: true,
        tags: ["tom-bombadil", "omission", "old-forest"],
    },
    {
        id: "fact-glorfindel-arwen",
        title: "Glorfindel Was Replaced by Arwen at the Ford of Bruinen",
        content:
            "In the book, it is the Elf-lord Glorfindel who rescues Frodo and rides with him to the Ford of Bruinen, where the Ringwraiths are swept away by the flood. In Peter Jackson's films, this role was given to Arwen to expand her character and provide a stronger on-screen presence for the Aragorn-Arwen romance. Glorfindel, a legendary figure who once slew a Balrog in the First Age, does not appear in the films at all.",
        category: "adaptation-differences",
        sources: ["lotr", "pj-lotr"],
        quizPotential: true,
        tags: ["glorfindel", "arwen", "bruinen"],
    },
    {
        id: "fact-scouring-removed",
        title: "The Scouring of the Shire Was Removed from the Films",
        content:
            "One of the most significant omissions from Jackson's trilogy is the Scouring of the Shire, where the hobbits return home to find Saruman has industrialized and enslaved their homeland. In the book, the hobbits lead a rebellion to free the Shire, demonstrating how the quest has transformed them. Tolkien considered it a crucial chapter, but Jackson replaced it with Frodo's vision in Galadriel's mirror and the extended Grey Havens farewell.",
        category: "adaptation-differences",
        sources: ["lotr", "pj-lotr"],
        quizPotential: true,
        tags: ["scouring", "shire", "saruman"],
    },
    {
        id: "fact-saruman-death-moved",
        title: "Saruman's Death Was Moved from the Shire to Isengard",
        content:
            "In the books, Saruman travels to the Shire after his defeat at Isengard and rules it as 'Sharkey' until the hobbits overthrow him. He is killed by Grima Wormtongue on the doorstep of Bag End. In the extended edition of the films, Saruman is killed by Wormtongue at the top of Orthanc tower in Isengard, and the Scouring of the Shire subplot is entirely removed. Christopher Lee was reportedly unhappy about his death being cut from the theatrical release.",
        category: "adaptation-differences",
        sources: ["lotr", "pj-lotr"],
        quizPotential: true,
        tags: ["saruman", "grima", "isengard", "shire"],
    },
    {
        id: "fact-faramir-tempted",
        title: "Faramir Was Tempted by the Ring in the Film but Not in the Book",
        content:
            "In Tolkien's novel, Faramir resists the temptation of the One Ring almost immediately, declaring 'I would not take this thing, if it lay by the highway.' In the film, Faramir initially plans to bring the Ring to his father Denethor in Gondor and only releases Frodo after witnessing the Ring's corrupting power firsthand. Peter Jackson felt that having a human resist the Ring so easily would undermine its established threat and Boromir's sacrifice.",
        category: "adaptation-differences",
        sources: ["lotr", "pj-lotr"],
        quizPotential: true,
        tags: ["faramir", "one-ring", "temptation"],
    },
    {
        id: "fact-aragorn-reluctant-king",
        title: "Aragorn Is a More Reluctant King in the Films",
        content:
            "In the books, Aragorn is confident in his destiny and actively pursues his claim to the throne of Gondor from the outset, carrying the shards of Narsil and displaying the banner of Elendil. In the films, he is portrayed as far more reluctant, fearing the weakness of Isildur's bloodline and doubting his worthiness. This change gave Aragorn a dramatic character arc across the trilogy that culminates in his coronation in Return of the King.",
        category: "adaptation-differences",
        sources: ["lotr", "pj-lotr"],
        quizPotential: false,
        tags: ["aragorn", "kingship", "characterization"],
    },
    {
        id: "fact-arwen-expanded",
        title: "Arwen's Role Was Significantly Expanded from the Books",
        content:
            "In the books, Arwen Undomiel appears only briefly and most of her story is confined to the appendices. Peter Jackson greatly expanded her role in the films, giving her Glorfindel's rescue at the Bruinen, adding scenes of her choosing mortality, and tying her fate to the reforging of Anduril. Liv Tyler's prominent role was initially controversial among purists but helped provide the trilogy with a more developed romantic subplot.",
        category: "adaptation-differences",
        sources: ["lotr", "pj-lotr"],
        quizPotential: true,
        tags: ["arwen", "liv-tyler", "expanded-role"],
    },
    {
        id: "fact-denethor-nobler-book",
        title: "Denethor Was Far More Noble and Capable in the Books",
        content:
            "The films portray Denethor as a somewhat unhinged, callous ruler who favors Boromir and mistreats Faramir. In the books, Denethor is a proud, formidable, and intelligent Steward who has been secretly using a Palantir to contest Sauron's will for years. His madness comes from a genuine despair born of seeing Sauron's overwhelming forces, not from mere selfishness. Tolkien's Denethor is a tragic figure, not a contemptible one.",
        category: "adaptation-differences",
        sources: ["lotr", "pj-lotr"],
        quizPotential: false,
        tags: ["denethor", "gondor", "characterization"],
    },

    // ─────────────────────────────────────────────
    // GEOGRAPHY (~5 facts)
    // ─────────────────────────────────────────────
    {
        id: "fact-mordor-size",
        title: "Mordor Is Roughly the Size of Austria",
        content:
            "Based on the scale maps Tolkien provided, Mordor — the dark land enclosed by the Ash Mountains to the north and the Mountains of Shadow to the west and south — is roughly equivalent in area to modern-day Austria, approximately 80,000 square kilometers. Despite its reputation as a barren wasteland, the inland Sea of Nurnen in southern Mordor supported vast slave-worked farmlands that fed Sauron's armies.",
        category: "geography",
        sources: ["lotr"],
        quizPotential: true,
        tags: ["mordor", "maps", "scale"],
    },
    {
        id: "fact-shire-english-countryside",
        title: "The Shire Is Based on the English Countryside",
        content:
            "Tolkien explicitly stated that the Shire was based on the rural English countryside of his childhood, particularly the Warwickshire village of Sarehole where he lived as a boy. The rolling green hills, hedgerows, and agrarian lifestyle of the hobbits reflect an idealized version of pre-industrial England. Tolkien placed the Shire at the same latitude as Oxford on his maps, reinforcing its connection to his beloved English Midlands.",
        category: "geography",
        sources: ["lotr", "general"],
        quizPotential: true,
        tags: ["shire", "england", "tolkien"],
    },
    {
        id: "fact-minas-tirith-levels",
        title: "Minas Tirith Has Seven Levels",
        content:
            "The White City of Minas Tirith is built into the side of Mount Mindolluin and consists of seven concentric levels carved into the rock, each wall higher than the one below. The city was originally called Minas Anor, the Tower of the Setting Sun, and served as the capital of Gondor after Osgiliath fell into ruin. The topmost level houses the Citadel, the White Tree, and the throne room of the Stewards and Kings.",
        category: "geography",
        sources: ["lotr"],
        quizPotential: true,
        tags: ["minas-tirith", "gondor", "architecture"],
    },
    {
        id: "fact-erebor-lonely-mountain",
        title: "Erebor, the Lonely Mountain, Held the Greatest Dwarf Hoard",
        content:
            "Erebor, known as the Lonely Mountain, sits isolated in the northeast of Middle-earth and was the site of the greatest Dwarf kingdom of the Third Age. It was established by Thrain I after the Dwarves were driven from Moria, and its treasure hoard grew so vast that it attracted Smaug the Dragon. After Smaug's defeat in the events of The Hobbit, Erebor was refounded under Dain Ironfoot and became a key ally of Gondor.",
        category: "geography",
        sources: ["hobbit", "lotr"],
        quizPotential: false,
        tags: ["erebor", "dwarves", "smaug"],
    },
    {
        id: "fact-rivendell-imladris",
        title: "Rivendell's Elvish Name Is Imladris, Meaning 'Deep Dale of the Cleft'",
        content:
            "Rivendell, or Imladris in Sindarin, was founded by Elrond in the year 1697 of the Second Age as a refuge during the war against Sauron. It sits in a deep hidden valley at the edge of the Misty Mountains. Rivendell served as one of the last homely houses east of the Sea and was the site of the Council of Elrond, where the Fellowship of the Ring was formed. After the War of the Ring, Elrond departed and Rivendell slowly faded.",
        category: "geography",
        sources: ["lotr", "silmarillion"],
        quizPotential: true,
        tags: ["rivendell", "imladris", "elrond"],
    },

    // ─────────────────────────────────────────────
    // CULTURE (~5 facts)
    // ─────────────────────────────────────────────
    {
        id: "fact-hobbit-meals",
        title: "Hobbits Observe Seven Meals a Day",
        content:
            "Hobbits are known for their love of food and observe up to seven meals a day if they can manage them: breakfast, second breakfast, elevenses, luncheon, afternoon tea, dinner, and supper. This cultural detail, played for laughs in the films when Pippin asks about second breakfast, reflects Tolkien's affectionate portrayal of hobbits as embodying the simple comforts of rural English life. Their love of food is matched only by their love of pipe-weed and good ale.",
        category: "culture",
        sources: ["lotr"],
        quizPotential: true,
        tags: ["hobbits", "food", "meals"],
    },
    {
        id: "fact-elves-waking-dreams",
        title: "Elves Do Not Sleep but Enter Waking Dreams",
        content:
            "Elves in Tolkien's world do not sleep as mortals do. Instead, they rest by entering a state of waking meditation or 'dreams,' during which they can revisit memories and commune with the world around them while remaining aware of their surroundings. This is why Legolas can appear to walk with open eyes while resting during the Fellowship's journey. Elves are also immortal and do not age, though they can be killed by violence or grief.",
        category: "culture",
        sources: ["lotr"],
        quizPotential: true,
        tags: ["elves", "sleep", "immortality"],
    },
    {
        id: "fact-dwarves-aule",
        title: "The Dwarves Were Created by Aule in Secret",
        content:
            "Unlike the other races, the Dwarves were not part of Eru Iluvatar's original design. They were created in secret by Aule the Smith, who was impatient for the Children of Iluvatar to awaken and wanted beings to teach his crafts to. When Iluvatar discovered this, he gave the Dwarves true life rather than destroying them, but decreed they must sleep until after the Elves awakened. This origin explains the Dwarves' innate skill with stone and metal.",
        category: "culture",
        sources: ["silmarillion"],
        quizPotential: true,
        tags: ["dwarves", "aule", "creation"],
    },
    {
        id: "fact-numenorean-lifespan",
        title: "Numenoreans Could Live Over 200 Years",
        content:
            "The Numenoreans, also called the Dunedain, were blessed with greatly extended lifespans as a reward for their ancestors' faithfulness during the wars against Morgoth. Early Numenorean kings could live over 400 years, though this lifespan diminished over the generations. By the time of Aragorn, who lived to 210 years, this gift had faded significantly. Their desire for true immortality ultimately led to Numenor's destruction when they attacked Valinor.",
        category: "culture",
        sources: ["lotr", "silmarillion"],
        quizPotential: true,
        tags: ["numenor", "dunedain", "lifespan"],
    },
    {
        id: "fact-ents-slow-speech",
        title: "Ents Take an Extraordinarily Long Time to Say Anything",
        content:
            "The Entish language is described as slow, sonorous, and incredibly verbose — a single Entish word can take a very long time to pronounce, as their language is agglutinative and incorporates the entire history and nature of whatever is being discussed. Treebeard tells Merry and Pippin that Ents never say anything unless it is worth taking a long time to say. The Entmoot that decided the march on Isengard took three full days, which Treebeard considered hasty.",
        category: "culture",
        sources: ["lotr"],
        quizPotential: true,
        tags: ["ents", "entish", "language", "treebeard"],
    },
];
