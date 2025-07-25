const __artists = {
  A: [
    "A Perfect Circle",
    "a-ha",
    "A.R. Rahman",
    "Acid Bath",
    "Acid King",
    "Aerosmith",
    "Alice In Chains",
    "All Them Witches",
    "Allman Brothers Band",
    "Amenra",
    "Amorphis",
    "Anathema",
    "Animals As Leaders",
    "Annie Lennox",
    "Annihilator",
    "Anoushka Shankar",
    "Anthrax",
    "Arcana",
    "Aretha Franklin",
    "Asteroid",
    "At The Gates",
    "Audioslave",
    "Avenged Sevenfold",
    "Arch Enemy",
  ],
  B: [
    "Baroness",
    "Bill Withers",
    "Black Sabbath",
    "Bob Dylan",
    "Bongzilla",
    "Bossk",
    "Brant Bjork",
    "Breaking Benjamin",
    "Bryan Adams",
    "The Beach Boys",
    "The Black Keys",
    "The Body",
  ],
  C: [
    "Cannibal Corpse",
    "Chevelle",
    "Chris Cornell",
    "Clutch",
    "Collective Soul",
    "Colour Haze",
    "Conan",
    "Corrosion Of Conformity",
    "Corvus Corax",
    "Cough",
    "Creed",
    "Creedence Clearwater Revival",
    "Crippled Black Phoenix",
    "Crowbar",
    "Cult Of Luna",
    "The Clash",
    "The Cranberries",
    "The Cure",
  ],
  D: [
    "Daemonia Nymphe",
    "Dan Auerbach",
    "Danheim",
    "Dark Tranquillity",
    "Darkher",
    "Darkthrone",
    "Daryl Hall & John Oates",
    "Dave Stewart",
    "David Bowie",
    "Dead Meadow",
    "Death",
    "Deftones",
    "Depeche Mode",
    "Desert Dwellers",
    "Desert Sessions",
    "Devin Townsend Project",
    "Deya Dova",
    "Disturbed",
    "Dominic Fike",
    "Dope",
    "Dopelord",
    "DOWN",
    "Drowning Pool",
    "Duran Duran",
    "Dvne",
    "The Doors",
  ],
  E: [
    "Eagles Of Death Metal",
    "Earth",
    "Einar Selvik",
    "Elder",
    "Electric Light Orchestra",
    "Electric Wizard",
    "Elephant Tree",
    "Elvis Presley",
    "Enslaved",
    "Entombed",
    "Enya",
    "Eric Clapton",
    "Eurythmics",
    "Everclear",
    "Exodus",
    "Eyehategod",
  ],
  F: [
    "Faith No More",
    "Faun",
    "Fear Factory",
    "Five Finger Death Punch",
    "Foo Fighters",
    "Forndom",
    "Frank Sinatra",
    "Fu Manchu",
    "Fuel",
  ],
  G: ["Garmarna", "Gealdýr", "Goatsnake", "Godsmack", "Gojira", "Graveyard", "Greenleaf", "Ghost", "GNOME"],
  H: [
    "Hagalaz' Runedance",
    "Hans Zimmer",
    "Heilung",
    "Heldom",
    "High On Fire",
    "Hollywood Undead",
    "The Heavy Eyes",
    "The Human Experience",
  ],
  I: ["IDLES", "Isis", "igorr", "Incubus", "Inter Arma", "Intronaut", "Iron Maiden", "Ivar Bjørnson & Einar Selvik"],
  J: ["Johnny Cash", "Jane's Addiction", "Jessica Curry", "Jimi Hendrix", "Judas Priest", "Julie Christmas"],
  K: [
    "Kadavar",
    "Kai Uwe Faust",
    "Kalandra",
    "Katatonia",
    "Kati Ran",
    "Kaya Project",
    "King Buffalo",
    "KISS",
    "Korn",
    "Kreator",
    "Kylesa",
    "Kyuss",
  ],
  L: ["Led Zeppelin", "Leprous", "Limp Bizkit", "Linkin Park", "Lynyrd Skynyrd"],
  M: [
    "Machine Head",
    "Maria Franz",
    "Marilyn Manson",
    "Mars Red Sky",
    "Marvin Gaye",
    "Mastodon",
    "Megadeth",
    "Melvins",
    "Mercyful Fate",
    "Meshuggah",
    "Metallica",
    "Michael Bublé",
    "Monolord",
    "Monster Magnet",
    "Moonspell",
    "Motörhead",
    "Mudvayne",
    "Municipal Waste",
    "My Sleeping Karma",
    "Myrkur",
    "The Moon & The Nightspirit",
  ],
  N: [
    "Natacha Atlas",
    "Nebula",
    "Neurosis",
    "New Order",
    "Nickelback",
    "Nine Inch Nails",
    "Nirvana",
    "Nonpoint",
    "Norah Jones",
    "Nytt Land",
  ],
  O: [
    "Obituary",
    "OM",
    "Opeth",
    "Orange Goblin",
    "Osi And The Jupiter",
    "Overkill",
    "Ozzy Osbourne",
    "1000mods",
    "The Ocean",
    "The Offspring",
  ],
  P: [
    "Pantera",
    "Puscifer",
    "Papa Roach",
    "Paradise Lost",
    "Paul McCartney",
    "Pearl Jam",
    "Peter Gundry",
    "Pink Floyd",
    "Piotr Musiał",
    "Porcupine Tree",
    "Primus",
    "Prince",
    "Puddle Of Mudd",
    "Purple Hill Witch",
    "The Police",
    "The Pretty Things",
  ],
  Q: ["Queen", "Queens of the Stone Age"],
  R: [
    "Rage Against The Machine",
    "Rammstein",
    "Red Fang",
    "REZN",
    "Rob Zombie",
    "Rotting Christ",
    "Rúnahild",
    "Russian Circles",
    "The Rolling Stones",
  ],
  S: [
    "Sabaton",
    "Sacred Reich",
    "Seether",
    "Sepultura",
    "Sevendust",
    "Shinedown",
    "SKÁLD",
    "Skillet",
    "Slayer",
    "Sleep",
    "Slipknot",
    "Sly & The Family Stone",
    "Soen",
    "Somali Yacht Club",
    "Soulfly",
    "Soundgarden",
    "Sowulo",
    "Spaceslug",
    "Staind",
    "Static-X",
    "Steven Wilson",
    "Stevie Wonder",
    "Stone Sour",
    "Stone Temple Pilots",
    "Stoned Jesus",
    "Swallow The Sun",
    "System Of A Down",
    "The Smashing Pumpkins",
    "The Smiths",
    "The Staple Singers",
    "The Sword",
  ],
  T: [
    "Tears For Fears",
    "Testament",
    "Them Crooked Vultures",
    "Therion",
    "Thou",
    "Three Days Grace",
    "Tiamat",
    "TOOL",
    "Torche",
    "Trees of Eternity",
    "Trevor Morris",
    "Trevor Something",
    "Trobar de Morte",
    "Truckfighters",
    "3 Doors Down",
  ],
  U: ["Ufomammut", "Uncle Acid & The Deadbeats"],
  V: ["Vàli", "Van Halen", "Van Morrison", "Velvet Revolver", "Venom", "Volbeat"],
  W: [
    "Wardruna",
    "Weedeater",
    "Willie Nelson",
    "Wilson Pickett",
    "Windhand",
    "WITCH",
    "Witchcraft",
    "The White Stripes",
    "The Who",
  ],
  X: ["TOCA XUTOS, CARALHO"],
  Y: ["Year Of No Light", "YOB"],
  Z: ["Zergananda"],
}
