/* Word Order: Place and Time (1.HAS): practice data.
   Format: see participles/data.js. The FIRST option of a choice item is always the correct one.
   Level: A1. Short sentences, common words, one rule at a time. */
window.TOPIC = {
  id: "1has-word-order-1",
  class: "1.HAS",
  title: "Word Order: Place and Time",
  intro: [
    "In this practice you learn where *place* and *time* go in an English sentence. It has five short parts. After every answer you get a short explanation.",
    "At the end you can enter your name to get a completion card. Your answers are not stored or sent anywhere."
  ],
  parts: [
    {
      title: "Place or time?",
      instruction: "Is it a place or a time?",
      rule: [
        "A **place** answers the question **Where?** (*in the park*, *at home*)",
        "A **time** answers the question **When?** (*on Monday*, *at 8 o'clock*)"
      ],
      items: [
        { q: "**in the park**", options: ["place", "time"], why: "*Where?* In the park. It is a **place**." },
        { q: "**on Monday**", options: ["time", "place"], why: "*When?* On Monday. It is a **time**." },
        { q: "**at school**", options: ["place", "time"], why: "*Where?* At school. It is a **place**." },
        { q: "**every day**", options: ["time", "place"], why: "*When?* Every day. It is a **time**." },
        { q: "**in the kitchen**", options: ["place", "time"], why: "*Where?* In the kitchen. It is a **place**." },
        { q: "**at 8 o'clock**", options: ["time", "place"], why: "*When?* At 8 o'clock. It is a **time**." },
        { q: "**in Vienna**", options: ["place", "time"], why: "*Where?* In Vienna. It is a **place**." },
        { q: "**after school**", options: ["time", "place"], why: "*When?* After school. It is a **time**." },
        { q: "**at the cinema**", options: ["place", "time"], why: "*Where?* At the cinema. It is a **place**." },
        { q: "**at the weekend**", options: ["time", "place"], why: "*When?* At the weekend. It is a **time**." }
      ]
    },
    {
      title: "Place first, then time",
      instruction: "Which sentence is correct?",
      rule: [
        "At the end of the sentence: **place** first, then **time**.",
        "Tip: **P** comes before **T** in the alphabet. **P**lace, then **T**ime.",
        "*I go **to school** **at 7 o'clock**.*"
      ],
      items: [
        {
          options: ["I go to school at 7 o'clock.", "I go at 7 o'clock to school."],
          wrong: [null, "In English the **place** comes first: *to school*, then *at 7 o'clock*."],
          why: "Place (*to school*) first, then time (*at 7 o'clock*)."
        },
        {
          options: ["We swim in the lake in July.", "We swim in July in the lake."],
          wrong: [null, "Do not put the time first. Say the **place** first: *in the lake*."],
          why: "Place (*in the lake*) first, then time (*in July*)."
        },
        {
          options: ["My mother works in a shop every day.", "My mother works every day in a shop."],
          wrong: [null, "The **place** (*in a shop*) comes before the **time** (*every day*)."],
          why: "Place (*in a shop*) first, then time (*every day*)."
        },
        {
          options: ["Tom waits at the bus stop every morning.", "Tom waits every morning at the bus stop."],
          wrong: [null, "The **place** (*at the bus stop*) comes before the **time** (*every morning*)."],
          why: "Place (*at the bus stop*) first, then time (*every morning*)."
        },
        {
          options: ["They stay at home on Sundays.", "They stay on Sundays at home."],
          wrong: [null, "The **place** (*at home*) comes before the **time** (*on Sundays*)."],
          why: "Place (*at home*) first, then time (*on Sundays*)."
        },
        {
          options: ["My dog sleeps in the kitchen at night.", "My dog sleeps at night in the kitchen."],
          wrong: [null, "The **place** (*in the kitchen*) comes before the **time** (*at night*)."],
          why: "Place (*in the kitchen*) first, then time (*at night*)."
        },
        {
          options: ["Max runs in the park every morning.", "Max runs every morning in the park."],
          wrong: [null, "The **place** (*in the park*) comes before the **time** (*every morning*)."],
          why: "Place (*in the park*) first, then time (*every morning*)."
        },
        {
          options: ["We are at school today.", "We are today at school."],
          wrong: [null, "This is also true for *am / is / are*: **place** (*at school*), then **time** (*today*)."],
          why: "Place (*at school*) first, then time (*today*)."
        },
        {
          options: ["The bus arrives at the station at 9 o'clock.", "The bus arrives at 9 o'clock at the station."],
          wrong: [null, "The **place** (*at the station*) comes before the **time** (*at 9 o'clock*)."],
          why: "Place (*at the station*) first, then time (*at 9 o'clock*)."
        },
        {
          options: ["My cousin is in Graz this week.", "My cousin is this week in Graz."],
          wrong: [null, "The **place** (*in Graz*) comes before the **time** (*this week*)."],
          why: "Place (*in Graz*) first, then time (*this week*)."
        }
      ]
    },
    {
      title: "Where does the object go?",
      instruction: "Which sentence is correct?",
      rule: [
        "Word order: **who** + **does what** + **what / whom** + **place** + **time**",
        "The **object** (*TV*, *lunch*, *football*) stays **right after the verb**.",
        "*She watches **TV** **in her room** **in the evening**.*"
      ],
      items: [
        {
          options: ["She watches TV in her room in the evening.", "She watches in her room TV in the evening.", "She watches TV in the evening in her room."],
          wrong: [null, "The object (*TV*) stays right after the verb.", "Place first, then time: *in her room*, then *in the evening*."],
          why: "Verb + object (*watches TV*) + place + time."
        },
        {
          options: ["I eat lunch in the canteen at 12 o'clock.", "I eat in the canteen lunch at 12 o'clock.", "I eat lunch at 12 o'clock in the canteen."],
          wrong: [null, "The object (*lunch*) stays right after the verb.", "Place first, then time: *in the canteen*, then *at 12 o'clock*."],
          why: "Verb + object (*eat lunch*) + place + time."
        },
        {
          options: ["Ben plays video games at home on Sundays.", "Ben plays at home video games on Sundays.", "Ben plays video games on Sundays at home."],
          wrong: [null, "The object (*video games*) stays right after the verb.", "Place first, then time: *at home*, then *on Sundays*."],
          why: "Verb + object (*plays video games*) + place + time."
        },
        {
          options: ["We buy bread at the bakery on Saturdays.", "We buy at the bakery bread on Saturdays.", "We buy bread on Saturdays at the bakery."],
          wrong: [null, "The object (*bread*) stays right after the verb.", "Place first, then time: *at the bakery*, then *on Saturdays*."],
          why: "Verb + object (*buy bread*) + place + time."
        },
        {
          options: ["Lisa does her homework in the kitchen after school.", "Lisa does in the kitchen her homework after school.", "Lisa does her homework after school in the kitchen."],
          wrong: [null, "The object (*her homework*) stays right after the verb.", "Place first, then time: *in the kitchen*, then *after school*."],
          why: "Verb + object (*does her homework*) + place + time."
        },
        {
          options: ["They read books in the library on Tuesdays.", "They read in the library books on Tuesdays.", "They read books on Tuesdays in the library."],
          wrong: [null, "The object (*books*) stays right after the verb.", "Place first, then time: *in the library*, then *on Tuesdays*."],
          why: "Verb + object (*read books*) + place + time."
        },
        {
          options: ["My parents drink coffee on the balcony in the morning.", "My parents drink on the balcony coffee in the morning.", "My parents drink coffee in the morning on the balcony."],
          wrong: [null, "The object (*coffee*) stays right after the verb.", "Place first, then time: *on the balcony*, then *in the morning*."],
          why: "Verb + object (*drink coffee*) + place + time."
        },
        {
          options: ["Our teacher gives us homework in class on Fridays.", "Our teacher gives us homework on Fridays in class.", "Our teacher gives us in class homework on Fridays."],
          wrong: [null, "Place first, then time: *in class*, then *on Fridays*.", "The object (*us homework*) stays right after the verb."],
          why: "Verb + object (*gives us homework*) + place + time."
        }
      ]
    },
    {
      title: "Time at the beginning",
      instruction: "Put the time first. Which sentence is correct?",
      rule: [
        "The **time** can also be at the **beginning** of the sentence.",
        "Then the sentence goes on **as normal**: **who** + **does what**.",
        "*On Mondays **I go** to the gym.*",
        "Do not change the order of the subject and the verb."
      ],
      items: [
        {
          q: "I go to the gym on Mondays.",
          options: ["On Mondays I go to the gym.", "On Mondays go I to the gym.", "I on Mondays go to the gym."],
          wrong: [null, "After the time, the **subject** comes first: *I go*, not *go I*.", "Do not put the time between the subject and the verb. Put it at the beginning."],
          why: "Time first, then the normal order: *I go to the gym*."
        },
        {
          q: "She meets her friends at the cinema on Friday.",
          options: ["On Friday she meets her friends at the cinema.", "On Friday meets she her friends at the cinema.", "She on Friday meets her friends at the cinema."],
          wrong: [null, "After the time, the **subject** comes first: *she meets*, not *meets she*.", "Do not put the time between the subject and the verb. Put it at the beginning."],
          why: "Time first, then the normal order: *she meets her friends at the cinema*."
        },
        {
          q: "We have English in room 12 at 9 o'clock.",
          options: ["At 9 o'clock we have English in room 12.", "At 9 o'clock have we English in room 12.", "We at 9 o'clock have English in room 12."],
          wrong: [null, "After the time, the **subject** comes first: *we have*, not *have we*.", "Do not put the time between the subject and the verb. Put it at the beginning."],
          why: "Time first, then the normal order: *we have English in room 12*."
        },
        {
          q: "He swims in the lake in summer.",
          options: ["In summer he swims in the lake.", "In summer swims he in the lake.", "He in summer swims in the lake."],
          wrong: [null, "After the time, the **subject** comes first: *he swims*, not *swims he*.", "Do not put the time between the subject and the verb. Put it at the beginning."],
          why: "Time first, then the normal order: *he swims in the lake*."
        },
        {
          q: "They visit their grandma in Linz at the weekend.",
          options: ["At the weekend they visit their grandma in Linz.", "At the weekend visit they their grandma in Linz.", "They at the weekend visit their grandma in Linz."],
          wrong: [null, "After the time, the **subject** comes first: *they visit*, not *visit they*.", "Do not put the time between the subject and the verb. Put it at the beginning."],
          why: "Time first, then the normal order: *they visit their grandma in Linz*."
        },
        {
          q: "My brother plays the guitar in his room every evening.",
          options: ["Every evening my brother plays the guitar in his room.", "Every evening plays my brother the guitar in his room.", "My brother every evening plays the guitar in his room."],
          wrong: [null, "After the time, the **subject** comes first: *my brother plays*, not *plays my brother*.", "Do not put the time between the subject and the verb. Put it at the beginning."],
          why: "Time first, then the normal order: *my brother plays the guitar in his room*."
        }
      ]
    },
    {
      title: "Mixed practice",
      instruction: "Which sentence is correct?",
      rule: [
        "**who** + **does what** + **what / whom** + **place** + **time**",
        "Or: **time** first, then the normal order.",
        "The object stays right after the verb. **P** comes before **T**."
      ],
      items: [
        {
          options: ["Our class goes to the museum on Wednesday.", "Our class goes on Wednesday to the museum.", "On Wednesday goes our class to the museum."],
          wrong: [null, "Place first, then time: *to the museum*, then *on Wednesday*.", "After the time, the **subject** comes first: *our class goes*."],
          why: "Place (*to the museum*) first, then time (*on Wednesday*)."
        },
        {
          options: ["I do my homework at the table after dinner.", "I do my homework after dinner at the table.", "I do after dinner my homework at the table."],
          wrong: [null, "Place first, then time: *at the table*, then *after dinner*.", "The object (*my homework*) stays right after the verb."],
          why: "Verb + object + place (*at the table*) + time (*after dinner*)."
        },
        {
          options: ["We eat at my grandma's house on Sundays.", "We eat on Sundays at my grandma's house."],
          wrong: [null, "Place first, then time: *at my grandma's house*, then *on Sundays*."],
          why: "Place (*at my grandma's house*) first, then time (*on Sundays*)."
        },
        {
          options: ["Lara walks to the bus stop every morning.", "Lara walks every morning to the bus stop.", "Every morning walks Lara to the bus stop."],
          wrong: [null, "Place first, then time: *to the bus stop*, then *every morning*.", "After the time, the **subject** comes first: *Every morning Lara walks ...*"],
          why: "Place (*to the bus stop*) first, then time (*every morning*)."
        },
        {
          options: ["Tom and Eva study in the library after school.", "Tom and Eva study after school in the library."],
          wrong: [null, "Place first, then time: *in the library*, then *after school*."],
          why: "Place (*in the library*) first, then time (*after school*)."
        },
        {
          options: ["At the weekend I play tennis in the park.", "At the weekend play I tennis in the park.", "I play at the weekend tennis in the park."],
          wrong: [null, "After the time, the **subject** comes first: *I play*, not *play I*.", "The object (*tennis*) stays right after the verb."],
          why: "Time first, then the normal order: *I play tennis in the park*."
        },
        {
          options: ["Mia has a piano lesson at school on Thursdays.", "Mia has a piano lesson on Thursdays at school."],
          wrong: [null, "Place first, then time: *at school*, then *on Thursdays*."],
          why: "Verb + object + place (*at school*) + time (*on Thursdays*)."
        },
        {
          options: ["Dad cooks dinner in the kitchen at 6 o'clock.", "Dad cooks dinner at 6 o'clock in the kitchen.", "Dad cooks in the kitchen dinner at 6 o'clock."],
          wrong: [null, "Place first, then time: *in the kitchen*, then *at 6 o'clock*.", "The object (*dinner*) stays right after the verb."],
          why: "Verb + object (*cooks dinner*) + place + time."
        }
      ]
    }
  ]
};
