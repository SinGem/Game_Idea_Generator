const promptBox = document.getElementById("prompt-box");
const complexitySlider = document.getElementById("prompt-complexity-slider");
const complexityDesc = document.getElementById("prompt-complexity-desc");

complexityDesc.textContent = "Complexity: " + complexitySlider.value;
let complexity = complexitySlider.value;

complexitySlider.addEventListener("input", (event) => {
    complexityDesc.textContent = "Complexity: " + event.target.value;
    complexity = complexitySlider.value;
});

let words = {
    genres: {
        dic: [
            { word: "Action", iart: true }, { word: "Adventure", iart: true },
            { word: "Role-Playing", iart: false }, { word: "Strategy", iart: false },
            { word: "Simulation", iart: false }, { word: "Platformer", iart: false },
            { word: "Puzzle", iart: false }, { word: "Racing", iart: false },
            { word: "Sports", iart: false }, { word: "Shooter", iart: false },
            { word: "Survival", iart: false }, { word: "Horror", iart: false },
            { word: "Fighting", iart: false }, { word: "Stealth", iart: false },
            { word: "Rhythm", iart: false }, { word: "Open World", iart: true },
            { word: "Roguelike", iart: false }, { word: "MMORPG", iart: true },
            { word: "Educational", iart: true }, { word: "Sandbox", iart: false },
            { word: "Tactical", iart: false }, { word: "Card", iart: false },
            { word: "Word", iart: false }, { word: "Racing Simulation", iart: false },
            { word: "RTS", iart: true }, { word: "Turn-Based Strategy", iart: false },
            { word: "Management", iart: false }, { word: "Tower Defense", iart: false },
            { word: "Survival Horror", iart: false }, { word: "Visual Novel", iart: false },
            { word: "Point-and-Click Adventure", iart: false }, { word: "Metroidvania", iart: false },
            { word: "Beat 'em Up", iart: false }, { word: "Board Game", iart: false },
            { word: "Battle Royale", iart: false }, { word: "Time Management", iart: false },
            { word: "Artillery", iart: true }, { word: "Music", iart: false },
            { word: "Party", iart: false }, { word: "Trivia", iart: false },
        ],
        used: [],
    },

    themes: {
        dic: [
            { word: "Farming", iart: false }, { word: "War", iart: false },
            { word: "Christmas", iart: false }, { word: "Space Exploration", iart: false },
            { word: "Medieval Fantasy", iart: false }, { word: "Survival", iart: false },
            { word: "Zombie", iart: false }, { word: "Pirate", iart: false },
            { word: "Steampunk", iart: false }, { word: "Wild West", iart: false },
            { word: "Mystery", iart: false }, { word: "Detective", iart: false },
            { word: "Historical", iart: false }, { word: "Superhero", iart: false },
            { word: "Cyberpunk", iart: false }, { word: "Post-Apocalyptic", iart: false },
            { word: "Adventure", iart: true }, { word: "Underwater", iart: true },
            { word: "Time Travel", iart: false }, { word: "Alien", iart: true },
            { word: "Invasion", iart: true }, { word: "Mythological", iart: false },
            { word: "Sport", iart: false }, { word: "City Building", iart: false },
            { word: "Horror", iart: false }, { word: "Fantasy", iart: false },
            { word: "Dinosaur", iart: false }, { word: "AI", iart: true },
            { word: "Magic", iart: false }, { word: "Film Noir", iart: false },
            { word: "Simulation", iart: false }
        ],
        used: [],
    },

    adjectives: {
        dic: [
            { word: "Adventurous", iart: true }, { word: "Mysterious", iart: false },
            { word: "Whimsical", iart: false }, { word: "Energetic", iart: true },
            { word: "Enigmatic", iart: true }, { word: "Spirited", iart: false },
            { word: "Curious", iart: false }, { word: "Surreal", iart: false },
            { word: "Dynamic", iart: false }, { word: "Mystical", iart: false },
            { word: "Playful", iart: false }, { word: "Intriguing", iart: true },
            { word: "Fascinating", iart: false }, { word: "Vibrant", iart: false },
            { word: "Magical", iart: false }, { word: "Captivating", iart: false },
            { word: "Breathtaking", iart: false }, { word: "Epic", iart: true },
            { word: "Thrilling", iart: false }, { word: "Daring", iart: false },
            { word: "Fantastic", iart: false }, { word: "Awe-inspiring", iart: true },
            { word: "Enchanting", iart: true }, { word: "Heroic", iart: false },
            { word: "Legendary", iart: false }, { word: "Astonishing", iart: true },
            { word: "Wonderful", iart: false }, { word: "Glorious", iart: false },
            { word: "Phenomenal", iart: false }, { word: "Dazzling", iart: false },
        ],
        used: [],
    },

    animates: {
        dic: [
            { single: "Dog", plural: "Dogs" }, { single: "Cat", plural: "Cats" },
            { single: "Horse", plural: "Horses" }, { single: "Elephant", plural: "Elephants" },
            { single: "Tiger", plural: "Tigers" }, { single: "Bird", plural: "Birds" },
            { single: "Fish", plural: "Fish" }, { single: "Bear", plural: "Bears" },
            { single: "Lion", plural: "Lions" }, { single: "Rabbit", plural: "Rabbits" },
            { single: "Monkey", plural: "Monkeys" }, { single: "Dolphin", plural: "Dolphins" },
            { single: "Snake", plural: "Snakes" }, { single: "Kangaroo", plural: "Kangaroos" },
            { single: "Giraffe", plural: "Giraffes" }, { single: "Wolf", plural: "Wolves" },
            { single: "Deer", plural: "Deer" }, { single: "Fox", plural: "Foxes" },
            { single: "Squirrel", plural: "Squirrels" }, { single: "Owl", plural: "Owls" },
            { single: "Penguin", plural: "Penguins" }, { single: "Butterfly", plural: "Butterflies" },
            { single: "Frog", plural: "Frogs" }, { single: "Turtle", plural: "Turtles" },
            { single: "Koala", plural: "Koalas" }, { single: "Panda", plural: "Pandas" },
            { single: "Gorilla", plural: "Gorillas" }, { single: "Llama", plural: "Llamas" },
            { single: "Zebra", plural: "Zebras" },
        ],
        used: [],
    },

    inanimates: {
        dic: [
            { single: "Car", plural: "Cars" }, { single: "House", plural: "Houses" },
            { single: "Computer", plural: "Computers" }, { single: "Book", plural: "Books" },
            { single: "Table", plural: "Tables" }, { single: "Chair", plural: "Chairs" },
            { single: "Laptop", plural: "Laptops" }, { single: "Phone", plural: "Phones" },
            { single: "Camera", plural: "Cameras" }, { single: "Television", plural: "Televisions" },
            { single: "Bicycle", plural: "Bicycles" }, { single: "Clock", plural: "Clocks" },
            { single: "Painting", plural: "Paintings" }, { single: "Wallet", plural: "Wallets" },
            { single: "Guitar", plural: "Guitars" }, { single: "Shoes", plural: "Shoes" },
            { single: "Cup", plural: "Cups" }, { single: "Candle", plural: "Candles" },
            { single: "Mirror", plural: "Mirrors" }, { single: "Backpack", plural: "Backpacks" },
            { single: "Umbrella", plural: "Umbrellas" }, { single: "Sunglasses", plural: "Sunglasses" },
            { single: "Hat", plural: "Hats" }, { single: "Key", plural: "Keys" },
            { single: "Map", plural: "Maps" }, { single: "Door", plural: "Doors" },
            { single: "Plant", plural: "Plants" }, { single: "Piano", plural: "Pianos" },
            { single: "Microwave", plural: "Microwaves" }, { single: "Basket", plural: "Baskets" },
        ],
        used: [],
    },

    adverbs: {
        dic: [{ word: "Quickly", iart: false }, { word: "Slowly", iart: false },
            { word: "Carefully", iart: false }, { word: "Loudly", iart: false },
            { word: "Softly", iart: false }, { word: "Suddenly", iart: false },
            { word: "Gently", iart: false }, { word: "Rapidly", iart: false },
            { word: "Steadily", iart: false }, { word: "Quietly", iart: false },
            { word: "Anxiously", iart: true }, { word: "Patiently", iart: false },
            { word: "Frequently", iart: false }, { word: "Rarely", iart: false },
            { word: "Eagerly", iart: true }, { word: "Reluctantly", iart: false },
            { word: "Bravely", iart: false }, { word: "Cautiously", iart: false },
            { word: "Effortlessly", iart: true }, { word: "Gratefully", iart: false },
            { word: "Happily", iart: false }, { word: "Sadly", iart: false },
            { word: "Kindly", iart: false }, { word: "Honestly", iart: false },
            { word: "Sincerely", iart: false }, { word: "Politely", iart: false },
            { word: "Nervously", iart: false }, { word: "Surprisingly", iart: false },
            { word: "Tightly", iart: false }, { word: "Loosely", iart: false },
            { word: "Smoothly", iart: false }, { word: "Roughly", iart: false },
            { word: "Vigorously", iart: false }, { word: "Wearily", iart: false },
            { word: "Cheerfully", iart: false }, { word: "Miserably", iart: false },
            { word: "Confidently", iart: false }, { word: "Doubtfully", iart: false },
            { word: "Painfully", iart: false }, { word: "Gracefully", iart: false },],
        used: [],
    },

     verbs: {
        dic: [
            { word: "Running", iart: false }, { word: "Walking", iart: false },
            { word: "Jumping", iart: false }, { word: "Swimming", iart: false },
            { word: "Climbing", iart: false }, { word: "Singing", iart: false },
            { word: "Dancing", iart: false }, { word: "Laughing", iart: false },
            { word: "Smiling", iart: false }, { word: "Reading", iart: false },
            { word: "Writing", iart: false }, { word: "Eating", iart: true },
            { word: "Sleeping", iart: false }, { word: "Studying", iart: false },
            { word: "Working", iart: false }, { word: "Playing", iart: false },
            { word: "Cooking", iart: false }, { word: "Baking", iart: false },
            { word: "Hiking", iart: false }, { word: "Painting", iart: false },
            { word: "Surfing", iart: false }, { word: "Shopping", iart: false },
            { word: "Traveling", iart: false }, { word: "Fishing", iart: false },
            { word: "Gardening", iart: false }, { word: "Driving", iart: false },
            { word: "Cycling", iart: false }, { word: "Running", iart: false },
            { word: "Jogging", iart: false }, { word: "Sketching", iart: false },
            { word: "Watching", iart: false }, { word: "Listening", iart: false },
            { word: "Speaking", iart: false }, { word: "Texting", iart: false },
            { word: "Dreaming", iart: false }, { word: "Hugging", iart: false },
            { word: "Kissing", iart: false }, { word: "Trending", iart: false },
            { word: "Chatting", iart: false }, { word: "Meditating", iart: false }
        ],
        used: [],
    },

    mechanics: {
        dic: [{ word: "Health Point", iart: false }, { word: "Mana Point", iart: false },
            { word: "Experience Point", iart: true }, { word: "Leveling Up", iart: false },
            { word: "Inventory System", iart: true }, { word: "Quest and Objective", iart: false },
            { word: "Skill Tree", iart: false }, { word: "Character Creation", iart: false },
            { word: "Character Class", iart: false }, { word: "Attribute", iart: true },
            { word: "Status Effect", iart: false }, { word: "Cooldown", iart: false },
            { word: "Respawn", iart: false }, { word: "Save and Load System", iart: false },
            { word: "Achievement", iart: true }, { word: "Boss Battle", iart: false },
            { word: "Stealth Mechanic", iart: false }, { word: "Dialog Choice", iart: false },
            { word: "Character Customization", iart: false }, { word: "Crafting System", iart: false },
            { word: "Puzzle", iart: false }, { word: "Fast Travel", iart: false },
            { word: "Fog of War", iart: false }, { word: "Resource Gathering", iart: false },
            { word: "Mini-Map", iart: false }, { word: "Character Movement", iart: false },
            { word: "Jumping", iart: false }, { word: "Combat System", iart: false },
            { word: "Combo Attack", iart: false }, { word: "Critical Hit", iart: false },
            { word: "Dodge", iart: false }, { word: "Parry and Block", iart: false },
            { word: "Steering", iart: false }, { word: "Racing Mechanic", iart: false },
            { word: "Time Manipulation", iart: false }, { word: "Physics Engine", iart: false },
            { word: "Aiming and Shooting", iart: true }, { word: "Cover System", iart: false },
            { word: "Stealth Takedown", iart: false }, { word: "Skill Check", iart: false },
            { word: "Trade and Barter", iart: false }, { word: "Vehicle", iart: false },
            { word: "Day-Night Cycle", iart: false }, { word: "Weather Effect", iart: false },
            { word: "Permadeath", iart: false }, { word: "Respawn Point", iart: false },
            { word: "Loot Drops", iart: false }, { word: "Achievement Unlock", iart: true },
            { word: "Experience Gain Rate", iart: false }, { word: "Character Progression", iart: false },
            { word: "Resource Management", iart: false }, { word: "Companion System", iart: false },
            { word: "Level Scaling", iart: false }, { word: "Random Encounter", iart: false },
            { word: "Time Limit", iart: false }, { word: "Multiplayer Mode", iart: false },
            { word: "Team-Based Gameplay", iart: false }, { word: "Leaderboard", iart: false },],
        used: [],
    },

    reset: function() {
        this.genres.used = [];
        this.themes.used = [];
        this.adjectives.used = [];
        this.animates.used = [];
        this.inanimates.used = [];
        this.adverbs.used = [];
        this.verbs.used = [];
        this.mechanics.used = [];
    },
}

