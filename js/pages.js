//--------------------------------------------------
// Dragon Scavenger Hunt
// Page Database
//--------------------------------------------------
//
// Page types:
// "intro"  = story/setup page
// "clue"   = requires an answer
// "ending" = final path conclusion
//
// Answer types:
// "text"
// "number"
// "none"
//
//--------------------------------------------------


const pages = {


    //--------------------------------------------------
    // DRAGON PATH
    //--------------------------------------------------


    dragon1: {

        type: "clue",

        title: "The Dragon",

        image: "images/dragon.png",

        story:
        `
            You have been hiking through the mountains in the hopes of learning more about this mysterious ring,
        and something has drawn you to this place; pure luck? or perhaps the ring itself. 
        Regardless you now find yourself in a large cavern piled with gold and treasure. 
        " Ah! An afternoon snack!" you hear a booming voice proclaim. Oh no! You've been told there was a dragon 
        in these mountains and decided to venture here anyway.
        `,

        prompt:
        `
            "As much as I enjoy the taste of Hobbit, my love of gold exceeds it.
        I'll let you pass for the correct value coin" commands the Dragon.
        (input the value of the coin with a dragon on it),
        `,

        answerType: "number",

        answers: {

            accepted: [
                100
            ]

        },

        success:
        `
            "Ah, a lovely piece to add to my horde," proclaims the dragon.
            "One more thing before you go... that ring you carry was forged from the fang of a dragon.",
        `,

        failure:
        `
            "Ha! You think this will satisfy me! Try again Hobbit.",
        `,

        next: {

            destination: "dragon2"

        }

    },


    //--------------------------------------------------


    dragon2: {

        type: "clue",

        title: "Return to the Shire",

        image: "images/mountain.png",

        story:
        `
            Relieved to have survived such an encounter, it is time to return to the shire, if only you could find your way...
        `,

        prompt:
        `
            Name the river directly east of the Blue Mountains.
        `,

        answerType: "text",

        answers: {

            accepted: [
                "lune",
                "lune river"
            ]

        },

        success:
            "\"Excellent. Your knowledge of Middle-earth serves you well.\"",

        failure:
            "That couldn't be the correct way, let me look again",

        next: {

            destination: "dragon3"

        }

    },


    //--------------------------------------------------


    dragon3: {

        type: "clue",

        title: "Return to The Shire",

        image: "images/shire.png",

        story:
        `
            It's wonderful to make it home, and in one piece too! Yet, you feel...smaller?
            You're already so small in stature, surely you couldn't have gotten even closer to the ground
            Perhaps it's worth asking Tyler his opinion
        `,

        prompt:
            "Go to Tyler and ask if you're getting smaller (He'll tell you what to type)",

        answerType: "number",

        answers: {

            accepted: [
                5
            ]

        },

        success:
            "\"You have proven yourself worthy.\"",

        failure:
            "\"Count again, traveler.\"",

        next: {

            destination: "dragonEnding"

        }

    },


    //--------------------------------------------------
    // DRAGON ENDING
    //--------------------------------------------------


    dragonEnding: {

        type: "ending",

        title: "The Ring of the Dragon's Fang",

        image: "images/dragonring.png",

        story:
        `
You've had quite the adventure and learned much about this mysterious ring.
Now perhaps you can share what you've learned with your commrads to discover the Cursed Ring
        `,

        endingText:
        `
Your Ring:
Power: Flight
Effect: Shrinking
Origin: Forged from the fang of a dragon
        `
            ,

        // This is the clue players share
        // with other teams at the party.

        mysteryClue:
        `
        Cursed Ring Clue:
The Cursed Ring has power over one of the elements
        `
            ,

        next: null

    },



    //--------------------------------------------------
    // BRIDGE PATH EXAMPLE
    //--------------------------------------------------


    bridge1: {

        type: "clue",

        title: "The Forgotten Bridge",

        image: "images/bridge.png",

        story:
            "An old bridge stretches across a dark ravine.",

        prompt:
            "What material is traditionally used to make a bridge's strongest supports?",

        answerType: "text",

        answers: {

            accepted: [
                "stone",
                "rock"
            ]

        },

        success:
            "The bridge creaks open.",

        failure:
            "The bridge remains still.",

        next: {

            destination: "bridgeEnding"

        }

    },


    //--------------------------------------------------
    // BRIDGE ENDING
    //--------------------------------------------------


    bridgeEnding: {

        type: "ending",

        title: "The Bridge's Secret",

        image: "images/bridge.png",

        story:
            "Beneath the bridge you discover a hidden inscription.",

        endingText:
            "Your collected clue: The cursed ring belonged to a forgotten kingdom.",

        mysteryClue:
            "Forgotten kingdom",

        next: null

    },



    //--------------------------------------------------
    // PIPE PATH EXAMPLE
    //--------------------------------------------------


    pipe1: {

        type: "clue",

        title: "The Hidden Passage",

        image: "images/pipe.png",

        story:
            "A mysterious pipe leads deeper into the mountain.",

        prompt:
            "What instrument is commonly associated with pipes?",

        answerType: "text",

        answers: {

            accepted: [
                "flute",
                "bagpipe"
            ]

        },

        success:
            "The passage opens.",

        failure:
            "The passage remains sealed.",

        next: {

            destination: "pipeEnding"

        }

    },


    //--------------------------------------------------
    // PIPE ENDING
    //--------------------------------------------------


    pipeEnding: {

        type: "ending",

        title: "The Pipe's Secret",

        image: "images/pipe.png",

        story:
            "A hidden chamber reveals another piece of the mystery.",

        endingText:
            "Your collected clue: The cursed ring carries an ancient inscription.",

        mysteryClue:
            "Ancient inscription",

        next: null

    }



};
