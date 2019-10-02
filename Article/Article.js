/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: "Nov 5th, 2018",
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: "Javascript and You, ES6",
    date: "May 7th, 2019",
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: "React vs Angular vs Vue",
    date: "June 7th, 2019",
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: "Professional Software Development in 2019",
    date: "Jan 1st, 2019",
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: "Fat baby cat best buddy little guy",
    date: "Oct 2nd, 2019",
    firstParagraph: `Vommit food and eat it again missing until dinner time, yet disappear for four days and return home with an expensive injury; bite the vet and mesmerizing birds, pet me pet me don't pet me. Fish i must find my red catnip fishy fish meow in empty rooms but spread kitty litter all over house eat a plant, kill a hand climb leg. Peer out window, chatter at birds, lure them to mouth floof tum, tickle bum, jellybean footies curly toes but pee in the shoe you call this cat food and i can haz but grass smells good. Disappear for four days and return home with an expensive injury; bite the vet poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls so claws in your leg rub my belly hiss lick butt slap owner's face at 5am until human fills food dish. Enslave the hooman cat fur is the new black so plays league of legends. Good morning sunshine.`,

    secondParagraph: `Flop over. Purr when being pet hiss at vacuum cleaner. Intently stare at the same spot sitting in a box for take a big fluffing crap 💩 so i like cats because they are fat and fluffy. Hiding behind the couch until lured out by a feathery toy. My slave human didn't give me any food so i pooped on the floor more napping, more napping all the napping is exhausting so murder hooman toes. Sit on the laptop behind the couch. Cats woo pushes butt to face push your water glass on the floor but do not try to mix old food with new one to fool me! walk on keyboard, eat a rug and furry furry hairs everywhere oh no human coming lie on counter don't get off counter.`,

    thirdParagraph: `Run at 3am has closed eyes but still sees you and find empty spot in cupboard and sleep all day, burrow under covers tuxedo cats always looking dapper friends are not food for i want to go outside let me go outside nevermind inside is better. Get scared by doggo also cucumerro inspect anything brought into the house, for cats go for world domination so cat mojo skid on floor, crash into wall or meow. Meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat drink water out of the faucet for cats go for world domination ignore the human until she needs to get up, then climb on her lap and sprawl i cry and cry and cry unless you pet me, and then maybe i cry just for fun. Love me! stretch eat owner's food yet i show my fluffy belly but it's a trap! if you pet it i will tear up your hand sun bathe lie on your belly and purr when you are asleep, catasstrophe. A nice warm laptop for me to sit on find box a little too small and curl up with fur hanging out missing until dinner time hate dog, pet me pet me don't pet me ptracy, love. Curl up and sleep on the freshly laundered towels purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Scratch my tummy actually i hate you now fight me cereal boxes make for five star accommodation so hit you unexpectedly or meow and meow for food, then when human fills food dish, take a few bites of food and continue meowing. Tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad prance along on top of the garden fence, annoy the neighbor's dog and make it bark and meowwww always hungry. Rub against owner because nose is wet love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125 sweater). If it fits i sits. Leave hair on owner's clothes side-eyes your "jerk" other hand while being petted , demand to be let outside at once, and expect owner to wait for me as i think about it so check cat door for ambush 10 times before coming in or roll over and sun my belly cat milk copy park pee walk owner escape bored tired cage droppings sick vet vomit. Eat too much then proceed to regurgitate all over living room carpet while humans eat dinner while happily ignoring when being called or meow all night having their mate disturbing sleeping humans, for missing until dinner time, for asdflkjaertvlkjasntvkjn (sits on keyboard). Destroy the blinds munch, munch, chomp, chomp, leave hair on owner's clothes or hide head under blanket so no one can see or crash against wall but walk away like nothing happened. Lick plastic bags ears back wide eyed claw drapes experiences short bursts of poo-phoria after going to the loo but eat a plant, kill a hand but while happily ignoring when being called carefully drink from water glass and then spill it everywhere and proceed to lick the puddle. Destroy couch claw at curtains stretch and yawn nibble on tuna ignore human bite human hand experiences short bursts of poo-phoria after going to the loo purrr purr littel cat, little cat purr purr sun bathe tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad . Freak human out make funny noise mow mow mow mow mow mow success now attack human lie in the sink all day but claw drapes, but flee in terror at cucumber discovered on floor murf pratt ungow ungow, but scratch the furniture. Chew master's slippers loves cheeseburgers for rub butt on table or stare at wall turn and meow stare at wall some more meow again continue staring and cat is love, cat is life really likes hummus. Eat an easter feather as if it were a bird then burp victoriously, but tender hide from vacuum cleaner, scratch. Eat a plant, kill a hand tuxedo cats always looking dapper or jump up to edge of bath, fall in then scramble in a mad panic to get out but refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am friends are not food swipe at owner's legs side-eyes your "jerk" other hand while being petted . Make plans to dominate world and then take a nap scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food really likes hummus. Try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me fart in owners food so i like frogs and 0 gravity and lies down for claws in the eye of the beholder. Swat at dog you call this cat food and play time, so cough hairball, eat toilet paper for steal the warm chair right after you get up.
`
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/
const articles = document.querySelector(".articles");

function createArticle(
  title,
  date,
  firstParagraph,
  secondParagraph,
  thirdParagraph
) {
  const articleDiv = document.createElement("div");
  const titles = document.createElement("h2");
  const dates = document.createElement("p");
  const paragraph1 = document.createElement("p");
  const paragraph2 = document.createElement("p");
  const paragraph3 = document.createElement("p");
  const span = document.createElement("span");

  articleDiv.classList.add("article");
  dates.classList.add("date");
  span.classList.add("expandBtn");

  titles.textContent = title;
  dates.textContent = date;
  paragraph1.textContent = firstParagraph;
  paragraph2.textContent = secondParagraph;
  paragraph3.textContent = thirdParagraph;
  span.textContent = "Expand";

  articles.appendChild(articleDiv);
  articleDiv.appendChild(titles);
  articleDiv.appendChild(dates);
  articleDiv.appendChild(span);
  articleDiv.appendChild(paragraph1);
  articleDiv.appendChild(paragraph2);
  articleDiv.appendChild(paragraph3);
  

  span.addEventListener("click", e => {
    
    articleDiv.classList.toggle("article-open");
    console.log(articleDiv)
  });
  
  return articleDiv;
}

data.forEach(data => {
  articles.appendChild(
    createArticle(
      data.title,
      data.date,
      data.firstParagraph,
      data.secondParagraph,
      data.thirdParagraph
    )
  );
});

console.log(articles)