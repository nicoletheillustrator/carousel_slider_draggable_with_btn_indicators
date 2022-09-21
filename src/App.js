import Slider from './Slider';
import './App.css';
import HighlightCard from './highlightcard';
import hlData from "./hlData"


const highlightInput =  hlData.map(data => {
  return (
    <HighlightCard 
    data={data}
    key={data.id}
    />
  )
})

function App() {
  return (
    <div className="App">
     <Slider data={highlightInput}/>
    </div>
  );
}

export default App;
