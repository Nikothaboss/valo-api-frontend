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


  return (
    <div className="App">
      {data.length > 0 ? data.map((d, index) => {
        return (
          <div key={index} className="card" >
            <div className="card-top">
              <img className="character-img" src={d.attributes.image_url} alt={d.attributes.name} />
              <h2 className="char-name">{d.attributes.name}</h2>
            </div>
          <div className="abilities-container">
            {d.attributes.abilities.data.map((ability, idx) => (
              <div key={idx} className="abilities">
                <img className="icon" src={ability.attributes.icon_url} alt={ability.attributes.name + "icon"} />
                <h2>{ability.attributes.name}</h2>
              </div>
            ))}
          </div>
          </div>
        )
      }) : null }
      
    </div>
  );
}

export default App;
