import './App.css';
import  { useState } from 'react'
import { Countries } from './components/CountriesComponent';
import { Teams } from './components/TeamsComponent'; 
import { ScoreTable } from './components/ScoreTableComponent';
import { Players } from './components/PlayersComponent';
import { Venues } from './components/VenuesComponent';
import { Matches } from './components/MatchesComponent' 
import { Results } from './components/ResultsComponent'



function App() {

  const[tab,setTab] = useState("countries")

  function tabHandler(tab){
    setTab(tab);
  }

  return (
    <div className="App">
      <div>
       <button onClick={() => tabHandler("countries")}>Countries</button>
       <button onClick={() => tabHandler("teams")}>Teams</button>
       <button onClick={() => tabHandler("players")}> Players </button>
       <button onClick={() => tabHandler("venues")}>Venues</button>
       <button onClick={() => tabHandler("matches")}>Matches</button>
       <button onClick={() => tabHandler("results")}>Results</button>
       <button onClick={() => tabHandler("scoretable")}>Score Table</button>
       </div>
       <div>
       {
         tab === "countries" && <Countries />
       }
       {
         tab === "teams" && <Teams/>
       }
          {
         tab === "players" && <Players/>
       }
          {
         tab === "venues" && <Venues/>
       }
          {
         tab === "matches" && <Matches/>
       }
          {
         tab === "results" && <Results/>
       }
          {
         tab === "scoretable" && <ScoreTable/>
       }
       </div>
    </div>
    
  );
}

export default App;
