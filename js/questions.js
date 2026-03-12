/*
Trivia Quiz

Copyright (c) 2026 Dominique Striekwold

Licensed under the MIT License.
See the LICENSE file in the repository for details.

Built as part of a web development learning journey.
*/

const questions = [
  {
    question: "Which painter was born in Spain?",
    answers: ["Picasso", "Matisse", "Monet", "Van Gogh"],
    correctIndex: 0
  },
  {
    question: "What color do you get when you mix red and blue?",
    answers: ["Green", "Orange", "Purple", "Yellow"],
    correctIndex: 2
  },
  {
    question: "How many days are in a week?",
    answers: ["5", "6", "7", "8"],
    correctIndex: 2
  },
  {
    question: "What planet do we live on?",
    answers: ["Mars", "Venus", "Jupiter", "Earth"],
    correctIndex: 3
  },
  {
    question: "Which animal says meow?",
    answers: ["Dog", "Horse", "Cat", "Cow"],
    correctIndex: 2
  },
  {
    question: "How many hours are in a day?",
    answers: ["12", "18", "24", "30"],
    correctIndex: 2
  },
  {
    question: "Which season comes after spring?",
    answers: ["Winter", "Summer", "Autumn", "Rainy"],
    correctIndex: 1
  },
  {
    question: "What do bees make?",
    answers: ["Milk", "Honey", "Bread", "Ink"],
    correctIndex: 1
  },
  {
    question: "Which ocean is the largest?",
    answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctIndex: 3
  },
  {
    question: "Which instrument has black and white keys?",
    answers: ["Guitar", "Drums", "Piano", "Violin"],
    correctIndex: 2
  },
  {
    question: "How many legs does a spider have?",
    answers: ["6", "8", "10", "12"],
    correctIndex: 1
  },
  {
  question: "What gas do humans breathe in?",
  answers: ["Carbon", "Nitrogen", "Oxygen", "Helium"],
  correctIndex: 2
  },
  {
    question: "Which is a primary color?",
    answers: ["Green", "Purple", "Red", "Brown"],
    correctIndex: 2
  },
  {
  question: "What is H2O commonly known as?",
  answers: ["Salt", "Water", "Sugar", "Air"],
  correctIndex: 1
  },
  {
  question: "Which animal barks?",
  answers: ["Cat", "Dog", "Cow", "Sheep"],
  correctIndex: 1
  },
  {
  question: "How many continents are there?",
  answers: ["5", "6", "7", "8"],
  correctIndex: 2
  },
  {
  question: "What is the capital of France?",
  answers: ["Berlin", "Madrid", "Paris", "Rome"],
  correctIndex: 2
  },
  {
 question: "Which fruit is yellow?",
 answers: ["Apple", "Banana", "Cherry", "Grape"],
 correctIndex: 1
  },
  {
  question: "What do cows drink?",
  answers: ["Milk", "Water", "Juice", "Tea"],
  correctIndex: 1
  },
  {
  question: "Which shape has 3 sides?",
  answers: ["Square", "Triangle", "Circle", "Rectangle"],
  correctIndex: 1
  },
  {
  question: "What is 5 + 5?",
  answers: ["8", "9", "10", "11"],
  correctIndex: 2 
  },
  {
  question: "Which month has Christmas?",
  answers: ["October", "November", "December", "January"],
  correctIndex: 2
  },
  {
  question: "What color is grass?",
  answers: ["Blue", "Green", "Red", "Yellow"],
  correctIndex: 1
  },
  {
  question: "Which animal lives in water?",
  answers: ["Lion", "Fish", "Dog", "Tiger"],
  correctIndex: 1
  },
  {
  question: "Which planet is known as the Red Planet?",
  answers: ["Earth", "Mars", "Saturn", "Neptune"],
  correctIndex: 1
  },
  {
  question: "What is the opposite of hot?", answers: ["Warm", "Cool", "Cold", "Wet"],
  correctIndex: 2
  },
  {
  question: "Which bird can fly?",
  answers: ["Penguin", "Ostrich", "Eagle", "Chicken"],
  correctIndex: 2
  },
  {
  question: "How many wheels does a car usually have?",
  answers: ["2", "3", "4", "5"],
  correctIndex: 2
  },
  {
  question: "What do we use to write on a blackboard?",
  answers: ["Pen", "Pencil", "Chalk", "Brush"],
  correctIndex: 2
  },
  {
  question: "Which animal has a trunk?",
  answers: ["Lion", "Elephant", "Horse", "Dog"],
  correctIndex: 1
  },
  {
  question: "What is 5 + 5?",
  answers: ["8", "9", "10", "11"],
  correctIndex: 2
  },
  {
  question: "Which month has Christmas?",
  answers: ["October", "November", "December", "January"],
  correctIndex: 2
  },
  {
  question: "What color is grass?",
  answers: ["Blue", "Green", "Red", "Yellow"],
  correctIndex: 1
  },
  {
  question: "Which animal lives in water?",
  answers: ["Lion", "Fish", "Dog", "Tiger"],
  correctIndex: 1
  },
  {
  question: "Which planet is known as the Red Planet?",
  answers: ["Earth", "Mars", "Saturn", "Neptune"],
  correctIndex: 1
  },
  {
  question: "What is the opposite of hot?",
  answers: ["Warm", "Cool", "Cold", "Wet"],
  correctIndex: 2
  },
  {
  question: "Which bird can fly?",
  answers: ["Penguin", "Ostrich", "Eagle", "Chicken"],
  correctIndex: 2
  },
  {
  question: "How many wheels does a car usually have?",
  answers: ["2", "3", "4", "5"],
  correctIndex: 2
  },
  {
  question: "What do we use to write on a blackboard?",
  answers: ["Pen", "Pencil", "Chalk", "Brush"],
  correctIndex: 2
  },
  {
  question: "Which animal has a trunk?",
  answers: ["Lion", "Elephant", "Horse", "Dog"],
  correctIndex: 1
  },
  {
  question: "What color are strawberries?",
  answers: ["Blue", "Green", "Red", "Purple"],
  correctIndex: 2
  },
  {
  question: "Which planet has rings?",
  answers: ["Earth", "Mars", "Saturn", "Mercury"],
  correctIndex: 2
  },
  {
  question: "What do plants need to grow?",
  answers: ["Stone", "Sunlight", "Plastic", "Sand"],
  correctIndex: 1
  },
  {
  question: "Which animal can swim?",
  answers: ["Eagle", "Camel", "Dolphin", "Tiger"],
  correctIndex: 2
  },
  {
  question: "How many minutes are in an hour?",
  answers: ["30", "45", "60", "90"],
  correctIndex: 2
  },
  {
  question: "Which is a winter month?",
  answers: ["July", "August", "January", "May"],
  correctIndex: 2
  },
  {
  question: "What do we wear on our feet?",
  answers: ["Gloves", "Shoes", "Hats", "Belts"],
  correctIndex: 1
  },
  {
  question: "Which animal gives wool?",
  answers: ["Cow", "Goat", "Sheep", "Pig"],
  correctIndex: 2
  },
  {
  question: "What is the center of our solar system?",
  answers: ["Moon", "Earth", "Sun", "Mars"],
  correctIndex: 2
  },
  {
  question: "Which fruit grows on trees?",
  answers: ["Potato", "Apple", "Carrot", "Onion"],
  correctIndex: 1
  },
  {
  question: "Which shape is round?",
  answers: ["Square", "Triangle", "Circle", "Rectangle"],
  correctIndex: 2
  },
  {
  question: "Which animal roars?",
  answers: ["Dog", "Cat", "Lion", "Cow"],
  correctIndex: 2
  },
  {
  question: "What do we use to cut paper?",
  answers: ["Knife", "Fork", "Scissors", "Spoon"],
  correctIndex: 2
  },
  {
  question: "Which is a cold place?",
  answers: ["Desert", "Jungle", "Arctic", "Beach"],
  correctIndex: 2
  },
  {
  question: "What do we drink soup from?",
  answers: ["Plate", "Cup", "Bowl", "Box"],
  correctIndex: 2
  },
  {
  question: "Which insect makes webs?",
  answers: ["Bee", "Spider", "Fly", "Ant"],
  correctIndex: 1
  },
  {
  question: "Which animal hops?",
  answers: ["Horse", "Kangaroo", "Cow", "Goat"],
  correctIndex: 1
  },
  {
  question: "Which object tells time?",
  answers: ["Chair", "Clock", "Table", "Door"],
  correctIndex: 1
  },
  {
  question: "Which is a sweet food?",
  answers: ["Salt", "Sugar", "Pepper", "Vinegar"],
  correctIndex: 1
  },
  {
  question: "Which is a large sea animal?",
  answers: ["Shark", "Mouse", "Cat", "Dog"],
  correctIndex: 0
  },
  {
  question: "Which vehicle flies?",
  answers: ["Car", "Bike", "Plane", "Boat"],
  correctIndex: 2
  },
  {
  question: "Which is used to call someone?",
  answers: ["Phone", "Plate", "Book", "Shoe"],
  correctIndex: 0
  },
  {
  question: "Which animal has stripes?",
  answers: ["Elephant", "Zebra", "Dog", "Cow"],
  correctIndex: 1
  },
  {
  question: "Which is a farm animal?",
  answers: ["Lion", "Tiger", "Cow", "Wolf"],
  correctIndex: 2
  },
  {
  question: "Which is hot in the sky?",
  answers: ["Moon", "Sun", "Starfish", "Cloud"],
  correctIndex: 1
  },
  {
  question: "What do we read?",
  answers: ["Book", "Chair", "Lamp", "Bottle"],
  correctIndex: 0
  },
  {
  question: "Which sport uses a ball?",
  answers: ["Swimming", "Running", "Football", "Cycling"],
  correctIndex: 2
  },
  {
  question: "Which animal lives in the jungle?",
  answers: ["Polar bear", "Camel", "Monkey", "Penguin"],
  correctIndex: 2
  },
  {
  question: "Which is a kitchen tool?",
  answers: ["Hammer", "Wrench", "Spoon", "Saw"],
  correctIndex: 2
  },
  {
  question: "What color is snow?",
  answers: ["Black", "Green", "White", "Brown"],
  correctIndex: 2
  },
  {
  question: "Which is a metal?",
  answers: ["Wood", "Plastic", "Iron", "Paper"],
  correctIndex: 2
  },
  {
  question: "Which animal has a long neck?",
  answers: ["Dog", "Giraffe", "Pig", "Cat"],
  correctIndex: 1
  },
  {
  question: "What do we wear in rain?",
  answers: ["Sunglasses", "Raincoat", "Sandals", "Cap"],
  correctIndex: 1
  },
  {
  question: "Which is a musical instrument?",
  answers: ["Table", "Chair", "Flute", "Door"],
  correctIndex: 2
  },
  {
  question: "Which animal has feathers?",
  answers: ["Fish", "Bird", "Dog", "Horse"],
  correctIndex: 1
  },
  {
  question: "Which is a source of light?",
  answers: ["Rock", "Sun", "Sand", "Mud"],
  correctIndex: 1
  },
  {
  question: "What do we use to brush teeth?",
  answers: ["Comb", "Toothbrush", "Fork", "Pen"],
  correctIndex: 1
  },
  {
  question: "Which animal lives in cold regions?",
  answers: ["Camel", "Penguin", "Tiger", "Monkey"],
  correctIndex: 1
  },
  {
  question: "Which fruit is red?",
  answers: ["Banana", "Apple", "Pear", "Lemon"],
  correctIndex: 1
  },
  {
  question: "Which is a body part?",
  answers: ["Table", "Chair", "Hand", "Book"],
  correctIndex: 2
  },
  {
  question: "Which is used for cooking?",
  answers: ["Pan", "Pillow", "Mirror", "Clock"],
  correctIndex: 0
  },
  {
  question: "Which is a pet animal?",
  answers: ["Lion", "Tiger", "Dog", "Wolf"],
  correctIndex: 2
  },
  {
  question: "Which season is cold?",
  answers: ["Summer", "Spring", "Winter", "Autumn"],
  correctIndex: 2
  },
  {
  question: "What do we use to see far?",
  answers: ["Microscope", "Telescope", "Hammer", "Drill"],
  correctIndex: 1
  },
  {
  question: "Which is a vegetable?",
  answers: ["Carrot", "Apple", "Banana", "Grape"],
  correctIndex: 0
  },
  {
  question: "Which animal has fins?",
  answers: ["Fish", "Dog", "Horse", "Lion"],
  correctIndex: 0
  },
  {
  question: "Which is a color?",
  answers: ["Happy", "Fast", "Blue", "Run"],
  correctIndex: 2
  },
  {
  question: "What do we use to open doors?",
  answers: ["Key", "Knife", "Spoon", "Pen"],
  correctIndex: 0
  },
  {
  question: "Which animal has horns?",
  answers: ["Goat", "Cat", "Dog", "Rabbit"],
  correctIndex: 0
  },
  {
  question: "Which is a flying insect?",
  answers: ["Ant", "Bee", "Snail", "Worm"],
  correctIndex: 1
  },
  {
  question: "Which planet is the largest in our solar system?",
  answers: ["Saturn", "Jupiter", "Neptune", "Earth"],
  correctIndex: 1
},
{
  question: "Who wrote the play 'Romeo and Juliet'?",
  answers: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
  correctIndex: 1
},
{
  question: "What is the chemical symbol for gold?",
  answers: ["Ag", "Au", "Gd", "Go"],
  correctIndex: 1
},
{
  question: "Which country is home to the Great Pyramid of Giza?",
  answers: ["Mexico", "Greece", "Egypt", "India"],
  correctIndex: 2
},
{
  question: "What is the capital city of Canada?",
  answers: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
  correctIndex: 3
},
{
  question: "Which organ in the human body pumps blood?",
  answers: ["Liver", "Brain", "Heart", "Lungs"],
  correctIndex: 2
},
{
  question: "Which language has the most native speakers worldwide?",
  answers: ["English", "Hindi", "Spanish", "Mandarin Chinese"],
  correctIndex: 3
},
{
  question: "What is the hardest natural substance on Earth?",
  answers: ["Gold", "Diamond", "Iron", "Quartz"],
  correctIndex: 1
},
{
  question: "Which scientist developed the theory of general relativity?",
  answers: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
  correctIndex: 1
},
{
  question: "Which ocean lies between Africa and Australia?",
  answers: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
  correctIndex: 2
},
{
  question: "Which element has the atomic number 1?",
  answers: ["Oxygen", "Hydrogen", "Helium", "Carbon"],
  correctIndex: 1
},
{
  question: "Who painted the ceiling of the Sistine Chapel?",
  answers: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
  correctIndex: 2
},
{
  question: "What is the largest desert in the world?",
  answers: ["Sahara", "Gobi", "Antarctic Desert", "Arabian Desert"],
  correctIndex: 2
},
{
  question: "Which country uses the yen as its currency?",
  answers: ["China", "South Korea", "Japan", "Thailand"],
  correctIndex: 2
},
{
  question: "What is the boiling point of water at sea level?",
  answers: ["90°C", "95°C", "100°C", "105°C"],
  correctIndex: 2
},
{
  question: "Which mountain range separates Europe and Asia?",
  answers: ["Alps", "Himalayas", "Andes", "Ural Mountains"],
  correctIndex: 3
},
{
  question: "Who discovered penicillin?",
  answers: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Gregor Mendel"],
  correctIndex: 1
},
{
  question: "Which planet has the most moons?",
  answers: ["Jupiter", "Mars", "Earth", "Venus"],
  correctIndex: 0
},
{
  question: "What is the smallest prime number?",
  answers: ["0", "1", "2", "3"],
  correctIndex: 2
},
{
  question: "Which river is the longest in the world?",
  answers: ["Amazon", "Nile", "Yangtze", "Mississippi"],
  correctIndex: 1
},
{
  question: "Which country hosted the first modern Olympic Games in 1896?",
  answers: ["France", "Greece", "Italy", "United Kingdom"],
  correctIndex: 1
},
{
  question: "What is the largest internal organ in the human body?",
  answers: ["Heart", "Liver", "Kidney", "Lung"],
  correctIndex: 1
},
{
  question: "Which metal is liquid at room temperature?",
  answers: ["Mercury", "Aluminum", "Copper", "Lead"],
  correctIndex: 0
},
{
  question: "Who was the first person to walk on the Moon?",
  answers: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
  correctIndex: 2
},
{
  question: "Which continent has the most countries?",
  answers: ["Asia", "Europe", "Africa", "South America"],
  correctIndex: 2
},
{
  question: "What is the square root of 144?",
  answers: ["10", "11", "12", "14"],
  correctIndex: 2
},
{
  question: "Which gas is most abundant in Earth's atmosphere?",
  answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  correctIndex: 2
},
{
  question: "Which famous ship sank in 1912 after hitting an iceberg?",
  answers: ["Lusitania", "Britannic", "Titanic", "Bismarck"],
  correctIndex: 2
},
{
  question: "Which scientist proposed the laws of motion and universal gravitation?",
  answers: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"],
  correctIndex: 1
},
{
  question: "What is the capital of Argentina?",
  answers: ["Santiago", "Lima", "Buenos Aires", "Montevideo"],
  correctIndex: 2
},
{
  question: "Which country has the longest coastline in the world?",
  answers: ["Australia", "Russia", "Canada", "United States"],
  correctIndex: 2
},
{
  question: "Who wrote the novel '1984'?",
  answers: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "H.G. Wells"],
  correctIndex: 0
},
{
  question: "What is the chemical symbol for sodium?",
  answers: ["So", "Sd", "Na", "Sn"],
  correctIndex: 2
},
{
  question: "Which city is known as the 'Eternal City'?",
  answers: ["Athens", "Rome", "Jerusalem", "Istanbul"],
  correctIndex: 1
},
{
  question: "Which planet rotates on its side?",
  answers: ["Neptune", "Uranus", "Mars", "Venus"],
  correctIndex: 1
},
{
  question: "Who composed the Four Seasons?",
  answers: ["Mozart", "Beethoven", "Vivaldi", "Bach"],
  correctIndex: 2
},
{
  question: "Which blood type is known as the universal donor?",
  answers: ["A", "B", "AB", "O negative"],
  correctIndex: 3
},
{
  question: "Which war was fought between the North and South regions in the United States?",
  answers: ["World War I", "American Civil War", "Revolutionary War", "Vietnam War"],
  correctIndex: 1
},
{
  question: "What is the tallest mountain in North America?",
  answers: ["Mount Logan", "Denali", "Mount Whitney", "Mount Rainier"],
  correctIndex: 1
},
{
  question: "Which element is needed to make nuclear energy in most power plants?",
  answers: ["Plutonium", "Uranium", "Radium", "Thorium"],
  correctIndex: 1
},
{
  question: "Which country was formerly known as Persia?",
  answers: ["Iraq", "Iran", "Syria", "Jordan"],
  correctIndex: 1
},
{
  question: "What is the longest bone in the human body?",
  answers: ["Tibia", "Humerus", "Femur", "Fibula"],
  correctIndex: 2
},
{
  question: "Which explorer completed the first circumnavigation of the Earth?",
  answers: ["Christopher Columbus", "Ferdinand Magellan", "James Cook", "Marco Polo"],
  correctIndex: 1
},
{
  question: "Which planet has the shortest day?",
  answers: ["Earth", "Mars", "Jupiter", "Mercury"],
  correctIndex: 2
},
{
  question: "What is the main component of the Sun?",
  answers: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
  correctIndex: 1
},
{
  question: "Which artist cut off part of his own ear?",
  answers: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"],
  correctIndex: 1
},
{
  question: "Which strait separates Europe and Africa?",
  answers: ["Strait of Hormuz", "Strait of Gibraltar", "Bosporus Strait", "Bering Strait"],
  correctIndex: 1
},
{
  question: "What is the capital of New Zealand?",
  answers: ["Auckland", "Christchurch", "Wellington", "Hamilton"],
  correctIndex: 2
},
{
  question: "Which scientist is known as the father of modern chemistry?",
  answers: ["Antoine Lavoisier", "Dmitri Mendeleev", "Robert Boyle", "John Dalton"],
  correctIndex: 0
},
{
  question: "Which country invented paper?",
  answers: ["Egypt", "Greece", "China", "India"],
  correctIndex: 2
},
{
  question: "Which country has the highest number of time zones?",
  answers: ["United States", "France", "Russia", "United Kingdom"],
  correctIndex: 1
},
{
  question: "What is the name of the deepest point in the Earth's oceans?",
  answers: ["Tonga Trench", "Puerto Rico Trench", "Mariana Trench", "Java Trench"],
  correctIndex: 2
},
{
  question: "Who developed the theory of evolution by natural selection?",
  answers: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Alfred Wegener"],
  correctIndex: 1
},
{
  question: "Which empire built the city of Machu Picchu?",
  answers: ["Maya", "Aztec", "Inca", "Olmec"],
  correctIndex: 2
},
{
  question: "What is the largest island in the world?",
  answers: ["Australia", "Greenland", "Borneo", "Madagascar"],
  correctIndex: 1
},
{
  question: "Which element has the chemical symbol Fe?",
  answers: ["Fluorine", "Iron", "Fermium", "Francium"],
  correctIndex: 1
},
{
  question: "Which physicist formulated the uncertainty principle?",
  answers: ["Max Planck", "Werner Heisenberg", "Niels Bohr", "Erwin Schrödinger"],
  correctIndex: 1
},
{
  question: "Which sea is the saltiest large body of water on Earth?",
  answers: ["Mediterranean Sea", "Dead Sea", "Red Sea", "Black Sea"],
  correctIndex: 1
},
{
  question: "What is the official language of Brazil?",
  answers: ["Spanish", "Portuguese", "French", "English"],
  correctIndex: 1
},
{
  question: "Which famous battle took place in 1066?",
  answers: ["Battle of Agincourt", "Battle of Hastings", "Battle of Waterloo", "Battle of Yorktown"],
  correctIndex: 1
},
{
  question: "Which scientist introduced the three laws of planetary motion?",
  answers: ["Isaac Newton", "Johannes Kepler", "Galileo Galilei", "Tycho Brahe"],
  correctIndex: 1
},
{
  question: "What is the capital of Mongolia?",
  answers: ["Astana", "Tashkent", "Ulaanbaatar", "Bishkek"],
  correctIndex: 2
},
{
  question: "Which organelle is known as the powerhouse of the cell?",
  answers: ["Nucleus", "Ribosome", "Mitochondrion", "Golgi apparatus"],
  correctIndex: 2
},
{
  question: "Which treaty ended World War I?",
  answers: ["Treaty of Vienna", "Treaty of Versailles", "Treaty of Paris", "Treaty of Rome"],
  correctIndex: 1
},
{
  question: "Which country is both in Europe and Asia?",
  answers: ["Spain", "Turkey", "Portugal", "Norway"],
  correctIndex: 1
},
{
  question: "What is the main gas found in the air we exhale?",
  answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
  correctIndex: 2
},
{
  question: "Which composer became deaf later in life but continued composing?",
  answers: ["Mozart", "Chopin", "Beethoven", "Haydn"],
  correctIndex: 2
},
{
  question: "Which African country has the largest population?",
  answers: ["Egypt", "South Africa", "Nigeria", "Kenya"],
  correctIndex: 2
},
{
  question: "What is the study of earthquakes called?",
  answers: ["Meteorology", "Seismology", "Geology", "Volcanology"],
  correctIndex: 1
},
{
  question: "Which planet has the longest year?",
  answers: ["Saturn", "Neptune", "Uranus", "Jupiter"],
  correctIndex: 1
},
{
  question: "Which country was the first to grant women the right to vote nationally?",
  answers: ["United States", "New Zealand", "United Kingdom", "France"],
  correctIndex: 1
},
{
  question: "What is the SI unit of electric current?",
  answers: ["Volt", "Ohm", "Ampere", "Watt"],
  correctIndex: 2
},
{
  question: "Which ancient wonder of the world was located in Babylon?",
  answers: ["Colossus of Rhodes", "Hanging Gardens", "Temple of Artemis", "Lighthouse of Alexandria"],
  correctIndex: 1
},
{
  question: "Which language family does Hungarian belong to?",
  answers: ["Slavic", "Germanic", "Romance", "Uralic"],
  correctIndex: 3
},
{
  question: "Who was the first Emperor of Rome?",
  answers: ["Julius Caesar", "Nero", "Augustus", "Tiberius"],
  correctIndex: 2
},
{
  question: "What is the rarest naturally occurring element on Earth?",
  answers: ["Gold", "Astatine", "Platinum", "Radium"],
  correctIndex: 1
},
{
  question: "Which country has the most pyramids in the world?",
  answers: ["Egypt", "Mexico", "Sudan", "Peru"],
  correctIndex: 2
},
{
  question: "What is the longest river in Europe?",
  answers: ["Danube", "Rhine", "Volga", "Elbe"],
  correctIndex: 2
},
{
  question: "Which philosopher wrote 'The Republic'?",
  answers: ["Aristotle", "Socrates", "Plato", "Descartes"],
  correctIndex: 2
},
{
  question: "Which planet has the strongest winds in the solar system?",
  answers: ["Saturn", "Neptune", "Jupiter", "Mars"],
  correctIndex: 1
},
{
  question: "Which scientist proposed the continental drift theory?",
  answers: ["Charles Lyell", "Alfred Wegener", "James Hutton", "Alexander von Humboldt"],
  correctIndex: 1
},
{
  question: "What is the capital of Bhutan?",
  answers: ["Kathmandu", "Thimphu", "Dhaka", "Vientiane"],
  correctIndex: 1
},
{
  question: "Which element is named after the Greek word for green?",
  answers: ["Chlorine", "Copper", "Nickel", "Zinc"],
  correctIndex: 0
},
{
  question: "Which medieval pandemic killed millions in Europe during the 14th century?",
  answers: ["Spanish Flu", "Black Death", "Cholera", "Typhus"],
  correctIndex: 1
},
{
  question: "Which composer wrote the opera 'The Magic Flute'?",
  answers: ["Beethoven", "Mozart", "Wagner", "Verdi"],
  correctIndex: 1
},
{
  question: "Which country has the largest proven oil reserves?",
  answers: ["Saudi Arabia", "Russia", "Venezuela", "United States"],
  correctIndex: 2
},
{
  question: "What is the study of fungi called?",
  answers: ["Botany", "Mycology", "Zoology", "Ecology"],
  correctIndex: 1
},
{
  question: "Which sea separates Saudi Arabia from Africa?",
  answers: ["Arabian Sea", "Mediterranean Sea", "Red Sea", "Black Sea"],
  correctIndex: 2
},
{
  question: "Which mathematician is known for the Last Theorem proven in 1994?",
  answers: ["Carl Gauss", "Pierre de Fermat", "Leonhard Euler", "Blaise Pascal"],
  correctIndex: 1
},
{
  question: "Which planet is known for its Great Red Spot?",
  answers: ["Saturn", "Mars", "Jupiter", "Venus"],
  correctIndex: 2
},
{
  question: "Which physicist formulated the Schrödinger equation?",
  answers: ["Werner Heisenberg", "Erwin Schrödinger", "Max Planck", "Paul Dirac"],
  correctIndex: 1
},
{
  question: "What is the capital of the island nation of Palau?",
  answers: ["Koror", "Ngerulmud", "Majuro", "Suva"],
  correctIndex: 1
},
{
  question: "Which ancient civilization built the city of Carthage?",
  answers: ["Romans", "Phoenicians", "Greeks", "Egyptians"],
  correctIndex: 1
},
{
  question: "Which element has the highest melting point?",
  answers: ["Iron", "Carbon", "Tungsten", "Titanium"],
  correctIndex: 2
},
{
  question: "Which explorer was the first European to reach India by sea?",
  answers: ["Christopher Columbus", "Ferdinand Magellan", "Vasco da Gama", "James Cook"],
  correctIndex: 2
},
{
  question: "Which country has the most UNESCO World Heritage Sites?",
  answers: ["China", "Italy", "Spain", "France"],
  correctIndex: 1
},
{
  question: "What is the name of the supercontinent that existed before the continents drifted apart?",
  answers: ["Gondwana", "Laurasia", "Pangaea", "Rodinia"],
  correctIndex: 2
},
{
  question: "Which mathematician invented logarithms?",
  answers: ["Isaac Newton", "John Napier", "Carl Gauss", "Leonhard Euler"],
  correctIndex: 1
},
{
  question: "Which star is the closest to Earth after the Sun?",
  answers: ["Sirius", "Alpha Centauri", "Proxima Centauri", "Betelgeuse"],
  correctIndex: 2
},
{
  question: "Which battle in 1815 marked the final defeat of Napoleon?",
  answers: ["Battle of Trafalgar", "Battle of Leipzig", "Battle of Waterloo", "Battle of Austerlitz"],
  correctIndex: 2
},
{
  question: "Which country is known as the Land of the Rising Sun?",
  answers: ["China", "Japan", "Thailand", "South Korea"],
  correctIndex: 1
},
{
  question: "What is the chemical formula for table salt?",
  answers: ["NaCl", "KCl", "NaCO3", "CaCl2"],
  correctIndex: 0
},
{
  question: "Who was the first female Prime Minister of the United Kingdom?",
  answers: ["Theresa May", "Margaret Thatcher", "Angela Merkel", "Indira Gandhi"],
  correctIndex: 1
},
{
  question: "Which river flows through the city of Paris?",
  answers: ["Danube", "Seine", "Rhine", "Thames"],
  correctIndex: 1
},
{
  question: "Which planet is closest to the Sun?",
  answers: ["Venus", "Earth", "Mercury", "Mars"],
  correctIndex: 2
},
{
  question: "What is the largest mammal in the world?",
  answers: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
  correctIndex: 1
},
{
  question: "Which country hosted the FIFA World Cup in 2014?",
  answers: ["Germany", "Brazil", "South Africa", "Russia"],
  correctIndex: 1
},
{
  question: "What is the main language spoken in Argentina?",
  answers: ["Portuguese", "Spanish", "Italian", "French"],
  correctIndex: 1
},
{
  question: "Which instrument measures atmospheric pressure?",
  answers: ["Thermometer", "Barometer", "Altimeter", "Hygrometer"],
  correctIndex: 1
},
{
  question: "Who discovered gravity after observing a falling apple?",
  answers: ["Galileo", "Newton", "Einstein", "Tesla"],
  correctIndex: 1
},
{
  question: "Which country is famous for the ancient city of Petra?",
  answers: ["Jordan", "Lebanon", "Egypt", "Turkey"],
  correctIndex: 0
},
{
  question: "What is the square root of 225?",
  answers: ["13", "14", "15", "16"],
  correctIndex: 2
},
{
  question: "Which vitamin is mainly produced when human skin is exposed to sunlight?",
  answers: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
  correctIndex: 3
},
{
  question: "Which country has the city of Istanbul as one of its major cities?",
  answers: ["Greece", "Turkey", "Bulgaria", "Romania"],
  correctIndex: 1
},
{
  question: "What is the largest organ of the human body?",
  answers: ["Liver", "Skin", "Brain", "Heart"],
  correctIndex: 1
},
{
  question: "Which famous scientist developed the polio vaccine?",
  answers: ["Alexander Fleming", "Louis Pasteur", "Jonas Salk", "Edward Jenner"],
  correctIndex: 2
},
{
  question: "Which ocean is located between North America and Europe?",
  answers: ["Pacific Ocean", "Indian Ocean", "Atlantic Ocean", "Arctic Ocean"],
  correctIndex: 2
},
{
  question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
  answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
  correctIndex: 2
},
{
  question: "Which country is home to the ancient ruins of Machu Picchu?",
  answers: ["Chile", "Peru", "Bolivia", "Colombia"],
  correctIndex: 1
},
{
  question: "What is the freezing point of water in degrees Celsius?",
  answers: ["-10", "0", "5", "10"],
  correctIndex: 1
},
{
  question: "Which country is the largest by land area?",
  answers: ["Canada", "China", "Russia", "United States"],
  correctIndex: 2
},
{
  question: "Which scientist is known for the discovery of radioactivity?",
  answers: ["Albert Einstein", "Marie Curie", "Isaac Newton", "Gregor Mendel"],
  correctIndex: 1
},
{
  question: "Which city hosted the Summer Olympics in 2008?",
  answers: ["Tokyo", "London", "Beijing", "Rio de Janeiro"],
  correctIndex: 2
},
{
  question: "What is the currency of Switzerland?",
  answers: ["Euro", "Swiss Franc", "Krone", "Pound"],
  correctIndex: 1
},
{
  question: "Which planet is known for its prominent ring system?",
  answers: ["Mars", "Saturn", "Venus", "Mercury"],
  correctIndex: 1
},
{
  question: "Who wrote the novel 'Pride and Prejudice'?",
  answers: ["Emily Brontë", "Jane Austen", "Virginia Woolf", "George Eliot"],
  correctIndex: 1
},
{
  question: "Which blood cells help fight infection?",
  answers: ["Red blood cells", "Platelets", "White blood cells", "Plasma"],
  correctIndex: 2
},
{
  question: "Which continent is the Sahara Desert located on?",
  answers: ["Asia", "Africa", "Australia", "South America"],
  correctIndex: 1
},
{
  question: "What is the capital of South Korea?",
  answers: ["Busan", "Seoul", "Incheon", "Daegu"],
  correctIndex: 1
},
{
  question: "Which instrument is used to measure temperature?",
  answers: ["Barometer", "Thermometer", "Altimeter", "Speedometer"],
  correctIndex: 1
},
{
  question: "Which country is famous for the Taj Mahal?",
  answers: ["Pakistan", "India", "Bangladesh", "Nepal"],
  correctIndex: 1
},
{
  question: "What is the largest planet in the solar system?",
  answers: ["Saturn", "Neptune", "Jupiter", "Uranus"],
  correctIndex: 2
},
{
  question: "Which author created the character Sherlock Holmes?",
  answers: ["Agatha Christie", "Arthur Conan Doyle", "J.K. Rowling", "Edgar Allan Poe"],
  correctIndex: 1
},
{
  question: "Which metal is the best conductor of electricity?",
  answers: ["Copper", "Gold", "Silver", "Aluminum"],
  correctIndex: 2
},
{
  question: "Which country is both an island and a continent?",
  answers: ["Greenland", "Australia", "Iceland", "Madagascar"],
  correctIndex: 1
},
{
  question: "What is the capital of Mexico?",
  answers: ["Guadalajara", "Monterrey", "Mexico City", "Cancún"],
  correctIndex: 2
},
{
  question: "Which gas is essential for human respiration?",
  answers: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Helium"],
  correctIndex: 2
},
{
  question: "Which sport is known as the 'king of sports'?",
  answers: ["Basketball", "Football (Soccer)", "Tennis", "Cricket"],
  correctIndex: 1
},
{
  question: "Which scientist is known for his work on electromagnetism and electricity units named after him?",
  answers: ["Nikola Tesla", "Michael Faraday", "James Watt", "Thomas Edison"],
  correctIndex: 0
},
{
  question: "Which country has the city of Barcelona?",
  answers: ["Portugal", "Italy", "Spain", "France"],
  correctIndex: 2
},{
  question: "Which country has the most population in the world (as of the 2020s)?",
  answers: ["United States", "India", "China", "Indonesia"],
  correctIndex: 1
},
{
  question: "What is the capital of Norway?",
  answers: ["Bergen", "Oslo", "Stockholm", "Copenhagen"],
  correctIndex: 1
},
{
  question: "Which part of the brain is responsible for balance and coordination?",
  answers: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
  correctIndex: 1
},
{
  question: "Which famous wall fell in 1989?",
  answers: ["Great Wall of China", "Berlin Wall", "Hadrian's Wall", "Wailing Wall"],
  correctIndex: 1
},
{
  question: "Which instrument has pedals and multiple keyboards and is often found in churches?",
  answers: ["Harpsichord", "Piano", "Accordion", "Organ"],
  correctIndex: 3
},
{
  question: "Which country uses the krona as its currency?",
  answers: ["Sweden", "Switzerland", "Austria", "Poland"],
  correctIndex: 0
},
{
  question: "Which scientist is famous for formulating the laws of motion?",
  answers: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"],
  correctIndex: 1
},
{
  question: "Which river flows through Rome?",
  answers: ["Danube", "Po", "Tiber", "Seine"],
  correctIndex: 2
},
{
  question: "Which planet is known for having a very thick toxic atmosphere?",
  answers: ["Mars", "Venus", "Mercury", "Saturn"],
  correctIndex: 1
},
{
  question: "Which empire was ruled by Genghis Khan?",
  answers: ["Roman Empire", "Ottoman Empire", "Mongol Empire", "Persian Empire"],
  correctIndex: 2
},
{
  question: "Which country has the most population in the world (as of the 2020s)?",
  answers: ["United States", "India", "China", "Indonesia"],
  correctIndex: 1
},
{
  question: "What is the capital of Norway?",
  answers: ["Bergen", "Oslo", "Stockholm", "Copenhagen"],
  correctIndex: 1
},
{
  question: "Which part of the brain is responsible for balance and coordination?",
  answers: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
  correctIndex: 1
},
{
  question: "Which famous wall fell in 1989?",
  answers: ["Great Wall of China", "Berlin Wall", "Hadrian's Wall", "Wailing Wall"],
  correctIndex: 1
},
{
  question: "Which instrument has pedals and multiple keyboards and is often found in churches?",
  answers: ["Harpsichord", "Piano", "Accordion", "Organ"],
  correctIndex: 3
},
{
  question: "Which country uses the krona as its currency?",
  answers: ["Sweden", "Switzerland", "Austria", "Poland"],
  correctIndex: 0
},
{
  question: "Which scientist is famous for formulating the laws of motion?",
  answers: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"],
  correctIndex: 1
},
{
  question: "Which river flows through Rome?",
  answers: ["Danube", "Po", "Tiber", "Seine"],
  correctIndex: 2
},
{
  question: "Which planet is known for having a very thick toxic atmosphere?",
  answers: ["Mars", "Venus", "Mercury", "Saturn"],
  correctIndex: 1
},
{
  question: "Which empire was ruled by Genghis Khan?",
  answers: ["Roman Empire", "Ottoman Empire", "Mongol Empire", "Persian Empire"],
  correctIndex: 2
},
{
  question: "Which country is known for inventing pizza?",
  answers: ["France", "Spain", "Italy", "Greece"],
  correctIndex: 2
},
{
  question: "What is the capital of Finland?",
  answers: ["Helsinki", "Oslo", "Tallinn", "Riga"],
  correctIndex: 0
},
{
  question: "Which scientist is known for the theory of electromagnetism and has a unit named after him?",
  answers: ["Faraday", "Tesla", "Ohm", "Ampere"],
  correctIndex: 2
},
{
  question: "Which mountain is the tallest in Africa?",
  answers: ["Mount Kenya", "Mount Kilimanjaro", "Atlas Peak", "Mount Elgon"],
  correctIndex: 1
},
{
  question: "Which country has the most active volcanoes?",
  answers: ["Japan", "Indonesia", "Chile", "Iceland"],
  correctIndex: 1
},
{
  question: "What is the capital of Chile?",
  answers: ["Lima", "Buenos Aires", "Santiago", "Quito"],
  correctIndex: 2
},
{
  question: "Which organ produces insulin in the human body?",
  answers: ["Liver", "Pancreas", "Kidney", "Stomach"],
  correctIndex: 1
},
{
  question: "Which famous scientist was born in Ulm, Germany?",
  answers: ["Max Planck", "Albert Einstein", "Werner Heisenberg", "Johannes Kepler"],
  correctIndex: 1
},
{
  question: "Which sea lies between Italy and the Balkan Peninsula?",
  answers: ["Black Sea", "Adriatic Sea", "Baltic Sea", "Caspian Sea"],
  correctIndex: 1
},
{
  question: "Which country was formerly known as Ceylon?",
  answers: ["Myanmar", "Sri Lanka", "Cambodia", "Laos"],
  correctIndex: 1
},
{
  question: "Which country has the largest rainforest in the world?",
  answers: ["Congo", "Brazil", "Indonesia", "Peru"],
  correctIndex: 1
},
{
  question: "What is the capital of Hungary?",
  answers: ["Prague", "Vienna", "Budapest", "Warsaw"],
  correctIndex: 2
},
{
  question: "Which scientist is known for discovering X-rays?",
  answers: ["Wilhelm Röntgen", "Marie Curie", "Niels Bohr", "Ernest Rutherford"],
  correctIndex: 0
},
{
  question: "Which river is the longest in Asia?",
  answers: ["Ganges", "Yangtze", "Mekong", "Indus"],
  correctIndex: 1
},
{
  question: "Which country has the most islands in the world?",
  answers: ["Indonesia", "Philippines", "Sweden", "Japan"],
  correctIndex: 2
},
{
  question: "Which organ in the human body filters blood?",
  answers: ["Heart", "Kidney", "Liver", "Lungs"],
  correctIndex: 1
},
{
  question: "Which famous physicist developed the theory of relativity?",
  answers: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
  correctIndex: 1
},
{
  question: "Which desert is the largest hot desert in the world?",
  answers: ["Gobi", "Kalahari", "Sahara", "Arabian"],
  correctIndex: 2
},
{
  question: "Which country has the city of Kraków?",
  answers: ["Czech Republic", "Slovakia", "Poland", "Lithuania"],
  correctIndex: 2
},
{
  question: "Which element is the main component of natural gas?",
  answers: ["Methane", "Propane", "Butane", "Ethane"],
  correctIndex: 0
},
{
  question: "Which country has the longest river entirely within its borders, the Volga?",
  answers: ["Ukraine", "Kazakhstan", "Russia", "Belarus"],
  correctIndex: 2
},
{
  question: "What is the capital of Portugal?",
  answers: ["Porto", "Lisbon", "Madrid", "Seville"],
  correctIndex: 1
},
{
  question: "Which scientist discovered the neutron?",
  answers: ["James Chadwick", "Ernest Rutherford", "Niels Bohr", "Enrico Fermi"],
  correctIndex: 0
},
{
  question: "Which sea lies between Greece and Turkey?",
  answers: ["Ionian Sea", "Aegean Sea", "Adriatic Sea", "Tyrrhenian Sea"],
  correctIndex: 1
},
{
  question: "Which empire was centered in modern-day Turkey and lasted until the early 20th century?",
  answers: ["Byzantine Empire", "Ottoman Empire", "Persian Empire", "Mongol Empire"],
  correctIndex: 1
},
{
  question: "What is the largest lake in Africa?",
  answers: ["Lake Tanganyika", "Lake Malawi", "Lake Victoria", "Lake Chad"],
  correctIndex: 2
},
{
  question: "Which gas is used in balloons to make them float safely?",
  answers: ["Hydrogen", "Oxygen", "Helium", "Nitrogen"],
  correctIndex: 2
},
{
  question: "Which country has the city of Dubrovnik?",
  answers: ["Slovenia", "Croatia", "Montenegro", "Serbia"],
  correctIndex: 1
},
{
  question: "Which mathematician is known for the famous theorem about right triangles?",
  answers: ["Archimedes", "Euclid", "Pythagoras", "Thales"],
  correctIndex: 2
},
{
  question: "Which continent has the lowest population density?",
  answers: ["Africa", "Australia", "Antarctica", "South America"],
  correctIndex: 2
},
{
  question: "Which country has the most natural lakes in the world?",
  answers: ["Canada", "Finland", "Russia", "United States"],
  correctIndex: 0
},
{
  question: "What is the capital of Slovenia?",
  answers: ["Zagreb", "Bratislava", "Ljubljana", "Sarajevo"],
  correctIndex: 2
},
{
  question: "Which scientist is known for splitting the atom?",
  answers: ["Albert Einstein", "Otto Hahn", "Niels Bohr", "Max Born"],
  correctIndex: 1
},
{
  question: "Which strait separates Asia and North America?",
  answers: ["Strait of Gibraltar", "Bering Strait", "Bosporus Strait", "Strait of Malacca"],
  correctIndex: 1
},
{
  question: "Which empire was ruled by Suleiman the Magnificent?",
  answers: ["Roman Empire", "Ottoman Empire", "Byzantine Empire", "Persian Empire"],
  correctIndex: 1
},
{
  question: "What is the largest freshwater lake by volume in the world?",
  answers: ["Lake Superior", "Lake Baikal", "Lake Victoria", "Lake Tanganyika"],
  correctIndex: 1
},
{
  question: "Which element has the chemical symbol Pb?",
  answers: ["Platinum", "Lead", "Phosphorus", "Palladium"],
  correctIndex: 1
},
{
  question: "Which country has the city of Valencia?",
  answers: ["Portugal", "Spain", "Italy", "France"],
  correctIndex: 1
},
{
  question: "Which scientist developed the periodic table?",
  answers: ["John Dalton", "Dmitri Mendeleev", "Antoine Lavoisier", "Robert Boyle"],
  correctIndex: 1
},
{
  question: "Which desert is the driest in the world?",
  answers: ["Sahara", "Gobi", "Atacama", "Kalahari"],
  correctIndex: 2
},
{
  question: "Which country has the most active geothermal power plants?",
  answers: ["Japan", "Indonesia", "Iceland", "New Zealand"],
  correctIndex: 1
},
{
  question: "What is the capital of Estonia?",
  answers: ["Riga", "Tallinn", "Vilnius", "Helsinki"],
  correctIndex: 1
},
{
  question: "Which physicist is known for the discovery of the electron?",
  answers: ["J.J. Thomson", "Ernest Rutherford", "Niels Bohr", "James Chadwick"],
  correctIndex: 0
},
{
  question: "Which mountain range runs along the western coast of South America?",
  answers: ["Rocky Mountains", "Andes", "Alps", "Himalayas"],
  correctIndex: 1
},
{
  question: "Which historical period followed the Middle Ages in Europe?",
  answers: ["Renaissance", "Industrial Revolution", "Baroque Period", "Enlightenment"],
  correctIndex: 0
},
{
  question: "What is the largest island in the Mediterranean Sea?",
  answers: ["Cyprus", "Corsica", "Sardinia", "Sicily"],
  correctIndex: 3
},
{
  question: "Which element is the main component of steel?",
  answers: ["Aluminum", "Carbon", "Iron", "Nickel"],
  correctIndex: 2
},
{
  question: "Which country has the city of Gothenburg?",
  answers: ["Norway", "Denmark", "Sweden", "Finland"],
  correctIndex: 2
},
{
  question: "Which mathematician is known for the concept of Cartesian coordinates?",
  answers: ["Blaise Pascal", "René Descartes", "Pierre de Fermat", "Isaac Newton"],
  correctIndex: 1
},
{
  question: "Which ocean current is known for warming Western Europe?",
  answers: ["Labrador Current", "Gulf Stream", "Canary Current", "Kuroshio Current"],
  correctIndex: 1
},
{
  question: "Which country has the city of Casablanca?",
  answers: ["Tunisia", "Morocco", "Algeria", "Egypt"],
  correctIndex: 1
},
{
  question: "What is the capital of Iceland?",
  answers: ["Reykjavik", "Oslo", "Helsinki", "Copenhagen"],
  correctIndex: 0
},
{
  question: "Which scientist is known for discovering radium together with Marie Curie?",
  answers: ["Pierre Curie", "Louis Pasteur", "Henri Becquerel", "Paul Dirac"],
  correctIndex: 0
},
{
  question: "Which river flows through Budapest?",
  answers: ["Rhine", "Danube", "Elbe", "Seine"],
  correctIndex: 1
},
{
  question: "Which country is the largest producer of coffee in the world?",
  answers: ["Vietnam", "Colombia", "Brazil", "Ethiopia"],
  correctIndex: 2
},
{
  question: "Which part of the human eye controls the amount of light that enters?",
  answers: ["Retina", "Cornea", "Pupil", "Lens"],
  correctIndex: 2
},
{
  question: "Which planet is known as the Morning Star?",
  answers: ["Mars", "Mercury", "Venus", "Saturn"],
  correctIndex: 2
},
{
  question: "Which historical figure was known as the Maid of Orléans?",
  answers: ["Marie Antoinette", "Joan of Arc", "Catherine de Medici", "Eleanor of Aquitaine"],
  correctIndex: 1
},
{
  question: "Which sea separates Italy from North Africa?",
  answers: ["Adriatic Sea", "Tyrrhenian Sea", "Mediterranean Sea", "Ionian Sea"],
  correctIndex: 2
},
{
  question: "Which metal has the chemical symbol Zn?",
  answers: ["Zinc", "Zirconium", "Nickel", "Tin"],
  correctIndex: 0
},
{
  question: "Which country has the city of Medellín?",
  answers: ["Peru", "Colombia", "Chile", "Argentina"],
  correctIndex: 1
},
{
  question: "What is the capital of Latvia?",
  answers: ["Tallinn", "Vilnius", "Riga", "Minsk"],
  correctIndex: 2
},
{
  question: "Which scientist discovered the nucleus of the atom?",
  answers: ["Niels Bohr", "Ernest Rutherford", "J.J. Thomson", "Max Planck"],
  correctIndex: 1
},
{
  question: "Which river is known as the main river of Germany?",
  answers: ["Danube", "Rhine", "Elbe", "Oder"],
  correctIndex: 1
},
{
  question: "Which country is the largest producer of oil in Africa?",
  answers: ["Nigeria", "Angola", "Algeria", "Libya"],
  correctIndex: 0
},
{
  question: "Which part of the body produces red blood cells?",
  answers: ["Liver", "Bone marrow", "Kidney", "Spleen"],
  correctIndex: 1
},
{
  question: "Which planet has the highest number of known moons?",
  answers: ["Saturn", "Jupiter", "Uranus", "Neptune"],
  correctIndex: 0
},
{
  question: "Which historical empire built the Hagia Sophia?",
  answers: ["Roman Empire", "Byzantine Empire", "Ottoman Empire", "Persian Empire"],
  correctIndex: 1
},
{
  question: "Which sea lies between Saudi Arabia and Iran?",
  answers: ["Arabian Sea", "Red Sea", "Persian Gulf", "Caspian Sea"],
  correctIndex: 2
},
{
  question: "Which element has the chemical symbol Co?",
  answers: ["Copper", "Cobalt", "Carbon", "Chromium"],
  correctIndex: 1
},
{
  question: "Which country has the city of Lahore?",
  answers: ["India", "Pakistan", "Bangladesh", "Afghanistan"],
  correctIndex: 1
},
{
  question: "What is the capital of Slovakia?",
  answers: ["Prague", "Budapest", "Bratislava", "Ljubljana"],
  correctIndex: 2
},
{
  question: "Which scientist is known for developing quantum mechanics along with Schrödinger?",
  answers: ["Werner Heisenberg", "Albert Einstein", "Enrico Fermi", "Richard Feynman"],
  correctIndex: 0
},
{
  question: "Which river flows through Vienna?",
  answers: ["Rhine", "Danube", "Seine", "Po"],
  correctIndex: 1
},
{
  question: "Which country is the largest exporter of natural gas?",
  answers: ["United States", "Russia", "Qatar", "Norway"],
  correctIndex: 1
},
{
  question: "Which part of the human brain controls breathing and heartbeat?",
  answers: ["Cerebellum", "Medulla oblongata", "Hypothalamus", "Frontal lobe"],
  correctIndex: 1
},
{
  question: "Which planet is known for its prominent polar ice caps?",
  answers: ["Mars", "Venus", "Mercury", "Jupiter"],
  correctIndex: 0
},
{
  question: "Which historical leader was known as the 'Sun King'?",
  answers: ["Napoleon Bonaparte", "Louis XIV", "Charlemagne", "Henry VIII"],
  correctIndex: 1
},
{
  question: "Which sea lies between Ukraine and Turkey?",
  answers: ["Black Sea", "Baltic Sea", "Aegean Sea", "Adriatic Sea"],
  correctIndex: 0
},
{
  question: "Which element has the chemical symbol Cr?",
  answers: ["Calcium", "Chromium", "Cobalt", "Copper"],
  correctIndex: 1
},
{
  question: "Which country has the city of Cebu?",
  answers: ["Thailand", "Philippines", "Malaysia", "Indonesia"],
  correctIndex: 1
},
{
  question: "What is the capital of Croatia?",
  answers: ["Belgrade", "Zagreb", "Sarajevo", "Skopje"],
  correctIndex: 1
},
{
  question: "Which scientist is known for discovering the proton?",
  answers: ["Ernest Rutherford", "Niels Bohr", "James Chadwick", "Max Planck"],
  correctIndex: 0
},
{
  question: "Which river flows through Prague?",
  answers: ["Danube", "Vltava", "Elbe", "Oder"],
  correctIndex: 1
},
{
  question: "Which country is the largest producer of cocoa beans?",
  answers: ["Brazil", "Ivory Coast", "Ghana", "Indonesia"],
  correctIndex: 1
},
{
  question: "Which part of the human body is responsible for producing bile?",
  answers: ["Pancreas", "Liver", "Gallbladder", "Stomach"],
  correctIndex: 1
},
{
  question: "Which planet has the largest volcano in the solar system?",
  answers: ["Earth", "Mars", "Venus", "Mercury"],
  correctIndex: 1
},
{
  question: "Which historical document limited the power of English monarchs in 1215?",
  answers: ["Bill of Rights", "Magna Carta", "Domesday Book", "Act of Union"],
  correctIndex: 1
},
{
  question: "Which sea lies between Sweden and Finland?",
  answers: ["North Sea", "Baltic Sea", "Norwegian Sea", "Barents Sea"],
  correctIndex: 1
},
{
  question: "Which element has the chemical symbol Mn?",
  answers: ["Magnesium", "Manganese", "Molybdenum", "Mercury"],
  correctIndex: 1
},
{
  question: "Which country has the city of Pune?",
  answers: ["India", "Nepal", "Sri Lanka", "Pakistan"],
  correctIndex: 0
},
{
  question: "What is the capital of Romania?",
  answers: ["Sofia", "Budapest", "Bucharest", "Belgrade"],
  correctIndex: 2
},
{
  question: "Which scientist is known for formulating the Pauli exclusion principle?",
  answers: ["Wolfgang Pauli", "Niels Bohr", "Max Planck", "Paul Dirac"],
  correctIndex: 0
},
{
  question: "Which river flows through Warsaw?",
  answers: ["Oder", "Vistula", "Danube", "Elbe"],
  correctIndex: 1
},
{
  question: "Which country is the largest producer of tea in the world?",
  answers: ["India", "China", "Sri Lanka", "Kenya"],
  correctIndex: 1
},
{
  question: "Which part of the human body is responsible for producing insulin?",
  answers: ["Liver", "Pancreas", "Kidney", "Gallbladder"],
  correctIndex: 1
},
{
  question: "Which planet has the most extreme temperature differences?",
  answers: ["Mercury", "Mars", "Venus", "Neptune"],
  correctIndex: 0
},
{
  question: "Which historical war was fought between the houses of York and Lancaster?",
  answers: ["Hundred Years' War", "War of the Roses", "English Civil War", "Napoleonic Wars"],
  correctIndex: 1
},
{
  question: "Which sea lies between Japan and the Korean Peninsula?",
  answers: ["Yellow Sea", "Sea of Japan", "East China Sea", "Philippine Sea"],
  correctIndex: 1
},
{
  question: "Which element has the chemical symbol Ti?",
  answers: ["Tin", "Titanium", "Thallium", "Tungsten"],
  correctIndex: 1
},
{
  question: "Which country has the city of Durban?",
  answers: ["Kenya", "South Africa", "Nigeria", "Tanzania"],
  correctIndex: 1
},
{
  question: "What is the capital of Bulgaria?",
  answers: ["Skopje", "Sofia", "Athens", "Belgrade"],
  correctIndex: 1
},
{
  question: "Which scientist is known for discovering the positron?",
  answers: ["Paul Dirac", "Carl Anderson", "Enrico Fermi", "Werner Heisenberg"],
  correctIndex: 1
},
{
  question: "Which river flows through Cairo?",
  answers: ["Nile", "Tigris", "Euphrates", "Jordan"],
  correctIndex: 0
},
{
  question: "Which country is the largest producer of diamonds?",
  answers: ["Russia", "Botswana", "Canada", "South Africa"],
  correctIndex: 0
},
{
  question: "Which part of the human body produces digestive enzymes?",
  answers: ["Stomach", "Pancreas", "Liver", "Small intestine"],
  correctIndex: 1
},
{
  question: "Which planet has the fastest rotation period?",
  answers: ["Earth", "Jupiter", "Saturn", "Neptune"],
  correctIndex: 1
},
{
  question: "Which historical revolt began in France in 1789?",
  answers: ["French Revolution", "July Revolution", "Paris Commune", "Napoleonic Coup"],
  correctIndex: 0
},
{
  question: "Which sea lies between Italy and Greece?",
  answers: ["Adriatic Sea", "Tyrrhenian Sea", "Aegean Sea", "Ionian Sea"],
  correctIndex: 3
},
{
  question: "Which element has the chemical symbol Hg?",
  answers: ["Hydrogen", "Mercury", "Magnesium", "Hafnium"],
  correctIndex: 1
},
{
  question: "Which country has the city of Guadalajara?",
  answers: ["Spain", "Mexico", "Colombia", "Chile"],
  correctIndex: 1
},
{
  question: "What is the capital of Lithuania?",
  answers: ["Riga", "Tallinn", "Vilnius", "Kaunas"],
  correctIndex: 2
},
{
  question: "Which scientist is known for the discovery of cosmic microwave background radiation?",
  answers: ["Edwin Hubble", "Arno Penzias", "Carl Sagan", "Subrahmanyan Chandrasekhar"],
  correctIndex: 1
},
{
  question: "Which river flows through Belgrade?",
  answers: ["Sava", "Danube", "Both A and B", "Morava"],
  correctIndex: 2
},
{
  question: "Which country is the largest producer of soybeans?",
  answers: ["Argentina", "China", "Brazil", "United States"],
  correctIndex: 3
},
{
  question: "Which part of the human body stores bile?",
  answers: ["Pancreas", "Gallbladder", "Liver", "Kidney"],
  correctIndex: 1
},
{
  question: "Which planet has the most prominent system of rings?",
  answers: ["Uranus", "Jupiter", "Saturn", "Neptune"],
  correctIndex: 2
},
{
  question: "Which historical agreement ended the Thirty Years' War?",
  answers: ["Treaty of Tordesillas", "Peace of Westphalia", "Treaty of Utrecht", "Congress of Vienna"],
  correctIndex: 1
},
{
  question: "Which sea lies between Iran and Kazakhstan?",
  answers: ["Black Sea", "Aral Sea", "Caspian Sea", "Persian Gulf"],
  correctIndex: 2
},
{
  question: "Which element has the chemical symbol Al?",
  answers: ["Argon", "Aluminum", "Actinium", "Antimony"],
  correctIndex: 1
},
{
  question: "Which country has the city of Chiang Mai?",
  answers: ["Vietnam", "Thailand", "Cambodia", "Laos"],
  correctIndex: 1
},
{
  question: "What is the capital of Belarus?",
  answers: ["Kyiv", "Minsk", "Vilnius", "Chisinau"],
  correctIndex: 1
},
{
  question: "Which scientist is known for discovering the expanding universe?",
  answers: ["Carl Sagan", "Edwin Hubble", "Stephen Hawking", "Max Planck"],
  correctIndex: 1
},
{
  question: "Which river flows through Baghdad?",
  answers: ["Nile", "Tigris", "Euphrates", "Jordan"],
  correctIndex: 1
},
{
  question: "Which country is the largest producer of palm oil?",
  answers: ["Malaysia", "Indonesia", "Thailand", "Philippines"],
  correctIndex: 1
},
{
  question: "Which part of the human body is responsible for filtering toxins from blood?",
  answers: ["Heart", "Liver", "Pancreas", "Spleen"],
  correctIndex: 1
},
{
  question: "Which planet is known for its retrograde rotation?",
  answers: ["Mars", "Venus", "Jupiter", "Saturn"],
  correctIndex: 1
},
{
  question: "Which historical uprising took place in Russia in 1917?",
  answers: ["February Revolution", "Decembrist Revolt", "Polish Uprising", "Crimean War"],
  correctIndex: 0
},
{
  question: "Which sea lies between Saudi Arabia and Egypt?",
  answers: ["Arabian Sea", "Mediterranean Sea", "Red Sea", "Black Sea"],
  correctIndex: 2
},
{
  question: "Which element has the chemical symbol Ag?",
  answers: ["Argon", "Silver", "Gold", "Aluminum"],
  correctIndex: 1
},
{
  question: "Which country has the city of Busan?",
  answers: ["Japan", "South Korea", "China", "Taiwan"],
  correctIndex: 1
},
{
  question: "What is the capital of Moldova?",
  answers: ["Chisinau", "Tbilisi", "Yerevan", "Baku"],
  correctIndex: 0
},
{
  question: "Which scientist is known for discovering pulsars?",
  answers: ["Jocelyn Bell Burnell", "Stephen Hawking", "Carl Sagan", "Neil deGrasse Tyson"],
  correctIndex: 0
},
{
  question: "Which river flows through Baghdad?",
  answers: ["Euphrates", "Tigris", "Jordan", "Indus"],
  correctIndex: 1
},
{
  question: "Which country is the largest producer of wheat in the world?",
  answers: ["United States", "China", "India", "Russia"],
  correctIndex: 1
},
{
  question: "Which part of the human body is primarily responsible for absorbing nutrients?",
  answers: ["Stomach", "Large intestine", "Small intestine", "Liver"],
  correctIndex: 2
},
{
  question: "Which planet has the strongest magnetic field?",
  answers: ["Earth", "Jupiter", "Saturn", "Neptune"],
  correctIndex: 1
},
{
  question: "Which historical event marked the start of World War II?",
  answers: ["Attack on Pearl Harbor", "Invasion of Poland", "Battle of Britain", "Annexation of Austria"],
  correctIndex: 1
},
{
  question: "Which sea lies between Turkey and Ukraine?",
  answers: ["Mediterranean Sea", "Aegean Sea", "Black Sea", "Caspian Sea"],
  correctIndex: 2
},
{
  question: "Which element has the chemical symbol K?",
  answers: ["Krypton", "Potassium", "Calcium", "Cobalt"],
  correctIndex: 1
},
{
  question: "What color is the sky on a clear day?",
  answers: ["Blue", "Green", "Red", "Purple"],
  correctIndex: 0
},
{
  question: "How many legs does a dog have?",
  answers: ["2", "3", "4", "5"],
  correctIndex: 2
},
{
  question: "Which fruit is typically red?",
  answers: ["Banana", "Apple", "Lemon", "Pear"],
  correctIndex: 1
},
{
  question: "What do we use to see?",
  answers: ["Hands", "Feet", "Eyes", "Ears"],
  correctIndex: 2
},
{
  question: "Which animal is known as man's best friend?",
  answers: ["Cat", "Dog", "Horse", "Fish"],
  correctIndex: 1
},
{
  question: "What do we drink when we are thirsty?",
  answers: ["Water", "Sand", "Paper", "Wood"],
  correctIndex: 0
},
{
  question: "Which shape is round?",
  answers: ["Square", "Triangle", "Circle", "Rectangle"],
  correctIndex: 2
},
{
  question: "What do we wear on our head?",
  answers: ["Shoes", "Hat", "Gloves", "Socks"],
  correctIndex: 1
},
{
  question: "Which animal lives in the ocean?",
  answers: ["Lion", "Elephant", "Shark", "Tiger"],
  correctIndex: 2
},
{
  question: "How many fingers are on one hand?",
  answers: ["3", "4", "5", "6"],
  correctIndex: 2
},
{
  question: "What color is the sun often drawn as?",
  answers: ["Blue", "Yellow", "Green", "Black"],
  correctIndex: 1
},
{
  question: "Which animal says moo?",
  answers: ["Dog", "Cat", "Cow", "Sheep"],
  correctIndex: 2
},
{
  question: "How many days are in a weekend?",
  answers: ["1", "2", "3", "4"],
  correctIndex: 1
},
{
  question: "What do we use to hear?",
  answers: ["Eyes", "Nose", "Ears", "Hands"],
  correctIndex: 2
},
{
  question: "Which fruit is long and yellow?",
  answers: ["Apple", "Banana", "Cherry", "Grape"],
  correctIndex: 1
},
{
  question: "What do we use to write?",
  answers: ["Spoon", "Pen", "Fork", "Plate"],
  correctIndex: 1
},
{
  question: "Which animal can fly?",
  answers: ["Dog", "Bird", "Horse", "Cow"],
  correctIndex: 1
},
{
  question: "What color is snow?",
  answers: ["White", "Blue", "Green", "Red"],
  correctIndex: 0
},
{
  question: "How many wheels does a bicycle have?",
  answers: ["1", "2", "3", "4"],
  correctIndex: 1
},
{
  question: "Which meal do we usually eat in the morning?",
  answers: ["Lunch", "Dinner", "Breakfast", "Snack"],
  correctIndex: 2
},
{
  question: "Which animal says quack?",
  answers: ["Duck", "Dog", "Cat", "Cow"],
  correctIndex: 0
},
{
  question: "What do we use to walk?",
  answers: ["Hands", "Legs", "Eyes", "Ears"],
  correctIndex: 1
},
{
  question: "How many hours are in a day?",
  answers: ["12", "18", "24", "30"],
  correctIndex: 2
},
{
  question: "Which fruit is small and purple?",
  answers: ["Banana", "Apple", "Grape", "Orange"],
  correctIndex: 2
},
{
  question: "What color is a stop sign usually?",
  answers: ["Blue", "Green", "Red", "Yellow"],
  correctIndex: 2
},
{
  question: "Which animal can hop?",
  answers: ["Kangaroo", "Cow", "Horse", "Elephant"],
  correctIndex: 0
},
{
  question: "What do we use to cut paper?",
  answers: ["Spoon", "Fork", "Scissors", "Plate"],
  correctIndex: 2
},
{
  question: "How many arms does a human have?",
  answers: ["1", "2", "3", "4"],
  correctIndex: 1
},
{
  question: "Which shape looks like an egg?",
  answers: ["Square", "Triangle", "Oval", "Rectangle"],
  correctIndex: 2
},
{
  question: "Which animal can swim in the sea?",
  answers: ["Fish", "Lion", "Tiger", "Goat"],
  correctIndex: 0
},
{
  question: "Which animal says neigh?",
  answers: ["Horse", "Dog", "Cat", "Cow"],
  correctIndex: 0
},
{
  question: "What do we use to taste food?",
  answers: ["Nose", "Tongue", "Eyes", "Hands"],
  correctIndex: 1
},
{
  question: "How many seasons are there in a year?",
  answers: ["2", "3", "4", "5"],
  correctIndex: 2
},
{
  question: "Which fruit is orange in color?",
  answers: ["Orange", "Banana", "Apple", "Pear"],
  correctIndex: 0
},
{
  question: "What color is coal?",
  answers: ["White", "Blue", "Black", "Green"],
  correctIndex: 2
},
{
  question: "Which animal has feathers?",
  answers: ["Dog", "Bird", "Fish", "Cow"],
  correctIndex: 1
},
{
  question: "What do we use to open a door?",
  answers: ["Key", "Fork", "Pen", "Spoon"],
  correctIndex: 0
},
{
  question: "How many toes are on one foot?",
  answers: ["3", "4", "5", "6"],
  correctIndex: 2
},
{
  question: "Which shape has no corners?",
  answers: ["Square", "Triangle", "Circle", "Rectangle"],
  correctIndex: 2
},
{
  question: "Which animal gives us eggs?",
  answers: ["Cow", "Chicken", "Horse", "Sheep"],
  correctIndex: 1
},
{
  question: "Which animal says baa?",
  answers: ["Sheep", "Dog", "Cat", "Horse"],
  correctIndex: 0
},
{
  question: "What do we use to carry things?",
  answers: ["Hands", "Ears", "Eyes", "Nose"],
  correctIndex: 0
},
{
  question: "How many letters are in the English alphabet?",
  answers: ["24", "25", "26", "27"],
  correctIndex: 2
},
{
  question: "Which fruit is green on the outside and red inside?",
  answers: ["Banana", "Apple", "Watermelon", "Orange"],
  correctIndex: 2
},
{
  question: "What color is milk?",
  answers: ["White", "Blue", "Green", "Black"],
  correctIndex: 0
},
{
  question: "Which animal has fins?",
  answers: ["Dog", "Bird", "Fish", "Cat"],
  correctIndex: 2
},
{
  question: "What do we use to brush our hair?",
  answers: ["Fork", "Comb", "Knife", "Plate"],
  correctIndex: 1
},
{
  question: "How many knees does a human have?",
  answers: ["1", "2", "3", "4"],
  correctIndex: 1
},
{
  question: "Which shape has three corners?",
  answers: ["Square", "Circle", "Triangle", "Oval"],
  correctIndex: 2
},
{
  question: "Which animal lives in a kennel?",
  answers: ["Dog", "Cow", "Horse", "Pig"],
  correctIndex: 0
},
{
  question: "Which animal says cluck?",
  answers: ["Chicken", "Dog", "Cat", "Sheep"],
  correctIndex: 0
},
{
  question: "What do we use to drink water?",
  answers: ["Cup", "Plate", "Fork", "Knife"],
  correctIndex: 0
},
{
  question: "How many weeks are in one year (about)?",
  answers: ["40", "45", "52", "60"],
  correctIndex: 2
},
{
  question: "Which fruit is usually green or red?",
  answers: ["Banana", "Apple", "Orange", "Grape"],
  correctIndex: 1
},
{
  question: "What color is a school bus in many countries?",
  answers: ["Red", "Yellow", "Blue", "Green"],
  correctIndex: 1
},
{
  question: "Which animal can climb trees?",
  answers: ["Elephant", "Monkey", "Cow", "Horse"],
  correctIndex: 1
},
{
  question: "What do we use to tell time?",
  answers: ["Clock", "Plate", "Spoon", "Cup"],
  correctIndex: 0
},
{
  question: "How many ears does a human have?",
  answers: ["1", "2", "3", "4"],
  correctIndex: 1
},
{
  question: "Which shape looks like a box?",
  answers: ["Circle", "Triangle", "Square", "Oval"],
  correctIndex: 2
},
{
  question: "Which animal can pull a cart?",
  answers: ["Horse", "Fish", "Cat", "Bird"],
  correctIndex: 0
},
{
  question: "Which animal says woof?",
  answers: ["Dog", "Cat", "Duck", "Pig"],
  correctIndex: 0
},
{
  question: "What do we use to keep our feet warm?",
  answers: ["Gloves", "Hat", "Socks", "Scarf"],
  correctIndex: 2
},
{
  question: "How many sides does a square have?",
  answers: ["2", "3", "4", "5"],
  correctIndex: 2
},
{
  question: "Which fruit is yellow and curved?",
  answers: ["Apple", "Banana", "Orange", "Grape"],
  correctIndex: 1
},
{
  question: "What color is chocolate?",
  answers: ["Brown", "Blue", "Green", "Pink"],
  correctIndex: 0
},
{
  question: "Which animal lives in water?",
  answers: ["Dog", "Fish", "Cow", "Horse"],
  correctIndex: 1
},
{
  question: "What do we use to clean our teeth?",
  answers: ["Comb", "Toothbrush", "Fork", "Knife"],
  correctIndex: 1
},
{
  question: "How many eyes does a spider usually have?",
  answers: ["2", "4", "6", "8"],
  correctIndex: 3
},
{
  question: "Which shape is like a ring?",
  answers: ["Triangle", "Square", "Circle", "Rectangle"],
  correctIndex: 2
},
{
  question: "Which animal gives us milk?",
  answers: ["Cow", "Chicken", "Goat", "Dog"],
  correctIndex: 0
},
{
  question: "Which animal says ribbit?",
  answers: ["Frog", "Dog", "Cat", "Cow"],
  correctIndex: 0
},
{
  question: "What do we use to cover our eyes from the sun?",
  answers: ["Gloves", "Sunglasses", "Shoes", "Belt"],
  correctIndex: 1
},
{
  question: "How many days are in February in a normal year?",
  answers: ["28", "29", "30", "31"],
  correctIndex: 0
},
{
  question: "Which fruit is green and sour?",
  answers: ["Lime", "Banana", "Cherry", "Peach"],
  correctIndex: 0
},
{
  question: "What color is a typical leaf in summer?",
  answers: ["Blue", "Green", "Red", "White"],
  correctIndex: 1
},
{
  question: "Which animal has a shell?",
  answers: ["Turtle", "Dog", "Horse", "Cow"],
  correctIndex: 0
},
{
  question: "What do we use to erase pencil marks?",
  answers: ["Eraser", "Fork", "Knife", "Cup"],
  correctIndex: 0
},
{
  question: "How many wheels does a car usually have?",
  answers: ["2", "3", "4", "5"],
  correctIndex: 2
},
{
  question: "Which shape has one continuous curved line?",
  answers: ["Circle", "Square", "Triangle", "Rectangle"],
  correctIndex: 0
},
{
  question: "Which animal gives us wool?",
  answers: ["Sheep", "Pig", "Dog", "Horse"],
  correctIndex: 0
},
{
  question: "Which country has the highest number of Nobel Prize winners per capita?",
  answers: ["Germany", "United States", "Switzerland", "Sweden"],
  correctIndex: 2
},
{
  question: "What is the name of the deepest known point in the Earth's oceans?",
  answers: ["Tonga Trench", "Java Trench", "Challenger Deep", "Puerto Rico Trench"],
  correctIndex: 2
},
{
  question: "Which physicist first proposed the existence of antimatter?",
  answers: ["Albert Einstein", "Paul Dirac", "Niels Bohr", "Max Planck"],
  correctIndex: 1
},
{
  question: "Which ancient civilization built the city of Persepolis?",
  answers: ["Babylonians", "Assyrians", "Persians", "Greeks"],
  correctIndex: 2
},
{
  question: "What is the rarest blood type in the world?",
  answers: ["AB negative", "O positive", "B negative", "A positive"],
  correctIndex: 0
},
{
  question: "Which star is the brightest in the night sky?",
  answers: ["Betelgeuse", "Sirius", "Vega", "Polaris"],
  correctIndex: 1
},
{
  question: "Which treaty formally ended the Napoleonic Wars?",
  answers: ["Treaty of Tilsit", "Congress of Vienna", "Treaty of Amiens", "Treaty of Paris (1815)"],
  correctIndex: 3
},
{
  question: "Which element has the highest atomic number that occurs naturally?",
  answers: ["Uranium", "Plutonium", "Thorium", "Radon"],
  correctIndex: 0
},
{
  question: "Which country has the world's largest proven natural gas reserves?",
  answers: ["Russia", "Iran", "Qatar", "United States"],
  correctIndex: 0
},
{
  question: "Which mathematician is known for inventing set theory?",
  answers: ["David Hilbert", "Georg Cantor", "Kurt Gödel", "John von Neumann"],
  correctIndex: 1
},
{
  question: "Which ancient wonder was located in Ephesus?",
  answers: ["Colossus of Rhodes", "Temple of Artemis", "Hanging Gardens", "Lighthouse of Alexandria"],
  correctIndex: 1
},
{
  question: "What is the SI unit of electric capacitance?",
  answers: ["Ohm", "Farad", "Henry", "Tesla"],
  correctIndex: 1
},
{
  question: "Which country was formerly known as Abyssinia?",
  answers: ["Eritrea", "Ethiopia", "Sudan", "Somalia"],
  correctIndex: 1
},
{
  question: "Which moon of Saturn has a thick atmosphere and methane lakes?",
  answers: ["Europa", "Titan", "Io", "Ganymede"],
  correctIndex: 1
},
{
  question: "Who wrote the philosophical work 'Thus Spoke Zarathustra'?",
  answers: ["Immanuel Kant", "Friedrich Nietzsche", "Arthur Schopenhauer", "Søren Kierkegaard"],
  correctIndex: 1
},
{
  question: "Which ocean current flows southward along the west coast of South America?",
  answers: ["Gulf Stream", "Humboldt Current", "Kuroshio Current", "Agulhas Current"],
  correctIndex: 1
},
{
  question: "Which metal has the highest melting point?",
  answers: ["Iron", "Tungsten", "Titanium", "Platinum"],
  correctIndex: 1
},
{
  question: "Which empire used the administrative language Quechua?",
  answers: ["Aztec Empire", "Maya Empire", "Inca Empire", "Olmec Civilization"],
  correctIndex: 2
},
{
  question: "Which mathematical constant is known as Euler’s number?",
  answers: ["π", "e", "φ", "i"],
  correctIndex: 1
},
{
  question: "Which desert is the largest cold desert in the world?",
  answers: ["Gobi", "Antarctic Desert", "Patagonian Desert", "Great Basin Desert"],
  correctIndex: 1
},
{
  question: "Which scientist proposed the three laws of planetary motion?",
  answers: ["Isaac Newton", "Johannes Kepler", "Galileo Galilei", "Tycho Brahe"],
  correctIndex: 1
},
{
  question: "What is the longest river in Asia?",
  answers: ["Yangtze", "Yellow River", "Mekong", "Ob"],
  correctIndex: 0
},
{
  question: "Which ancient city was destroyed by the eruption of Mount Vesuvius in AD 79?",
  answers: ["Troy", "Pompeii", "Sparta", "Athens"],
  correctIndex: 1
},
{
  question: "Which subatomic particle has a negative charge?",
  answers: ["Proton", "Neutron", "Electron", "Photon"],
  correctIndex: 2
},
{
  question: "Which language family does Hungarian belong to?",
  answers: ["Slavic", "Germanic", "Uralic", "Romance"],
  correctIndex: 2
},
{
  question: "Which country has the highest waterfall in the world?",
  answers: ["Brazil", "Venezuela", "Peru", "Colombia"],
  correctIndex: 1
},
{
  question: "Which mathematical theorem states that a² + b² = c²?",
  answers: ["Fermat’s Last Theorem", "Pythagorean Theorem", "Binomial Theorem", "Gauss’s Theorem"],
  correctIndex: 1
},
{
  question: "Which gas is most abundant in the Earth's atmosphere?",
  answers: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
  correctIndex: 2
},
{
  question: "Which explorer first circumnavigated the globe?",
  answers: ["Christopher Columbus", "Ferdinand Magellan", "James Cook", "Marco Polo"],
  correctIndex: 1
},
{
  question: "Which philosopher wrote 'The Republic'?",
  answers: ["Aristotle", "Socrates", "Plato", "Epicurus"],
  correctIndex: 2
},
{
  question: "Which element is the most abundant in the universe?",
  answers: ["Oxygen", "Carbon", "Hydrogen", "Helium"],
  correctIndex: 2
},
{
  question: "Which European capital lies on the river Tagus?",
  answers: ["Madrid", "Lisbon", "Rome", "Athens"],
  correctIndex: 1
},
{
  question: "Which scientist developed the uncertainty principle?",
  answers: ["Werner Heisenberg", "Erwin Schrödinger", "Max Planck", "Niels Bohr"],
  correctIndex: 0
},
{
  question: "Which mountain is the highest outside of Asia?",
  answers: ["Denali", "Aconcagua", "Kilimanjaro", "Mont Blanc"],
  correctIndex: 1
},
{
  question: "Which civilization built Machu Picchu?",
  answers: ["Maya", "Aztec", "Inca", "Olmec"],
  correctIndex: 2
},
{
  question: "What is the hardest natural substance on Earth?",
  answers: ["Quartz", "Diamond", "Topaz", "Corundum"],
  correctIndex: 1
},
{
  question: "Which sea is the saltiest large body of water?",
  answers: ["Mediterranean Sea", "Black Sea", "Red Sea", "Dead Sea"],
  correctIndex: 3
},
{
  question: "Which number is known as the golden ratio?",
  answers: ["π", "√2", "φ", "e"],
  correctIndex: 2
},
{
  question: "Which war was fought between Athens and Sparta?",
  answers: ["Punic War", "Peloponnesian War", "Persian War", "Trojan War"],
  correctIndex: 1
},
{
  question: "Which organ in the human body is primarily responsible for detoxification?",
  answers: ["Kidney", "Liver", "Pancreas", "Lungs"],
  correctIndex: 1
},
{
  question: "Which physicist is known for the theory of relativity?",
  answers: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
  correctIndex: 1
},
{
  question: "What is the longest river in Europe?",
  answers: ["Danube", "Rhine", "Volga", "Elbe"],
  correctIndex: 2
},
{
  question: "Which ancient civilization developed cuneiform writing?",
  answers: ["Egyptians", "Greeks", "Sumerians", "Romans"],
  correctIndex: 2
},
{
  question: "Which particle carries a positive electric charge?",
  answers: ["Electron", "Neutron", "Proton", "Photon"],
  correctIndex: 2
},
{
  question: "Which language is considered the oldest written Indo-European language?",
  answers: ["Latin", "Greek", "Sanskrit", "Persian"],
  correctIndex: 2
},
{
  question: "Which country is home to Mount Kilimanjaro?",
  answers: ["Kenya", "Tanzania", "Uganda", "Ethiopia"],
  correctIndex: 1
},
{
  question: "Which branch of mathematics deals with limits and derivatives?",
  answers: ["Algebra", "Geometry", "Calculus", "Statistics"],
  correctIndex: 2
},
{
  question: "Which gas is used in fluorescent lamps?",
  answers: ["Helium", "Neon", "Argon", "Hydrogen"],
  correctIndex: 1
},
{
  question: "Which explorer reached India by sea route from Europe in 1498?",
  answers: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "James Cook"],
  correctIndex: 1
},
{
  question: "Which philosopher is known for the concept of the social contract?",
  answers: ["Plato", "John Locke", "Karl Marx", "Friedrich Nietzsche"],
  correctIndex: 1
},
{
  question: "Which planet has the shortest orbital period around the Sun?",
  answers: ["Mercury", "Venus", "Mars", "Earth"],
  correctIndex: 0
},
{
  question: "Which empire was ruled by Genghis Khan?",
  answers: ["Ottoman Empire", "Roman Empire", "Mongol Empire", "Persian Empire"],
  correctIndex: 2
},
{
  question: "Which metal is liquid at room temperature?",
  answers: ["Mercury", "Lead", "Aluminum", "Iron"],
  correctIndex: 0
},
{
  question: "Which river forms part of the border between the United States and Mexico?",
  answers: ["Mississippi", "Colorado", "Rio Grande", "Columbia"],
  correctIndex: 2
},
{
  question: "Which scientist formulated the laws of motion?",
  answers: ["Galileo Galilei", "Isaac Newton", "Johannes Kepler", "Albert Einstein"],
  correctIndex: 1
},
{
  question: "Which mountain range separates Europe from Asia in Russia?",
  answers: ["Caucasus Mountains", "Carpathian Mountains", "Ural Mountains", "Alps"],
  correctIndex: 2
},
{
  question: "Which ancient civilization built ziggurats?",
  answers: ["Egyptians", "Sumerians", "Greeks", "Romans"],
  correctIndex: 1
},
{
  question: "Which element is represented by the symbol Na?",
  answers: ["Nitrogen", "Neon", "Sodium", "Nickel"],
  correctIndex: 2
},
{
  question: "Which ocean is the second largest in the world?",
  answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Southern Ocean"],
  correctIndex: 0
},
{
  question: "Which philosopher taught Alexander the Great?",
  answers: ["Plato", "Socrates", "Aristotle", "Epicurus"],
  correctIndex: 2
},
{
  question: "Which scientist is known for discovering penicillin?",
  answers: ["Louis Pasteur", "Alexander Fleming", "Joseph Lister", "Robert Koch"],
  correctIndex: 1
},
{
  question: "Which river is the longest in South America?",
  answers: ["Amazon", "Paraná", "Orinoco", "São Francisco"],
  correctIndex: 0
},
{
  question: "Which ancient civilization built the pyramids of Giza?",
  answers: ["Babylonians", "Romans", "Egyptians", "Persians"],
  correctIndex: 2
},
{
  question: "Which particle has no electric charge?",
  answers: ["Proton", "Electron", "Neutron", "Positron"],
  correctIndex: 2
},
{
  question: "Which language is primarily spoken in Brazil?",
  answers: ["Spanish", "Portuguese", "French", "English"],
  correctIndex: 1
},
{
  question: "Which country has the largest population in the world?",
  answers: ["India", "China", "United States", "Indonesia"],
  correctIndex: 0
},
{
  question: "Which branch of mathematics studies shapes and angles?",
  answers: ["Algebra", "Geometry", "Calculus", "Statistics"],
  correctIndex: 1
},
{
  question: "Which gas do plants absorb during photosynthesis?",
  answers: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
  correctIndex: 2
},
{
  question: "Which explorer is credited with discovering America in 1492?",
  answers: ["Ferdinand Magellan", "Christopher Columbus", "Amerigo Vespucci", "James Cook"],
  correctIndex: 1
},
{
  question: "Which philosopher is known for the statement 'I think, therefore I am'?",
  answers: ["John Locke", "René Descartes", "Immanuel Kant", "David Hume"],
  correctIndex: 1
},
{
  question: "Which element has the chemical symbol Sb?",
  answers: ["Selenium", "Antimony", "Silicon", "Strontium"],
  correctIndex: 1
},
{
  question: "Which battle in 1066 changed the course of English history?",
  answers: ["Battle of Hastings", "Battle of Agincourt", "Battle of Waterloo", "Battle of Bosworth"],
  correctIndex: 0
},
{
  question: "Which is the largest moon of Jupiter?",
  answers: ["Europa", "Io", "Ganymede", "Callisto"],
  correctIndex: 2
},
{
  question: "Which river is the longest in Africa?",
  answers: ["Nile", "Congo", "Niger", "Zambezi"],
  correctIndex: 0
},
{
  question: "Which scientist discovered radioactivity?",
  answers: ["Marie Curie", "Henri Becquerel", "Ernest Rutherford", "Niels Bohr"],
  correctIndex: 1
},
{
  question: "Which country was formerly known as Persia?",
  answers: ["Iraq", "Iran", "Turkey", "Syria"],
  correctIndex: 1
},
{
  question: "Which mathematical symbol represents infinity?",
  answers: ["π", "∞", "√", "Σ"],
  correctIndex: 1
},
{
  question: "Which organ produces bile in the human body?",
  answers: ["Stomach", "Pancreas", "Liver", "Kidney"],
  correctIndex: 2
},
{
  question: "Which ocean surrounds Antarctica?",
  answers: ["Indian Ocean", "Atlantic Ocean", "Southern Ocean", "Pacific Ocean"],
  correctIndex: 2
},
{
  question: "Which philosopher was the teacher of Plato?",
  answers: ["Aristotle", "Socrates", "Pythagoras", "Epicurus"],
  correctIndex: 1
},
{
  question: "Which element has the chemical symbol Pt?",
  answers: ["Phosphorus", "Platinum", "Potassium", "Palladium"],
  correctIndex: 1
},
{
  question: "Which war was fought between North and South Korea starting in 1950?",
  answers: ["Vietnam War", "Korean War", "Cold War", "Sino-Japanese War"],
  correctIndex: 1
},
{
  question: "Which planet has the longest day (rotation period) in the solar system?",
  answers: ["Mercury", "Venus", "Mars", "Saturn"],
  correctIndex: 1
},
{
  question: "Which river flows through Paris?",
  answers: ["Rhine", "Danube", "Seine", "Loire"],
  correctIndex: 2
},
{
  question: "Which scientist is known for the discovery of X-rays?",
  answers: ["Marie Curie", "Wilhelm Röntgen", "Nikola Tesla", "Max Planck"],
  correctIndex: 1
},
{
  question: "Which country has the largest land area in the world?",
  answers: ["Canada", "China", "Russia", "United States"],
  correctIndex: 2
},
{
  question: "Which mathematical concept describes a shape with self-similarity at different scales?",
  answers: ["Matrix", "Fractal", "Vector", "Polynomial"],
  correctIndex: 1
},
{
  question: "Which gas is the main component of the Sun?",
  answers: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
  correctIndex: 1
},
{
  question: "Which explorer was the first to reach the South Pole?",
  answers: ["Robert Falcon Scott", "Roald Amundsen", "Ernest Shackleton", "James Cook"],
  correctIndex: 1
},
{
  question: "Which philosopher wrote 'Critique of Pure Reason'?",
  answers: ["René Descartes", "Immanuel Kant", "John Locke", "David Hume"],
  correctIndex: 1
},
{
  question: "Which element has the chemical symbol Pt?",
  answers: ["Phosphorus", "Platinum", "Potassium", "Palladium"],
  correctIndex: 1
},
{
  question: "Which war was fought between North and South Korea starting in 1950?",
  answers: ["Vietnam War", "Korean War", "Cold War", "Sino-Japanese War"],
  correctIndex: 1
},
{
  question: "Which planet has the longest day (rotation period) in the solar system?",
  answers: ["Mercury", "Venus", "Mars", "Saturn"],
  correctIndex: 1
},
{
  question: "Which river flows through Paris?",
  answers: ["Rhine", "Danube", "Seine", "Loire"],
  correctIndex: 2
},
{
  question: "Which scientist is known for the discovery of X-rays?",
  answers: ["Marie Curie", "Wilhelm Röntgen", "Nikola Tesla", "Max Planck"],
  correctIndex: 1
},
{
  question: "Which country has the largest land area in the world?",
  answers: ["Canada", "China", "Russia", "United States"],
  correctIndex: 2
},
{
  question: "Which mathematical concept describes a shape with self-similarity at different scales?",
  answers: ["Matrix", "Fractal", "Vector", "Polynomial"],
  correctIndex: 1
},
{
  question: "Which gas is the main component of the Sun?",
  answers: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
  correctIndex: 1
},
{
  question: "Which explorer was the first to reach the South Pole?",
  answers: ["Robert Falcon Scott", "Roald Amundsen", "Ernest Shackleton", "James Cook"],
  correctIndex: 1
},
{
  question: "Which philosopher wrote 'Critique of Pure Reason'?",
  answers: ["René Descartes", "Immanuel Kant", "John Locke", "David Hume"],
  correctIndex: 1
},
{
  question: "Which country has no permanent rivers?",
  answers: ["Saudi Arabia", "Libya", "Qatar", "Oman"],
  correctIndex: 0
},
{
  question: "What is the densest naturally occurring element?",
  answers: ["Lead", "Uranium", "Osmium", "Gold"],
  correctIndex: 2
},
{
  question: "Which war lasted only about 38–45 minutes?",
  answers: ["Anglo-Zanzibar War", "Six-Day War", "Winter War", "Boer War"],
  correctIndex: 0
},
{
  question: "Which moon in the solar system has active volcanoes?",
  answers: ["Europa", "Titan", "Io", "Triton"],
  correctIndex: 2
},
{
  question: "Which empire was ruled from the city of Timbuktu during its golden age?",
  answers: ["Songhai Empire", "Mali Empire", "Ghana Empire", "Kanem-Bornu Empire"],
  correctIndex: 1
},
{
  question: "What is the mathematical term for a number that can only be divided by 1 and itself?",
  answers: ["Irrational number", "Prime number", "Complex number", "Natural number"],
  correctIndex: 1
},
{
  question: "Which sea has no coastline at all?",
  answers: ["Sargasso Sea", "Coral Sea", "Arabian Sea", "Timor Sea"],
  correctIndex: 0
},
{
  question: "Which physicist formulated the Pauli exclusion principle?",
  answers: ["Wolfgang Pauli", "Max Born", "Louis de Broglie", "Paul Dirac"],
  correctIndex: 0
},
{
  question: "Which mountain is the highest active volcano in the world?",
  answers: ["Mount Fuji", "Ojos del Salado", "Mount Etna", "Kilimanjaro"],
  correctIndex: 1
},
{
  question: "Which philosopher is associated with the concept of the Übermensch?",
  answers: ["Immanuel Kant", "Friedrich Nietzsche", "Arthur Schopenhauer", "Georg Hegel"],
  correctIndex: 1
},
{
  question: "Which element has the highest electrical conductivity?",
  answers: ["Copper", "Silver", "Gold", "Aluminum"],
  correctIndex: 1
},
{
  question: "Which city is the oldest continuously inhabited city in the world?",
  answers: ["Jerusalem", "Athens", "Damascus", "Byblos"],
  correctIndex: 2
},
{
  question: "Which comet is visible from Earth approximately every 76 years?",
  answers: ["Hale-Bopp", "Encke", "Halley's Comet", "Swift-Tuttle"],
  correctIndex: 2
},
{
  question: "Which empire built the extensive road system known as the Royal Road?",
  answers: ["Roman Empire", "Persian Empire", "Byzantine Empire", "Ottoman Empire"],
  correctIndex: 1
},
{
  question: "Which number is known as a 'perfect number'?",
  answers: ["10", "12", "6", "8"],
  correctIndex: 2
},
{
  question: "Which strait connects the Black Sea to the Mediterranean Sea?",
  answers: ["Strait of Gibraltar", "Bosporus", "Bering Strait", "Strait of Hormuz"],
  correctIndex: 1
},
{
  question: "Which physicist proposed the wave theory of matter?",
  answers: ["Louis de Broglie", "Erwin Schrödinger", "Niels Bohr", "Max Planck"],
  correctIndex: 0
},
{
  question: "Which mountain range is considered the oldest in the world?",
  answers: ["Himalayas", "Appalachian Mountains", "Alps", "Andes"],
  correctIndex: 1
},
{
  question: "Which ancient language used the Linear B script?",
  answers: ["Phoenician", "Mycenaean Greek", "Latin", "Hittite"],
  correctIndex: 1
},
{
  question: "Which ocean trench is the deepest known?",
  answers: ["Peru–Chile Trench", "Mariana Trench", "Java Trench", "Tonga Trench"],
  correctIndex: 1
},
{
  question: "Which scientist introduced the concept of entropy in thermodynamics?",
  answers: ["James Clerk Maxwell", "Rudolf Clausius", "Ludwig Boltzmann", "Lord Kelvin"],
  correctIndex: 1
},
{
  question: "Which country has the highest average elevation above sea level?",
  answers: ["Nepal", "Bhutan", "Tibet (China)", "Bolivia"],
  correctIndex: 1
},
{
  question: "Which ancient city was known as Byzantium before being renamed Constantinople?",
  answers: ["Athens", "Istanbul", "Troy", "Antioch"],
  correctIndex: 1
},
{
  question: "Which subatomic particle is responsible for the strong nuclear force?",
  answers: ["Photon", "Gluon", "Electron", "Neutrino"],
  correctIndex: 1
},
{
  question: "Which metal expands the most when heated?",
  answers: ["Aluminum", "Iron", "Zinc", "Lead"],
  correctIndex: 3
},
{
  question: "Which explorer first crossed Antarctica by land?",
  answers: ["Roald Amundsen", "Ernest Shackleton", "Robert Falcon Scott", "Vivian Fuchs"],
  correctIndex: 3
},
{
  question: "Which ancient civilization developed the first known alphabet?",
  answers: ["Greeks", "Phoenicians", "Romans", "Sumerians"],
  correctIndex: 1
},
{
  question: "Which mathematical function describes exponential growth?",
  answers: ["Logarithmic function", "Linear function", "Power function", "Exponential function"],
  correctIndex: 3
},
{
  question: "Which desert is considered the oldest in the world?",
  answers: ["Sahara", "Namib", "Gobi", "Kalahari"],
  correctIndex: 1
},
{
  question: "Which philosopher wrote 'Being and Nothingness'?",
  answers: ["Martin Heidegger", "Jean-Paul Sartre", "Albert Camus", "Simone de Beauvoir"],
  correctIndex: 1
},
{
  question: "Which element has the highest natural boiling point?",
  answers: ["Tungsten", "Rhenium", "Osmium", "Carbon"],
  correctIndex: 1
},
{
  question: "Which ancient kingdom was ruled by Mansa Musa?",
  answers: ["Ghana Empire", "Mali Empire", "Songhai Empire", "Axum Empire"],
  correctIndex: 1
},
{
  question: "Which is the largest inland sea in the world?",
  answers: ["Black Sea", "Aral Sea", "Caspian Sea", "Mediterranean Sea"],
  correctIndex: 2
},
{
  question: "Which mathematical conjecture was proven by Andrew Wiles in 1994?",
  answers: ["Goldbach Conjecture", "Twin Prime Conjecture", "Fermat’s Last Theorem", "Riemann Hypothesis"],
  correctIndex: 2
},
{
  question: "Which planet has the strongest winds in the solar system?",
  answers: ["Jupiter", "Saturn", "Neptune", "Uranus"],
  correctIndex: 2
},
{
  question: "Which empire built the city of Petra?",
  answers: ["Roman Empire", "Nabataean Kingdom", "Persian Empire", "Byzantine Empire"],
  correctIndex: 1
},
{
  question: "Which gas is most abundant in the Earth's crust?",
  answers: ["Oxygen", "Silicon", "Nitrogen", "Carbon dioxide"],
  correctIndex: 0
},
{
  question: "Which philosopher is associated with existentialism and wrote 'The Myth of Sisyphus'?",
  answers: ["Jean-Paul Sartre", "Albert Camus", "Friedrich Nietzsche", "Martin Heidegger"],
  correctIndex: 1
},
{
  question: "Which strait separates Europe from Africa?",
  answers: ["Bosporus", "Strait of Gibraltar", "Dardanelles", "Strait of Hormuz"],
  correctIndex: 1
},
{
  question: "Which mountain is the tallest in the solar system?",
  answers: ["Olympus Mons", "Mauna Kea", "Mount Everest", "Arsia Mons"],
  correctIndex: 0
},
{
  question: "Which mathematician is known as the 'Prince of Mathematicians'?",
  answers: ["Leonhard Euler", "Carl Friedrich Gauss", "Pierre-Simon Laplace", "Joseph Fourier"],
  correctIndex: 1
},
{
  question: "Which ocean current is responsible for the El Niño phenomenon?",
  answers: ["Humboldt Current", "Peru Current", "Equatorial Countercurrent", "Gulf Stream"],
  correctIndex: 2
},
{
  question: "Which ancient script was deciphered using the Rosetta Stone?",
  answers: ["Cuneiform", "Linear B", "Egyptian hieroglyphs", "Phoenician"],
  correctIndex: 2
},
{
  question: "Which particle is responsible for mediating the electromagnetic force?",
  answers: ["Gluon", "Photon", "Boson", "Muon"],
  correctIndex: 1
},
{
  question: "Which is the largest island in the world?",
  answers: ["Australia", "Greenland", "Borneo", "Madagascar"],
  correctIndex: 1
},
{
  question: "Which philosopher founded Stoicism?",
  answers: ["Aristotle", "Zeno of Citium", "Epicurus", "Seneca"],
  correctIndex: 1
},
{
  question: "Which metal has the highest density?",
  answers: ["Lead", "Gold", "Osmium", "Platinum"],
  correctIndex: 2
},
{
  question: "Which country has the largest number of time zones?",
  answers: ["Russia", "United States", "France", "China"],
  correctIndex: 2
},
{
  question: "Which star is closest to Earth after the Sun?",
  answers: ["Sirius", "Alpha Centauri", "Proxima Centauri", "Barnard's Star"],
  correctIndex: 2
},
{
  question: "Which empire controlled large parts of Southeast Asia from Angkor?",
  answers: ["Srivijaya Empire", "Khmer Empire", "Majapahit Empire", "Pagan Kingdom"],
  correctIndex: 1
},
{
  question: "Which theorem states that every non-zero polynomial equation has at least one complex root?",
  answers: ["Pythagorean Theorem", "Fundamental Theorem of Algebra", "Taylor's Theorem", "Binomial Theorem"],
  correctIndex: 1
},
{
  question: "Which empire used the capital city Ctesiphon?",
  answers: ["Roman Empire", "Parthian Empire", "Byzantine Empire", "Ottoman Empire"],
  correctIndex: 1
},
{
  question: "Which layer of Earth's atmosphere contains the ozone layer?",
  answers: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
  correctIndex: 1
},
{
  question: "Which physicist proposed the concept of spacetime?",
  answers: ["Max Planck", "Albert Einstein", "Niels Bohr", "Werner Heisenberg"],
  correctIndex: 1
},
{
  question: "Which is the largest lake by surface area in the world?",
  answers: ["Lake Superior", "Lake Victoria", "Caspian Sea", "Lake Baikal"],
  correctIndex: 2
},
{
  question: "Which philosopher wrote 'Being and Time'?",
  answers: ["Jean-Paul Sartre", "Martin Heidegger", "Immanuel Kant", "Friedrich Nietzsche"],
  correctIndex: 1
},
{
  question: "Which chemical element is named after the scientist Marie Curie?",
  answers: ["Curium", "Einsteinium", "Fermium", "Mendelevium"],
  correctIndex: 0
},
{
  question: "Which mountain pass was famously crossed by Hannibal with elephants?",
  answers: ["Brenner Pass", "Great St. Bernard Pass", "Khyber Pass", "Zoji La"],
  correctIndex: 1
},
{
  question: "Which number is known as Euler's identity constant?",
  answers: ["π", "e", "φ", "γ"],
  correctIndex: 1
},
{
  question: "Which country is the only one to border both the Caspian Sea and the Persian Gulf?",
  answers: ["Turkey", "Iran", "Iraq", "Azerbaijan"],
  correctIndex: 1
},
{
  question: "Which theorem states that every non-zero polynomial equation has at least one complex root?",
  answers: ["Pythagorean Theorem", "Fundamental Theorem of Algebra", "Taylor's Theorem", "Binomial Theorem"],
  correctIndex: 1
},
{
  question: "Which empire used the capital city Ctesiphon?",
  answers: ["Roman Empire", "Parthian Empire", "Byzantine Empire", "Ottoman Empire"],
  correctIndex: 1
},
{
  question: "Which layer of Earth's atmosphere contains the ozone layer?",
  answers: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
  correctIndex: 1
},
{
  question: "Which physicist proposed the concept of spacetime?",
  answers: ["Max Planck", "Albert Einstein", "Niels Bohr", "Werner Heisenberg"],
  correctIndex: 1
},
{
  question: "Which is the largest lake by surface area in the world?",
  answers: ["Lake Superior", "Lake Victoria", "Caspian Sea", "Lake Baikal"],
  correctIndex: 2
},
{
  question: "Which philosopher wrote 'Being and Time'?",
  answers: ["Jean-Paul Sartre", "Martin Heidegger", "Immanuel Kant", "Friedrich Nietzsche"],
  correctIndex: 1
},
{
  question: "Which chemical element is named after the scientist Marie Curie?",
  answers: ["Curium", "Einsteinium", "Fermium", "Mendelevium"],
  correctIndex: 0
},
{
  question: "Which mountain pass was famously crossed by Hannibal with elephants?",
  answers: ["Brenner Pass", "Great St. Bernard Pass", "Khyber Pass", "Zoji La"],
  correctIndex: 1
},
{
  question: "Which number is known as Euler's identity constant?",
  answers: ["π", "e", "φ", "γ"],
  correctIndex: 1
},
{
  question: "Which country is the only one to border both the Caspian Sea and the Persian Gulf?",
  answers: ["Turkey", "Iran", "Iraq", "Azerbaijan"],
  correctIndex: 1
},
{
  question: "Which scientist developed the laws of planetary motion before Newton explained them?",
  answers: ["Galileo Galilei", "Johannes Kepler", "Tycho Brahe", "Nicolaus Copernicus"],
  correctIndex: 1
},
{
  question: "Which ancient civilization built the city of Carthage?",
  answers: ["Romans", "Phoenicians", "Greeks", "Persians"],
  correctIndex: 1
},
{
  question: "Which mathematical constant is approximately 2.71828?",
  answers: ["π", "e", "φ", "√2"],
  correctIndex: 1
},
{
  question: "Which is the largest coral reef system in the world?",
  answers: ["Belize Barrier Reef", "New Caledonia Reef", "Great Barrier Reef", "Red Sea Coral Reef"],
  correctIndex: 2
},
{
  question: "Which philosopher is known for writing 'Meditations'?",
  answers: ["Seneca", "Marcus Aurelius", "Epictetus", "Plato"],
  correctIndex: 1
},
{
  question: "Which element has the chemical symbol Re?",
  answers: ["Radium", "Rhenium", "Rubidium", "Ruthenium"],
  correctIndex: 1
},
{
  question: "Which organelle is known as the powerhouse of the cell?",
  answers: ["Nucleus", "Ribosome", "Mitochondrion", "Golgi apparatus"],
  correctIndex: 2
},
{
  question: "Which river flows through the city of Budapest?",
  answers: ["Rhine", "Danube", "Seine", "Thames"],
  correctIndex: 1
},
{
  question: "Which scientist proposed the theory of natural selection?",
  answers: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Alfred Wegener"],
  correctIndex: 1
},
{
  question: "Which empire ruled much of Central America before the Spanish conquest?",
  answers: ["Inca Empire", "Aztec Empire", "Maya Civilization", "Toltec Empire"],
  correctIndex: 1
},
{
  question: "Which element has the chemical symbol Ta?",
  answers: ["Titanium", "Tantalum", "Technetium", "Terbium"],
  correctIndex: 1
},
{
  question: "Which ancient library was one of the largest and most significant of the ancient world?",
  answers: ["Library of Pergamon", "Library of Alexandria", "Library of Nineveh", "Library of Athens"],
  correctIndex: 1
},
{
  question: "Which is the largest volcano on Earth by volume?",
  answers: ["Mauna Loa", "Mount Etna", "Mount Fuji", "Mount Kilimanjaro"],
  correctIndex: 0
},
{
  question: "Which scientist discovered the nucleus of the atom?",
  answers: ["Niels Bohr", "Ernest Rutherford", "J.J. Thomson", "Max Planck"],
  correctIndex: 1
},
{
  question: "Which country has the longest coastline in the world?",
  answers: ["Australia", "Russia", "Canada", "Indonesia"],
  correctIndex: 2
},
{
  question: "Which philosopher wrote 'The Social Contract'?",
  answers: ["Jean-Jacques Rousseau", "John Locke", "Thomas Hobbes", "Voltaire"],
  correctIndex: 0
},
{
  question: "Which mathematical term describes a polygon with eight sides?",
  answers: ["Hexagon", "Heptagon", "Octagon", "Nonagon"],
  correctIndex: 2
},
{
  question: "Which planet has the largest ring system?",
  answers: ["Jupiter", "Uranus", "Neptune", "Saturn"],
  correctIndex: 3
},
{
  question: "Which ancient empire was centered in modern-day Peru?",
  answers: ["Aztec Empire", "Maya Civilization", "Inca Empire", "Olmec Civilization"],
  correctIndex: 2
},
{
  question: "Which physicist is known for discovering electromagnetic waves experimentally?",
  answers: ["Michael Faraday", "James Clerk Maxwell", "Heinrich Hertz", "Nikola Tesla"],
  correctIndex: 2
},
{
  question: "Which element has the highest atomic number that occurs naturally?",
  answers: ["Plutonium", "Uranium", "Thorium", "Radium"],
  correctIndex: 1
},
{
  question: "Which ancient city was the capital of the Hittite Empire?",
  answers: ["Troy", "Hattusa", "Ur", "Nineveh"],
  correctIndex: 1
},
{
  question: "Which is the largest desert in the world by total area?",
  answers: ["Sahara", "Gobi", "Antarctic Desert", "Arabian Desert"],
  correctIndex: 2
},
{
  question: "Which scientist is known for formulating the Schrödinger equation?",
  answers: ["Werner Heisenberg", "Erwin Schrödinger", "Max Planck", "Louis de Broglie"],
  correctIndex: 1
},
{
  question: "Which country has the highest number of active volcanoes?",
  answers: ["Japan", "Indonesia", "Chile", "United States"],
  correctIndex: 1
},
{
  question: "Which philosopher is known for writing 'Critique of Practical Reason'?",
  answers: ["Immanuel Kant", "Friedrich Nietzsche", "David Hume", "Georg Hegel"],
  correctIndex: 0
},
{
  question: "Which mathematical term describes the distance around a circle?",
  answers: ["Radius", "Diameter", "Circumference", "Arc"],
  correctIndex: 2
},
{
  question: "Which star is known as the North Star?",
  answers: ["Sirius", "Betelgeuse", "Polaris", "Rigel"],
  correctIndex: 2
},
{
  question: "Which ancient civilization developed the concept of zero independently?",
  answers: ["Romans", "Greeks", "Mayans", "Egyptians"],
  correctIndex: 2
},
{
  question: "Which physicist proposed the theory of the expanding universe?",
  answers: ["Albert Einstein", "Edwin Hubble", "Georges Lemaître", "Stephen Hawking"],
  correctIndex: 2
}

];