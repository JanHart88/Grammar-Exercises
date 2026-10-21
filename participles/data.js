/* Participles – practice data.

   Item formats
   ------------
   Choice item:  { q: "Sentence with ___ gap", options: [correct, wrong, wrong...], why: "Rule", wrong: [null, "note", "note"] }
                 The FIRST option is always the correct one (the engine shuffles them).
                 `wrong` is optional: a note for each wrong option, same order as `options`.
                 `q` is optional (some parts show only the instruction).
   Text item:    { type: "text", q: "___ (verb) ...", answers: ["accepted", "also accepted"], why: "Rule" }

   Text in strings: **bold**  *italic*
*/
window.TOPIC = {
  id: "participles",
  title: "Participles: practice",
  intro: [
    "This practice goes with the handout *Participles – Step by Step*. It has six short parts. After every answer you get a short explanation.",
    "At the end you can enter your name to get a completion card. Your answers are not stored or sent anywhere."
  ],
  parts: [
    {
      title: "-ing or -ed?",
      instruction: "Choose the correct word.",
      rule: [
        "**-ing**: the thing or person *causes* the feeling (*The film was boring.*)",
        "**-ed**: a person *feels* it (*I was bored.*)",
        "Before a noun, **-ing** is active (*a sleeping baby*) and the **3rd form** is passive (*a broken window*)."
      ],
      items: [
        { q: "The ending of the series was ___.", options: ["disappointing", "disappointed"], why: "The ending *causes* the feeling, so we use **-ing**. A person who feels it is *disappointed*." },
        { q: "Sara was ___ by the size of the cathedral.", options: ["amazed", "amazing"], why: "Sara *feels* it, so we use **-ed**. Something that causes the feeling is *amazing*." },
        { q: "It is ___ that so many students sleep so little.", options: ["worrying", "worried"], why: "The situation *causes* the worry, so we use **-ing**. A person who feels it is *worried*." },
        { q: "My grandfather is ___ by old maps.", options: ["fascinated", "fascinating"], why: "He *feels* it, so we use **-ed**. The maps are *fascinating*." },
        { q: "The thunderstorm last night was ___.", options: ["terrifying", "terrified"], why: "The storm *causes* the fear, so we use **-ing**. People who feel it are *terrified*." },
        { q: "Everybody was ___ when the team won the cup.", options: ["thrilled", "thrilling"], why: "People *feel* it, so we use **-ed**. The win was *thrilling*." },
        { q: "The noise from the building site is really ___.", options: ["irritating", "irritated"], why: "The noise *causes* the feeling, so we use **-ing**." },
        { q: "Tom looked ___ when his phone rang during the test.", options: ["embarrassed", "embarrassing"], why: "Tom *feels* it, so we use **-ed**." },
        { q: "Please do not wake the ___ baby.", options: ["sleeping", "slept"], why: "Before a noun, **-ing** has an *active* meaning: the baby is sleeping." },
        { q: "The police found a ___ bike near the river.", options: ["stolen", "stealing"], why: "The bike *was stolen* (passive), so we use the **3rd form**." }
      ]
    },
    {
      title: "Which participle?",
      instruction: "Choose the correct form.",
      rule: [
        "The subject **does** the action, at the same time: **-ing**",
        "The subject does it, and it happened **first**: **having + 3rd form**",
        "The subject **receives** the action (passive): **3rd form**",
        "Passive and first: **having been + 3rd form**",
        "Negative: **not** + participle"
      ],
      items: [
        { q: "___ (walk) through the park, Kai noticed a squirrel in a tree.", options: ["Walking", "Walked", "Having walked"], why: "Kai *does* the action, at the *same time*: **-ing**." },
        { q: "___ (read) the whole book, Nora wrote her report.", options: ["Having read", "Reading", "Read"], why: "The reading came *first*, and Nora did it herself: **having + 3rd form**." },
        { q: "___ (invite) to the party, Lea bought a present.", options: ["Invited", "Inviting", "Having invited"], why: "Lea *receives* the action (she was invited): **3rd form**." },
        { q: "___ (not / have) a pencil, Luca borrowed one from his neighbour.", options: ["Not having", "Not had", "Not to have"], why: "In the negative, **not** goes in front of the participle: *not having*." },
        { q: "___ (warn) about the ice, we walked very slowly.", options: ["Having been warned", "Having warned", "Warning"], why: "We *received* the warning, and it came *first*: **having been + 3rd form**." },
        { q: "___ (build) in 1850, the school is older than the town hall.", options: ["Built", "Building", "Having built"], why: "The school *was built* (passive): **3rd form**." },
        { q: "___ (stand) at the bus stop, Jonas read his messages.", options: ["Standing", "Stood", "Having stood"], why: "Jonas *does* the standing, at the *same time* as reading: **-ing**." },
        { q: "___ (eat) breakfast, Mia brushed her teeth and left for school.", options: ["Having eaten", "Eating", "Eaten"], why: "The eating came *first*, and Mia did it herself: **having + 3rd form**." },
        { q: "___ (not / know) what to say, Lukas stayed silent.", options: ["Not knowing", "Knowing not", "Not known"], why: "**Not** goes in front of the participle: *not knowing*." },
        { q: "___ (hit) by a ball, the boy started to cry.", options: ["Hit", "Hitting", "Having hit"], why: "The boy *receives* the action (passive): **3rd form**." }
      ]
    },
    {
      title: "Shorten it!",
      instruction: "Shorten the sentence. Which short version is correct?",
      rule: [
        "Is the subject the **same** in both parts?",
        "Cross out the **conjunction** and the **subject** of the first part.",
        "Change the verb into a **participle**.",
        "Write a **comma**. The second part stays the same."
      ],
      items: [
        {
          q: "While Ruth was waiting for her results, she tidied her room.",
          options: ["Waiting for her results, Ruth tidied her room.", "Having waited for her results, Ruth tidied her room.", "Waiting for her results Ruth tidied her room."],
          wrong: [null, "*Having waited* means the waiting was finished *before* the tidying. The original says *while*.", "Do not forget the **comma** after the participle clause."],
          why: "*While* + same subject: cross out *While Ruth was*, keep **-ing**, add a comma."
        },
        {
          q: "After they had said goodbye, the guests left the house.",
          options: ["Having said goodbye, the guests left the house.", "Said goodbye, the guests left the house.", "Having say goodbye, the guests left the house."],
          wrong: [null, "The guests *do* the action, so the bare 3rd form (passive) is wrong.", "After **having** we need the **3rd form**: *having said*."],
          why: "The goodbye came *first* (*had said*): **having + 3rd form**."
        },
        {
          q: "Because he was frightened by the loud bang, Dario jumped up.",
          options: ["Frightened by the loud bang, Dario jumped up.", "Frightening by the loud bang, Dario jumped up.", "Having frightened by the loud bang, Dario jumped up."],
          wrong: [null, "Dario *was frightened* (passive meaning), so **-ing** is wrong. Use the 3rd form.", "*Having frightened* would mean that Dario frightened somebody else."],
          why: "*Was frightened* is passive: just the **3rd form**."
        },
        {
          q: "Because she did not understand the question, Hana asked her teacher.",
          options: ["Not understanding the question, Hana asked her teacher.", "Understanding not the question, Hana asked her teacher.", "Not understood the question, Hana asked her teacher."],
          wrong: [null, "**Not** goes in front of the participle.", "Hana *does* the understanding (active), so use **-ing**, not the 3rd form."],
          why: "Negative: **not** + participle."
        },
        {
          q: "Because it was made without sugar, the cake tasted a bit dull.",
          options: ["Made without sugar, the cake tasted a bit dull.", "Making without sugar, the cake tasted a bit dull.", "Having made without sugar, the cake tasted a bit dull."],
          wrong: [null, "The cake does not *make* anything. It *was made* (passive): 3rd form.", "The cake did not make anything. It *was made* (passive): 3rd form only."],
          why: "*Was made* is passive: **3rd form**."
        },
        {
          q: "Because she had forgotten her key, Lena rang the bell.",
          options: ["Having forgotten her key, Lena rang the bell.", "Forgotten her key, Lena rang the bell.", "Having forgetting her key, Lena rang the bell."],
          wrong: [null, "The bare 3rd form is passive. Lena did the forgetting herself, and it came *first*: having + 3rd form.", "After **having** we need the 3rd form: *having forgotten*."],
          why: "*Had forgotten* (earlier, active): **having + 3rd form**."
        },
        {
          q: "While they were waiting in the queue, the children played a game.",
          options: ["Waiting in the queue, the children played a game.", "Waited in the queue, the children played a game.", "Having waited in the queue, the children played a game."],
          wrong: [null, "The children *do* the waiting, so the 3rd form (passive) is wrong.", "*Having waited* means the waiting was finished first. The original says *while*."],
          why: "*While*, active, same time: **-ing**."
        },
        {
          q: "As he was left alone in the room, Sam started to feel nervous.",
          options: ["Left alone in the room, Sam started to feel nervous.", "Leaving alone in the room, Sam started to feel nervous.", "Having left alone in the room, Sam started to feel nervous."],
          wrong: [null, "Sam did not leave anybody. Somebody left *him* (passive): 3rd form.", "*Having left* would mean that Sam left somebody alone. Here Sam *was left* (passive)."],
          why: "*Was left* is passive: **3rd form**."
        }
      ]
    },
    {
      title: "Which sentence is correct?",
      instruction: "Which sentence is correct?",
      rule: [
        "The participle clause belongs to the subject of the main clause. Ask: **Who is doing it?**",
        "Then check the **form**, the **time**, the word **not**, and the **comma**."
      ],
      items: [
        {
          options: ["Walking to school, Mia lost her scarf.", "Walking to school, her scarf blew away.", "Walked to school, Mia lost her scarf."],
          wrong: [null, "The scarf was not walking! The subject must be the same.", "Mia *does* the walking, so use **-ing**, not the 3rd form."],
          why: "Same subject (Mia), active, same time: **-ing**."
        },
        {
          options: ["Exhausted by the long hike, the children fell asleep quickly.", "Exhausting by the long hike, the children fell asleep quickly.", "Exhausted by the long hike the children fell asleep quickly."],
          wrong: [null, "The children *were exhausted* (passive meaning): 3rd form, not **-ing**.", "Write a **comma** after the participle clause."],
          why: "The children *were exhausted* (passive): **3rd form**, then a comma."
        },
        {
          options: ["Having lost his ticket, Paul had to buy a new one.", "Having lost his ticket, the conductor sold Paul a new one.", "Lost his ticket, Paul had to buy a new one."],
          wrong: [null, "The conductor did not lose the ticket. The subject must be the same: Paul.", "Paul did the losing, and it came *first*: having + 3rd form. The bare 3rd form is passive."],
          why: "Paul lost it *first*, and Paul is the subject of both parts: **having + 3rd form**."
        },
        {
          options: ["Not wanting to wake the baby, we spoke quietly.", "Not wanting to wake the baby, the room was quiet.", "Wanting not to wake the baby, we spoke quietly."],
          wrong: [null, "The room did not *want* anything. The subject must be the same: *we*.", "**Not** goes in front of the participle: *not wanting*."],
          why: "Same subject (*we*) and negative: **not + -ing**."
        },
        {
          options: ["Written in a hurry, the essay was full of mistakes.", "Writing in a hurry, the essay was full of mistakes.", "Written in a hurry the essay was full of mistakes."],
          wrong: [null, "The essay did not *write* anything. It *was written* (passive): 3rd form.", "Do not forget the **comma**."],
          why: "The essay *was written* (passive): **3rd form**."
        },
        {
          options: ["Sitting by the window, Omar watched the rain.", "Sitting by the window, the rain fell on the roof.", "Having sitting by the window, Omar watched the rain."],
          wrong: [null, "The rain was not sitting! The subject must be the same: Omar.", "After **having** we need the 3rd form. Here both actions happen at the same time, so just **-ing**."],
          why: "Omar *does* the sitting, at the same time: **-ing**."
        },
        {
          options: ["Pleased with the result, the coach smiled.", "Pleasing with the result, the coach smiled.", "Pleased with the result, the cheers filled the hall."],
          wrong: [null, "The coach *feels* pleased (a person feels it): **-ed**.", "The cheers were not pleased! The subject must be the same."],
          why: "The coach *feels* it: **-ed**, and the coach is the subject of both parts."
        },
        {
          options: ["Having studied all weekend, Ivan felt ready for the test.", "Having studied all weekend, the test felt easy.", "Studied all weekend, Ivan felt ready for the test."],
          wrong: [null, "The test did not study! The subject must be the same: Ivan.", "Ivan *did* the studying, and it came *first*: having + 3rd form. The bare 3rd form is passive."],
          why: "Ivan studied *first*, and Ivan is the subject of both parts: **having + 3rd form**."
        }
      ]
    },
    {
      title: "Short relative clauses",
      instruction: "Shorten the relative clause. Which version is correct?",
      rule: [
        "Cross out **who / which / that** and the verb **be**.",
        "Active: **-ing**. Passive: **3rd form**."
      ],
      items: [
        {
          q: "The woman who is talking to the headteacher is Anna's mother.",
          options: ["The woman talking to the headteacher is Anna's mother.", "The woman talked to the headteacher is Anna's mother.", "The woman who talking to the headteacher is Anna's mother."],
          wrong: [null, "The woman *is talking* (active), so use **-ing**.", "Cross out **who is** (both words), not only *is*."],
          why: "Cross out *who is*. Active: **-ing**."
        },
        {
          q: "The cakes that were baked by the students sold out quickly.",
          options: ["The cakes baked by the students sold out quickly.", "The cakes baking by the students sold out quickly.", "The cakes that baked by the students sold out quickly."],
          wrong: [null, "The cakes did not bake anything. They *were baked* (passive): 3rd form.", "Cross out **that were** (the pronoun *and* the verb *be*)."],
          why: "Cross out *that were*. Passive: **3rd form**."
        },
        {
          q: "The boys who are playing football in the yard are in 5A.",
          options: ["The boys playing football in the yard are in 5A.", "The boys played football in the yard are in 5A.", "The boys are playing football in the yard are in 5A."],
          wrong: [null, "The boys *are playing* (active), so use **-ing**.", "Cross out **who are** completely. Two verbs (*are … are*) do not work."],
          why: "Cross out *who are*. Active: **-ing**."
        },
        {
          q: "The letter which was written in 1920 is now in a museum.",
          options: ["The letter written in 1920 is now in a museum.", "The letter writing in 1920 is now in a museum.", "The letter was written in 1920 is now in a museum."],
          wrong: [null, "The letter did not write anything. It *was written* (passive): 3rd form.", "Cross out **which was** completely. Two verbs (*was … is*) do not work."],
          why: "Cross out *which was*. Passive: **3rd form**."
        },
        {
          q: "The problems that are discussed in this chapter are very common.",
          options: ["The problems discussed in this chapter are very common.", "The problems discussing in this chapter are very common.", "The problems are discussed in this chapter are very common."],
          wrong: [null, "The problems do not discuss anything. They *are discussed* (passive): 3rd form.", "Cross out **that are** completely."],
          why: "Cross out *that are*. Passive: **3rd form**."
        },
        {
          q: "The students who were chosen for the quiz team trained after school.",
          options: ["The students chosen for the quiz team trained after school.", "The students choosing for the quiz team trained after school.", "The students who chosen for the quiz team trained after school."],
          wrong: [null, "The students did not choose anybody. They *were chosen* (passive): 3rd form.", "Cross out **who were** (both words), not only *were*."],
          why: "Cross out *who were*. Passive: **3rd form**."
        }
      ]
    },
    {
      title: "Type it!",
      instruction: "Type the correct participle. Spelling counts.",
      rule: [
        "Who does what? Same time or first? Active or passive?",
        "Type the participle with *Having* or *Not* if you need it, for example *Having seen* or *Not knowing*."
      ],
      items: [
        { type: "text", q: "___ (turn) the corner, we saw the sea.", answers: ["Turning"], why: "We *do* the action, at the same time: **-ing**." },
        { type: "text", q: "___ (see) the film twice, Ben knew every line.", answers: ["Having seen"], why: "The seeing came *first*, and Ben did it: **having + 3rd form**." },
        { type: "text", q: "___ (surround) by mountains, the village is very quiet.", answers: ["Surrounded"], why: "The village *is surrounded* (passive): **3rd form**." },
        { type: "text", q: "___ (not / want) to be late, Ida took a taxi.", answers: ["Not wanting"], why: "Negative: **not** + participle." },
        { type: "text", q: "___ (swim) in the lake, Fay saw a fish.", answers: ["Swimming"], why: "Same time, active: **-ing**. Remember the spelling: swim → swi**mm**ing (double the consonant)." },
        { type: "text", q: "___ (tell) about the delay, the passengers left the station.", answers: ["Told", "Having been told"], why: "The passengers *were told* (passive). **Told** and **having been told** are both correct." },
        { type: "text", q: "___ (write) in 1999, the song is still popular.", answers: ["Written"], why: "The song *was written* (passive): **3rd form**. Write – wrote – written." }
      ]
    }
  ]
};
