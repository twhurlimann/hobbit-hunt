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
        story: `
            You have been hiking through the mountains in the hopes of learning more about this mysterious ring,
            and something has drawn you to this place; pure luck? or perhaps the ring itself. 
            Regardless, you now find yourself in a large cavern piled with gold and treasure. 
            "Ah! An afternoon snack!" you hear a booming voice proclaim. Oh no! You've been told there was a dragon 
            in these mountains and decided to venture here anyway.
        `,
        prompt: `
            "As much as I enjoy the taste of Hobbit, my love of gold exceeds it.
            I'll let you pass for the correct value coin" commands the Dragon.
            (input the value of the coin with a dragon on it, someone here has it),
        `,
        answerType: "number",
        answers: {
            accepted: [100]
        },
        success: `
            "Ah, a lovely piece to add to my horde," proclaims the dragon.
            "One more thing before you go... that ring you carry was forged from the fang of a dragon.",
        `,
        failure: `
            "Ha! You think this will satisfy me! Try again Hobbit.",
        `,
        next: {
            destination: "dragon2"
        }
    },

    dragon2: {
        type: "clue",
        title: "Return to the Shire",
        image: "images/mountain.png",
        story: `
            Relieved to have survived such an encounter, it is time to return to the shire, if only you could find your way...
        `,
        prompt: `
            Name the river directly east of the Blue Mountains.
        `,
        answerType: "text",
        answers: {
            accepted: [
                "lune",
                "lune river"
            ]
        },
        success: "\"Excellent. Your knowledge of Middle-earth serves you well.\"",
        failure: "That couldn't be the correct way, let me look again",
        next: {
            destination: "dragon3"
        }
    },

    dragon3: {
        type: "clue",
        title: "Return To The Shire",
        image: "images/shire.png",
        story: `
            It's wonderful to make it home, and in one piece too! Yet, you feel...smaller?
            You're already so small in stature, surely you couldn't have gotten even closer to the ground.
            Perhaps it's worth asking Tyler his opinion.
        `,
        prompt: "Go to Tyler and ask if you're getting smaller (He'll tell you what to type)",
        answerType: "number",
        answers: {
            accepted: [5]
        },
        success: "\"You have proven yourself worthy.\"",
        failure: "\"Count again, traveler.\"",
        next: {
            destination: "dragonEnding"
        }
    },

    dragonEnding: {
        type: "ending",
        title: "The Ring of the Dragon's Fang",
        image: "images/dragonring.png",
        story: `
            You've had quite the adventure and learned much about this mysterious ring.
            Now perhaps you can share what you've learned with your comrades to discover the Cursed Ring.
        `,
        endingText: `
            Your Ring:
            Power: Flight
            Effect: Shrinking
            Origin: Forged from the fang of a dragon
        `,
        mysteryClue: `
            Cursed Ring Clue:
            The Cursed Ring has power over one of the elements
        `,
        next: null
    },
  //--------------------------------------------------
    // LAMP PATH
    //--------------------------------------------------

    lamp1: {
        type: "clue",
        title: "What a Lovely Ring",
        image: "images/toast.png",
        story: `
            You appreciate that Tyler would encourage you to say such kind words at your friend's birthday party, but also appreciate this ring he gave you.
            Did he know it turns you invisible?
            Nonetheless it was quite helpful for slipping away unseen.
            You've never been much for crowds
            Infact, wouldn't it be great to slip away entirely?
            No one would see you leave so there's no need of awkward goodbyes...
        `,
        prompt: `
            Name the river south of the weary traveler
        `,
        answerType: "text",
        answers: {
            accepted: [
                "greyflood river",
                "greyflood",
                "grey flood",
                "the grey flood",
                "the greyflood",
                "the greyflood river",
                "the grey flood river"
            ]
        },
        success: `
           Perfect! Far away to no longer be bothered
        `,
        failure: "Hmm, that doesn't seem right, check the map again for the horseman",
        next: {
            destination: "lamp2"
        }
    },

    lamp2: {
        type: "clue",
        title: "The Road to Isolation",
        image: "images/road.png",
        story: `
           How remarkable for a hobbit to not only leave the Shire, but to do so on such a whim and telling no one?! Madness perhaps, the easiest decision for you.
           The road has been somehwat challenging at times, but overall pleasent. The changing landscapes and evenings under the stary sky are certainly appealing. 
           While it may seem lonely, you have do have the one, most important thing with you: your ring. Thankfully with its power you are easily able to avoid interactions with fellow travelers. After all, they could be bandits desire to steal your precious treasure! Yet their never able to see you when they pass you, and that keeps you, both of you, safe.
           "Mighty far journey for a hobbit eh?" you hear a voice behind you
           Oh no! how did you miss what must be a bandit. Some people don't need a ring to be invisible.
           "Where are you off to little fella?" Sure he seems kind, but he's just trying to decive you. He knows you have that precious ring; he knows and he wants it! He must!
           It would be most helpful to simply...dispose of this person
        `,
        prompt: `
           Someone here has a ring that controls fire. Type the name of the mountains they traveled to in their own journey
        `,
        answerType: "text",
        answers: {
            accepted: [
                "ettenmoors"
            ]
        },
        success: `Burn! Burn! You'll never have my precious!`,
        failure: "May want to ask the mountains name again",
        next: {
            destination: "lampEnding"
        }
    },

    lampEnding: {
        type: "ending",
        title: "The Invisibility Ring",
        image: "images/precious.png",
        story: `
        My how things have changed since you left the Shire, and who knows how long it's been. Who even cares? No company? You've all the company you need...precious, precious company.
        You've abandoned the road and wander the countryside, all the easier to avoid all those bandits: everyone is a bandit in the end.
        You still emjoy the stars every night, they seem almost as enticing as the ring you care most about.
        This evening the stars seem even to be...falling? Wow! An incredible sight. And what's that? Is one falling directly at you!
        You dive away as the falling star lands not far from where you had been standing. Scurrying over to investigate you notice something amazing.
        Your beautiul ring, your precious, it is clearly made from the very same material!
        `,
        endingText: `
            Your Ring:
            Power: Invisibility
            Effect: Madness (My Precious!)
            Origin: Forged from a Fallen Star
        `,
        mysteryClue: "",
        next: null
    },
    //--------------------------------------------------
    // BRIDGE PATH
    //--------------------------------------------------

    bridge1: {
        type: "clue",
        title: "The Troll Under the Bridge",
        image: "images/bridge.png",
        story: `
            Ah the old bridge over the stream! A perfect place to try out your new magic tricks; not many come here lately.
            You step onto its beams and begin manipulating the stream with your ring when you hear 
            "Halt traveler!" come from...under the bridge?
            "If you wish to cross my bridge, you first must solve my riddle"
            Oh great, the bridge has been left so long a troll has claimed it.
            Might as well humor him...
        `,
        prompt: `
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
        success: `
            "Haha! Yes! A Rainbow!" laughs the troll. "That ring you brought reminded me of it. 
            Legend says that ring was found at the end of a rainbow"
        `,
        failure: "Ha! An interesting interpretation traveler; try again.",
        next: {
            destination: "bridge2"
        }
    },

    bridge2: {
        type: "clue",
        title: "To The Rainbow",
        image: "images/rainbow.png",
        story: `
            Huh, this ring came from a rainbow he says? And what luck! There appears to be a rainbow on the horizon!
            Perhaps traveling to it could reveal more secrets of this ring! It's rather far though, certainly would be
            helpful if you could just...fly there.
        `,
        prompt: `
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
                "fang of a dragon",
                "dragons fang",
                "a dragons fang"
            ]
        },
        success: `Off to the rainbow!`,
        failure: "That isn't the flight ring, you'll have to keep looking",
        next: {
            destination: "bridge3"
        }
    },

    bridge3: {
        type: "clue",
        title: "The End of the Rainbow",
        image: "images/crystalpalace.png",
        story: `
            To feel the wind under your feet and...nothing else; what a thrill it is to fly. 
            As you approach the rainbow you start to see its end in the clouds, and my is it marvelous!
            A palace of crystal begins to materialize (best not throw stones here eh) and you fly to what must be the entrance.
            You knock on the shining door before you and a large...cloud creature? Opens the door and looks down at you.
            "Ah! A hobbit! Don't often see you here at the cloud palace," his voice booms as thunder.
            "We don't allow strangers in unannounced, but for the right coin I'll let you pass"
        `,
        prompt: `
            What is the value of the coin with an owl on it?
        `,
        answerType: "number",
        answers: {
            accepted: [1]
        },
        success: `"Ah! A lovely piece! Very well, come inside"`,
        failure: "I would prefer a different coin",
        next: {
            destination: "bridgeEnding"
        }
    },

    bridgeEnding: {
        type: "ending",
        title: "The Water Ring",
        image: "images/cloudking.png",
        story: `
            "Welcome hobbit friend," the king of the clouds says to you. "You're certainly far from home"
            "That ring you wear! With the power to manipulate water, it also was blessed to heal its wearer"
            A healing ring? That explains why your old, bothersome knee hasn't been on your mind this entire time.
            "My wife needs its healing to save her life, surely I could trade you for it; my queen's life is worth any treasure"
            Surely you couldn't exploit the suffering of a queen.
            "Please," you answer the king. "Take the ring and save your beloved"
            "Compassionate hobbit," the king replies. "Your kindness shall be rewarded" (see Tyler)
        `,
        endingText: `
            Your Ring:
            Power: Water Manipulation
            Effect: Healing
            Origin: Found at the end of a rainbow
        `,
        mysteryClue: "",
        next: null
    },
 //--------------------------------------------------
    // BEER PATH
    //--------------------------------------------------

    beer1: {
        type: "clue",
        title: "The Gates of Mordor",
        image: "images/mordor.png",
        story: `
            Oh lord, what were you thinking braving this terrifying place? Your newfound strength has given you far too much confidence.
            You've made it to the gates of Mordor, but if you're going to be bold enough to actually go inside, it would be helpful to avoid the ire of that huge Eye on the Tower
        `,
        prompt: `
            Someone here has a ring that turns them invisible. Find them and ask them the last word of their first clue
        `,
        answerType: "text",
        answers: {
            accepted: [
                "out"
            ]
        },
        success: `
           This will be far less dangerous now
        `,
        failure: "Are you sure that's what it says? Have another look",
        next: {
            destination: "beer2"
        }
    },

    beer2: {
        type: "clue",
        title: "The Giant Graveyard",
        image: "images/giant.png",
        story: `
           Exploring Mordor is terrible, and yet also so...fascinating. At first you were entering for braging rights, but now, something about the ring has drawn you to the most interesting place.
           You're surrounded by the humongous bones of giants, and as you look closer you can see that your ring is clearly forged from the same material.
           This likely explains why it would bestow such incredible strength into the wearer!
           With such an unexpected mystery solved, it's time to return home to the Shire, just need to find your way...
        `,
        prompt: `
           On the map, what image is painted directly below The Shire
        `,
        answerType: "text",
        answers: {
            accepted: [
                "pipe",
                "a pipe",
    
            ]
        },
        success: `Let's go home. You collect a pouch full of the unmistakable volcanic ash of Mordor to prove your journey and start on your way`,
        failure: "That doesn't seem right, I should check the map again",
        next: {
            destination: "beerEnding"
        }
    },
   
    beerEnding: {
        type: "ending",
        title: "The Strength Ring",
        image: "images/strengthring.png",
        story: `
        You've made it home and what a story you'll have to tell! First and foremost to the one who challenged you to test your courage.
        You walk right up behind Chandler as he is sitting with a group of friends and drop your bag of Mordor ash right over his shoulder onto the table.
        "By the Gods you actually did it you mad mad hobbit!" he cries out
        "And goodness are you...are you taller?" he asks you
        Now that he mentions it, you do seem to be further from the ground, just another benefit of this blessed ring
        `,
        endingText: `
            Your Ring:
            Power: Strength
            Effect: Growth
            Origin: Forged from the bones of a giant
        `,
        mysteryClue: "",
        next: null
    },

    //--------------------------------------------------
    // PIPE PATH
    //--------------------------------------------------

    pipe1: {
        type: "clue",
        title: "The Wizard's Pipe",
        image: "images/pipe.png",
        story: `
            You've found a perfect vessel to enjoy your leaf, the old wizard's pipe. "Might I borrow that?" you ask up to him.
            "Certainly my hobbit friend," he replies as he leans down, handing you his pipe.
            You pack the bowl and with a flash from your ringed hand set your leaf ablaze.
            "My my," says the wizard. "Isn't that a fascinating trick. Let me have a closer look at your ring."
            As he observes your ring his eyes grow wider and he seems...disturbed.
            "That ring...it is forged of Bethlarian Ore, the most durable material in Middle Earth, and used at one point to restrain one of the most powerful villains of the land."
            "Forged from the chains of a most powerful prisoner it seems. You would be wise to travel to the mountains south of Angmar, perhaps learn of its power"
        `,
        prompt: "What is the name of the mountain range to the South of Angmar?",
        answerType: "text",
        answers: {
            accepted: ["ettenmoors"]
        },
        success: `
            Forged from the chains of a powerful prisoner? Hopefully you won't find too much trouble on this new journey...
        `,
        failure: "Best to look closer at the map",
        next: {
            destination: "pipe2"
        }
    },

    pipe2: {
        type: "clue",
        title: "The Prison of the Ettenmoors",
        image: "images/ettenmoors.png",
        story: `
            You've made it into the sharp peaks of the Ettenmoors. The wizard aided you on your path and led you first to a nearby village, hoping the locals might illuminate more about your ring.
            The villagers have been terrorized by someone or something they believe was coming from that forsaken place. They told you the prison you sought was hidden deep within the mountains, likely under an immovable stone, and they seem to have been right.
            You've found that immovable stone, if only you had a way to displace it, you could enter the prison.
        `,
        prompt: "Someone here has a ring that can control the earth, what symbol is etched around the ring?",
        answerType: "text",
        answers: {
            accepted: [
                "arrows",
                "arrow",
                "an arrow"
            ]
        },
        success: `
            The great stone moves aside with ease, into the prison you proceed...
        `,
        failure: "Look closer at the ring",
        next: {
            destination: "pipe3"
        }
    },

    pipe3: {
        type: "clue",
        title: "The Prisoner's Disciple",
        image: "images/prison.png",
        story: `
           You enter the prison, lighting the way with fire from your ringed hand when suddenly, you see him.
           A towering figure, most certainly warped by the evil that consumes him looming at the end of the hallway.
           "HOW DARE YOU DEFILE THESE HALLOWED HALLS!" he booms.
           He draws a long, dark blade and begins sprinting toward you.
           You're still mastering this ring, but the time to test your skill has come.
        `,
        prompt: "Complete Tyler's challenge to continue",
        answerType: "number",
        answers: {
            accepted: [451]
        },
        success: `
            Your aim is true and your fireball lands in a devastating blow.
        `,
        failure: "You missed! Try again, quickly!",
        next: {
            destination: "pipeEnding"
        }
    },

    pipeEnding: {
        type: "ending",
        title: "The Fire Ring",
        image: "images/firering.png",
        story: `
            The prisoner's disciple falls, mortally wounded and crying in pain. 
            "You fool! You may have harnessed the ring I forged of my master's chains, but none is strong enough to survive its power!"
            And it seems he was right. You had assumed it was just the demands of such a treacherous journey that had drained your energy so much.
            But no, as you rip the ring from your finger you can feel life pouring back into you. It seems this ring drains the life of its wearer.
        `,
        endingText: `
            Your Ring:
            Power: Fire Bending
            Effect: Life draining
            Origin: Forged from the chains of a powerful prisoner
        `,
        mysteryClue: "",
        next: null
    },

    //--------------------------------------------------
    // STONE PATH
    //--------------------------------------------------

    stone1: {
        type: "clue",
        title: "A Haunting Discovery",
        image: "images/elfghost.png",
        story: `
            It's good to get these blasted stones so easily removed, but wait...is it getting...foggy?
            A grayness and mist seem to build around you and a chill climbs up your spine.
            "Return my ring" you hear a soft, almost airy voice demand behind you.
            You turn around to see the pale, terrifying face of a female spectre who suddenly opens her mouth wide, screams deafeningly loud and flies into you, disappearing along with the mist.
            Didn't Tyler give you this ring? You should demand an explanation from him.
        `,
        prompt: "See Tyler and ask where the ring came from, then type the name",
        answerType: "text",
        answers: {
            accepted: ["rivendell"]
        },
        success: `
            The ring was found in Rivendell? Probably best to figure out which way to get there.
        `,
        failure: "Make sure you speak with Tyler",
        next: {
            destination: "stone2"
        }
    },

    stone2: {
        type: "clue",
        title: "The Way to Rivendell",
        image: "images/rivendell.png",
        story: `
           You're preparing to journey to Rivendell in hopes of learning more about this ring and hopefully quieting the ghost that haunts it.
           Suddenly, once again you feel and see the mist rising about you. Turning round frantically you see the same spirit standing off in the distance in the woods.
           "Return my ring to me in the waters where I met my end," she commands.
        `,
        prompt: "Waters near Rivendell? It must be that river which runs into it, what was its name again?",
        answerType: "text",
        answers: {
            accepted: ["loudwater"]
        },
        success: `
            Right! Loudwater! Let's make our way!
        `,
        failure: "Check the map, you should see a river named to the South of Rivendell",
        next: {
            destination: "stone3"
        }
    },

    stone3: {
        type: "clue",
        title: "Returning the Ring",
        image: "images/river.png",
        story: `
           You've made your way to Loudwater and its name is befitting, you can barely hear yourself think.
           Once again though the sad spectre appears, and somehow the rushing water's roars fade away, and you hear her say
           "Please, part the waters and place my wedding ring on my finger"
           Part the waters? Seems impossible, but then again the ring you have can manipulate the earth so easily, perhaps something can help with the water.
        `,
        prompt: "Someone has a ring which can control water, enter where the ring came from",
        answerType: "text",
        answers: {
            accepted: [
                "the end of a rainbow",
                "end of a rainbow",
                "a rainbow",
                "rainbow",
                "the end of the rainbow",
                "end of the rainbow"
            ]
        },
        success: `
           Wow, the water of the rushing river parts with ease and you can see the bottom.
        `,
        failure: "What is the original place from which the water ring came from?",
        next: {
            destination: "stoneEnding"
        }
    },

    stoneEnding: {
        type: "ending",
        title: "The Earth Ring",
        image: "images/tomb.png",
        story: `
           The waters of the river part and you can see at the bottom, the body of a beautiful elf princess, the very same who has been haunting you!
           Her hand is wrapped in what must be her beloved, but missing from her finger must be the wedding ring you've found.
           You stoop down and replace the ring onto her finger. 
           As you make your way back to the shore and before allowing the waters to return to their flow, it seems the elf princess has started to smile, and you can hear that same voice of before whisper "Thank you".
        `,
        endingText: `
            Your Ring:
            Power: Earth Bending
            Effect: Haunted by a ghost
            Origin: Wedding ring of an elf princess
        `,
        mysteryClue: "",
        next: null
    }
};
