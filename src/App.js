import React from 'react';
import './App.css';

function App() {
    const [checkedNieuwsbrief, toggleCheckedNieuwsbrief] = React.useState(false);
    const [leeftijd, setLeeftijd] = React.useState(0);
    const [naam, setNaam] = React.useState('');
    const [opmerking, setOpmerking] = React.useState('');

    function handleClick(e){
        e.preventDefault();
        console.log(`Naam: ${naam}, leeftijd: ${leeftijd}, opmerking: ${opmerking}, nieuwsbrief: ${checkedNieuwsbrief}`);
    }
  return (
    <div>
      <form onSubmit={handleClick}>
              <h2>Gegevens</h2>
              Naam:
                <input
                    type="text"
                    placeholder="Typ hier jouw naam"
                    value={naam}
                    onChange={(e) =>setNaam(e.target.value)}
                    >
                </input>

              Leeftijd:
              <input
                  type="number"
                  value={leeftijd}
                  onChange={(e) =>setLeeftijd(e.target.value)}
              >
              </input>

          <h2>Jouw Review</h2>
          Opmerkingen:
          <textarea
              type="text"
              placeholder="Wat vond je van het recept?"
              cols="40"
              rows="5"
              onChange={(e) =>setOpmerking(e.target.value)}
          >
          </textarea>

          <label htmlFor="inschrijven-nieuwsbrief">

              <input
              type="checkbox"
              name="inschrijven-nieuwsbrief"
              id="inschrijven-nieuwsbrief"
              onChange={() => toggleCheckedNieuwsbrief(!checkedNieuwsbrief)}
             >
             </input>
              Ik schrijf me in voor de nieuwsbrief!
          </label>

          <button
            type="submit"

          >
            Versturen
          </button>

      </form>
    </div>
  );
}

export default App;
