import type { TimelineEvent } from "./types";

export const thirdAgeEvents: TimelineEvent[] = [
    {
        id: "ta-disaster-gladden-fields",
        age: "third-age",
        year: "TA 2",
        title: "Disaster of the Gladden Fields",
        summary:
            "Isildur was ambushed by Orcs at the Gladden Fields; the One Ring slipped from his finger and was lost in the River Anduin.",
        details:
            "Isildur, marching north from Gondor to Arnor with a small escort of about 200 men, was ambushed by a large Orc force at the Gladden Fields near the Anduin. Isildur put on the Ring to become invisible and fled toward the river, but the Ring betrayed him, slipping from his finger as he swam. Isildur became visible and was killed by Orc arrows. Only three of his company survived: Ohtar, his esquire, who had been sent ahead with the shards of Narsil, and two others. The Ring was lost in the riverbed for nearly 2,500 years.",
        tags: ["tragedy", "ring"],
        significance: 3,
        relatedCharacters: ["Isildur"],
        relatedLocations: ["Gladden Fields", "Anduin"],
    },
    {
        id: "ta-kingdoms-split",
        age: "third-age",
        year: "TA 2",
        title: "Division of the Dunedain Kingdoms",
        summary:
            "With Isildur's death, the high kingship was lost, and Gondor and Arnor became separate realms.",
        details:
            "Isildur's three elder sons had been slain at the Gladden Fields. His youngest son Valandil, raised in Rivendell, inherited the kingdom of Arnor but not the high kingship over both realms. Gondor was ruled by Meneldil, son of Anarion. The two kingdoms drifted apart over the centuries. Arnor itself later split into three successor states: Arthedain, Cardolan, and Rhudaur, weakening the northern Dunedain further. This division of the Dunedain would not be healed until Aragorn's coronation at the end of the Third Age.",
        tags: ["kingdom"],
        significance: 2,
        relatedCharacters: ["Valandil", "Meneldil"],
        relatedLocations: ["Arnor", "Gondor", "Rivendell"],
    },
    {
        id: "ta-witch-king-angmar",
        age: "third-age",
        year: "TA 1300",
        title: "Rise of the Witch-king of Angmar",
        summary:
            "The Witch-king, chief of the Nazgul, established the realm of Angmar in the north to destroy the remnants of Arnor.",
        details:
            "Around TA 1300, the Witch-king of Angmar established a kingdom in the far north beyond the Ettenmoors. His purpose was to destroy the Dunedain of the North, the weakened successor states of Arnor. Over the following centuries, Angmar waged relentless war. Rhudaur fell first, becoming a vassal. Cardolan was conquered and its people wiped out by war and the Great Plague. The Witch-king sent Barrow-wights to inhabit the Barrow-downs. Only Arthedain, under the line of Isildur, resisted, but it too was doomed without sufficient aid.",
        tags: ["war", "corruption", "kingdom"],
        significance: 2,
        relatedCharacters: ["Witch-king"],
        relatedLocations: [
            "Angmar",
            "Arnor",
            "Rhudaur",
            "Cardolan",
            "Arthedain",
        ],
    },
    {
        id: "ta-fall-arnor",
        age: "third-age",
        year: "TA 1974",
        title: "Fall of Arthedain, Last Remnant of Arnor",
        summary:
            "The Witch-king of Angmar conquered Arthedain, the last successor kingdom of Arnor, capturing the capital Fornost.",
        details:
            "In TA 1974, the Witch-king's forces overran Arthedain and captured Fornost, the capital. King Arvedui fled to the Ice Bay of Forochel, where he was taken in by the Lossoth (Snowmen). Cirdan sent a ship for him, but it was crushed in the ice and Arvedui drowned, taking with him two palantiri. The following year (TA 1975), Earnur of Gondor arrived with a fleet and, together with an Elven host from Lindon led by Cirdan and Glorfindel, destroyed Angmar at the Battle of Fornost. But Arnor was ruined; its surviving Dunedain became the Rangers of the North, secretly guarding the Shire and Eriador.",
        tags: ["war", "tragedy", "kingdom"],
        significance: 2,
        relatedCharacters: ["Witch-king", "Arvedui", "Earnur", "Glorfindel"],
        relatedLocations: ["Fornost", "Arthedain", "Angmar"],
    },
    {
        id: "ta-founding-rohan",
        age: "third-age",
        year: "TA 2510",
        title: "Founding of Rohan",
        summary:
            "Eorl the Young led the Eotheod to the aid of Gondor at the Battle of the Field of Celebrant, and Gondor granted them the province of Calenardhon.",
        details:
            "In TA 2510, Gondor was invaded by Balchoth from the east and Orcs from the Misty Mountains. Steward Cirion of Gondor sent messengers to the Eotheod, a people of horsemen in the far north. Eorl the Young led a great cavalry charge at the Battle of the Field of Celebrant, routing the enemy and saving Gondor. In gratitude, Cirion granted the province of Calenardhon (later called Rohan, the Riddermark) to Eorl and his people. Eorl swore the Oath of Eorl, pledging eternal alliance with Gondor. This alliance would prove crucial at Pelennor Fields over 500 years later.",
        tags: ["kingdom", "alliance", "war"],
        significance: 2,
        relatedCharacters: ["Eorl", "Cirion"],
        relatedLocations: ["Rohan", "Calenardhon", "Field of Celebrant"],
    },
    {
        id: "ta-durins-bane",
        age: "third-age",
        year: "TA 1980",
        title: "Durin's Bane Awakened in Moria",
        summary:
            "The Dwarves of Khazad-dum delved too deep and awakened a Balrog, a demon of the ancient world, which slew King Durin VI.",
        details:
            "The Dwarves of Khazad-dum (Moria) had delved ever deeper in their search for mithril. In TA 1980, they disturbed a Balrog that had hidden beneath the mountains since the fall of Morgoth in the First Age. This Balrog, called Durin's Bane, slew King Durin VI and the next year slew his son Nain I. The Dwarves fled Moria, and it became a place of dread. The loss of Moria meant the loss of the only known mithril mine in Middle-earth. The Balrog remained in Moria for over a thousand years, until Gandalf confronted it in TA 3019.",
        tags: ["tragedy", "war"],
        significance: 2,
        relatedCharacters: ["Durin VI"],
        relatedLocations: ["Khazad-dum", "Moria"],
    },
    {
        id: "ta-wizards-arrive",
        age: "third-age",
        year: "TA 1000",
        title: "The Istari Arrive in Middle-earth",
        summary:
            "The five Wizards (Istari) were sent by the Valar to Middle-earth to counsel and rally the free peoples against Sauron.",
        details:
            "Around TA 1000, the Valar sent five Maiar to Middle-earth in the guise of old men, known as the Istari or Wizards. They were: Saruman the White (Curumo), the head of the order; Gandalf the Grey (Olorin), wisest of the Maiar; Radagast the Brown (Aiwendil); and two Blue Wizards (Alatar and Pallando, called Morinehtar and Romestamo). They were forbidden to match Sauron's power with power or to dominate the free peoples. Cirdan the Shipwright perceived Gandalf's greatness and gave him Narya, the Elven Ring of Fire, upon his arrival at the Grey Havens.",
        tags: ["divine", "alliance"],
        significance: 3,
        relatedCharacters: ["Gandalf", "Saruman", "Radagast", "Cirdan"],
        relatedLocations: ["Middle-earth", "Mithlond"],
    },
    {
        id: "ta-white-council",
        age: "third-age",
        year: "TA 2463",
        title: "Formation of the White Council",
        summary:
            "The White Council was formed to coordinate resistance against the growing shadow, with Saruman as its head.",
        details:
            "As the shadow grew in Dol Guldur (the fortress in southern Mirkwood where a mysterious Necromancer dwelt), Galadriel urged the formation of a council of the Wise. The White Council included Saruman (chosen as head), Gandalf, Galadriel, Elrond, Cirdan, and other lords of the Eldar. Galadriel had wished Gandalf to lead the Council, but he refused the position. Saruman was already studying ring-lore and had begun to desire the One Ring for himself, though this was not yet known. The same year, the creature Deagol found the One Ring in the Anduin, and Smeagol murdered him and took it.",
        tags: ["alliance"],
        significance: 2,
        relatedCharacters: ["Saruman", "Gandalf", "Galadriel", "Elrond"],
        relatedLocations: ["Dol Guldur", "Rivendell"],
    },
    {
        id: "ta-smeagol-ring",
        age: "third-age",
        year: "TA 2463",
        title: "Smeagol Finds the One Ring",
        summary:
            "The hobbit-like creature Deagol found the One Ring in the River Anduin, and his friend Smeagol murdered him and took it.",
        details:
            "Deagol, a Stoor hobbit, was fishing in the Gladden Fields when he found the One Ring in the riverbed, where it had lain for nearly 2,500 years since Isildur's death. His companion Smeagol demanded the Ring as a birthday present, and when Deagol refused, Smeagol strangled him. The Ring's corruption transformed Smeagol over centuries into the wretched creature Gollum. He retreated into the Misty Mountains and hid beneath them for almost 500 years, extending his life far beyond its natural span but becoming twisted in body and mind.",
        tags: ["ring", "corruption", "tragedy"],
        significance: 3,
        relatedCharacters: ["Smeagol", "Deagol"],
        relatedLocations: ["Gladden Fields", "Anduin", "Misty Mountains"],
    },
    {
        id: "ta-dol-guldur-expelled",
        age: "third-age",
        year: "TA 2941",
        title: "The White Council Drives Sauron from Dol Guldur",
        summary:
            "The White Council attacked Dol Guldur and drove out the Necromancer, who was revealed to be Sauron himself.",
        details:
            "Gandalf had entered Dol Guldur in TA 2850 and confirmed the Necromancer was Sauron, not merely a lesser wraith. He urged the White Council to attack, but Saruman repeatedly delayed, secretly searching for the One Ring near the Gladden Fields. Finally in TA 2941, the Council attacked Dol Guldur. Sauron, who had already prepared for this, fled to Mordor where he openly declared himself. Saruman's delay had given Sauron time to prepare; this was one of many betrayals by the head of the Istari. The attack coincided with the events of Bilbo's quest to Erebor.",
        tags: ["war", "corruption"],
        significance: 2,
        relatedCharacters: ["Gandalf", "Saruman", "Sauron", "Galadriel"],
        relatedLocations: ["Dol Guldur", "Mordor"],
    },
    {
        id: "ta-bilbo-finds-ring",
        age: "third-age",
        year: "TA 2941",
        title: "Bilbo Finds the One Ring",
        summary:
            "The hobbit Bilbo Baggins found the One Ring in the tunnels beneath the Misty Mountains during the quest to reclaim Erebor.",
        details:
            "During the quest of Thorin Oakenshield's company to reclaim Erebor from the dragon Smaug, Bilbo Baggins became separated from the Dwarves in the Goblin-tunnels of the Misty Mountains. In the dark, he found a gold ring on the tunnel floor. He later encountered Gollum and won a riddle-game, using the Ring's invisibility to escape. Gandalf suspected the Ring's true nature but was not certain for decades. Bilbo's finding of the Ring was, as Gandalf later said, the most remarkable thing about the whole affair -- it was meant to be found, but not by Sauron.",
        tags: ["ring", "quest"],
        significance: 3,
        relatedCharacters: ["Bilbo", "Gollum", "Gandalf"],
        relatedLocations: ["Misty Mountains", "Goblin-town"],
    },
    {
        id: "ta-battle-five-armies",
        age: "third-age",
        year: "TA 2941",
        title: "The Battle of Five Armies",
        summary:
            "Five armies clashed at the Lonely Mountain after the death of Smaug: Dwarves, Elves, Men, Orcs, and Wargs.",
        details:
            "After Smaug the dragon was slain by Bard the Bowman of Lake-town (who struck the bare patch revealed by the thrush), armies of Men and Wood-elves marched on Erebor to claim a share of the treasure. Thorin Oakenshield refused and summoned his kinsman Dain Ironfoot with a Dwarf army. Battle was imminent when a vast army of Orcs and Wargs under Bolg attacked. The three free peoples allied against them, and the Eagles and Beorn the skin-changer turned the tide. Thorin was mortally wounded and died, reconciling with Bilbo. Dain II Ironfoot became King under the Mountain.",
        tags: ["war", "alliance"],
        significance: 2,
        relatedCharacters: [
            "Thorin",
            "Bilbo",
            "Bard",
            "Dain Ironfoot",
            "Bolg",
            "Beorn",
        ],
        relatedLocations: ["Erebor", "Dale", "Lake-town"],
    },
    {
        id: "ta-gandalf-confirms-ring",
        age: "third-age",
        year: "TA 3018",
        title: "Gandalf Confirms the One Ring",
        summary:
            "After years of research, Gandalf confirmed that Bilbo's ring was the One Ring by testing it in fire, revealing the inscription.",
        details:
            "Gandalf spent seventeen years researching the Ring's identity after Bilbo's farewell party in TA 3001. He searched for Gollum, consulted the archives of Minas Tirith where he found the scroll of Isildur describing the Ring's inscription, and finally returned to the Shire. He cast the Ring into Frodo's fireplace and the fiery letters appeared: the inscription in the Black Speech of Mordor. Gandalf told Frodo the full history of the Ring and urged him to leave the Shire. Meanwhile, Sauron had tortured the name 'Baggins' and 'Shire' from Gollum, and the Nazgul were already hunting.",
        tags: ["ring", "quest"],
        significance: 3,
        relatedCharacters: ["Gandalf", "Frodo", "Bilbo"],
        relatedLocations: ["Bag End", "Shire", "Minas Tirith"],
    },
    {
        id: "ta-council-elrond",
        age: "third-age",
        year: "TA 3018",
        title: "The Council of Elrond",
        summary:
            "Representatives of the free peoples gathered at Rivendell and decided that the One Ring must be destroyed in the fires of Mount Doom.",
        details:
            "On October 25, TA 3018, the Council of Elrond convened at Rivendell. Attendees included Elrond, Gandalf, Frodo, Aragorn (revealed as Isildur's heir), Legolas (representing the Woodland Realm), Gimli and Gloin (from Erebor), and Boromir (son of Denethor, Steward of Gondor). The full history of the Ring was revealed. All other options -- hiding it, sending it over the Sea, or using it against Sauron -- were rejected. Frodo volunteered to bear the Ring to Mount Doom. The Council decided that a small company would accompany him, emphasizing secrecy over strength.",
        tags: ["alliance", "ring", "quest"],
        significance: 3,
        relatedCharacters: [
            "Elrond",
            "Gandalf",
            "Frodo",
            "Aragorn",
            "Boromir",
            "Legolas",
            "Gimli",
        ],
        relatedLocations: ["Rivendell"],
    },
    {
        id: "ta-fellowship-forms",
        age: "third-age",
        year: "TA 3018",
        title: "The Fellowship of the Ring Departs",
        summary:
            "The nine members of the Fellowship set out from Rivendell on December 25 to destroy the One Ring.",
        details:
            "The Fellowship of the Ring, also called the Nine Walkers (to match the Nine Riders), departed Rivendell on December 25, TA 3018. Its members were: Frodo the Ring-bearer, his hobbit companions Sam, Merry, and Pippin; Gandalf the Grey; Aragorn (Strider) and Boromir of Gondor as Men; Legolas of the Woodland Realm as the Elf; and Gimli son of Gloin as the Dwarf. They represented the free peoples of Middle-earth. They carried the reforged sword of Elendil, now called Anduril (Flame of the West), borne by Aragorn.",
        tags: ["quest", "alliance"],
        significance: 3,
        relatedCharacters: [
            "Frodo",
            "Sam",
            "Merry",
            "Pippin",
            "Gandalf",
            "Aragorn",
            "Boromir",
            "Legolas",
            "Gimli",
        ],
        relatedLocations: ["Rivendell"],
    },
    {
        id: "ta-moria",
        age: "third-age",
        year: "TA 3019",
        title: "The Fellowship Passes Through Moria",
        summary:
            "The Fellowship traveled through the Mines of Moria, where Gandalf fell battling the Balrog on the Bridge of Khazad-dum.",
        details:
            "Unable to cross Caradhras due to storms (sent by Saruman or Sauron), the Fellowship entered Moria through the Doors of Durin, opened by the password 'mellon' (friend). They discovered the tomb of Balin, who had attempted to recolonize Moria and perished. Attacked by Orcs and a cave-troll, they fled to the Bridge of Khazad-dum, where the Balrog (Durin's Bane) appeared. Gandalf stood alone on the narrow bridge, broke it with his staff, and the Balrog fell, but its whip caught Gandalf and dragged him into the abyss. His last words to the Fellowship were 'Fly, you fools!'",
        tags: ["war", "tragedy", "quest"],
        significance: 3,
        relatedCharacters: ["Gandalf", "Frodo", "Aragorn"],
        relatedLocations: ["Moria", "Khazad-dum", "Bridge of Khazad-dum"],
    },
    {
        id: "ta-gandalf-returns",
        age: "third-age",
        year: "TA 3019",
        title: "Gandalf Returns as the White",
        summary:
            "After defeating the Balrog atop Zirakzigil, Gandalf died and was sent back by the Valar as Gandalf the White.",
        details:
            "Gandalf and the Balrog fell from the Bridge of Khazad-dum into the deep water and then fought upward through the tunnels of Moria. Their battle lasted ten days, climbing the Endless Stair from the deepest dungeons to the peak of Zirakzigil (Celebdil). Gandalf finally threw down the Balrog, which broke the mountainside as it fell. Gandalf himself died from the effort but was sent back by the Valar, enhanced in power as Gandalf the White, replacing Saruman who had betrayed his mission. He was found by Gwaihir the Windlord and taken to Lothlorien to heal.",
        tags: ["divine", "war"],
        significance: 3,
        relatedCharacters: ["Gandalf", "Gwaihir"],
        relatedLocations: ["Zirakzigil", "Moria", "Lothlorien"],
    },
    {
        id: "ta-breaking-fellowship",
        age: "third-age",
        year: "TA 3019",
        title: "The Breaking of the Fellowship",
        summary:
            "Boromir attempted to take the Ring from Frodo at Amon Hen; Frodo and Sam departed alone for Mordor, and Boromir fell defending Merry and Pippin.",
        details:
            "At Amon Hen on the banks of the Anduin, Boromir succumbed to the Ring's temptation and tried to take it from Frodo by force. Frodo put on the Ring and fled, then decided he must go to Mordor alone. Sam, who saw through Frodo's plan, caught him at the boats and insisted on coming. Meanwhile, Orcs of Saruman (the Uruk-hai) attacked; Boromir fought valiantly to protect Merry and Pippin but was slain by many arrows. Aragorn found him dying; Boromir confessed his failure and died. The Fellowship was broken into three groups: Frodo and Sam; Merry and Pippin (captured); and Aragorn, Legolas, and Gimli.",
        tags: ["tragedy", "quest", "war"],
        significance: 3,
        relatedCharacters: [
            "Boromir",
            "Frodo",
            "Sam",
            "Aragorn",
            "Merry",
            "Pippin",
        ],
        relatedLocations: ["Amon Hen", "Anduin", "Parth Galen"],
    },
    {
        id: "ta-isengard-destroyed",
        age: "third-age",
        year: "TA 3019",
        title: "Destruction of Isengard",
        summary:
            "The Ents, led by Treebeard, attacked and destroyed Saruman's fortress of Isengard, flooding it with the River Isen.",
        details:
            "The Ents, ancient tree-herders roused to wrath by Saruman's destruction of their forests, marched on Isengard. Led by Treebeard (Fangorn), the oldest living creature in Middle-earth, the Ents tore apart the walls and machinery of Isengard with their immense strength. They diverted the River Isen to flood the ring of Isengard, trapping Saruman in the tower of Orthanc. Merry and Pippin, who had escaped the Uruk-hai with the aid of the Ents, were present. Saruman's military power was broken, though he remained imprisoned in the indestructible tower.",
        tags: ["war"],
        significance: 2,
        relatedCharacters: ["Treebeard", "Saruman", "Merry", "Pippin"],
        relatedLocations: ["Isengard", "Orthanc", "Fangorn"],
    },
    {
        id: "ta-helms-deep",
        age: "third-age",
        year: "TA 3019",
        title: "Battle of Helm's Deep",
        summary:
            "The Rohirrim, aided by Gandalf and the Huorns, defeated Saruman's army of ten thousand Uruk-hai at the fortress of Helm's Deep.",
        details:
            "Saruman sent an army of approximately 10,000 Uruk-hai and Dunlendings against Rohan. King Theoden, freed from Saruman's control by Gandalf, retreated to Helm's Deep (the Hornburg). The defenders held through a desperate night battle; the Uruk-hai used a blasting device (a 'fire of Orthanc') to breach the Deeping Wall. At dawn, Gandalf arrived with Erkenbrand and a thousand Rohirrim cavalry, charging down the slope. Simultaneously, a forest of Huorns (semi-sentient trees from Fangorn) appeared and destroyed the Orcs who fled. Not one of the enemy host survived.",
        tags: ["war"],
        significance: 2,
        relatedCharacters: [
            "Theoden",
            "Gandalf",
            "Aragorn",
            "Legolas",
            "Gimli",
        ],
        relatedLocations: ["Helm's Deep", "Hornburg", "Rohan"],
    },
    {
        id: "ta-shelob",
        age: "third-age",
        year: "TA 3019",
        title: "Frodo and Sam in Shelob's Lair",
        summary:
            "Gollum led Frodo and Sam into the lair of the giant spider Shelob; Frodo was stung and Sam drove Shelob away with the Phial of Galadriel.",
        details:
            "Gollum, who had been guiding Frodo and Sam to Mordor, led them into the tunnels of Cirith Ungol where the great spider Shelob dwelt. Shelob was the last child of Ungoliant and had lived in the pass since the Second Age. She stung Frodo, paralyzing him with her venom. Sam, wielding Frodo's Elven blade Sting and the Phial of Galadriel (containing the light of Earendil's star), fought Shelob and wounded her, driving her away. Believing Frodo dead, Sam took the Ring. When Orcs arrived and Sam learned Frodo was alive but captured, he followed them to the Tower of Cirith Ungol.",
        tags: ["quest", "tragedy"],
        significance: 2,
        relatedCharacters: ["Frodo", "Sam", "Gollum", "Shelob"],
        relatedLocations: ["Cirith Ungol", "Mordor"],
    },
    {
        id: "ta-pelennor-fields",
        age: "third-age",
        year: "TA 3019",
        title: "Battle of the Pelennor Fields",
        summary:
            "The greatest battle of the War of the Ring, where the Witch-king was slain and Sauron's assault on Minas Tirith was defeated.",
        details:
            "Sauron's forces besieged Minas Tirith, breaching the Great Gate with the battering ram Grond (named after Morgoth's hammer). The Witch-king entered the gate and confronted Gandalf. At that moment, the horns of Rohan sounded: Theoden led 6,000 Rohirrim in a devastating cavalry charge. The Witch-king turned to face them; his fell beast struck down Theoden's horse Snowmane. Eowyn, Theoden's niece, who had ridden disguised as a man, stood before the Witch-king. With the hobbit Merry, who stabbed the Witch-king's leg with a Barrow-blade that broke his spell of invulnerability, Eowyn slew him, fulfilling the prophecy that 'not by the hand of man will he fall.' Theoden died. Aragorn arrived with reinforcements from southern Gondor aboard the Corsair ships.",
        tags: ["war"],
        significance: 3,
        relatedCharacters: [
            "Theoden",
            "Eowyn",
            "Merry",
            "Witch-king",
            "Aragorn",
            "Gandalf",
        ],
        relatedLocations: ["Pelennor Fields", "Minas Tirith", "Gondor"],
    },
    {
        id: "ta-black-gate",
        age: "third-age",
        year: "TA 3019",
        title: "Battle of the Black Gate (Battle of the Morannon)",
        summary:
            "Aragorn led a diversionary force to the Black Gate of Mordor to draw Sauron's attention away from Frodo's approach to Mount Doom.",
        details:
            "Aragorn, Gandalf, and the captains of the West marched to the Morannon (Black Gate) with approximately 7,000 soldiers, knowing they could not defeat Sauron militarily. Their purpose was to challenge Sauron and draw his Eye away from Mount Doom, giving Frodo a chance to reach the Cracks of Doom. Sauron sent the Mouth of Sauron to parley, showing Frodo's mithril coat and Sam's sword as evidence of his capture (a lie). The army of the West was surrounded by vastly superior forces and fought desperately. Only the destruction of the Ring saved them from annihilation.",
        tags: ["war", "quest", "alliance"],
        significance: 3,
        relatedCharacters: ["Aragorn", "Gandalf", "Sauron"],
        relatedLocations: ["Morannon", "Black Gate", "Mordor"],
    },
    {
        id: "ta-ring-destroyed",
        age: "third-age",
        year: "TA 3019",
        title: "Destruction of the One Ring",
        summary:
            "The One Ring was destroyed in the fires of Mount Doom when Gollum bit it from Frodo's finger and fell into the Cracks of Doom.",
        details:
            "On March 25, TA 3019, Frodo and Sam reached the Cracks of Doom inside Mount Doom. At the very last moment, standing on the precipice, Frodo claimed the Ring for himself and put it on, unable to resist its power at the place of its making. Gollum attacked, biting the Ring and Frodo's finger off. Gollum danced with joy, holding the Ring aloft, and fell into the fire. The Ring was destroyed, and with it Sauron's power was ended forever. Barad-dur collapsed, the Nazgul were destroyed, and Sauron's spirit dissipated into nothing. The Eagles, led by Gwaihir, rescued Frodo and Sam from the erupting mountain.",
        tags: ["ring", "quest"],
        significance: 3,
        relatedCharacters: ["Frodo", "Sam", "Gollum", "Sauron", "Gwaihir"],
        relatedLocations: ["Mount Doom", "Mordor", "Barad-dur"],
    },
    {
        id: "ta-coronation-aragorn",
        age: "third-age",
        year: "TA 3019",
        title: "Coronation of King Elessar",
        summary:
            "Aragorn was crowned King Elessar, reuniting the kingdoms of Gondor and Arnor for the first time since Isildur.",
        details:
            "On May 1, TA 3019, Aragorn son of Arathorn was crowned King Elessar Telcontar at Minas Tirith. Gandalf placed the ancient crown of Gondor (the White Crown with wings of sea-birds) upon his head. Aragorn reunited the kingdoms of Gondor and Arnor, restoring the line of kings that had been broken for nearly a thousand years in Gondor and over a thousand in Arnor. He married Arwen Undomiel, daughter of Elrond, who chose mortality for his sake (echoing the choice of Luthien). The White Tree, grown from the seedling Gandalf found on Mount Mindolluin, was replanted in the Court of the Fountain.",
        tags: ["kingdom", "alliance"],
        significance: 3,
        relatedCharacters: ["Aragorn", "Arwen", "Gandalf", "Elrond"],
        relatedLocations: ["Minas Tirith", "Gondor"],
    },
    {
        id: "ta-scouring-shire",
        age: "third-age",
        year: "TA 3019",
        title: "The Scouring of the Shire",
        summary:
            "The hobbits returned home to find the Shire under the control of Saruman, and led a rebellion to free it.",
        details:
            "Returning from the War of the Ring, the four hobbits found the Shire occupied by ruffians under 'Sharkey' (Saruman). Saruman had industrialized the Shire, cutting down trees and polluting the water. Merry and Pippin, now experienced warriors, rallied the hobbits. The Battle of Bywater was the last battle of the War of the Ring, fought on November 3, TA 3019. Saruman was confronted at Bag End; Frodo offered him mercy, but Saruman's servant Grima Wormtongue, after one too many abuses, cut Saruman's throat. Wormtongue was slain by hobbit archers. Sam used the gift of Galadriel (earth from her garden with a mallorn seed) to restore the Shire.",
        tags: ["war"],
        significance: 2,
        relatedCharacters: [
            "Frodo",
            "Sam",
            "Merry",
            "Pippin",
            "Saruman",
            "Wormtongue",
        ],
        relatedLocations: ["Shire", "Bag End", "Bywater"],
    },
    {
        id: "ta-grey-havens",
        age: "third-age",
        year: "TA 3021",
        title: "Departure from the Grey Havens",
        summary:
            "The Ring-bearers and the Keepers of the Three Rings departed Middle-earth from the Grey Havens, sailing to the Undying Lands.",
        details:
            "On September 29, TA 3021, the last ship sailed from the Grey Havens (Mithlond). Aboard were the Ring-bearers Bilbo and Frodo (who bore wounds that could not be healed in Middle-earth), along with Gandalf (bearer of Narya), Galadriel (bearer of Nenya), and Elrond (bearer of Vilya). Cirdan the Shipwright, builder of the ship, would eventually follow. Merry, Pippin, and Sam accompanied them to the Havens. Sam, who had briefly borne the Ring, would eventually sail West himself in the year 61 of the Fourth Age. This departure marked the end of the Third Age and the beginning of the Age of Men.",
        tags: ["quest", "divine"],
        significance: 3,
        relatedCharacters: [
            "Frodo",
            "Bilbo",
            "Gandalf",
            "Galadriel",
            "Elrond",
            "Sam",
            "Cirdan",
        ],
        relatedLocations: ["Grey Havens", "Mithlond", "Valinor"],
    },
    {
        id: "ta-saruman-betrayal",
        age: "third-age",
        year: "TA 3018",
        title: "Saruman's Betrayal Revealed",
        summary:
            "Saruman revealed his treachery to Gandalf at Orthanc, imprisoning him atop the tower after Gandalf refused to join him.",
        details:
            "In July TA 3018, Gandalf rode to Isengard seeking counsel from Saruman, head of his order. Saruman revealed he had been corrupted: he desired the One Ring for himself and had begun breeding Uruk-hai and amassing an army. He offered Gandalf a choice to join him or be imprisoned. Gandalf refused, and Saruman trapped him on the pinnacle of Orthanc. Gandalf was held prisoner for months until rescued by Gwaihir the Eagle, sent by Radagast (who had unwittingly aided Saruman's trap). Saruman's palantir had shown him Sauron's power, and through it Sauron had ensnared his mind.",
        tags: ["corruption", "tragedy"],
        significance: 2,
        relatedCharacters: ["Saruman", "Gandalf", "Gwaihir", "Radagast"],
        relatedLocations: ["Isengard", "Orthanc"],
    },
    {
        id: "ta-paths-of-dead",
        age: "third-age",
        year: "TA 3019",
        title: "Aragorn Takes the Paths of the Dead",
        summary:
            "Aragorn summoned the Dead Men of Dunharrow, oathbreakers cursed by Isildur, to fulfill their oath and fight for the King.",
        details:
            "The Dead Men of Dunharrow were Men of the White Mountains who had sworn allegiance to Isildur but refused to fight against Sauron in the Last Alliance. Isildur cursed them to remain as restless spirits until they fulfilled their oath to the King of Gondor. Aragorn, as Isildur's heir, entered the Paths of the Dead beneath the Dwimorberg with Legolas, Gimli, and the Grey Company (Rangers of the North). He summoned the Dead and led them to the port of Pelargir, where they swept away the Corsairs of Umbar. Aragorn then released them from their oath, and they vanished at last.",
        tags: ["quest", "war"],
        significance: 2,
        relatedCharacters: ["Aragorn", "Legolas", "Gimli"],
        relatedLocations: ["Dunharrow", "Paths of the Dead", "Pelargir"],
    },
];
