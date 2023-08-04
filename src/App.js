import { useState } from'react'


function App() {
  
  const[showHello,setShowHello]=useState(false)

  let helloDiv=<div></div>
  if(showHello){
helloDiv=<div>Hello!!!!!!</div>
} else{
  helloDiv=<div></div>



}
   return (
    
    
    <div style={{display:"flex"}}>
     <div style={{display:"flex",flexDirection:"column"}}>
     <div onClick={()=>setShowHello(true)}style={{
       width:100,
       height:100,
       padding:80,
       border:'1px solid black',
       cursor:'pointer'
       }}>
        show
      </div> 
      {helloDiv}
   </div>
   
   <div onClick={()=>setShowHello(false)}style={{
       width:100,
       height:100,
       padding:80,
       border:'1px solid black',
       cursor:'pointer'
        }}>
       hide
    </div >
   
   
   
   
   
    </div>


 
 
 
 );

}

export default App;
