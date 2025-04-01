import { puppyList } from "./data"
import { useState } from "react"
import './app.css'
import './index.css'

function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);


  return (
    <>
      <div className="App">
        <div>
          {featPupId && (
            <div className="card">
              <h2>{featuredPup.name}</h2>
              <ul>
                <li>Age: {featuredPup.age}</li>
                <li>Email: {featuredPup.email}</li>
              </ul>
            </div>
          )}
        </div>
        {puppies &&
          puppies.map((puppy) => {
            return (
              <p
                onClick={() => {
                  setFeatPupId(puppy.id);
                }}
                key={puppy.id}
              >
                {puppy.name}
              </p>
            );
          })}
      </div>
    </>
  );
}

export default App
