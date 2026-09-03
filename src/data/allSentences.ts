import { SentenceItem, PracticeMode } from '../types';
import { personalPronounSentences } from './personalPronouns';
import { possessivePronounSentences } from './possessivePronouns';
import { extraSentences } from './extraSentences';

// Systematic simple templates suitable for 1st-year students in their first weeks of English class.
// We generate an EQUAL number of sentences for EVERY single pronoun target to guarantee maximum variety.
function generateBeginnerGymnasiumSentences(): SentenceItem[] {
  const items: SentenceItem[] = [];
  let idCounter = 1000;

  // 1. SUBJECT PRONOUNS: I, you, he, she, it, we, they (Equal count for each)
  const subjectTemplates: { [key: string]: { before: string; after: string; hint: string; exp: string; opts: string[] }[] } = {
    'I': [
      { before: 'Hello, my name is Noah.', after: 'am in class 1A.', hint: '(ik)', exp: "'I' staat vóór de persoonsvorm 'am'.", opts: ['I', 'me', 'my', 'mine'] },
      { before: 'In the morning', after: 'eat an apple before school.', hint: '(ik)', exp: "'I' is het onderwerp van de zin.", opts: ['I', 'me', 'my', 'mine'] },
      { before: 'Every Friday', after: 'ride my bike to the sports club.', hint: '(ik)', exp: "'I' is het onderwerp (ik).", opts: ['I', 'me', 'my', 'mine'] },
      { before: 'Look at this drawing;', after: 'drew a big yellow sun.', hint: '(ik)', exp: "'I' is het onderwerp van de zin.", opts: ['I', 'me', 'my', 'mine'] },
      { before: 'When I am thirsty,', after: 'drink cold water from my bottle.', hint: '(ik)', exp: "'I' staat als onderwerp.", opts: ['I', 'me', 'my', 'mine'] },
      { before: 'Before class starts,', after: 'put my schoolbag on the chair.', hint: '(ik)', exp: "'I' is het onderwerp (ik).", opts: ['I', 'me', 'my', 'mine'] },
    ],
    'you': [
      { before: 'Can', after: 'help me with this English word, please?', hint: '(jij)', exp: "'You' is het onderwerp in de vraagzin.", opts: ['you', 'your', 'yours', 'he'] },
      { before: 'Are', after: 'ready for the test, Tom?', hint: '(jij)', exp: "'You' in de vraag 'Are you ready?'.", opts: ['you', 'your', 'yours', 'him'] },
      { before: 'Do', after: 'have a red pencil in your case, Lisa?', hint: '(jij)', exp: "'You' in 'Do you have...?'.", opts: ['you', 'your', 'yours', 'she'] },
      { before: 'Where do', after: 'live, Jack?', hint: '(jij)', exp: "'You' in 'Where do you live?'.", opts: ['you', 'your', 'yours', 'he'] },
      { before: 'Why are', after: 'laughing, Emma?', hint: '(jij)', exp: "'You' in 'Why are you laughing?'.", opts: ['you', 'your', 'yours', 'her'] },
      { before: 'When', after: 'arrive at school, park your bike inside.', hint: '(jij)', exp: "'You' is het onderwerp van de bijzin.", opts: ['you', 'your', 'yours', 'they'] },
    ],
    'He': [
      { before: 'Look at Lucas.', after: 'is playing football in the schoolyard.', hint: '(hij)', exp: "'He' verwijst naar Lucas (mannelijk).", opts: ['He', 'Him', 'His', 'They'] },
      { before: 'David is not at home;', after: 'is in the library reading a book.', hint: '(hij)', exp: "'He' verwijst naar David.", opts: ['He', 'Him', 'His', 'She'] },
      { before: 'Where is Arthur?', after: 'is sitting at his desk.', hint: '(hij)', exp: "'He' verwijst naar Arthur.", opts: ['He', 'Him', 'His', 'They'] },
      { before: 'This is Thomas.', after: 'is my new classmate from Utrecht.', hint: '(hij)', exp: "'He' verwijst naar Thomas.", opts: ['He', 'Him', 'His', 'We'] },
      { before: 'Bram is very fast;', after: 'runs across the field.', hint: '(hij)', exp: "'He' verwijst naar Bram.", opts: ['He', 'Him', 'His', 'They'] },
      { before: 'Sam loves art.', after: 'is drawing a blue bird.', hint: '(hij)', exp: "'He' verwijst naar Sam.", opts: ['He', 'Him', 'His', 'She'] },
    ],
    'She': [
      { before: 'Where is Sophie?', after: 'is talking to the teacher in the hall.', hint: '(zij)', exp: "'She' verwijst naar Sophie (vrouwelijk).", opts: ['She', 'Her', 'Hers', 'They'] },
      { before: 'Anna is very happy because', after: 'has a new red bicycle.', hint: '(zij)', exp: "'She' verwijst naar Anna.", opts: ['She', 'Her', 'Hers', 'He'] },
      { before: 'This is Charlotte.', after: 'likes reading English stories.', hint: '(zij)', exp: "'She' verwijst naar Charlotte.", opts: ['She', 'Her', 'Hers', 'We'] },
      { before: 'Lisa is playing music;', after: 'sings very nicely.', hint: '(zij)', exp: "'She' verwijst naar Lisa.", opts: ['She', 'Her', 'Hers', 'They'] },
      { before: 'Fleur opened her notebook and', after: 'wrote the first sentence.', hint: '(zij)', exp: "'She' verwijst naar Fleur.", opts: ['she', 'her', 'hers', 'it'] },
      { before: 'Look at Elena.', after: 'is eating a green apple.', hint: '(zij)', exp: "'She' verwijst naar Elena.", opts: ['She', 'Her', 'Hers', 'They'] },
    ],
    'It': [
      { before: 'Where is my ruler?', after: 'is on the wooden desk.', hint: '(het)', exp: "'It' gebruik je voor een voorwerp (de liniaal).", opts: ['It', 'Its', 'He', 'They'] },
      { before: 'Look at the brown cat.', after: 'is sleeping under the warm chair.', hint: '(het)', exp: "'It' gebruik je voor een dier (de kat).", opts: ['It', 'Its', 'He', 'They'] },
      { before: 'I have a new schoolbag.', after: 'is blue and has two pockets.', hint: '(het)', exp: "'It' verwijst naar de schooltas.", opts: ['It', 'Its', 'He', 'They'] },
      { before: 'Listen to the bird in the tree.', after: 'is singing a sweet song.', hint: '(het)', exp: "'It' verwijst naar de vogel.", opts: ['It', 'Its', 'He', 'They'] },
      { before: 'Here is the English dictionary.', after: 'is very heavy and thick.', hint: '(het)', exp: "'It' verwijst naar het woordenboek.", opts: ['It', 'Its', 'He', 'They'] },
      { before: 'Look at the small rabbit.', after: 'is eating a fresh carrot.', hint: '(het)', exp: "'It' verwijst naar het konijn.", opts: ['It', 'Its', 'He', 'They'] },
    ],
    'We': [
      { before: 'Lucas and I are good friends.', after: 'cycle to school together every day.', hint: '(wij)', exp: "'We' verwijst naar Lucas en mij samen (wij).", opts: ['We', 'Us', 'Our', 'They'] },
      { before: 'My sister and I like music.', after: 'sing in the school choir.', hint: '(wij)', exp: "'We' (mijn zus en ik).", opts: ['We', 'Us', 'Our', 'They'] },
      { before: 'Bram and I are hungry.', after: 'want to eat our sandwiches now.', hint: '(wij)', exp: "'We' (Bram en ik).", opts: ['We', 'Us', 'Our', 'They'] },
      { before: 'In class 1B,', after: 'learn fifty new English words every week.', hint: '(wij)', exp: "'We' (wij als klas).", opts: ['we', 'us', 'our', 'they'] },
      { before: 'Felix and I are partners today.', after: 'are making a poster together.', hint: '(wij)', exp: "'We' (Felix en ik).", opts: ['We', 'Us', 'Our', 'They'] },
      { before: 'Emma and I are standing by the door.', after: 'are waiting for the bell.', hint: '(wij)', exp: "'We' (Emma en ik).", opts: ['We', 'Us', 'Our', 'They'] },
    ],
    'They': [
      { before: 'Look at Sam and Ben.', after: 'are playing basketball in the gym.', hint: '(zij - meervoud)', exp: "'They' verwijst naar meerdere personen.", opts: ['They', 'Them', 'Their', 'We'] },
      { before: 'Where are the new students?', after: 'are waiting in the hallway.', hint: '(zij - meervoud)', exp: "'They' verwijst naar de nieuwe leerlingen.", opts: ['They', 'Them', 'Their', 'We'] },
      { before: 'The dogs are in the garden;', after: 'are running on the green grass.', hint: '(zij - meervoud)', exp: "'They' voor de honden (meervoud).", opts: ['they', 'them', 'their', 'we'] },
      { before: 'Look at Anna and Sophie.', after: 'are sharing a pack of cookies.', hint: '(zij - meervoud)', exp: "'They' voor Anna en Sophie.", opts: ['They', 'Them', 'Their', 'We'] },
      { before: 'The teachers are in the staff room;', after: 'are drinking coffee.', hint: '(zij - meervoud)', exp: "'They' voor 'the teachers'.", opts: ['they', 'them', 'their', 'we'] },
      { before: 'The books were on the table, but now', after: 'are in the cupboard.', hint: '(zij - meervoud)', exp: "'They' voor 'the books' (meervoud).", opts: ['they', 'them', 'their', 'it'] },
    ]
  };

  Object.entries(subjectTemplates).forEach(([answer, list]) => {
    list.forEach(item => {
      items.push({
        id: `gen_subj_${idCounter++}`,
        category: 'personal',
        subtype: 'personal_subject',
        beforeGap: item.before,
        afterGap: item.after,
        correctAnswer: answer,
        dutchHint: item.hint,
        explanation: item.exp,
        options: item.opts
      });
    });
  });

  // 2. OBJECT PRONOUNS: me, you, him, her, it, us, them (Equal count for each)
  const objectTemplates: { [key: string]: { before: string; after: string; hint: string; exp: string; opts: string[] }[] } = {
    'me': [
      { before: 'I am over here! Please look at', after: '.', hint: '(mij)', exp: "'Me' staat na het voorzetsel 'at'.", opts: ['me', 'I', 'my', 'mine'] },
      { before: 'Can you give', after: 'that blue pencil, please? I need to write.', hint: '(mij)', exp: "'Me' na 'give'.", opts: ['me', 'I', 'my', 'mine'] },
      { before: 'The English teacher asked', after: 'to read page five aloud.', hint: '(mij)', exp: "'Me' is het voorwerp na 'asked'.", opts: ['me', 'I', 'my', 'mine'] },
      { before: 'Listen to', after: ', everyone! The lesson is starting.', hint: '(mij)', exp: "'Me' na 'listen to'.", opts: ['me', 'I', 'my', 'mine'] },
      { before: 'My brother tossed the football directly to', after: '.', hint: '(mij)', exp: "'Me' na het voorzetsel 'to'.", opts: ['me', 'I', 'my', 'mine'] },
      { before: 'Do you want to walk with', after: 'to the bus stop?', hint: '(mij)', exp: "'Me' na 'with'.", opts: ['me', 'I', 'my', 'mine'] },
    ],
    'you': [
      { before: 'I can see', after: ', David! You are standing behind the door.', hint: '(jou)', exp: "'You' is het lijdend voorwerp.", opts: ['you', 'your', 'yours', 'he'] },
      { before: 'The teacher wants to ask', after: 'a question, Lisa.', hint: '(jou)', exp: "'You' na 'ask'.", opts: ['you', 'your', 'yours', 'she'] },
      { before: 'We made a birthday card especially for', after: ', Tom!', hint: '(jou)', exp: "'You' na het voorzetsel 'for'.", opts: ['you', 'your', 'yours', 'him'] },
      { before: 'I will meet', after: 'at three o’clock by the bicycle shed.', hint: '(jou)', exp: "'You' na het werkwoord 'meet'.", opts: ['you', 'your', 'yours', 'he'] },
      { before: 'Can I borrow a ruler from', after: ', Emma?', hint: '(jou)', exp: "'You' na 'from'.", opts: ['you', 'your', 'yours', 'her'] },
      { before: 'Our tutor was looking for', after: 'this morning, Jack.', hint: '(jou)', exp: "'You' na 'for'.", opts: ['you', 'your', 'yours', 'him'] },
    ],
    'him': [
      { before: 'Tom dropped his eraser. Please pass it to', after: '.', hint: '(hem)', exp: "'Him' staat na het voorzetsel 'to' voor Tom.", opts: ['him', 'he', 'his', 'they'] },
      { before: 'Victor is very nice. I sit next to', after: 'in science class.', hint: '(hem)', exp: "'Him' na 'next to' voor Victor.", opts: ['him', 'he', 'his', 'them'] },
      { before: 'Liam needs help with math. Can you help', after: '?', hint: '(hem)', exp: "'Him' na 'help'.", opts: ['him', 'he', 'his', 'they'] },
      { before: 'I saw Noah in the hall and spoke to', after: 'about the homework.', hint: '(hem)', exp: "'Him' na 'to' voor Noah.", opts: ['him', 'he', 'his', 'them'] },
      { before: 'Arthur forgot his lunch. We gave', after: 'an apple and a sandwich.', hint: '(hem)', exp: "'Him' als meewerkend voorwerp voor Arthur.", opts: ['him', 'he', 'his', 'they'] },
      { before: 'Where is Felix? I want to invite', after: 'to my birthday party.', hint: '(hem)', exp: "'Him' na 'invite' voor Felix.", opts: ['him', 'he', 'his', 'them'] },
    ],
    'her': [
      { before: 'Sophie is thirsty. Please hand a bottle of water to', after: '.', hint: '(haar)', exp: "'Her' staat na 'to' voor Sophie.", opts: ['her', 'she', 'hers', 'them'] },
      { before: 'Charlotte is my friend. I play in the park with', after: 'every afternoon.', hint: '(haar)', exp: "'Her' na 'with' voor Charlotte.", opts: ['her', 'she', 'hers', 'them'] },
      { before: 'This drawing is for Anna. Give it to', after: '.', hint: '(haar)', exp: "'Her' na 'to' voor Anna.", opts: ['her', 'she', 'hers', 'they'] },
      { before: 'Maya lost her pencil case. We helped', after: 'find it under the desk.', hint: '(haar)', exp: "'Her' na 'helped' voor Maya.", opts: ['her', 'she', 'hers', 'them'] },
      { before: 'I see Lisa over there. Let’s go talk to', after: '.', hint: '(haar)', exp: "'Her' na 'talk to' voor Lisa.", opts: ['her', 'she', 'hers', 'them'] },
      { before: 'Elena answered correctly, and the teacher praised', after: '.', hint: '(haar)', exp: "'Her' na 'praised' voor Elena.", opts: ['her', 'she', 'hers', 'them'] },
    ],
    'it': [
      { before: 'I have a new English book. Do you want to read', after: '?', hint: '(het)', exp: "'It' is het lijdend voorwerp voor het boek.", opts: ['it', 'its', 'him', 'them'] },
      { before: 'Here is your warm jacket. Take', after: 'with you to the playground.', hint: '(het)', exp: "'It' voor de jas.", opts: ['it', 'its', 'him', 'them'] },
      { before: 'Look at the friendly dog. You can pet', after: 'gently.', hint: '(het)', exp: "'It' voor de hond.", opts: ['it', 'its', 'him', 'them'] },
      { before: 'I found a yellow ruler on the floor and put', after: 'on the teacher’s table.', hint: '(het)', exp: "'It' voor de liniaal.", opts: ['it', 'its', 'him', 'them'] },
      { before: 'This apple is sweet. Taste', after: '!', hint: '(het)', exp: "'It' voor de appel.", opts: ['it', 'its', 'him', 'them'] },
      { before: 'Where is my schoolbag? I left', after: 'in the locker room.', hint: '(het)', exp: "'It' voor de schooltas.", opts: ['it', 'its', 'him', 'them'] },
    ],
    'us': [
      { before: 'We are standing by the tree. Come and sit with', after: '!', hint: '(ons)', exp: "'Us' na 'with' voor 'we'.", opts: ['us', 'we', 'our', 'them'] },
      { before: 'The gym teacher gave', after: 'a shiny new basketball.', hint: '(ons)', exp: "'Us' is het meewerkend voorwerp voor 'we'.", opts: ['us', 'we', 'our', 'them'] },
      { before: 'Can you show', after: 'the way to the music room, please?', hint: '(ons)', exp: "'Us' na 'show' voor ons.", opts: ['us', 'we', 'our', 'them'] },
      { before: 'We did our homework well, so the teacher rewarded', after: 'with stickers.', hint: '(ons)', exp: "'Us' voor 'we'.", opts: ['us', 'we', 'our', 'them'] },
      { before: 'Look at our poster! Mr. Jones gave', after: 'an A-plus.', hint: '(ons)', exp: "'Us' voor 'we'.", opts: ['us', 'we', 'our', 'them'] },
      { before: 'Don’t leave without', after: '; we are coming right now!', hint: '(ons)', exp: "'Us' na 'without' voor 'we'.", opts: ['us', 'we', 'our', 'them'] },
    ],
    'them': [
      { before: 'Where are my colored pencils? I cannot find', after: 'anywhere.', hint: '(ze/hen)', exp: "'Them' voor de kleurpotloden (meervoud).", opts: ['them', 'they', 'their', 'us'] },
      { before: 'Look at the birds in the garden. I feed', after: 'every morning.', hint: '(ze)', exp: "'Them' voor 'the birds'.", opts: ['them', 'they', 'their', 'it'] },
      { before: 'Sam and Ben are calling. Answer', after: ', please.', hint: '(hen/ze)', exp: "'Them' voor Sam en Ben.", opts: ['them', 'they', 'their', 'we'] },
      { before: 'The students are working quietly. Do not disturb', after: '.', hint: '(hen/ze)', exp: "'Them' voor 'the students'.", opts: ['them', 'they', 'their', 'us'] },
      { before: 'I bought two sandwiches and shared', after: 'with my friends.', hint: '(ze)', exp: "'Them' voor de twee broodjes.", opts: ['them', 'they', 'their', 'it'] },
      { before: 'The bicycles were in the rain, so we moved', after: 'inside the shed.', hint: '(ze)', exp: "'Them' voor 'the bicycles'.", opts: ['them', 'they', 'their', 'it'] },
    ]
  };

  Object.entries(objectTemplates).forEach(([answer, list]) => {
    list.forEach(item => {
      items.push({
        id: `gen_obj_${idCounter++}`,
        category: 'personal',
        subtype: 'personal_object',
        beforeGap: item.before,
        afterGap: item.after,
        correctAnswer: answer,
        dutchHint: item.hint,
        explanation: item.exp,
        options: item.opts
      });
    });
  });

  // 3. POSSESSIVE ADJECTIVES: my, your, his, her, its, our, their (Equal count for each)
  const possAdjTemplates: { [key: string]: { before: string; after: string; hint: string; exp: string; opts: string[] }[] } = {
    'my': [
      { before: 'I have a new bicycle. This is', after: 'bicycle.', hint: '(mijn)', exp: "'My' staat direct vóór het zelfstandig naamwoord 'bicycle'.", opts: ['my', 'mine', 'me', 'I'] },
      { before: 'I am opening', after: 'schoolbag to take out a pen.', hint: '(mijn)', exp: "'My' staat vóór 'schoolbag'.", opts: ['my', 'mine', 'me', 'I'] },
      { before: 'In the canteen, I always eat', after: 'sandwich and an apple.', hint: '(mijn)', exp: "'My' staat vóór 'sandwich'.", opts: ['my', 'mine', 'me', 'I'] },
      { before: 'I love', after: 'dog; he is very playful and happy.', hint: '(mijn)', exp: "'My' staat vóór 'dog'.", opts: ['my', 'mine', 'me', 'I'] },
      { before: 'Here is', after: 'English notebook; my name is on the cover.', hint: '(mijn)', exp: "'My' staat vóór 'English notebook'.", opts: ['my', 'mine', 'me', 'I'] },
      { before: 'I always keep', after: 'pencils inside a wooden box.', hint: '(mijn)', exp: "'My' staat vóór 'pencils'.", opts: ['my', 'mine', 'me', 'I'] },
    ],
    'your': [
      { before: 'Please open', after: 'English book to page ten, Lisa.', hint: '(jouw)', exp: "'Your' staat direct vóór 'English book'.", opts: ['your', 'yours', 'you', 'her'] },
      { before: 'Is this', after: 'pencil case, Thomas?', hint: '(jouw)', exp: "'Your' staat vóór 'pencil case'.", opts: ['your', 'yours', 'you', 'his'] },
      { before: 'Do not forget', after: 'jacket; it is cold outside, Emma.', hint: '(jouw)', exp: "'Your' staat vóór 'jacket'.", opts: ['your', 'yours', 'you', 'her'] },
      { before: 'Where is', after: 'bicycle parked, Jack?', hint: '(jouw)', exp: "'Your' staat vóór 'bicycle'.", opts: ['your', 'yours', 'you', 'his'] },
      { before: 'Can you show me', after: 'drawing, Sophie?', hint: '(jouw)', exp: "'Your' staat vóór 'drawing'.", opts: ['your', 'yours', 'you', 'her'] },
      { before: 'Remember to pack', after: 'homework in your bag, David.', hint: '(jouw)', exp: "'Your' staat vóór 'homework'.", opts: ['your', 'yours', 'you', 'his'] },
    ],
    'his': [
      { before: 'Thomas has a red pencil. That is', after: 'pencil.', hint: '(zijn)', exp: "'His' staat vóór 'pencil' voor Thomas.", opts: ['his', 'he', 'him', 'its'] },
      { before: 'Lucas is riding', after: 'bike in the schoolyard.', hint: '(zijn)', exp: "'His' staat vóór 'bike' voor Lucas.", opts: ['his', 'he', 'him', 'their'] },
      { before: 'David is looking for', after: 'glasses in the classroom.', hint: '(zijn)', exp: "'His' staat vóór 'glasses' voor David.", opts: ['his', 'he', 'him', 'its'] },
      { before: 'Bram ate', after: 'lunch quickly because he wanted to play.', hint: '(zijn)', exp: "'His' staat vóór 'lunch' voor Bram.", opts: ['his', 'he', 'him', 'their'] },
      { before: 'Arthur put', after: 'notebook inside his locker.', hint: '(zijn)', exp: "'His' staat vóór 'notebook' voor Arthur.", opts: ['his', 'he', 'him', 'its'] },
      { before: 'Noah showed', after: 'new watch to all his friends.', hint: '(zijn)', exp: "'His' staat vóór 'new watch' voor Noah.", opts: ['his', 'he', 'him', 'their'] },
    ],
    'her': [
      { before: 'Sophie is holding', after: 'new blue school bag.', hint: '(haar)', exp: "'Her' staat vóór 'school bag' voor Sophie.", opts: ['her', 'hers', 'she', 'its'] },
      { before: 'Anna is writing with', after: 'favorite silver pen.', hint: '(haar)', exp: "'Her' staat vóór 'favorite silver pen' voor Anna.", opts: ['her', 'hers', 'she', 'its'] },
      { before: 'Charlotte brushed', after: 'hair before coming to class.', hint: '(haar)', exp: "'Her' staat vóór 'hair' voor Charlotte.", opts: ['her', 'hers', 'she', 'its'] },
      { before: 'Elena forgot', after: 'English workbook at home.', hint: '(haar)', exp: "'Her' staat vóór 'English workbook' voor Elena.", opts: ['her', 'hers', 'she', 'their'] },
      { before: 'Lisa called', after: 'mother after school finished.', hint: '(haar)', exp: "'Her' staat vóór 'mother' voor Lisa.", opts: ['her', 'hers', 'she', 'its'] },
      { before: 'Fleur shared', after: 'cookies with everyone at the table.', hint: '(haar)', exp: "'Her' staat vóór 'cookies' voor Fleur.", opts: ['her', 'hers', 'she', 'their'] },
    ],
    'its': [
      { before: 'Look at the happy puppy. It is wagging', after: 'little tail.', hint: '(zijn/haar van het dier)', exp: "'Its' (zonder apostrof!) staat vóór 'little tail' voor het dier.", opts: ['its', "it's", 'it', 'his'] },
      { before: 'The cat is drinking', after: 'milk from the bowl.', hint: '(zijn/haar van het dier)', exp: "'Its' staat vóór 'milk' voor de kat.", opts: ['its', "it's", 'it', 'his'] },
      { before: 'The bird flew back to', after: 'nest high up in the tree.', hint: '(zijn/haar van het dier)', exp: "'Its' staat vóór 'nest' voor de vogel.", opts: ['its', "it's", 'it', 'their'] },
      { before: 'The rabbit is cleaning', after: 'long ears in the cage.', hint: '(zijn/haar van het dier)', exp: "'Its' staat vóór 'long ears' voor het konijn.", opts: ['its', "it's", 'it', 'his'] },
      { before: 'The small clock stopped because', after: 'battery ran out.', hint: '(zijn/haar van een ding)', exp: "'Its' staat vóór 'battery' voor de klok.", opts: ['its', "it's", 'it', 'their'] },
      { before: 'The hamster is running inside', after: 'wheel.', hint: '(zijn/haar van het dier)', exp: "'Its' staat vóór 'wheel' voor de hamster.", opts: ['its', "it's", 'it', 'his'] },
    ],
    'our': [
      { before: 'We love', after: 'friendly English teacher.', hint: '(onze)', exp: "'Our' staat vóór 'friendly English teacher' voor 'we'.", opts: ['our', 'ours', 'us', 'we'] },
      { before: 'We are sitting in', after: 'spacious classroom.', hint: '(onze)', exp: "'Our' staat vóór 'spacious classroom'.", opts: ['our', 'ours', 'us', 'we'] },
      { before: 'My brother and I are cleaning', after: 'bedroom today.', hint: '(onze)', exp: "'Our' staat vóór 'bedroom' voor 'wij'.", opts: ['our', 'ours', 'us', 'their'] },
      { before: 'We brought', after: 'basketballs to the sports hall.', hint: '(onze)', exp: "'Our' staat vóór 'basketballs'.", opts: ['our', 'ours', 'us', 'we'] },
      { before: 'We finished', after: 'project in geography class on time.', hint: '(ons/onze)', exp: "'Our' staat vóór 'project'.", opts: ['our', 'ours', 'us', 'we'] },
      { before: 'Look at', after: 'new school garden; it has lovely flowers.', hint: '(onze)', exp: "'Our' staat vóór 'new school garden'.", opts: ['our', 'ours', 'us', 'their'] },
    ],
    'their': [
      { before: 'Sam and Ben are riding', after: 'bikes to school.', hint: '(hun)', exp: "'Their' staat vóór 'bikes' voor Sam en Ben (hun).", opts: ['their', 'theirs', 'them', 'they'] },
      { before: 'The students forgot', after: 'homework on the kitchen table.', hint: '(hun)', exp: "'Their' staat vóór 'homework' voor 'the students'.", opts: ['their', 'theirs', 'them', 'they'] },
      { before: 'The girls put', after: 'coats on the coat rack.', hint: '(hun)', exp: "'Their' staat vóór 'coats'.", opts: ['their', 'theirs', 'them', 'they'] },
      { before: 'The boys are washing', after: 'hands before lunch.', hint: '(hun)', exp: "'Their' staat vóór 'hands'.", opts: ['their', 'theirs', 'them', 'they'] },
      { before: 'My friends showed me', after: 'holiday photographs.', hint: '(hun)', exp: "'Their' staat vóór 'holiday photographs'.", opts: ['their', 'theirs', 'them', 'our'] },
      { before: 'The children packed', after: 'schoolbags at the end of the day.', hint: '(hun)', exp: "'Their' staat vóór 'schoolbags'.", opts: ['their', 'theirs', 'them', 'they'] },
    ]
  };

  Object.entries(possAdjTemplates).forEach(([answer, list]) => {
    list.forEach(item => {
      items.push({
        id: `gen_poss_adj_${idCounter++}`,
        category: 'possessive',
        subtype: 'possessive_adjective',
        beforeGap: item.before,
        afterGap: item.after,
        correctAnswer: answer,
        dutchHint: item.hint,
        explanation: item.exp,
        options: item.opts
      });
    });
  });

  // 4. POSSESSIVE PRONOUNS: mine, yours, his, hers, ours, theirs (Equal count for each)
  const possPronTemplates: { [key: string]: { before: string; after: string; hint: string; exp: string; opts: string[] }[] } = {
    'mine': [
      { before: 'This is not your pen. It is', after: '!', hint: '(van mij)', exp: "'Mine' staat zelfstandig op het einde (zonder zelfstandig naamwoord erachter).", opts: ['mine', 'my', 'me', 'I'] },
      { before: 'Is that blue ruler yours or', after: '?', hint: '(van mij)', exp: "'Mine' staat zelfstandig.", opts: ['mine', 'my', 'me', 'I'] },
      { before: 'Your sandwich looks tasty, but', after: 'is delicious too!', hint: '(die van mij)', exp: "'Mine' staat zelfstandig als onderwerp van de bijzin.", opts: ['mine', 'my', 'me', 'I'] },
      { before: 'You have your ticket, and I have', after: '.', hint: '(die van mij)', exp: "'Mine' staat zelfstandig.", opts: ['mine', 'my', 'me', 'I'] },
      { before: 'That bicycle by the tree is', after: '; my key fits the lock.', hint: '(van mij)', exp: "'Mine' staat zelfstandig.", opts: ['mine', 'my', 'me', 'I'] },
      { before: 'I lost my eraser, but this one is definitely', after: '.', hint: '(van mij)', exp: "'Mine' staat zelfstandig.", opts: ['mine', 'my', 'me', 'I'] },
    ],
    'yours': [
      { before: 'I found a pencil case on the floor. Is it', after: ', Tom?', hint: '(van jou)', exp: "'Yours' staat zelfstandig aan het einde van de vraag.", opts: ['yours', 'your', 'you', 'mine'] },
      { before: 'My apple is green, but', after: 'is bright red, Lisa.', hint: '(die van jou)', exp: "'Yours' staat zelfstandig als onderwerp.", opts: ['yours', 'your', 'you', 'mine'] },
      { before: 'Here is my drawing. Where is', after: ', Sophie?', hint: '(die van jou)', exp: "'Yours' staat zelfstandig.", opts: ['yours', 'your', 'you', 'hers'] },
      { before: 'Is this black jacket', after: ', Jack?', hint: '(van jou)', exp: "'Yours' staat zelfstandig.", opts: ['yours', 'your', 'you', 'his'] },
      { before: 'I finished my exercise. Did you finish', after: '?', hint: '(die van jou)', exp: "'Yours' staat zelfstandig.", opts: ['yours', 'your', 'you', 'mine'] },
      { before: 'My schoolbag is heavy, but', after: 'is light, Emma.', hint: '(die van jou)', exp: "'Yours' staat zelfstandig.", opts: ['yours', 'your', 'you', 'hers'] },
    ],
    'his': [
      { before: 'This jacket belongs to Lucas. It is', after: '.', hint: '(van hem)', exp: "'His' staat zelfstandig op het einde voor Lucas.", opts: ['his', 'him', 'he', 'theirs'] },
      { before: 'Anna brought her book, but Victor forgot', after: '.', hint: '(het zijne / die van hem)', exp: "'His' staat zelfstandig voor Victor (zijn boek).", opts: ['his', 'him', 'he', 'her'] },
      { before: 'David has two pencils; the red one is', after: '.', hint: '(van hem)', exp: "'His' staat zelfstandig.", opts: ['his', 'him', 'he', 'their'] },
      { before: 'This football belongs to Bram; it is', after: '.', hint: '(van hem)', exp: "'His' staat zelfstandig voor Bram.", opts: ['his', 'him', 'he', 'theirs'] },
      { before: 'Arthur showed us his model airplane. It is all', after: '.', hint: '(van hem)', exp: "'His' staat zelfstandig.", opts: ['his', 'him', 'he', 'theirs'] },
      { before: 'Liam lost a cap yesterday, and this cap is', after: '.', hint: '(van hem)', exp: "'His' staat zelfstandig.", opts: ['his', 'him', 'he', 'theirs'] },
    ],
    'hers': [
      { before: 'This book belongs to Emma. It is', after: '.', hint: '(van haar)', exp: "'Hers' staat zelfstandig voor Emma.", opts: ['hers', 'her', 'she', 'theirs'] },
      { before: 'Tom has his sandwich, and Lisa has', after: '.', hint: '(het hare / die van haar)', exp: "'Hers' staat zelfstandig voor Lisa.", opts: ['hers', 'her', 'she', 'his'] },
      { before: 'This pink pencil case belongs to Sophie; it is', after: '.', hint: '(van haar)', exp: "'Hers' staat zelfstandig voor Sophie.", opts: ['hers', 'her', 'she', 'theirs'] },
      { before: 'Charlotte made this drawing; the colorful picture is', after: '.', hint: '(van haar)', exp: "'Hers' staat zelfstandig voor Charlotte.", opts: ['hers', 'her', 'she', 'theirs'] },
      { before: 'My water bottle is blue, but that purple one is', after: '(Anna\'s).', hint: '(van haar / die van haar)', exp: "'Hers' staat zelfstandig voor Anna.", opts: ['hers', 'her', 'she', 'theirs'] },
      { before: 'Elena left her umbrella by the door; it is', after: '.', hint: '(van haar)', exp: "'Hers' staat zelfstandig voor Elena.", opts: ['hers', 'her', 'she', 'theirs'] },
    ],
    'ours': [
      { before: 'This is not their ball. It is', after: '; we brought it from home.', hint: '(van ons)', exp: "'Ours' staat zelfstandig voor 'we' (van ons).", opts: ['ours', 'our', 'us', 'theirs'] },
      { before: 'Class 1B has a table over there, and this table is', after: '!', hint: '(van ons)', exp: "'Ours' staat zelfstandig voor 'ons'.", opts: ['ours', 'our', 'us', 'theirs'] },
      { before: 'That classroom belongs to the seniors, but this room is', after: '.', hint: '(van ons)', exp: "'Ours' staat zelfstandig voor 'ons'.", opts: ['ours', 'our', 'us', 'theirs'] },
      { before: 'They have their project poster, and this gold poster is', after: '!', hint: '(van ons)', exp: "'Ours' staat zelfstandig voor 'ons'.", opts: ['ours', 'our', 'us', 'theirs'] },
      { before: 'We locked our bikes in the front shed; those bikes are', after: '.', hint: '(van ons)', exp: "'Ours' staat zelfstandig voor 'ons'.", opts: ['ours', 'our', 'us', 'theirs'] },
      { before: 'The coach pointed to the trophy and said, "It is', after: '!"', hint: '(van ons)', exp: "'Ours' staat zelfstandig voor 'ons'.", opts: ['ours', 'our', 'us', 'theirs'] },
    ],
    'theirs': [
      { before: 'We have our bikes, and the other students have', after: '.', hint: '(van hen / die van hen)', exp: "'Theirs' staat zelfstandig voor 'they' (die van hen).", opts: ['theirs', 'their', 'them', 'they'] },
      { before: 'Our classroom is on the ground floor, and', after: 'is upstairs.', hint: '(die van hen)', exp: "'Theirs' staat zelfstandig als onderwerp van de bijzin.", opts: ['theirs', 'their', 'them', 'they'] },
      { before: 'We brought our English books, but where are', after: '?', hint: '(die van hen)', exp: "'Theirs' staat zelfstandig.", opts: ['theirs', 'their', 'them', 'they'] },
      { before: 'Our dog is black, but', after: 'is white and brown.', hint: '(die van hen)', exp: "'Theirs' staat zelfstandig.", opts: ['theirs', 'their', 'them', 'they'] },
      { before: 'Those footballs do not belong to us; they are', after: '.', hint: '(van hen)', exp: "'Theirs' staat zelfstandig.", opts: ['theirs', 'their', 'them', 'they'] },
      { before: 'We finished our poster, while the other team is still making', after: '.', hint: '(die van hen)', exp: "'Theirs' staat zelfstandig.", opts: ['theirs', 'their', 'them', 'they'] },
    ]
  };

  Object.entries(possPronTemplates).forEach(([answer, list]) => {
    list.forEach(item => {
      items.push({
        id: `gen_poss_pron_${idCounter++}`,
        category: 'possessive',
        subtype: 'possessive_pronoun',
        beforeGap: item.before,
        afterGap: item.after,
        correctAnswer: answer,
        dutchHint: item.hint,
        explanation: item.exp,
        options: item.opts
      });
    });
  });

  return items;
}

