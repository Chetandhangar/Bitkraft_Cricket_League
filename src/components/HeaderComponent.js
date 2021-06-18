import './styles.css';
import { useTab } from '../contexts/tab-context';

export function Header(){

    const {setTab} = useTab()

    function tabHandler(tab){
        setTab(tab)
    }

    return(
        <div className="header">
        <header className="league">
          <h1 className="league-name">BitKraft Cricket League</h1>
        <div className="tabs">
         <button className="btn-tab" onClick={() => tabHandler("countries")}>Countries</button>
         <button className="btn-tab" onClick={() => tabHandler("teams")}>Teams</button>
         <button className="btn-tab" onClick={() => tabHandler("players")}> Players </button>
         <button className="btn-tab" onClick={() => tabHandler("venues")}>Venues</button>
         <button className="btn-tab" onClick={() => tabHandler("matches")}>Matches</button>
         <button className="btn-tab" onClick={() => tabHandler("table")}>Score Table</button>
         </div>
         </header>
       </div>  
    );
}