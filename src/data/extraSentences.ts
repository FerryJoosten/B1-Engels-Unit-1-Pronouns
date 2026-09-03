import { SentenceItem } from '../types';

export const extraSentences: SentenceItem[] = [
  // Subject Pronouns (I, you, he, she, it, we, they)
  {
    id: 'extra_1',
    category: 'personal',
    subtype: 'personal_subject',
    beforeGap: 'In the morning',
    afterGap: 'eat an apple before school.',
    correctAnswer: 'I',
    dutchHint: '(ik)',
    explanation: "'I' is het onderwerp (ik).",
    options: ['I', 'me', 'my', 'mine']
  },
  {
    id: 'extra_2',
    category: 'personal',
    subtype: 'personal_subject',
    beforeGap: 'Look at Arthur.',
    afterGap: 'is drinking a glass of water.',
    correctAnswer: 'He',
    dutchHint: '(hij)',
    explanation: "'He' verwijst naar Arthur.",
    options: ['He', 'Him', 'His', 'They']
  },
  {
    id: 'extra_3',
    category: 'personal',
    subtype: 'personal_subject',
    beforeGap: 'Where is Charlotte?',
    afterGap: 'is sitting in the library.',
    correctAnswer: 'She',
    dutchHint: '(zij)',
    explanation: "'She' verwijst naar Charlotte.",
    options: ['She', 'Her', 'Hers', 'They']
  },
  {
    id: 'extra_4',
    category: 'personal',
    subtype: 'personal_subject',
    beforeGap: 'I have a new schoolbag.',
    afterGap: 'is black and yellow.',
    correctAnswer: 'It',
    dutchHint: '(het)',
    explanation: "'It' voor de schooltas.",
    options: ['It', 'Its', 'He', 'They']
  },
  {
    id: 'extra_5',
    category: 'personal',
    subtype: 'personal_subject',
    beforeGap: 'Ruben and I are in class 1C.',
    afterGap: 'sit at the front.',
    correctAnswer: 'We',
    dutchHint: '(wij)',
    explanation: "'We' (Ruben and I).",
    options: ['We', 'Us', 'Our', 'They']
  },
  {
    id: 'extra_6',
    category: 'personal',
    subtype: 'personal_subject',
    beforeGap: 'Look at the two dogs.',
    afterGap: 'are running in the grass.',
    correctAnswer: 'They',
    dutchHint: '(zij - meervoud)',
    explanation: "'They' voor de twee honden.",
    options: ['They', 'Them', 'Their', 'We']
  },
  {
    id: 'extra_7',
    category: 'personal',
    subtype: 'personal_subject',
    beforeGap: 'Do',
    afterGap: 'like English lessons, Felix?',
    correctAnswer: 'you',
    dutchHint: '(jij)',
    explanation: "'You' in de vraag 'Do you like...?'.",
    options: ['you', 'your', 'yours', 'he']
  },

  // Object Pronouns (me, you, him, her, it, us, them)
  {
    id: 'extra_8',
    category: 'personal',
    subtype: 'personal_object',
    beforeGap: 'This book is interesting. Please give it to',
    afterGap: '.',
    correctAnswer: 'me',
    dutchHint: '(mij)',
    explanation: "'Me' staat na 'to'.",
    options: ['me', 'I', 'my', 'mine']
  },
  {
    id: 'extra_9',
    category: 'personal',
    subtype: 'personal_object',
    beforeGap: 'Noah cannot find his pencil. Can you help',
    afterGap: '?',
    correctAnswer: 'him',
    dutchHint: '(hem)',
    explanation: "'Him' voor Noah.",
    options: ['him', 'he', 'his', 'they']
  },
  {
    id: 'extra_10',
    category: 'personal',
    subtype: 'personal_object',
    beforeGap: 'Elena is my best friend. I see',
    afterGap: 'every day.',
    correctAnswer: 'her',
    dutchHint: '(haar)',
    explanation: "'Her' voor Elena.",
    options: ['her', 'she', 'hers', 'them']
  },
  {
    id: 'extra_11',
    category: 'personal',
    subtype: 'personal_object',
    beforeGap: 'I have a cute rabbit. I feed',
    afterGap: 'carrots.',
    correctAnswer: 'it',
    dutchHint: '(het)',
    explanation: "'It' voor het konijn.",
    options: ['it', 'its', 'him', 'them']
  },
  {
    id: 'extra_12',
    category: 'personal',
    subtype: 'personal_object',
    beforeGap: 'We are standing here. Come with',
    afterGap: ', Peter!',
    correctAnswer: 'us',
    dutchHint: '(ons)',
    explanation: "'Us' na 'with' voor 'we'.",
    options: ['us', 'we', 'our', 'them']
  },
  {
    id: 'extra_13',
    category: 'personal',
    subtype: 'personal_object',
    beforeGap: 'Where are the keys? I cannot see',
    afterGap: '.',
    correctAnswer: 'them',
    dutchHint: '(ze)',
    explanation: "'Them' voor 'the keys'.",
    options: ['them', 'they', 'their', 'us']
  },
  {
    id: 'extra_14',
    category: 'personal',
    subtype: 'personal_object',
    beforeGap: 'I can hear',
    afterGap: ', Maya! Please speak softly.',
    correctAnswer: 'you',
    dutchHint: '(jou)',
    explanation: "'You' is het voorwerp (jou).",
    options: ['you', 'your', 'yours', 'her']
  },

  // Possessive Adjectives (my, your, his, her, its, our, their)
  {
    id: 'extra_15',
    category: 'possessive',
    subtype: 'possessive_adjective',
    beforeGap: 'I love',
    afterGap: 'new school.',
    correctAnswer: 'my',
    dutchHint: '(mijn)',
    explanation: "'My' staat vóór 'new school'.",
    options: ['my', 'mine', 'me', 'I']
  },
  {
    id: 'extra_16',
    category: 'possessive',
    subtype: 'possessive_adjective',
    beforeGap: 'Bram is riding',
    afterGap: 'bike in the street.',
    correctAnswer: 'his',
    dutchHint: '(zijn)',
    explanation: "'His' staat vóór 'bike' voor Bram.",
    options: ['his', 'he', 'him', 'its']
  },
  {
    id: 'extra_17',
    category: 'possessive',
    subtype: 'possessive_adjective',
    beforeGap: 'Fleur is writing in',
    afterGap: 'notebook.',
    correctAnswer: 'her',
    dutchHint: '(haar)',
    explanation: "'Her' staat vóór 'notebook' voor Fleur.",
    options: ['her', 'hers', 'she', 'its']
  },
  {
    id: 'extra_18',
    category: 'possessive',
    subtype: 'possessive_adjective',
    beforeGap: 'The bird is sitting in',
    afterGap: 'nest.',
    correctAnswer: 'its',
    dutchHint: '(zijn/haar van het dier)',
    explanation: "'Its' staat vóór 'nest' voor de vogel.",
    options: ['its', "it's", 'it', 'his']
  },
  {
    id: 'extra_19',
    category: 'possessive',
    subtype: 'possessive_adjective',
    beforeGap: 'We are doing',
    afterGap: 'English homework together.',
    correctAnswer: 'our',
    dutchHint: '(ons/onze)',
    explanation: "'Our' staat vóór 'English homework'.",
    options: ['our', 'ours', 'us', 'we']
  },
  {
    id: 'extra_20',
    category: 'possessive',
    subtype: 'possessive_adjective',
    beforeGap: 'The children are washing',
    afterGap: 'hands before lunch.',
    correctAnswer: 'their',
    dutchHint: '(hun)',
    explanation: "'Their' staat vóór 'hands'.",
    options: ['their', 'theirs', 'them', 'they']
  },
  {
    id: 'extra_21',
    category: 'possessive',
    subtype: 'possessive_adjective',
    beforeGap: 'Is this',
    afterGap: 'ruler, Thomas?',
    correctAnswer: 'your',
    dutchHint: '(jouw)',
    explanation: "'Your' staat vóór 'ruler'.",
    options: ['your', 'yours', 'you', 'his']
  },

  // Possessive Pronouns (mine, yours, his, hers, ours, theirs)
  {
    id: 'extra_22',
    category: 'possessive',
    subtype: 'possessive_pronoun',
    beforeGap: 'That apple is yours, and this apple is',
    afterGap: '.',
    correctAnswer: 'mine',
    dutchHint: '(van mij)',
    explanation: "'Mine' staat zelfstandig (van mij).",
    options: ['mine', 'my', 'me', 'I']
  },
  {
    id: 'extra_23',
    category: 'possessive',
    subtype: 'possessive_pronoun',
    beforeGap: 'I have my sandwich. Where is',
    afterGap: ', Sanne?',
    correctAnswer: 'yours',
    dutchHint: '(die van jou)',
    explanation: "'Yours' staat zelfstandig.",
    options: ['yours', 'your', 'you', 'mine']
  },
  {
    id: 'extra_24',
    category: 'possessive',
    subtype: 'possessive_pronoun',
    beforeGap: 'This blue cap belongs to David; it is',
    afterGap: '.',
    correctAnswer: 'his',
    dutchHint: '(van hem)',
    explanation: "'His' staat zelfstandig voor David.",
    options: ['his', 'him', 'he', 'theirs']
  },
  {
    id: 'extra_25',
    category: 'possessive',
    subtype: 'possessive_pronoun',
    beforeGap: 'This pencil belongs to Laura; it is',
    afterGap: '.',
    correctAnswer: 'hers',
    dutchHint: '(van haar)',
    explanation: "'Hers' staat zelfstandig voor Laura.",
    options: ['hers', 'her', 'she', 'theirs']
  },
  {
    id: 'extra_26',
    category: 'possessive',
    subtype: 'possessive_pronoun',
    beforeGap: 'Class 1A has a football, but this one is',
    afterGap: '!',
    correctAnswer: 'ours',
    dutchHint: '(van ons)',
    explanation: "'Ours' staat zelfstandig voor ons.",
    options: ['ours', 'our', 'us', 'theirs']
  },
  {
    id: 'extra_27',
    category: 'possessive',
    subtype: 'possessive_pronoun',
    beforeGap: 'Our bikes are black, but',
    afterGap: 'are silver.',
    correctAnswer: 'theirs',
    dutchHint: '(die van hen)',
    explanation: "'Theirs' staat zelfstandig (die van hen).",
    options: ['theirs', 'their', 'them', 'they']
  }
];
