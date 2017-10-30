// Override adding "ing" to strings
String.prototype.ing = function() {
    // Take care of special cases first
    if(this == "die") {
        return "dying";
    }
    if(this == "terror") {
        return "terrorizing";
    }
    if(this == "sin") {
        return "sinning";
    }
    if(this == "infect" || this == "thirst" || this == "vomit" || this == "haunt") {
        return this + "ing";
    }
    // Then take care of english grammar stuff
    if(this.slice(-1) === "e") {
        return this.slice(0, -1) + "ing";
    }
    else if(this.slice(-1) === "b") {
        return this + "bing";
    }
    else if(this.slice(-1) === "t") {
        return this + "ting";
    }
    return this + "ing";
};

// Override string pluralization
String.prototype.plural = function(revert){

    var plural = {
        '(quiz)$'               : "$1zes",
        '^(ox)$'                : "$1en",
        '([m|l])ouse$'          : "$1ice",
        '(matr|vert|ind)ix|ex$' : "$1ices",
        '(x|ch|ss|sh)$'         : "$1es",
        '([^aeiouy]|qu)y$'      : "$1ies",
        '(hive)$'               : "$1s",
        '(?:([^f])fe|([lr])f)$' : "$1$2ves",
        '(shea|lea|loa|thie)f$' : "$1ves",
        'sis$'                  : "ses",
        '([ti])um$'             : "$1a",
        '(tomat|potat|ech|her|vet)o$': "$1oes",
        '(bu)s$'                : "$1ses",
        '(alias)$'              : "$1es",
        '(octop)us$'            : "$1i",
        '(ax|test)is$'          : "$1es",
        '(us)$'                 : "$1es",
        '([^s]+)$'              : "$1s"
    };

    var singular = {
        '(quiz)zes$'             : "$1",
        '(matr)ices$'            : "$1ix",
        '(vert|ind)ices$'        : "$1ex",
        '^(ox)en$'               : "$1",
        '(alias)es$'             : "$1",
        '(octop|vir)i$'          : "$1us",
        '(cris|ax|test)es$'      : "$1is",
        '(shoe)s$'               : "$1",
        '(o)es$'                 : "$1",
        '(bus)es$'               : "$1",
        '([m|l])ice$'            : "$1ouse",
        '(x|ch|ss|sh)es$'        : "$1",
        '(m)ovies$'              : "$1ovie",
        '(s)eries$'              : "$1eries",
        '([^aeiouy]|qu)ies$'     : "$1y",
        '([lr])ves$'             : "$1f",
        '(tive)s$'               : "$1",
        '(hive)s$'               : "$1",
        '(li|wi|kni)ves$'        : "$1fe",
        '(shea|loa|lea|thie)ves$': "$1f",
        '(^analy)ses$'           : "$1sis",
        '((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$': "$1$2sis",        
        '([ti])a$'               : "$1um",
        '(n)ews$'                : "$1ews",
        '(h|bl)ouses$'           : "$1ouse",
        '(corpse)s$'             : "$1",
        '(us)es$'                : "$1",
        's$'                     : ""
    };

    var irregular = {
        'move'   : 'moves',
        'foot'   : 'feet',
        'goose'  : 'geese',
        'sex'    : 'sexes',
        'child'  : 'children',
        'man'    : 'men',
        'tooth'  : 'teeth',
        'person' : 'people',
        'human'  : 'humanity',
        'sick'   : 'the sick',
        'insane'   : 'the insane',
        'wasteland': 'the lands of waste',
        'underworld': 'circles of the underworld',
    };

    var uncountable = [
        'sheep', 
        'fish',
        'deer',
        'moose',
        'series',
        'species',
        'money',
        'rice',
        'information',
        'equipment',
        'blood',
        'satan',
        'meat',
        'flesh',
        'doom',
        'armageddon',
        'acid',
        'apocalypse'
    ];

    // save some time in the case that singular and plural are the same
    if(uncountable.indexOf(this.toLowerCase()) >= 0)
    return this;

    // check for irregular forms
    for(word in irregular){

    if(revert){
            var pattern = new RegExp(irregular[word]+'$', 'i');
            var replace = word;
    } else{ var pattern = new RegExp(word+'$', 'i');
            var replace = irregular[word];
    }
    if(pattern.test(this))
        return this.replace(pattern, replace);
    }

    if(revert) var array = singular;
        else  var array = plural;

    // check for matches using regular expressions
    for(reg in array){

    var pattern = new RegExp(reg, 'i');

    if(pattern.test(this))
        return this.replace(pattern, array[reg]);
    }

    return this;
};

