/* Word Formation I (7A): practice data.
   Format: see participles/data.js. The FIRST option of a choice item is always the correct one. */
window.TOPIC = {
  id: "7a-word-formation-1",
  class: "7A",
  title: "Word Formation I",
  intro: [
    "This practice goes with the *Spot on language* section on word formation: forming words with suffixes I. It has five short parts. After every answer you get a short explanation.",
    "At the end you can enter your name to get a completion card. Your answers are not stored or sent anywhere."
  ],
  parts: [
    {
      title: "Which word class?",
      instruction: "Which word class is this word? Look at the ending.",
      rule: [
        "**Nouns**: -ness, -ment, -ery, -ity, -ation, -ance, -ence, -age, -ion, and -er for people",
        "**Adjectives**: -able, -ful, -ous, -ing, -ed",
        "**Verbs**: -ify, -ise, -en",
        "**Adverbs**: -ly",
        "A few endings can do more than one job (-ant, -ive, -al). You will practise them in part 4."
      ],
      items: [
        { q: "**robbery**", options: ["noun", "adjective", "verb", "adverb"], why: "**-ery** forms nouns: *to rob* + **-ery** = *robbery*." },
        { q: "**countable**", options: ["adjective", "noun", "verb", "adverb"], why: "**-able** forms adjectives: *to count* + **-able** = *countable*." },
        { q: "**consciousness**", options: ["noun", "adjective", "verb", "adverb"], why: "**-ness** forms nouns: *conscious* (adj.) + **-ness** = *consciousness*." },
        { q: "**weaken**", options: ["verb", "noun", "adjective", "adverb"], why: "**-en** forms verbs: *weak* (adj.) + **-en** = *weaken*." },
        { q: "**beautifully**", options: ["adverb", "noun", "adjective", "verb"], why: "**-ly** forms adverbs: *beautiful* (adj.) + **-ly** = *beautifully*." },
        { q: "**dangerous**", options: ["adjective", "noun", "verb", "adverb"], why: "**-ous** forms adjectives: *danger* (n.) + **-ous** = *dangerous*." },
        { q: "**classify**", options: ["verb", "noun", "adjective", "adverb"], why: "**-ify** forms verbs: *class* (n.) + **-ify** = *classify*." },
        { q: "**development**", options: ["noun", "adjective", "verb", "adverb"], why: "**-ment** forms nouns: *to develop* + **-ment** = *development*." },
        { q: "**careful**", options: ["adjective", "noun", "verb", "adverb"], why: "**-ful** forms adjectives: *to care* + **-ful** = *careful*." },
        { q: "**specialise**", options: ["verb", "noun", "adjective", "adverb"], why: "**-ise** forms verbs: *special* (adj.) + **-ise** = *specialise*." }
      ]
    },
    {
      title: "Choose the correct word",
      instruction: "Choose the correct word.",
      rule: [
        "First decide which **word class** the sentence needs (noun, adjective, ...).",
        "Then check the **suffix** (assist**ance**, intellig**ence**) and the **spelling**.",
        "Often a final *-e* is dropped: combin**ation**."
      ],
      items: [
        {
          q: "Thank you very much for your ___ with the move.",
          options: ["assistance", "assistence", "assistment"],
          wrong: [null, "The ending is **-ance**, not *-ence*: *assistance*.", "The noun for help is *assistance*. **-ment** is not used for *assist*."],
          why: "*to assist* + **-ance** = *assistance* (the help)."
        },
        {
          q: "The shop ___ helped me to find the right size.",
          options: ["assistant", "assistent", "assistance"],
          wrong: [null, "In English the ending is **-ant**, not *-ent* (in German it is *Assistent*).", "*Assistance* is the help. A person who helps is an *assistant*."],
          why: "*to assist* + **-ant** = *assistant* (a person who helps)."
        },
        {
          q: "A good ___ of colours can make a small room look bigger.",
          options: ["combination", "combineation", "combinement"],
          wrong: [null, "Drop the *-e* of *combine*: combin**ation**.", "*To combine* takes **-ation**, not *-ment*."],
          why: "*to combine* + **-ation** = *combination*. The final *-e* is dropped."
        },
        {
          q: "The ___ of the new app took almost two years.",
          options: ["development", "developement", "developation"],
          wrong: [null, "No extra *e*: *develop* + **-ment** = *development*.", "*To develop* takes **-ment**, not *-ation*."],
          why: "*to develop* + **-ment** = *development*."
        },
        {
          q: "Her ___ about foreign cultures made her study languages.",
          options: ["curiosity", "curiousity", "curiosness"],
          wrong: [null, "The *u* disappears: *curious* becomes curi**osity**.", "*Curious* takes **-ity**, even though *conscious* takes **-ness** (consciousness)."],
          why: "*curious* + **-ity** = *curiosity*."
        },
        {
          q: "Her ___ helped her to solve the problem quickly.",
          options: ["intelligence", "intelligance", "intelligentness"],
          wrong: [null, "*Intelligent* becomes *intelligence*: the ending is **-ence**, not *-ance*.", "*Intelligent* becomes *intelligence*: we use **-ence**, not *-ness*."],
          why: "*intelligent* + **-ence** = *intelligence*."
        },
        {
          q: "The police are investigating a bank ___.",
          options: ["robbery", "robbage", "robbation"],
          wrong: [null, "*To rob* takes **-ery**. The ending **-age** is for *package*.", "*To rob* takes **-ery**: *robbery*."],
          why: "*to rob* + **-ery** = *robbery*."
        },
        {
          q: "Looking after the school garden is a big ___.",
          options: ["responsibility", "responsiblity", "responsibilness"],
          wrong: [null, "Do not forget the *i*: responsib**ility**.", "*Responsible* becomes *responsibility*: **-ility**, not *-ness*."],
          why: "*responsible* + **-ility** = *responsibility*."
        },
        {
          q: "Be ___ with that glass! It is very old.",
          options: ["careful", "carefull", "careing"],
          wrong: [null, "**-ful** has only one *l*: careful.", "*To care* takes **-ful**: *careful*."],
          why: "*to care* + **-ful** = *careful* (an adjective)."
        },
        {
          q: "We had a very ___ evening by the lake.",
          options: ["pleasant", "pleasent", "pleasure"],
          wrong: [null, "In English the ending is **-ant**: *pleasant*.", "*Pleasure* is a noun. Here we need an adjective."],
          why: "*to please* + **-ant** = *pleasant* (an adjective)."
        }
      ]
    },
    {
      title: "Complete the rule",
      instruction: "Complete the rule.",
      rule: [
        "Look at the example in brackets: which word class goes **in**, and which comes **out**?",
        "Some endings do two jobs. Read the rule carefully."
      ],
      items: [
        { q: "**-ness** (sad → sadness) forms ___ from adjectives.", options: ["nouns", "verbs", "adverbs"], why: "**-ness** turns adjectives into nouns: *sad* → *sadness*, *dark* → *darkness*." },
        { q: "**-ly** (beautiful → beautifully) forms ___ from adjectives.", options: ["adverbs", "nouns", "verbs"], why: "**-ly** turns adjectives into adverbs: *beautiful* → *beautifully*." },
        { q: "**-able** (avoid → avoidable) forms ___ from verbs.", options: ["adjectives", "nouns", "adverbs"], why: "**-able** turns verbs into adjectives: *avoid* → *avoidable*, *count* → *countable*." },
        { q: "**-ation** (combine → combination) forms ___ from verbs.", options: ["nouns", "adjectives", "adverbs"], why: "**-ation** turns verbs into nouns: *combine* → *combination*, *demonstrate* → *demonstration*." },
        { q: "**-ous** (danger → dangerous) forms ___ from nouns.", options: ["adjectives", "verbs", "adverbs"], why: "**-ous** turns nouns into adjectives: *danger* → *dangerous*." },
        { q: "**-ify**, **-ise** and **-en** (classify, specialise, weaken) form ___.", options: ["verbs", "nouns", "adjectives"], why: "**-ify**, **-ise** and **-en** form verbs: *class* → *classify*, *special* → *specialise*, *weak* → *weaken*." },
        { q: "**-er** (interview → interviewer) forms nouns for ___.", options: ["people", "places", "feelings"], why: "**-er** often forms nouns for people from verbs: *interview* → *interviewer*." },
        { q: "**-al** after a verb (propose → proposal) forms ___.", options: ["nouns", "adjectives", "adverbs"], why: "After a verb, **-al** forms nouns: *propose* → *proposal*." },
        { q: "**-al** after a noun (politics → political) forms ___.", options: ["adjectives", "nouns", "verbs"], why: "After a noun, **-al** forms adjectives: *politics* → *political*. The same ending can do two jobs." },
        {
          q: "**-ing** (frightening) says what causes a feeling. **-ed** (frightened) says who ___ it.",
          options: ["feels", "causes", "hides"],
          why: "*The film was frightening* (it causes the fear). *The children were frightened* (they feel it). It is the same idea as *confusing* and *confused*."
        }
      ]
    },
    {
      title: "Noun or adjective?",
      instruction: "Is the word in bold a noun or an adjective? Use the sentence.",
      rule: [
        "**-ant**, **-ive**, **-al** and **-ent** can form nouns *or* adjectives.",
        "The ending alone does not decide. Look at the **sentence**: does the word name a person or thing (noun), or does it describe one (adjective)?"
      ],
      items: [
        { q: "My **assistant** booked the flight.", options: ["noun", "adjective"], why: "*Assistant* names a person, so it is a noun. **-ant** often forms nouns for people (assist → assistant)." },
        { q: "We spent a **pleasant** afternoon in the park.", options: ["adjective", "noun"], why: "*Pleasant* describes the noun *afternoon*. **-ant** can also form adjectives (please → pleasant)." },
        { q: "She is still **dependent** on her parents.", options: ["adjective", "noun"], why: "*Dependent* describes *she* (how she is). **-ent** forms this adjective (depend → dependent)." },
        { q: "The hotel is in a very **attractive** part of town.", options: ["adjective", "noun"], why: "*Attractive* describes *part of town*. **-ive** forms adjectives (attract → attractive)." },
        { q: "We have no **alternative**.", options: ["noun", "adjective"], why: "After *no*, *alternative* is a noun (another choice). **-ive** forms nouns and adjectives." },
        { q: "The **intelligence** of dolphins surprises many scientists.", options: ["noun", "adjective"], why: "*Intelligence* is a noun: **-ence** forms nouns (intelligent → intelligence). The adjective is *intelligent*." },
        { q: "I was totally **confused** by the instructions.", options: ["adjective", "noun"], why: "*Confused* says how I felt, so it is an adjective. **-ed** forms adjectives from verbs (confuse → confused)." },
        { q: "The film sent a strong **political** message.", options: ["adjective", "noun"], why: "*Political* describes *message*. After a noun, **-al** forms adjectives (politics → political)." }
      ]
    },
    {
      title: "Type it!",
      instruction: "Type the correct word. The brackets show the base word and the word class you need.",
      rule: [
        "Read the base word and the word class in the brackets.",
        "Add the suffix, then check the spelling."
      ],
      items: [
        { type: "text", q: "A good teacher gives a clear ___ (demonstrate → noun) before the students try it.", answers: ["demonstration"], why: "*to demonstrate* + **-ation** = *demonstration*." },
        { type: "text", q: "He takes full ___ (responsible → noun) for his actions.", answers: ["responsibility"], why: "*responsible* + **-ility** = *responsibility*." },
        { type: "text", q: "The ___ (interview → noun for a person) asked every candidate the same questions.", answers: ["interviewer"], why: "*to interview* + **-er** = *interviewer*, the person who interviews." },
        { type: "text", q: "The committee rejected the ___ (propose → noun ending in -al).", answers: ["proposal"], why: "*to propose* + **-al** = *proposal*. The final *-e* disappears." },
        { type: "text", q: "That mistake was easily ___ (avoid → adjective).", answers: ["avoidable"], why: "*to avoid* + **-able** = *avoidable*." },
        { type: "text", q: "Biologists ___ (class → verb) animals into groups.", answers: ["classify"], why: "*class* + **-ify** = *classify*." },
        { type: "text", q: "Many doctors ___ (special → verb) in heart surgery.", answers: ["specialise", "specialize"], why: "*special* + **-ise** = *specialise*. The American spelling *specialize* is accepted too." },
        { type: "text", q: "She sang ___ (beautiful → adverb) at the concert.", answers: ["beautifully"], why: "*beautiful* + **-ly** = *beautifully*." },
        { type: "text", q: "You can choose one ___ (opt → noun ending in -ion) from this list.", answers: ["option"], why: "*to opt* + **-ion** = *option*." },
        { type: "text", q: "Please put the ___ (pack → noun ending in -age) on the table.", answers: ["package"], why: "*to pack* + **-age** = *package*." }
      ]
    }
  ]
};
