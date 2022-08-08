
let dogFood=[
{
name:'Taste of the wild',
price:250,
weight:'10 KG',
flavor:'fish',
img:'TOTW.jpeg'
},
{
name:'Happy Dog',
price:280,
weight:'8 KG',
flavor:'Salmon',
img:'HD.jpeg'
},
{
name:'Royal Canin',
price:320,
weight:'15 KG',
flavor:'Chicken ',
img:'RC.jpeg'
},
{
name:'Monge',
price:100,
weight:'2 KG',
flavor:'Beef',
img:'Monge.jpeg'
},
{
name:'Simba',
price:200,
weight:'10 KG',
flavor:'Duck',
img:'Simba.jpeg'
},
];

// get all kinds
export function getDogFood(){
    return dogFood
}

// get one kind 
export function getSingleFood(name){
    return dogFood.find(food=> food.name === name)
}

// delete kind
export function deleteFood(name){
    dogFood = dogFood.filter((food)=> food.name !== name)
}
