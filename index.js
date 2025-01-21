/*
###############################################################################################################
THINGS TO FIX/DO:
    1.  Add some sounds
    2.  Fix lighting
    3.  Add a keybind (tab or something like that) for a quick restart
    4.  Later down the line if I come back to this project create user profiles  
##############################################################################################################
*/


const functionalWords = ["the", "and", "but", "or", "for", "nor", "so", "yet", "of", "in", "on", "at", "to", "by", "with", "from", "about", "as", "into", "through", "over", "under", "above", "below", "between", "among", "before", "after", "during", "since", "until", "because", "while", "when", "where", "how", "what", "who", "whom", "whose", "which", "that", "this", "these", "those", "it", "is", "was", "were", "be", "being", "been", "have", "has", "had", "do", "does", "did", "can", "could", "will", "would", "shall", "should", "may", "might", "must", "we", "they", "you", "he", "she", "I", "me", "him", "her", "us", "them", "my", "your", "his", "their", "our", "its", "here", "there", "now", "then", "always", "never", "sometimes", "often", "very", "more", "less", "much", "many", "few", "all", "some", "any", "none", "each", "every", "either", "neither", "both", "up", "down", "out", "inside", "outside", "again", "too", "also", "only", "even", "just", "still", "ever", "yet", "almost", "quite", "really", "actually", "already", "soon", "today", "tonight", "tomorrow", "yesterday", "early", "late", "ago", "new", "old", "big", "small", "large", "little", "good", "bad", "better", "worse", "best", "worst", "right", "wrong", "left", "first", "last", "next", "same", "different", "other", "another", "own", "few", "several", "most", "such", "more", "less", "much", "many", "enough", "both", "all", "none", "any", "each", "either", "neither", "few", "many", "some", "this", "that", "these", "those", "who", "whom", "whose", "which", "what", "where", "when", "why", "how", "because", "while", "before", "after", "if", "though", "although", "since", "until", "unless", "whether", "as", "like", "such", "including"];
const randomWords = ["apple", "banana", "cat", "dog", "house", "chair", "table", "car", "bike", "tree", "sky", "water", "sun", "moon", "star", "cloud", "fire", "earth", "wind", "grass", "flower", "book", "pen", "paper", "school", "teacher", "student", "friend", "family", "child", "baby", "toy", "ball", "game", "park", "garden", "river", "mountain", "hill", "road", "street", "city", "town", "village", "country", "ocean", "beach", "sand", "shell", "fish", "bird", "horse", "cow", "pig", "sheep", "goat", "farm", "farmer", "field", "forest", "jungle", "desert", "valley", "cliff", "stone", "rock", "bridge", "boat", "ship", "plane", "train", "bus", "truck", "driver", "passenger", "station", "airport", "ticket", "seat", "window", "door", "wall", "floor", "roof", "kitchen", "bathroom", "bedroom", "living", "room", "hallway", "stairs", "ceiling", "lamp", "light", "bulb", "switch", "plug", "socket", "power", "cable", "wire", "clock", "watch", "mirror", "picture", "painting", "frame", "glass", "cup", "mug", "plate", "bowl", "fork", "knife", "spoon", "bottle", "jar", "box", "bag", "basket", "shelf", "drawer", "closet", "cupboard", "bed", "pillow", "blanket", "mattress", "sofa", "couch", "chair", "table", "desk", "computer", "keyboard", "mouse", "monitor", "screen", "phone", "tablet", "camera", "lens", "photo", "video", "movie", "music", "song", "band", "singer", "guitar", "piano", "drum", "violin", "trumpet", "flute", "note", "sound", "voice", "noise", "silence", "speech", "word", "letter", "sentence", "paragraph", "story", "novel", "poem", "writer", "author", "book", "library", "page", "cover", "title", "chapter", "topic", "subject", "question", "answer", "problem", "solution", "idea", "thought", "mind", "brain", "head", "face", "eye", "ear", "nose", "mouth", "tooth", "tongue", "lip", "chin", "cheek", "hair", "beard", "neck", "shoulder", "arm", "hand", "finger", "thumb", "nail", "skin", "bone", "muscle", "heart", "blood", "lung", "stomach", "liver", "kidney", "back", "chest", "hip", "leg", "knee", "foot", "toe", "ankle", "heel", "clothes", "shirt", "pants", "dress", "skirt", "coat", "jacket", "shoes", "socks", "hat", "cap", "scarf", "gloves", "belt", "tie", "ring", "watch", "bracelet", "necklace", "earrings", "glasses", "sunglasses", "backpack", "suitcase", "purse", "wallet", "money", "coin", "bill", "bank", "card", "shop", "store", "market", "mall", "sale", "price", "cost", "discount", "receipt", "product", "brand", "item", "thing", "stuff", "material", "metal", "wood", "plastic", "paper", "fabric", "cotton", "wool", "leather", "stone", "glass", "clay", "paint", "ink", "brush", "pen", "pencil", "ruler", "eraser", "marker", "notebook", "diary", "calendar", "clock", "alarm", "time", "day", "week", "month", "year", "hour", "minute", "second", "morning", "afternoon", "evening", "night", "midnight", "sunrise", "sunset", "breakfast", "lunch", "dinner", "snack", "food", "drink", "water", "juice", "milk", "tea", "coffee", "soda", "beer", "wine", "bread", "rice", "pasta", "cheese", "butter", "egg", "meat", "chicken", "beef", "pork", "fish", "shrimp", "crab", "lobster", "vegetable", "fruit", "apple", "banana", "orange", "grape", "lemon", "lime", "strawberry", "blueberry", "raspberry", "cherry", "peach", "plum", "melon", "watermelon", "cucumber", "carrot", "potato", "tomato", "onion", "garlic", "pepper", "lettuce", "spinach", "broccoli", "cabbage", "corn", "bean", "pea", "nut", "almond", "peanut", "walnut", "chocolate", "candy", "cookie", "cake", "pie", "ice", "cream", "yogurt", "honey", "jam", "sauce", "soup", "salad", "sandwich", "pizza", "burger", "fries", "hotdog", "steak", "pasta", "noodle", "rice", "sushi", "taco", "wrap", "bread", "toast", "cereal", "milkshake", "smoothie", "coffee", "tea", "juice", "water", "soda", "beer", "wine"];

