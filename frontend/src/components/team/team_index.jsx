import React from 'react';
import '../../reset.css';
import './team.css';
import '../score/team-logos.css';
import { Link } from 'react-router-dom';

export default function team_index({ fetchTeamProfile, clearAll }) {
  let sports = [
    {
      sportName: 'NBA',
      teams: [
        {
          name: 'Atlanta Hawks',
          id: '583ecb8f-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'Boston Celtics',
          id: '583eccfa-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'Brooklyn Nets',
          id: '583ec9d6-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'Charlotte Hornets',
          id: '583ec97e-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'Chicago Bulls',
          id: '583ec5fd-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'Cleveland Cavaliers',
          id: '583ec773-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'Dallas Mavericks',
          id: '583ecf50-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'Denver Nuggets',
          id: '583ed102-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'Detroit Pistons',
          id: '583ec928-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'Golden State Warriors',
          id: '583ec825-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'Houston Rockets',
          id: '583ecb3a-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'Indiana Pacers',
          id: '583ec7cd-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'LA Clippers',
          id: '583ecdfb-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'Los Angeles Lakers',
          id: '583ecae2-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'Memphis Grizzlies',
          id: '583eca88-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'Miami Heat',
          id: '583ecea6-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'Milwaukee Bucks',
          id: '583ecefd-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'Minnesota Timberwolves',
          id: '583eca2f-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'New Orleans Pelicans',
          id: '583ecc9a-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'New York Knicks',
          id: '583ec70e-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'Oklahoma City Thunder',
          id: '583ecfff-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'Orlando Magic',
          id: '583ed157-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'Philadelphia 76ers',
          id: '583ec87d-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'Phoenix Suns',
          id: '583ecfa8-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'Portland Trail Blazers',
          id: '583ed056-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'Sacramento Kings',
          id: '583ed0ac-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'San Antonio Spurs',
          id: '583ecd4f-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'Toronto Raptors',
          id: '583ecda6-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'Utah Jazz',
          id: '583ece50-fb46-11e1-82cb-f4ce4684ea4c',
        },
        {
          name: 'Washington Wizards',
          id: '583ec8d4-fb46-11e1-82cb-f4ce4684ea4c',
        },
      ],
    },
    {
      sportName: 'NFL',
      teams: [
        {
          name: 'Arizona Cardinals',
          id: 'de760528-1dc0-416a-a978-b510d20692ff',
        },
        {
          name: 'Atlanta Falcons',
          id: 'e6aa13a4-0055-48a9-bc41-be28dc106929',
        },
        {
          name: 'Baltimore Ravens',
          id: 'ebd87119-b331-4469-9ea6-d51fe3ce2f1c',
        },
        {
          name: 'Buffalo Bills',
          id: '768c92aa-75ff-4a43-bcc0-f2798c2e172',
        },
        {
          name: 'Carolina Panthers',
          id: 'f14bf5cc-9a82-4a38-bc15-d39f75ed5314',
        },
        {
          name: 'Chicago Bears',
          id: '7b112545-38e6-483c-a55c-96cf6ee49cb8',
        },
        {
          name: 'Cincinnati Bengals',
          id: 'ad4ae08f-d808-42d5-a1e6-e9bc4e34d123',
        },
        {
          name: 'Cleveland Browns',
          id: 'd5a2eb42-8065-4174-ab79-0a6fa820e35e',
        },
        {
          name: 'Dallas Cowboys',
          id: 'e627eec7-bbae-4fa4-8e73-8e1d6bc5c060',
        },
        {
          name: 'Denver Broncos',
          id: 'ce92bd47-93d5-4fe9-ada4-0fc681e6caa0',
        },
        {
          name: 'Detroit Lions',
          id: 'c5a59daa-53a7-4de0-851f-fb12be893e9e',
        },
        {
          name: 'Green Bay Packers',
          id: 'a20471b4-a8d9-40c7-95ad-90cc30e46932',
        },
        {
          name: 'Houston Texans',
          id: '82d2d380-3834-4938-835f-aec541e5ece7',
        },
        {
          name: 'Indianapolis Colts',
          id: '82cf9565-6eb9-4f01-bdbd-5aa0d472fcd9',
        },
        {
          name: 'Jacksonville Jaguars',
          id: 'f7ddd7fa-0bae-4f90-bc8e-669e4d6cf2de',
        },
        {
          name: 'Kansas City Chiefs',
          id: '6680d28d-d4d2-49f6-aace-5292d3ec02c2',
        },
        {
          name: 'Las Vegas Raiders',
          id: '7d4fcc64-9cb5-4d1b-8e75-8a906d1e1576',
        },
        {
          name: 'Los Angeles Chargers',
          id: '1f6dcffb-9823-43cd-9ff4-e7a8466749b5',
        },
        {
          name: 'Los Angeles Rams',
          id: '2eff2a03-54d4-46ba-890e-2bc3925548f3',
        },
        {
          name: 'Miami Dolphins',
          id: '4809ecb0-abd3-451d-9c4a-92a90b83ca06',
        },
        {
          name: 'Minnesota Vikings',
          id: '33405046-04ee-4058-a950-d606f8c30852',
        },
        {
          name: 'New England Patriots',
          id: '97354895-8c77-4fd4-a860-32e62ea7382a',
        },
        {
          name: 'New Orleans Saints',
          id: '0d855753-ea21-4953-89f9-0e20aff9eb73',
        },
        {
          name: 'New York Giants',
          id: '04aa1c9d-66da-489d-b16a-1dee3f2eec4d',
        },
        {
          name: 'New York Jets',
          id: '5fee86ae-74ab-4bdd-8416-42a9dd9964f3',
        },
        {
          name: 'Philadelphia Eagles',
          id: '386bdbf9-9eea-4869-bb9a-274b0bc66e80',
        },
        {
          name: 'Pittsburgh Steelers',
          id: 'cb2f9f1f-ac67-424e-9e72-1475cb0ed398',
        },
        {
          name: 'San Francisco 49ers',
          id: 'f0e724b0-4cbf-495a-be47-013907608da9',
        },
        {
          name: 'Seattle Seahawks',
          id: '3d08af9e-c767-4f88-a7dc-b920c6d2b4a8',
        },
        {
          name: 'Tampa Bay Buccaneers',
          id: '4254d319-1bc7-4f81-b4ab-b5e6f3402b69',
        },
        {
          name: 'Tennessee Titans',
          id: 'd26a1ca5-722d-4274-8f97-c92e49c96315',
        },
        {
          name: 'Washington Football Team',
          id: '22052ff7-c065-42ee-bc8f-c4691c50e624',
        },
      ],
    },
    {
      sportName: 'MLB',
      teams: [
        {
          name: 'Arizona Diamondbacks',
          id: '25507be1-6a68-4267-bd82-e097d94b359b',
        },
        {
          name: 'Atlanta Braves',
          id: '12079497-e414-450a-8bf2-29f91de646bf',
        },
        {
          name: 'Baltimore Orioles',
          id: '75729d34-bca7-4a0f-b3df-6f26c6ad3719',
        },
        {
          name: 'Boston Red Sox',
          id: '93941372-eb4c-4c40-aced-fe3267174393',
        },
        {
          name: 'Chicago White Sox',
          id: '47f490cd-2f58-4ef7-9dfd-2ad6ba6c1ae8',
        },
        {
          name: 'Chicago Cubs',
          id: '55714da8-fcaf-4574-8443-59bfb511a524',
        },
        {
          name: 'Cincinnati Reds',
          id: 'c874a065-c115-4e7d-b0f0-235584fb0e6f',
        },
        {
          name: 'Cleveland Indians',
          id: '80715d0d-0d2a-450f-a970-1b9a3b18c7e7',
        },
        {
          name: 'Colorado Rockies',
          id: '29dd9a87-5bcc-4774-80c3-7f50d985068b',
        },
        {
          name: 'Detroit Tigers',
          id: '575c19b7-4052-41c2-9f0a-1c5813d02f99',
        },
        {
          name: 'Houston Astros',
          id: 'eb21dadd-8f10-4095-8bf3-dfb3b779f107',
        },
        {
          name: 'Kansas City Royals',
          id: '833a51a9-0d84-410f-bd77-da08c3e5e26e',
        },
        {
          name: 'Los Angeles Angels',
          id: '4f735188-37c8-473d-ae32-1f7e34ccf892',
        },
        {
          name: 'Los Angeles Dodgers',
          id: 'ef64da7f-cfaf-4300-87b0-9313386b977c',
        },
        {
          name: 'Miami Marlins',
          id: '03556285-bdbb-4576-a06d-42f71f46ddc5',
        },
        {
          name: 'Milwaukee Brewers',
          id: 'dcfd5266-00ce-442c-bc09-264cd20cf455',
        },
        {
          name: 'Minnesota Twins',
          id: 'aa34e0ed-f342-4ec6-b774-c79b47b60e2d',
        },
        {
          name: 'New York Mets',
          id: 'f246a5e5-afdb-479c-9aaa-c68beeda7af6',
        },
        {
          name: 'New York Yankees',
          id: 'a09ec676-f887-43dc-bbb3-cf4bbaee9a18',
        },
        {
          name: 'Oakland Athletics',
          id: '27a59d3b-ff7c-48ea-b016-4798f560f5e1',
        },
        {
          name: 'Philadelphia Phillies',
          id: '2142e1ba-3b40-445c-b8bb-f1f8b1054220',
        },
        {
          name: 'Pittsburgh Pirates',
          id: '481dfe7e-5dab-46ab-a49f-9dcc2b6e2cfd',
        },
        {
          name: 'San Diego Padres',
          id: 'd52d5339-cbdd-43f3-9dfa-a42fd588b9a3',
        },
        {
          name: 'San Francisco Giants',
          id: 'a7723160-10b7-4277-a309-d8dd95a8ae65',
        },
        {
          name: 'Seattle Mariners',
          id: '43a39081-52b4-4f93-ad29-da7f329ea960',
        },
        {
          name: 'St. Louis Cardinals',
          id: '44671792-dc02-4fdd-a5ad-f5f17edaa9d7',
        },
        {
          name: 'Tampa Bay Rays',
          id: 'bdc11650-6f74-49c4-875e-778aeb7632d9',
        },
        {
          name: 'Texas Rangers',
          id: 'd99f919b-1534-4516-8e8a-9cd106c6d8cd',
        },
        {
          name: 'Toronto Blue Jays',
          id: '1d678440-b4b1-4954-9b39-70afb3ebbcfa',
        },
        {
          name: 'Washington Nationals',
          id: 'd89bed32-3aee-4407-99e3-4103641b999a',
        },
      ],
    },
    {
      sportName: 'NHL',
      teams: [
        {
          name: 'Anaheim Ducks',
          id: '441862de-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'Arizona Coyotes',
          id: '44153da1-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'Boston Bruins',
          id: '4416ba1a-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'Buffalo Sabres',
          id: '4416d559-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'Calgary Flames',
          id: '44159241-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'Carolina Hurricanes',
          id: '44182a9d-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'Chicago Blackhawks',
          id: '4416272f-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'Colorado Avalanche',
          id: '4415ce44-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'Columbus Blue Jackets',
          id: '44167db4-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'Dallas Stars',
          id: '44157522-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'Detroit Red Wings',
          id: '44169bb9-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'Edmonton Oilers',
          id: '4415ea6c-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'Florida Panthers',
          id: '4418464d-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'Los Angeles Kings',
          id: '44151f7a-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'Minnesota Wild',
          id: '4416091c-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'Montreal Canadiens',
          id: '441713b7-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'Nashville Predators',
          id: '441643b7-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'New Jersey Devils',
          id: '44174b0c-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'New York Islanders',
          id: '441766b9-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'New York Rangers',
          id: '441781b9-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'Ottawa Senators',
          id: '4416f5e2-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'Philadelphia Flyers',
          id: '44179d47-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'Pittsburgh Penguins',
          id: '4417b7d7-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'San Jose Sharks',
          id: '44155909-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'St. Louis Blues',
          id: '441660ea-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'Tampa Bay Lightning',
          id: '4417d3cb-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'Toronto Maple Leafs',
          id: '441730a9-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'Vancouver Canucks',
          id: '4415b0a7-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'Vegas Golden Knights',
          id: '42376e1c-6da8-461e-9443-cfcf0a9fcc4d',
        },
        {
          name: 'Washington Capitals',
          id: '4417eede-0f24-11e2-8525-18a905767e44',
        },
        {
          name: 'Winnipeg Jets',
          id: '44180e55-0f24-11e2-8525-18a905767e44',
        },
      ],
    },
  ];
  const eachSport = sports.map(sport => {
    return (
      <div className="sport-containers" key={sport.sportName}>
        <Link to={`/sports/${sport.sportName}`} key={sport.sportName}>
          <h2 className="sport">{sport.sportName}</h2>
        </Link>
        <ul>
          {sport.teams.map(team => (
            <Link to={`/teams/${sport.sportName}/${team.name}`} key={team.name}>
              <li
                className={team.name.split(' ').join('-')}
                onClick={() => fetchTeamProfile(sport.sportName, team.id)}
              >
                {team.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  });
  return (
    <div className="homepage-container">
      <div className="homepage-background">{eachSport}</div>
    </div>
  );
}