const inputStrings = [
    //_Complexity 0_
    "A $genre game",
    //_Complexity 1_
    "A $genre game, that implements a $mech mechanic.",
    //_Complexity 2_
    "A $genre game, involving @anim, that implements a $mech mechanic.",
    //_Complexity 3_
    "A $theme $genre game, involving @anim, that implements a $mech mechanic.",
    //_Complexity 4_
    "A $theme $genre game, involving @anim and @inanim, that implements a $mech mechanic.",
    //_Complexity 5_
    "A $theme $genre game, involving @anim using a $verb with @inanim, that implements a $mech mechanic.",
    //_Complexity 6_
    "A $adj $theme $genre game, involving @anim using a $verb with @inanim, that implements a $mech mechanic.",
    //_Complexity 7_
    "A $adj $theme $genre game, involving @anim using a $verb with @inanim, that implements a $adj $mech mechanic.",
    //_Complexity 8_
    "A $adj $theme $genre game, involving @anim $adverb $verb with @inanim, that implements a $adj $mech mechanic.",
    //_Complexity 9_
    "A $adj $theme $genre game, involving @anim $adverb $verb with @inanim, that implements a $adj $mech " +
    "mechanic but doesn't use a $mech mechanic.",
    //_Complexity 10_
    "A $adj $theme $theme $genre game, involving @anim $adverb $verb with @inanim, that implements a $adj $mech " +
    "mechanic but doesn't use a $mech mechanic.",
];

