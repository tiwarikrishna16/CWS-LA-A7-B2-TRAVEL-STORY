const scenes = [
  {
    title:"Welcome to Austria", location:"Austria · The heart of Europe", category:"THE GRAND INTRODUCTION", duration:"00:08",
    image:"https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1800&q=88",
    description:"The first glimpse is unforgettable: dramatic mountain peaks, peaceful lakes and elegant cities. This is where our Austrian story begins.",
    quote:"“Every great journey starts with a little curiosity.”",
    options:[
      {label:"The postcard view",title:"A first look at Austria",text:"Open with a wide alpine landscape and let the title reveal itself slowly, like the first page of a travel journal."},
      {label:"Set the mood",title:"A cinematic beginning",text:"Use warm golden light, a gentle zoom and soft instrumental music to create a welcoming travel-film atmosphere."},
      {label:"Travel note",title:"Why Austria?",text:"Austria is known for its Alpine scenery, historic cities, classical music and distinctive food traditions."}
    ]
  },
  {
    title:"A day in Vienna", location:"Vienna · The capital city", category:"CITY EXPLORATION", duration:"00:10",
    image:"https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1800&q=88",
    description:"Our journey begins in Vienna, where grand palaces, graceful streets and lively coffee houses tell stories of the past and present.",
    quote:"“In Vienna, history is around every corner.”",
    options:[
      {label:"Palace visit",title:"Schönbrunn Palace",text:"Explore the former imperial summer residence, its grand rooms and beautifully planned gardens."},
      {label:"Old-town walk",title:"St. Stephen’s Cathedral",text:"Wander through the historic centre and admire the colourful roof and Gothic architecture of this city landmark."},
      {label:"City rhythm",title:"A ride on the tram",text:"See the city at street level, passing elegant buildings, neighbourhood cafés and busy squares."}
    ]
  },
  {
    title:"Culture & traditions", location:"Salzburg · Music and heritage", category:"CULTURE & HERITAGE", duration:"00:12",
    image:"https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1800&q=88",
    description:"Austria's cultural life is rich with classical music, seasonal celebrations, regional crafts and traditional clothing such as the Dirndl and Lederhosen.",
    quote:"“Tradition gives every place its own voice.”",
    options:[
      {label:"Music",title:"A classical sound",text:"Introduce Austria's musical heritage with a reference to composers such as Mozart and the country's concert traditions."},
      {label:"Traditional dress",title:"Dirndl & Lederhosen",text:"Show traditional outfits worn at folk celebrations and regional events. Styles and customs vary by region."},
      {label:"Local celebration",title:"A festive atmosphere",text:"Feature a market, folk music or seasonal festival to show how communities celebrate together."}
    ]
  },
  {
    title:"A taste of Austria", location:"Across Austria · Local flavours", category:"FOOD & FLAVOUR", duration:"00:12",
    image:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1800&q=88",
    description:"Austrian food is made for slow moments and good company. From savoury classics to delicate pastries, every stop brings a new flavour.",
    quote:"“The best souvenirs are sometimes the ones you can taste.”",
    options:[
      {label:"Savoury classic",title:"Wiener Schnitzel",text:"A thin, breaded cutlet traditionally fried until golden. It is one of Austria's best-known dishes."},
      {label:"Sweet treat",title:"Apfelstrudel",text:"A delicate pastry filled with apples, cinnamon and raisins—especially lovely with a warm drink."},
      {label:"Café favourite",title:"Sachertorte",text:"A famous Viennese chocolate cake traditionally served with whipped cream."}
    ]
  },
  {
    title:"The magic of Hallstatt", location:"Hallstatt · Upper Austria", category:"VILLAGE & LAKE", duration:"00:12",
    image:"https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1800&q=88",
    description:"A lakeside village framed by mountains, Hallstatt feels like a storybook brought to life. Pause by the water and take in the quiet beauty.",
    quote:"“Some places invite you to stop, breathe and simply look.”",
    options:[
      {label:"Lakeside stroll",title:"Reflections on the lake",text:"Take in the pastel houses, calm water and mountain reflections from the village waterfront."},
      {label:"Village lanes",title:"A walk through history",text:"Explore narrow lanes, traditional buildings and viewpoints around this historic lakeside settlement."},
      {label:"Photo stop",title:"The perfect postcard",text:"Capture the village with the lake and mountains in the background, while respecting residents and quiet areas."}
    ]
  },
  {
    title:"Adventure in the Alps", location:"The Austrian Alps · Nature", category:"OUTDOOR ADVENTURE", duration:"00:12",
    image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=88",
    description:"Beyond the cities, the Austrian Alps open up a world of fresh air and wide-open views. Depending on the season, there are trails, ski slopes and mountain lifts to explore.",
    quote:"“Go where the air feels fresh and the view goes on forever.”",
    options:[
      {label:"Winter fun",title:"A day on the slopes",text:"Show skiing or snowboarding in an Alpine resort during the winter season."},
      {label:"Summer trail",title:"Walk above the valley",text:"Explore marked hiking paths and scenic viewpoints during warmer months."},
      {label:"Mountain lift",title:"Rise above it all",text:"Take a cable car for sweeping views of peaks, valleys and Alpine villages."}
    ]
  },
  {
    title:"Everyday local life", location:"Vienna & beyond · Local moments", category:"LOCAL EXPERIENCES", duration:"00:14",
    image:"https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1800&q=88",
    description:"The heart of travel is often found in ordinary moments: a slow coffee, a market conversation, a tram ride or a friendly local recommendation.",
    quote:"“Travel is about the people and moments along the way.”",
    options:[
      {label:"Coffee house",title:"Stay for another coffee",text:"Experience the relaxed atmosphere of a traditional Viennese coffee house, where conversation is part of the ritual."},
      {label:"Market visit",title:"Browse local finds",text:"Discover fresh produce, flowers, regional treats and small stalls at a neighbourhood market."},
      {label:"Street wander",title:"Follow the city rhythm",text:"Ride a tram, explore a side street and notice the everyday details that make a place feel real."}
    ]
  },
  {
    title:"Memories to keep", location:"Austria · Until next time", category:"THE FAREWELL", duration:"00:10",
    image:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1800&q=88",
    description:"From the music-filled streets of Vienna to the still waters of Hallstatt and the heights of the Alps, Austria leaves us with memories worth carrying home.",
    quote:"“A journey ends, but its stories stay with us.”",
    options:[
      {label:"Favourite moment",title:"What will you remember?",text:"Choose your favourite scene—culture, food, a city discovery or a mountain view—and make it the final highlight."},
      {label:"Travel reflection",title:"A journey worth taking",text:"Close with a short reflection about what you discovered and how the journey changed your view of Austria."},
      {label:"Credits",title:"The people behind the diary",text:"Add your name, roll number, batch and group number. Finish with: Thank you for travelling with me!"}
    ]
  }
];

