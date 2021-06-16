import { useCurrentDetails} from '../../contexts/current-context';
import { useTab } from '../../contexts/tab-context';

export function RenderMatchDetails(){
    
    const{setTab} = useTab();
    const {currentMatch} = useCurrentDetails();

    function clickHandler(tab){
        setTab(tab)
    }
    return(
        <div>
            <div>
                <button onClick={() => clickHandler('matches')}>Back</button>
            </div>
            <div>
                <h2>{`${currentMatch.home_team_name} ${"  "}`}
                <small>{`${currentMatch.home_team_total_runs} / ${currentMatch.home_team_wickets_loose} (${currentMatch.home_team_total_overs})`}</small></h2>
                <h1>Vs</h1>
                <h2>{`${currentMatch.away_team_name} ${"  "}`}
                <small>{`${currentMatch.away_team_total_runs} / ${currentMatch.away_team_wickets_loose} (${currentMatch.away_team_total_overs})`}</small></h2>
            </div>
            <br/>
            <div>
                <h2><small>Winner : </small> {currentMatch.winner}</h2>
                <h2>Looser : {currentMatch.losser}</h2>
                <h2>Man Of The Match : {currentMatch.man_of_the_match}</h2>
                <h2>Bowler of the Match : {currentMatch.bowler_of_the_match}</h2>
                <h2>Best Feilder : {currentMatch.best_feilder}</h2>
            </div>
        </div>
    )
}