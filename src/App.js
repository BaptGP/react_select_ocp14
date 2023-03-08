import { useState } from "react";
import "./App.css";
import Select from "./lib/components/Select";


const array = [
  {
    value : "fromage",
    title : "Fromage"
  },
  {
    value : "chocolat",
    title : "Chocolat"
  },
]


function App(){
  const [state, setState] = useState(array[0].value)
  return (
    <Select options={array} label="course" title="Liste de courses" stateValue={state} onChangeValue={setState}/>
  )
}

export default App;
