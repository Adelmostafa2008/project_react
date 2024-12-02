import Card from './card.jsx'
import Button from './button.jsx'
import pic from './assets/rizz.png'
import pic2 from './assets/patrick.png'
import Greating from './usergreating.jsx'

function App(){
  return(
    <>
     <Greating logged ={false} name="Adel"/>
    <Card name = "rizzler" pic = {pic} paragraph = "Math is so confusing. It's always talking about X and Y, never about U and I."/>
    <Card name = "ching chong" pic = {pic2} paragraph = "有一次我試著和一個九歲的女孩見面時被抓到"/>\
    <Card/>
      <Button />
      <button>Mohamed</button>
   
    </>
  );
}

export default App