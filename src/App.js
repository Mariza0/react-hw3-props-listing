import './App.css';
import { Listing } from './components/Listing';
import jsonData from "./json/Etsy.json";

const jsonString = JSON.stringify(jsonData);
const jsonArray = JSON.parse(jsonString);

function App() {
  return ( 
 
      <Listing items={jsonArray}/>

  );
}

export default App;