function generatePrompt() {

    words.reset();

    let input = inputStrings[complexity];
    let output = "";
    let last_word = "";

    while(input !== "") {

        let slice = getFirstWord(input);
        let punctuation = "";

        if (!slice[0].charAt(slice[0].length - 1).match(/[a-z]/i)) {
            punctuation = slice[0].charAt(slice[0].length - 1);
            slice[0] = slice[0].slice(0, slice[0].length - 1);
        }

        if (slice[0].charAt(0) === "$") {

            slice[0] = getWord(translate(slice[0]));
            if ((last_word === "a" || last_word === "A") && slice[0].iart) {
                output += "n";
            }
            output += " " + slice[0].word;

        } else if (slice[0].charAt(0) === "@") {

            let amount = getRandomInt(5) + 1;
            let plural = amount !== 1;
            slice[0] = getObject(translate(slice[0]), plural);
            output += " " + getAmount(amount) + " " + slice[0];

        } else {

            output += " " + slice[0];

        }

        if(punctuation !== "") {
            output += punctuation + "<br>";
        }

        if(String(slice[0])) {
            last_word = slice[0];
        } else {
            last_word = slice[0].word || slice[0];
        }
        input = slice[1];

    }

    output = output.trim();

    appendHtml(promptBox, "<p id=\"prompt-text\">"+ output + "</p>");

}

