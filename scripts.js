const data = [  {    "name": "Baked Salmon",    "ingredients": [{ "name": "Salmon", "amount": 1, "measurement": "l lb" },{ "name": "Pine Nuts", "amount": 1, "measurement": "cup" },{ "name": "Butter Lettuce", "amount": 2, "measurement": "cups" },{ "name": "Yellow Squash", "amount": 1, "measurement": "med" },{ "name": "Olive Oil", "amount": 0.5, "measurement": "cup" },{ "name": "Garlic", "amount": 3, "measurement": "cloves" }    ],    "steps": ["Preheat the oven to 350 degrees.","Spread the olive oil around a glass baking dish.","Add the salmon, garlic, and pine nuts to the dish.","Bake for 15 minutes.","Add the yellow squash and put back in the oven for 30 mins.","Remove from oven and let cool for 15 minutes. Add the lettuce and serve."    ]  },  {    "name": "Fish Tacos",    "ingredients": [{ "name": "Whitefish", "amount": 1, "measurement": "l lb" },{ "name": "Cheese", "amount": 1, "measurement": "cup" },{ "name": "Iceberg Lettuce", "amount": 2, "measurement": "cups" },{ "name": "Tomatoes", "amount": 2, "measurement": "large"},{ "name": "Tortillas", "amount": 3, "measurement": "med" }    ],    "steps": ["Cook the fish on the grill until hot.","Place the fish on the 3 tortillas.","Top them with lettuce, tomatoes, and cheese."    ]  }]

const Recipe = ({name, ingredients, steps})=> elt(
  "section",
  {id: `${name.toLowerCase().replace(/ /g, "-")}`},
  elt("h2", null, `${name}`),
  elt("ul", {class: "ingredients"}, ingredients.map((ingredient, i)=>elt('li', null, ingredient.name))),
  elt("section", 
      {class: "instructions"}, 
      elt('h2', null, "cooking Instructions"),
      steps.map((step, i)=>elt("p", {key:i}, step))
  )
)
const ex = (boo)=>{
  return `${!boo}` 
  };
//const ex = ()=>boo=false;
const Menu = ({ recipes, title})=> {
  const bool = true;
  const ex = (bool)=>{
    return `${!bool}` 
    };
  if(bool){
    return elt(
      "article", {style: 'padding:0; margin:0'},
      elt(
        "header", null, elt("h1", { onclick: ex(bool)}, title)
      ),
      elt("div", {class: "recipes"}, recipes.map((recipe, i)=>
      Recipe({...recipe})))
    )
  }else{
    return elt("div", null, "Hii")
  }
}

render(document.body, Menu({ recipes: data, title:"Delicious Us"}));
