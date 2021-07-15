import React, { useEffect, useState } from 'react'


const myHeader = new Headers({
  "Access-Control-Allow-Origin": "*",
  mode: "no-cors"
})

function Testing() {

  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("items: ", items); 
  },[items]);

  function fetchData(){
    console.log("function is called");
    fetch("https://fly.sportsdata.io/v3/nfl/scores/json/FreeAgents?key=092412122bbc43d9980140fd468e6351")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          result.forEach(element => {
            // console.log(element);
            setItems(prev => {
              return {
                ...prev,
                element
              }
            });
          });
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  return (
    <div>
      {isLoaded ? <p>Everything is loaded</p> : <button onClick={fetchData}>fetch data</button>}
      {error && <h3>{error}</h3>}
    </div>
  )
}

export default Testing
