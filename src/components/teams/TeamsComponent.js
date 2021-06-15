import {useBitkraft} from '../../contexts/bitkraft-context'
import {useTab} from '../../contexts/tab-context';
import {useCurrentDetails} from '../../contexts/current-context';

export function Teams() {  
  const {TEAMS} = useBitkraft();
  const {setTab} = useTab();
  const { currentTeam,setCurrentTeam} = useCurrentDetails();
  console.log(currentTeam)

  function handleClick(team , tab) {
    console.log(team)
    setCurrentTeam(team);
    setTab(tab);
 }
  return (
      <div className="teams">
        <div>
          {TEAMS.map((team) =>(
            <div key={team.id} className="team-card">
              <h1>{team.name}</h1>
              <img src={team.image_url} alt={team.short_name}></img>
              <h3>{ team.short_name }</h3>
              <p>{team.id }</p>
              <button onClick={()=> handleClick(team, 'team_details')}>See More</button>
            </div>
          ))}
        </div>
      </div>
    );
  }