// Set up all the metal words in categories
var metalVerbs = [
    "breathe",
    "suffer",
    "consume",
    "summon",
    "possess",
    "splatter",
    "exile",
    "infect",
    "bash",
    "smash",
    "burn",
    "shatter",
    "destroy",
    "collapse",
    "regurgitate",
    "execute",
    "bleed",
    "slaughter",
    "rape",
    "haunt",
    "gore",
    "behold",
    "torture",
    "alter",
    "fester",
    "kill",
    "stab",
    "conjure",
    "ravage",
    "agonize",
    "slash",
    "plague",
    "murder",
    "explode",
    "devour",
    "behead",
    "swarm",
    "hate",
    "betray",
    "boil",
    "fire",
    "bludgeon",
    "behead",
    "rot",
    "decay",
    "desecrate",
    "crush",
    "bury",
];
var metalNouns = [
    "blood",
    "parasite",
    "church",
    "vomit",
    "demon",
    "funeral",
    "coven",
    "casket",
    "oath",
    "intestine",
    "dream",
    "banshee",
    "mountain",
    "scavenger",
    "crucifix",
    "snake",
    "rat",
    "hammer",
    "horror",
    "scar",
    "vermin",
    "curse",
    "spectre",
    "eulogy",
    "zombie",
    "insect",
    "disease",
    "skull",
    "eye",
    "monstrosity",
    "acid",
    "maggot",
    "ritual",
    "hell",
    "remains",
    "ash",
    "heaven",
    "maniac",
    "flame",
    "spirit",
    "gore",
    "goblin",
    "dragon",
    "soul",
    "chimera",
    "corpse",
    "pig",
    "vulture",
    "crow",
    "fly",
    "sorrow",
    "unborn",
    "coffin",
    "flesh",
    "meat",
    "mass",
    "sword",
    "insane",
    "dagger",
    "massacre",
    "reaper",
    "unknown",
    "scorpion",
    "axe",
    "serpent",
    "angel",
    "cannibal",
    "carcass",
    "nightmare",
    "suicide",
    "machine",
    "fear",
    "chainsaw",
    "priest",
    "leper",
    "skeleton",
    "god",
    "grave",
    "feast",
    "abortion",
    "blade",
    "execution",
    "beast",
    "shadow",
    "witch",
    "sacrifice",
    "bone",
    "knife",
    "depths",
    "illusion",
    "mortal",
];
var metalMisc = [
    "eternity",
    "night",
    "afterlife",
    "underworld",
    "wasteland",
    "judgement",
    "agony",
    "evil",
    "death",
    "doom",
    "radiation",
    "damnation",
    "infinity",
    "misery",
    "future",
    "depravity",
    "heaven",
    "valhalla",
    "past",
    "obvilion",
    "apocalypse",
    "darkness",
    "carnage",
    "armageddon",
];
var metalMiscPrefixes = [
    "harvester of",
    "bringer of",
    "harbinger of",
    "destroyer of",
    "consumer of",
    "desecration of",
    "creator of",
    "ghost of",
    "remains of",
];
var metalAdjectives = [
    "dismembered",
    "fatal",
    "mutated",
    "scorched",
    "inhuman",
    "sacred",
    "dead",
    "tattered",
    "lonely",
    "rotting",
    "putrid",
    "gruesome",
    "ugly",
    "unholy",
    "atomic",
    "repugnant",
    "decomposing",
    "malignant",
    "poisoned",
    "infected",
    "bloody",
    "toxic",
    "undead",
    "bleeding",
    "frozen",
    "boiling",
    "vile",
    "trapped",
    "dying",
    "mutilated",
    "fractured",
    "sick",
    "filthy",
    "broken",
    "infernal",
    "grotesque",
];

/** The maximum is exclusive and the minimum is inclusive.
 * Example: getRandomInt(1,4): min 1, max 3 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

/** Will convert a number into it's english equivalent.
 * from: https://stackoverflow.com/a/30522105 */
function numberToEnglish(num) {
    var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'million ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'hundred thousand ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
    return str;
}

/**
 * Will generate a band name or album name. */
function getBandName() {
    var bandNameRoll = getRandomInt(0, 4);
    var bandName = "";
    switch(bandNameRoll) {
        case 0:
            bandName = pick(metalAdjectives) + " " + pick(metalNouns);
            break;
        case 1:
            bandName = pick(metalMisc) + " " + pick(metalNouns);
            break;
        case 2:
            bandName = pick(metalNouns);
            break;
        case 3:
            bandName = pick(metalVerbs) + " " + pick(metalNouns);
        default:
            bandName = numberToEnglish(getRandomInt(1, 100) > 4 ? getRandomInt(2, 11) : getRandomInt(1,100000) % 10000) + " " + pick(metalNouns).plural();
            break;
    }
    return bandName;
}

/**
 * Will generate a lyric. */
