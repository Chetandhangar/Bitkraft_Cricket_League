import { useBitkraft } from '../contexts/bitkraft-context'

export function ScoreTable() {

  const { TABLE } = useBitkraft();
  console.log(TABLE)

    return (
      <div className="App">
       <div>
          <table>
            <caption>Tournament Points Table</caption>
            <tbody>
            <tr>
              <th>Team</th>
              <th>Played</th>
              <th>Win(s)</th>
              <th>Loss(es)</th>
              <th>Draw(s)</th>
              <th>Points</th>
            </tr>
            {TABLE.map((table)=>(
              <tr key={table.id}>
                <td>{table.team_name}</td>
                <td>{table.matches_played}</td>
                <td>{table.matches_won}</td>
                <td>{table.matches_loss}</td>
                <td>{table.matches_draw}</td>
                <td>{table.points}</td>
              </tr>
            ))}
            </tbody>
          </table>
       </div>
      </div>
    );
  }