
import './App.css'

function App() {
  
  let counter = 5;

  const addValue = ()=>{
    counter = counter+1;
    console.log("hii" , counter)
  }


  return (
    <>
    <h1>{counter}</h1>

    <button className='add'
    onClick={addValue}
    
    
    >add value</button>
    <button className='remove'>remove vale</button>


      
    </>
  )
}

export default App