const sceneList = document.getElementById("sceneList");
const sceneDots = document.getElementById("sceneDots");
let currentScene = 0;
let currentOption = 0;

function renderNavigation(){
  sceneList.innerHTML = "";
  sceneDots.innerHTML = "";
  scenes.forEach((scene,index)=>{
    const button = document.createElement("button");
    button.className = "scene-link" + (index===currentScene ? " active":"");
    button.innerHTML = `<span class="scene-index">${String(index+1).padStart(2,"0")}</span><span class="scene-name">${scene.title}<span class="scene-mini">${scene.category.toLowerCase()}</span></span>`;
    button.addEventListener("click",()=>showScene(index));
    sceneList.appendChild(button);

    const dot = document.createElement("button");
    dot.className = "scene-dot" + (index===currentScene ? " active":"");
    dot.setAttribute("aria-label",`Go to scene ${index+1}`);
    dot.addEventListener("click",()=>showScene(index));
    sceneDots.appendChild(dot);
  });
}

function renderOptions(){
  const scene = scenes[currentScene];
  const pills = document.getElementById("optionPills");
  pills.innerHTML = "";
  scene.options.forEach((option,index)=>{
    const button = document.createElement("button");
    button.className = "option-pill" + (index===currentOption ? " active":"");
    button.textContent = option.label;
    button.addEventListener("click",()=>{
      currentOption=index;
      renderOptions();
    });
    pills.appendChild(button);
  });
  const selected = scene.options[currentOption];
  document.getElementById("optionLabel").textContent = "A CLOSER LOOK · " + String(currentOption+1).padStart(2,"0");
  document.getElementById("optionTitle").textContent = selected.title;
  document.getElementById("optionText").textContent = selected.text;
}

function showScene(index){
  currentScene = (index + scenes.length) % scenes.length;
  currentOption = 0;
  const scene = scenes[currentScene];
  const image = document.getElementById("sceneImage");
  image.style.opacity = "0.25";
  window.setTimeout(()=>{
    image.src = scene.image;
    image.alt = scene.title + " – Austria travel scene";
    image.style.opacity = "1";
  },120);
  document.getElementById("sceneCategory").textContent = scene.category;
  document.getElementById("sceneDuration").textContent = scene.duration;
  document.getElementById("sceneNumber").textContent = "CHAPTER " + String(currentScene+1).padStart(2,"0");
  document.getElementById("sceneTitle").textContent = scene.title;
  document.getElementById("sceneLocation").textContent = scene.location;
  document.getElementById("sceneDescription").textContent = scene.description;
  document.getElementById("sceneQuote").textContent = scene.quote;
  document.getElementById("sceneCount").textContent = String(currentScene+1).padStart(2,"0") + " / 08";
  document.getElementById("journeyProgress").style.width = ((currentScene+1)/scenes.length*100)+"%";
  document.getElementById("prevScene").disabled = currentScene===0;
  renderNavigation();
  renderOptions();
}

document.getElementById("prevScene").addEventListener("click",()=>showScene(currentScene-1));
document.getElementById("nextScene").addEventListener("click",()=>showScene(currentScene+1));
document.getElementById("nextSceneBottom").addEventListener("click",()=>showScene(currentScene+1));
showScene(0);