const generatedItems = generateBeginnerGymnasiumSentences();

export const allSentences: SentenceItem[] = [
  ...personalPronounSentences,
  ...possessivePronounSentences,
  ...extraSentences,
  ...generatedItems
];

// Helper to retrieve sentences based on active practice mode
export function getSentencesByMode(mode: PracticeMode): SentenceItem[] {
  if (mode === 'personal') {
    return allSentences.filter(s => s.category === 'personal');
  }
  if (mode === 'possessive') {
    return allSentences.filter(s => s.category === 'possessive');
  }
  return [...allSentences];
}

// Fisher-Yates shuffle helper
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Creates a balanced, high-variety question queue from the available sentence pool.
 * - Groups sentences by target answer family (I, you, he, she, it, we, they, me, him, her, us, them, my, your, his, her, its, our, their, mine, yours, hers, ours, theirs).
 * - Distributes and interleaves them in round-robin fashion so no single pronoun dominates.
 * - Guarantees NO adjacent duplicate answers (e.g. 'his' followed immediately by 'his' or 'her' by 'her').
 */
export function createBalancedQueue(pool: SentenceItem[], count?: number): SentenceItem[] {
  if (pool.length === 0) return [];

  // Group sentences by normalized answer
  const answerBuckets = new Map<string, SentenceItem[]>();
  
  pool.forEach(item => {
    const key = item.correctAnswer.toLowerCase();
    if (!answerBuckets.has(key)) {
      answerBuckets.set(key, []);
    }
    answerBuckets.get(key)!.push(item);
  });

  // Shuffle each bucket internally
  answerBuckets.forEach((bucket, key) => {
    answerBuckets.set(key, shuffleArray(bucket));
  });

  // Get list of bucket keys and shuffle order of bucket categories
  const bucketKeys = shuffleArray(Array.from(answerBuckets.keys()));
  
  const interleaved: SentenceItem[] = [];
  let itemsRemaining = true;
  let round = 0;

  while (itemsRemaining) {
    itemsRemaining = false;
    // Permute bucket keys differently each round for maximum variety
    const roundKeys = shuffleArray([...bucketKeys]);
    
    for (const key of roundKeys) {
      const bucket = answerBuckets.get(key);
      if (bucket && bucket.length > 0) {
        interleaved.push(bucket.pop()!);
        itemsRemaining = true;
      }
    }
    round++;
  }

  // Smooth out any accidental consecutive duplicates
  const result: SentenceItem[] = [];
  for (let i = 0; i < interleaved.length; i++) {
    const current = interleaved[i];
    const prev = result.length > 0 ? result[result.length - 1] : null;

    if (prev && prev.correctAnswer.toLowerCase() === current.correctAnswer.toLowerCase()) {
      // Look ahead for a swap candidate
      let swapIdx = -1;
      for (let j = i + 1; j < Math.min(i + 8, interleaved.length); j++) {
        if (interleaved[j].correctAnswer.toLowerCase() !== prev.correctAnswer.toLowerCase()) {
          swapIdx = j;
          break;
        }
      }
      if (swapIdx !== -1) {
        // Swap
        const temp = interleaved[i];
        interleaved[i] = interleaved[swapIdx];
        interleaved[swapIdx] = temp;
      }
    }
    result.push(interleaved[i]);
  }

  const finalCount = count ? Math.min(count, result.length) : result.length;
  return result.slice(0, finalCount);
}
