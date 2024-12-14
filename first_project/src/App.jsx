import Card from './card.jsx'
import Button from './button.jsx'
import pic from './assets/rizz.png'
import pic2 from './assets/patrick.png'
import Greating from './usergreating.jsx'
import List from './List.jsx'

function App(){


  const fruits = [{id : 3 , name : "apple" , price : 96} ,
    {id : 2 ,name : "banana" , price : 111} ,
    {id : 1 ,name : "kiwi" , price : 46} ,
    {id : 4 ,name : "water melon" , price : 57}];


    const cars = [{id : 1 , name : "Mercedes" , price : 100000},
                  {id : 2 , name : "BMW" , price : 90000},
                  {id : 3 , name : "Audi" , price : 110000},
                  {id : 4 , name : "Porsche" , price : 250000},
                 ]


  return(
    <>
     <Greating logged ={true} name="Adel"/>
    <Card name = "rizzler" pic = {pic} paragraph = "Math is so confusing. It's always talking about X and Y, never about U and I."/>
    <Card name = "ching chong" pic = {pic2} paragraph = "有一次我試著和一個九歲的女孩見面時被抓到"/>\
    <Card/>
    <Button/>
   {fruits.length > 0 && <List items = {fruits} /*category = "Fruits"*//> }
   {cars.length > 0 && <List items = {cars} category = "Vehicles"/> }
    </>
  );
}

export default App