// When the website loads the test will be randomly generated
window.onload = function() {   
    let testWords = []; //  words for the test
    for (let i = 0; i < 50; i++) {
        var random = Math.floor(Math.random() * 2);
        if (random === 0) {     //  a random functional word will be generated
            random = Math.floor(Math.random() * 203);
            testWords.push(functionalWords[random]);
        } else {
            random = Math.floor(Math.random() * 407);
            testWords.push(randomWords[random]);
        }
        
    }
    $(".test-characters").text(testWords.join(" "));
};

var TEST_CHARACTERS;    //  original test characters
var user_test;  //  the updated test characters once the user types

//  Creates small delay to allow time for the test variables to be set
setTimeout(() => {  
    TEST_CHARACTERS = document.querySelector(".test-characters").innerText; 
    user_test = document.querySelector(".test-characters").innerHTML;   
}, 100);


//dark / light theme toggle
var dim = true;
$(".toggle").click(function() {
    if (dim === true) {
        $("body").css("background-color", "white");
        $("body").css("color", "#0b86bf");
        $("a").css("color", "#0b86bf");
        $(".toggle").html('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16"><path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/></svg>');
        dim = false;
    } else {
        $("body").css("background-color", "rgb(50, 50, 50)");
        $("body").css("color", "#7ddbf8");
        $("a").css("color", "##7ddbf8");
        $(".toggle").html('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16"><path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/></svg>');
        dim = true;
    }
});

$(".restart-button").click(function() {
    location.reload();
})

// const TEST_CHARACTERS = document.querySelector(".test-characters").innerText;   //original test characters
// var user_test = document.querySelector(".test-characters").innerHTML;   //the updated test characters once the user types
var char_pos = 0;   //the current char the user is at
var user_chars_correct = 0; //how many letters the user has typed correctly

var offset = 0; //used to adjust position in the innerHTML of user_test due to the the <span></span> element
//  Checks the char the User typed matches the Test's char
function charCheck(char, pos) {
    let testChar = TEST_CHARACTERS.charAt(pos); //  Original character in Test
    if (char === testChar) {
        if (pos === 0) {    //  the first character doesn't need an offset when selecting index
            user_test = replaceCharAtIndex(user_test, 0, '<span style="color:#60cf4c;">'+testChar+'</span>');
            document.querySelector(".test-characters").innerHTML = user_test;
            user_chars_correct++;
            offset += 37;
        } else {
            user_test = replaceCharAtIndex(user_test, offset, '<span style="color:#60cf4c;">'+testChar+'</span>');
            document.querySelector(".test-characters").innerHTML = user_test;
            user_chars_correct++;
            offset += 37;
        }    
    } else {
        if (pos === 0) {    //  the first character doesn't need an offset when selecting index
            user_test = replaceCharAtIndex(user_test, 0, '<span style="color:red;">'+testChar+'</span>');
            document.querySelector(".test-characters").innerHTML = user_test;
            offset += 33;
        } else {
            user_test = replaceCharAtIndex(user_test, offset, '<span style="color:red;">'+testChar+'</span>');
            document.querySelector(".test-characters").innerHTML = user_test;
            offset += 33;
        }    
    }
    // console.log(user_test);
}

//  Replaces the char at a specific index within a string -> RETURNS NEW STRING
function replaceCharAtIndex(str, index, newStr) {
    const chars = str.split(''); // Split the string into an array of characters
    chars[index] = newStr; // Replace the character at the given index
    return chars.join(''); // Join the array back into a string
}

//  Awaits the keydown and executes following functions
$(document).keydown(function(event) {
    if (char_pos === 0) {   //  clears some UI on first key clicked
        fadeAway();
    }
    charCheck(event.key, char_pos); //  Checks character
    char_pos++; //  character position is incremented
    updateAccuracyStatus(); //  Updates accuracy
    if (char_pos === TEST_CHARACTERS.length) { 
        let user_wpm = wpm(seconds, user_chars_correct);
        $('.wpm').text("WPM : " + user_wpm);
        $('#stat-popup').css('display', 'flex');
    }
});

// fades away all other components once typing
function fadeAway() {
    $(".site-title, .toggle, .site-credits").animate({opacity: 0});
    $(".stat").animate({opacity: 100});
}

var seconds = 0;
var timer = setInterval(function() {    //  timer functionality
    if (char_pos > 0) { //  begins tracking whenever the user starts typing
        if (char_pos < TEST_CHARACTERS.length) {
            seconds++;
            $(".time").text("Time : " + seconds + "s");
        } else {    //  timer stops whenever user finishes test
            clearInterval(timer);
            console.log("Test completed.");
        }
    }
}, 1000);

function updateAccuracyStatus() {
    let accuracy = Math.round((user_chars_correct / char_pos) * 100);
    $(".accuracy").text("Accuracy : " + accuracy + "%");
}

const wpm = (seconds, chars) => {
    let words = Math.ceil(chars / 5);
    let minutes = seconds / 60;
    return (Math.round(words / minutes));
}