function createLyric() {
    var lyric = "";
    var sentenceRoll = getRandomInt(0, 16);
    switch (sentenceRoll) {
        case 0:
            lyric = pick(metalVerbs).ing() + " " + pick(metalNouns) + " that " + pick(metalVerbs).plural();
            break;
        case 1:
            lyric = pick(metalAdjectives) + " " + pick(metalNouns).plural() + " that " + pick(metalVerbs) + " the " + pick(metalNouns);
            break;
        case 2:
            lyric = pick(metalNouns).plural() + " become " + pick(metalAdjectives) + " in " + pick(metalMisc);
            break;
        case 3:
            lyric = pick(metalNouns).plural() + " " + pick(metalVerbs).ing() + " " + pick(metalNouns).plural();
            break;
        case 4:
            lyric = pick(metalVerbs).ing() + " the " + pick(metalNouns);
            break;
        case 5:
            lyric = "the " + pick(metalMiscPrefixes) + " " + pick(metalMisc) + " will " + pick(metalVerbs) + " " + pick(metalNouns).plural();
            break;
        case 6:
            lyric = pick(metalAdjectives) + " " + pick(metalNouns) + " " + pick(metalVerbs).plural();
            break;
        case 7:
            lyric = "the " + pick(metalAdjectives) + " " + pick(metalNouns).plural() + " that "  +  pick(metalVerbs).plural();
            break;
        case 8:
            lyric = pick(metalNouns) + " will " + pick(metalVerbs) + " " + pick(metalNouns).plural();
            break;
        case 9:
            lyric = pick(metalAdjectives) + " " + pick(metalNouns).plural() + " will " + pick(metalVerbs) + " the " + pick(metalNouns);
            break;
        case 11:
            lyric = pick(metalNouns) + " " + pick(metalVerbs).plural();
            break;
        case 12:
            lyric = "the " + pick(metalNouns) + " will " + pick(metalVerbs) + " the " + pick(metalNouns);
            break;
        case 13:
            lyric = "the " + pick(metalMiscPrefixes) + " " + pick(metalNouns) + " who " + pick(metalVerbs).plural();
            break;
        case 14:
            lyric = "the " + pick(metalAdjectives) + " " + pick(metalNouns).plural() + " for " + pick(metalAdjectives) + " " + pick(metalMisc);
            break;
        case 15:
            lyric = pick(metalNouns).plural() + " " + pick(metalAdjectives) + " " + pick(metalNouns);
            break;
        default:
            lyric = pick(metalVerbs).ing() + " " + pick(metalAdjectives) + " " + pick(metalAdjectives) + " " + pick(metalNouns).plural();
            break;
    }
    return lyric;
}

/** Will pick a random element from
 * the passed in arrray. */
function pick(myArray) {
    return myArray[Math.floor(Math.random()*myArray.length)];
}

/** Replaces some html elements
 * with the generated lyrics from createLyric(). */
function writeLyrics() {
    // Define how many verses per song
    var songLength = getRandomInt(3,7);
    // Choruses should be 2 or 4 lines
    var chorusLength = getRandomInt(1, 100) > 50 ? 2 : 4;
    // Array to hold our lyrics
    var verseLyrics = [];
    var chorusLyrics = [];
    // Calculate how often we do chorus
    var verseLength = getRandomInt(1, 100) < 50 ? 4 : 6;
    if(getRandomInt(1, 100) > 50) {
        verseLength += 2;
    }

    // Write the chorus once
    for(var i = 0; i < chorusLength; i++) {
        chorusLyrics.push(createLyric());
    }
    // Then write the verses
    for(var i = 0; i < songLength; i++) {
        // Verse
        for(var j = 0; j < verseLength; j++) {
            verseLyrics.push(createLyric());
        }
    }

    // Then put them together in HTML
    var lyricsElement = document.getElementById("lyrics");
    for(var lyricIndex in verseLyrics) {
        // We don't want to write the first verse as a chorus, thus the lyricIndex != 0
        if(lyricIndex % verseLength == 0 && lyricIndex != 0) {
            // Write out the chorus
            chorusLyrics.forEach(function(chorusLyric) {
                lyricsElement.innerHTML += "<p class='chorus'>" + chorusLyric + "</p>";
            });
        }
        else {
            lyricsElement.innerHTML += "<p>" + verseLyrics[lyricIndex] + "</p>";
        }
    }

    // Write out one last chorus
    chorusLyrics.forEach(function(chorusLyric) {
        lyricsElement.innerHTML += "<p class='chorus'>" + chorusLyric + "</p>";
    });

    // Also write out the song title
    var songTitleElement = document.getElementById("title");
    songTitleElement.innerHTML = "<p class='title'>''" + pick(chorusLyrics) + "''</p>" + "<p class='band'>artist: <span class='name'>" + getBandName() + "</span></p><p class='album'>album: " + (getRandomInt(1, 100) > 50 ? "the " : "") + getBandName() + " (" + getRandomInt(1986, 2017) + ")</p>";
}

// Write the first batch of lyrics.
writeLyrics();