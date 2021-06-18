import './App.css';
import { Header } from './components/HeaderComponent';
import { Countries } from './components/CountriesComponent';
import { Teams } from './components/teams/TeamsComponent';
import {RenderTeamDetails} from './components/teams/TeamDetailsComponent' 
import { ScoreTable } from './components/ScoreTableComponent';
import { Players } from './components/players/PlayersComponent'
import { RenderPlayerDetails } from './components/players/PlayerDetailsComponent'
import { Venues } from './components/venues/VenuesComponent';
import { RenderVenueDetails } from './components/venues/VenueDetailsComponent'
import { Matches } from './components/matches/MatchesComponent' ;
import { RenderMatchDetails } from './components/matches/MacthSummaryComponent';
import { useTab } from './contexts/tab-context';





function App() {

  const { tab } = useTab();
 

  return (
    <div className="App">
      <Header />
       <br />
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
         tab === "table" && <ScoreTable/>
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
        {
          tab === 'match_summary' && <RenderMatchDetails />
        }
       </div>
    </div>
    
  );
}

export default App;
