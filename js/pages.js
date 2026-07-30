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

        title: "The Troll Under the Bridge",

        image: "images/bridge.png",

        story:
            `
            Ah the old bridge over the stream! A perfect place to try out your new magic tricks; not many come here lately.
            You step onto its beams and begin manipulating the stream with your ring when you hear 
            "Halt traveler!" come from...under the bridge?
            "If you wish to cross my bridge, you first must solve my riddle"
            Oh great, the bridge has been left so long a troll has claimed it.
            Might as well humor him...
            `,

        prompt:
            `
            "I don't shoot arrows yet I share the name. Where the water falls, you'll see my frame.
            What am I?"
            `,

        answerType: "text",

        answers: {

            accepted: [
                "rainbow",
                "a rainbow"
            ]

        },

        success:
            `
            "Haha! Yes! A Rainbow!" Laughes the troll. "That ring your brought reminded me of it. 
            Legened says that ring was found at the end of a rainbow"
            `,

        failure:
            "Ha! An interesting interpretation traveler; try again.",

        next: {

            destination: "bridge2"

        }

    },

  bridge2: {

        type: "clue",

        title: "To The Rainbow",

        image: "images/rainbow.png",

        story:
            `
            Huh, this ring came from a rainbow he says? And what luck! There appears to be a rainbow on the horizon!
            Perhaps traveling to it could reveal more secrets of this ring! It's rather far though, certainly would be
            helpful if you could just...fly there
            `,

        prompt:
            `
            Someone at this party has a ring which bestows the user with flight. What was this flight ring forged from?
            `,

        answerType: "text",

        answers: {

            accepted: [
                "dragon fang",
                "a dragon fang",
                "dragon's fang",
                "a dragon's fang",
                "the fang of a dragon",
                "fang of a dragon"
            ]

        },

        success:
            `
            Off to the rainbow!
            `,

        failure:
            "That isn't the flight ring, you'll have to keep looking",

        next: {

            destination: "bridge3"

        }

    },
    
  bridge3: {

        type: "clue",

        title: "The End of the Rainbow",

        image: "images/crystalpalace.png",

        story:
            `
            To feel the wind under your feet and...nothing else; what a thrill it is to fly. 
            As you approach the rainbow you start to see its end in the clouds, and my is it marvelous!
            A palace of crystal begins to materialize (best not throw stones here eh) and you fly to what must be the entrance
            You knock on the shining door before you and a large...cloud creature? Opens the door and looks down at you
            "Ah! A hobbit! Don't often see you here at the cloud palace," his voice booms as thunder.
            "We don't allow strangers in unannounced, but for the right coin I'll let you pass"
            `,

        prompt:
            `
            What is the value of the coin with an owl on it?
            `,

        answerType: "number",

        answers: {

            accepted: [
                1
            ]

        },

        success:
            `
            "Ah! A lovely piece! Very well, come inside"
            `,

        failure:
            "I would prefer a different coin",

        next: {

            destination: "bridgeEnding"

        }

    },

    //--------------------------------------------------
    // BRIDGE ENDING
    //--------------------------------------------------


    bridgeEnding: {

        type: "ending",

        title: "The Water Ring",

        image: "images/cloudking.png",

        story:
            `
            "Welcome hobbit friend," the king of the clouds says to you. "You're certainly far from home"
            "That ring you wear! With the power to manipulate water, it also was blessed to heal its wearer"
            A healing ring? That explains why your old, bothersome knee hasn't been on your mind this entire time
            "My wife needs its healing to save her life, surely I could trade you for it; my queen's life is worth any treasure"
            Surely you couldn't exploit the suffering of a queen
            "Please," you answer the king. "Take the ring and save your beloved"
            "Compassionate hobbit," the king replies. "Your kindness shall be rewarded" (see Tyler)
            `,

        endingText:
            `
            Your Ring:
            Power: Water Manipulation
            Effect: Healing
            Origin: Found at the end of a rainbow
            `,

        mysteryClue:
            "",

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
