import './App.css';
import { Countries } from './components/CountriesComponent';
import { Teams } from './components/teams/TeamsComponent';
import {RenderTeamDetails} from './components/teams/TeamDetailsComponent' 
import { ScoreTable } from './components/ScoreTableComponent';
import { Players } from './components/players/PlayersComponent'
import { RenderPlayerDetails } from './components/players/PlayerDetailsComponent'
import { Venues } from './components/venues/VenuesComponent';
import { RenderVenueDetails } from './components/venues/VenueDetailsComponent'
import { Matches } from './components/MatchesComponent' ;
import { Results } from './components/ResultsComponent';

import { useTab } from './contexts/tab-context';





function App() {

  const { tab, setTab } = useTab();
  

  function tabHandler(tab){
    setTab(tab);
  }

  return (
    <div className="App">
      <header className="header">
        Give me one day i will make it more beatiful and everthing proper.
        <h1 className="league-name">BitKraft Cricket League</h1>
      <div className="tabs">
       <button className="btn-tab" onClick={() => tabHandler("countries")}>Countries</button>
       <button className="btn-tab" onClick={() => tabHandler("teams")}>Teams</button>
       <button className="btn-tab" onClick={() => tabHandler("players")}> Players </button>
       <button className="btn-tab" onClick={() => tabHandler("venues")}>Venues</button>
       <button className="btn-tab" onClick={() => tabHandler("matches")}>Matches</button>
       <button className="btn-tab" onClick={() => tabHandler("results")}>Results</button>
       <button className="btn-tab" onClick={() => tabHandler("scoretable")}>Score Table</button>
       </div>
       </header>
       
       <div className="components">
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
       {
         tab === 'team_details' && <RenderTeamDetails />
       }
       {
         tab === 'player_details' && <RenderPlayerDetails />
       }
       {
         tab === 'venue_details' && <RenderVenueDetails />
       }
        
       </div>
    </div>
    
  );
}

export default App;
