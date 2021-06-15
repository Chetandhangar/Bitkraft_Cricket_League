import {useBitkraft} from '../contexts/bitkraft-context';

export function Countries() {
  const{ COUNTRIES } = useBitkraft();
  console.log(COUNTRIES);
    return (
      <div className="country-component">
        <div>
          {COUNTRIES.map((country)=>(
            <div
            key={country.id}
            className="country-card">
            <img src={country.image_url} alt="Coutry-Flag"></img>
              <h1>{country.name}</h1>
              <h2><small>TEAM NAME :</small> {country.team_name}</h2>
              <h2><small> BOARD NAME :</small> {country.board_name}</h2>
              <h2><small> AFFILIATION :</small> {country.affiliation}</h2>
              <p>{country.description}</p>
            </div>
          ))}
          </div>
      </div>
    );
  }