function getAmount(_num) {

    switch(_num) {
        case 0: return "devoid of";
        case 1: return "a single";
        case 2: return "a pair of";
        case 3: return "a group of";
        case 4: return "a mass of";
        case 5: return "a vast quantity of";
        case 6: return "a legion of";
    }

}

function getRandomInt(_max) {
    return Math.floor(Math.random() * _max);
}

function translate(_input) {
    switch(_input) {
        case "$genre": {return "genres";}
        case "$theme": {return "themes";}
        case "$adj": {return "adjectives";}
        case "@anim": {return "animates";}
        case "@inanim": {return "inanimates";}
        case "$adverb": {return "adverbs";}
        case "$verb": {return "verbs";}
        case "$mech": {return "mechanics";}
        default: {return "unknown input: \"" + _input + "\"";}
    }
}

function getFirstWord(_input) {

    _input = _input.trim();
    let hit = false;
    let blank = -1;

    for(let i = 1; i <= _input.length; i++) {
        blank = i;
        if(_input.charAt(i) === " " || _input.charAt(i) === "/") {
            hit = true;
            break;
        }
    }

    if(hit === false) {
        return [_input, ""];
    } else {
        return [_input.slice(0, blank), _input.slice(blank + 1)];
    }

}

function getWord(_type) {

    try {
        let categoryLength = words[_type].dic.length;

        let word = {};

        do
            word = words[_type].dic[Math.floor(Math.random() * categoryLength)];
        while(words[_type].used.includes(word.word))

        return word;
    } catch {
        console.error("Could not find word with identifier. " + _type);
    }

}

function getObject(_type, _plural) {

    try {
        let categoryLength = words[_type].dic.length;

        let word = "";

        do
            if(_plural) {
                word = words[_type].dic[getRandomInt(categoryLength)].plural;
            } else {
                word = words[_type].dic[getRandomInt(categoryLength)].single;
            }
        while(words[_type].used.includes(word))

        return word;
    } catch {
        console.error("Could not find object with identifier. " + _type);
    }

}

function appendHtml(el, str) {
    let div = document.createElement('div'); //container to append to
    div.innerHTML = str;
    while (div.children.length > 0) {
        el.appendChild(div.children[0]);
    }
}