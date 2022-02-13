import { BASE_URL, CHARACTERS, POPULATE } from "./utils/API";
import axios from "axios";
import { useState, useEffect } from "react";


function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(BASE_URL + CHARACTERS + POPULATE)
      .then((res) => setData(res.data.data))
  }, []);

  // const abilities = data[0].attributes.abilities.data
  // data.length > 0 && console.log(data[0].attributes.abilities.data)
  return (
    <div className="App">
      {data.length > 0 ? data.map(d => {
        return (
          <h1>{d.attributes.name}</h1>
        )
      }) : null }
      {data.length > 0 ? data[0].attributes.abilities.data.map(d => (
        <h1>{d.attributes.Name}</h1>
      )) : null }
    </div>
  );
}

export default App;
