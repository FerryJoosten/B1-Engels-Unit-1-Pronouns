import { SentenceItem } from '../types';

export const possessivePronounSentences: SentenceItem[] = [
  // 1. Possessive Adjectives (Met zelfstandig naamwoord): my, your, his, her, its, our, their
  {
    id: 'poss_1',
    category: 'possessive',
    subtype: 'possessive_adjective',
    beforeGap: 'I have a new bicycle. This is',
    afterGap: 'bicycle.',
    correctAnswer: 'my',
    dutchHint: '(mijn)',
    explanation: "'My' staat direct vóór het zelfstandig naamwoord 'bicycle'.",
    options: ['my', 'mine', 'me', 'I']
  },
  {
    id: 'poss_2',
    category: 'possessive',
    subtype: 'possessive_adjective',
    beforeGap: 'Thomas has a pencil. That is',
    afterGap: 'pencil.',
    correctAnswer: 'his',
    dutchHint: '(zijn)',
    explanation: "'His' staat vóór 'pencil' en verwijst naar Thomas.",
    options: ['his', 'he', 'him', 'its']
  },
  {
    id: 'poss_3',
    category: 'possessive',
    subtype: 'possessive_adjective',
    beforeGap: 'Sophie is holding',
    afterGap: 'school bag.',
    correctAnswer: 'her',
    dutchHint: '(haar)',
    explanation: "'Her' staat vóór 'school bag' en verwijst naar Sophie.",
    options: ['her', 'hers', 'she', 'its']
  },
  {
    id: 'poss_4',
    category: 'possessive',
    subtype: 'possessive_adjective',
    beforeGap: 'Look at the dog. It is wagging',
    afterGap: 'tail happily.',
    correctAnswer: 'its',
    dutchHint: '(zijn/haar van het dier)',
    explanation: "'Its' (zonder apostrof!) staat vóór 'tail' voor een dier.",
    options: ['its', "it's", 'it', 'his']
  },
  {
    id: 'poss_5',
    category: 'possessive',
    subtype: 'possessive_adjective',
    beforeGap: 'We love',
    afterGap: 'new teacher.',
    correctAnswer: 'our',
    dutchHint: '(onze)',
    explanation: "'Our' staat vóór 'new teacher' voor 'we'.",
    options: ['our', 'ours', 'us', 'we']
  },
  {
    id: 'poss_6',
    category: 'possessive',
    subtype: 'possessive_adjective',
    beforeGap: 'Tom and Sam are riding',
    afterGap: 'bikes to school.',
    correctAnswer: 'their',
    dutchHint: '(hun)',
    explanation: "'Their' staat vóór 'bikes' voor Tom and Sam (hun).",
    options: ['their', 'theirs', 'them', 'they']
  },
  {
    id: 'poss_7',
    category: 'possessive',
    subtype: 'possessive_adjective',
    beforeGap: 'Please open',
    afterGap: 'book, Lisa.',
    correctAnswer: 'your',
    dutchHint: '(jouw)',
    explanation: "'Your' staat vóór 'book' (jouw boek).",
    options: ['your', 'yours', 'you', 'her']
  },
  {
    id: 'poss_8',
    category: 'possessive',
    subtype: 'possessive_adjective',
    beforeGap: 'I am eating',
    afterGap: 'lunch in the canteen.',
    correctAnswer: 'my',
    dutchHint: '(mijn)',
    explanation: "'My' staat vóór 'lunch'.",
    options: ['my', 'mine', 'me', 'I']
  },
  {
    id: 'poss_9',
    category: 'possessive',
    subtype: 'possessive_adjective',
    beforeGap: 'David is looking for',
    afterGap: 'shoes.',
    correctAnswer: 'his',
    dutchHint: '(zijn)',
    explanation: "'His' staat vóór 'shoes' voor David.",
    options: ['his', 'he', 'him', 'their']
  },
  {
    id: 'poss_10',
    category: 'possessive',
    subtype: 'possessive_adjective',
    beforeGap: 'Anna is brushing',
    afterGap: 'hair.',
    correctAnswer: 'her',
    dutchHint: '(haar)',
    explanation: "'Her' staat vóór 'hair' voor Anna.",
    options: ['her', 'hers', 'she', 'its']
  },
  {
    id: 'poss_11',
    category: 'possessive',
    subtype: 'possessive_adjective',
    beforeGap: 'The cat is drinking',
    afterGap: 'milk.',
    correctAnswer: 'its',
    dutchHint: '(zijn/haar van het dier)',
    explanation: "'Its' staat vóór 'milk' voor de kat.",
    options: ['its', "it's", 'it', 'his']
  },
  {
    id: 'poss_12',
    category: 'possessive',
    subtype: 'possessive_adjective',
    beforeGap: 'We are sitting in',
    afterGap: 'classroom.',
    correctAnswer: 'our',
    dutchHint: '(onze)',
    explanation: "'Our' staat vóór 'classroom' voor 'we'.",
    options: ['our', 'ours', 'us', 'we']
  },
  {
    id: 'poss_13',
    category: 'possessive',
    subtype: 'possessive_adjective',
    beforeGap: 'The boys forgot',
    afterGap: 'homework.',
    correctAnswer: 'their',
    dutchHint: '(hun)',
    explanation: "'Their' staat vóór 'homework' voor 'the boys'.",
    options: ['their', 'theirs', 'them', 'they']
  },
  {
    id: 'poss_14',
    category: 'possessive',
    subtype: 'possessive_adjective',
    beforeGap: 'Where is',
    afterGap: 'pencil case, Jack?',
    correctAnswer: 'your',
    dutchHint: '(jouw)',
    explanation: "'Your' staat vóór 'pencil case'.",
    options: ['your', 'yours', 'you', 'his']
  },

  // 2. Possessive Pronouns (Zonder zelfstandig naamwoord): mine, yours, his, hers, ours, theirs
  {
    id: 'poss_15',
    category: 'possessive',
    subtype: 'possessive_pronoun',
    beforeGap: 'This is not your pen. It is',
    afterGap: '!',
    correctAnswer: 'mine',
    dutchHint: '(van mij)',
    explanation: "'Mine' staat zelfstandig op het einde (zonder zelfstandig naamwoord erachter).",
    options: ['mine', 'my', 'me', 'I']
  },
  {
    id: 'poss_16',
    category: 'possessive',
    subtype: 'possessive_pronoun',
    beforeGap: 'I found a ruler on the floor. Is it',
    afterGap: ', Tom?',
    correctAnswer: 'yours',
    dutchHint: '(van jou)',
    explanation: "'Yours' staat zelfstandig op het einde van de vraag.",
    options: ['yours', 'your', 'you', 'mine']
  },
  {
    id: 'poss_17',
    category: 'possessive',
    subtype: 'possessive_pronoun',
    beforeGap: 'This jacket belongs to Lucas. It is',
    afterGap: '.',
    correctAnswer: 'his',
    dutchHint: '(van hem)',
    explanation: "'His' staat zelfstandig voor Lucas.",
    options: ['his', 'him', 'he', 'theirs']
  },
  {
    id: 'poss_18',
    category: 'possessive',
    subtype: 'possessive_pronoun',
    beforeGap: 'This book belongs to Emma. It is',
    afterGap: '.',
    correctAnswer: 'hers',
    dutchHint: '(van haar)',
    explanation: "'Hers' staat zelfstandig voor Emma.",
    options: ['hers', 'her', 'she', 'theirs']
  },
  {
    id: 'poss_19',
    category: 'possessive',
    subtype: 'possessive_pronoun',
    beforeGap: 'This is not their ball. It is',
    afterGap: '; we brought it from home.',
    correctAnswer: 'ours',
    dutchHint: '(van ons)',
    explanation: "'Ours' staat zelfstandig voor 'we' (van ons).",
    options: ['ours', 'our', 'us', 'we']
  },
  {
    id: 'poss_20',
    category: 'possessive',
    subtype: 'possessive_pronoun',
    beforeGap: 'We have our bikes, and the other class has',
    afterGap: '.',
    correctAnswer: 'theirs',
    dutchHint: '(van hen / die van hen)',
    explanation: "'Theirs' staat zelfstandig voor 'they' (die van hen).",
    options: ['theirs', 'their', 'them', 'they']
  },
  {
    id: 'poss_21',
    category: 'possessive',
    subtype: 'possessive_pronoun',
    beforeGap: 'My apple is green, but',
    afterGap: 'is red, Sophie.',
    correctAnswer: 'yours',
    dutchHint: '(die van jou)',
    explanation: "'Yours' staat zelfstandig als onderwerp (jouw appel).",
    options: ['yours', 'your', 'you', 'mine']
  },
  {
    id: 'poss_22',
    category: 'possessive',
    subtype: 'possessive_pronoun',
    beforeGap: 'Is this bag yours or',
    afterGap: '?',
    correctAnswer: 'mine',
    dutchHint: '(van mij)',
    explanation: "'Mine' staat zelfstandig aan het einde.",
    options: ['mine', 'my', 'me', 'I']
  },
  {
    id: 'poss_23',
    category: 'possessive',
    subtype: 'possessive_pronoun',
    beforeGap: 'Anna brought her book, but Victor forgot',
    afterGap: '.',
    correctAnswer: 'his',
    dutchHint: '(het zijne / die van hem)',
    explanation: "'His' staat zelfstandig voor Victor (zijn boek).",
    options: ['his', 'him', 'he', 'her']
  },
  {
    id: 'poss_24',
    category: 'possessive',
    subtype: 'possessive_pronoun',
    beforeGap: 'Tom has his sandwich, and Lisa has',
    afterGap: '.',
    correctAnswer: 'hers',
    dutchHint: '(het hare / die van haar)',
    explanation: "'Hers' staat zelfstandig voor Lisa.",
    options: ['hers', 'her', 'she', 'his']
  },
  {
    id: 'poss_25',
    category: 'possessive',
    subtype: 'possessive_pronoun',
    beforeGap: 'That table is for class 1B, and this table is',
    afterGap: '!',
    correctAnswer: 'ours',
    dutchHint: '(van ons)',
    explanation: "'Ours' staat zelfstandig voor 'ons'.",
    options: ['ours', 'our', 'us', 'theirs']
  },
  {
    id: 'poss_26',
    category: 'possessive',
    subtype: 'possessive_pronoun',
    beforeGap: 'Our cat is black, and',
    afterGap: 'is white.',
    correctAnswer: 'theirs',
    dutchHint: '(die van hen)',
    explanation: "'Theirs' staat zelfstandig als onderwerp van de bijzin.",
    options: ['theirs', 'their', 'them', 'they']
  }
];
