import './App.css';
import { Listing } from './components/Listing';
import jsonData from "./json/Etsy.json";
// import { TypeData } from './components/TypeData';
// import data from './json/Etsy.json';
// const jsonArray = JSON.parse(data);

// // interface Data {
// //   key: string;
// //   value: number;
// // }

// const jsonDataTyped: TypeData[] = jsonData as TypeData[];

// // Теперь вы можете использовать jsonDataTyped, зная его структуру
// console.log(jsonDataTyped);
const jsonString = JSON.stringify(jsonData);
const jsonArray = JSON.parse(jsonString);

function App() {
  return ( 
 
      <Listing items={jsonArray}/>

  );
}

export default App;
