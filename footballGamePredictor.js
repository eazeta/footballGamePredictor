/*
Randomly picks two football teams
Randomly says if it's friendly or for Premier League Cup
Randomly says if it's a home or away game
Randomly generates a score
Outputs who won
*/
// List of Football teams (premier league)
let footballTeams = [
	'Manchester United',
	'Liverpool',
	'Chelsea',
	'Manchester City',
	'Tottenham Hotspurs',
	'Aston Villa',
	'Arsenal',
	'West Ham United',
	'Newcastle United',
	'Leicester City',
	'Everton',
	'Leeds United',
	'Brentford',
	'Southampton',
];

const possibleScores = [0, 1, 2, 3, 4, 5];
const friendlyOrCompetitive = ['Friendly', 'Competitive'];
const homeOrAway = ['Home', 'Away'];

//Randomly selects an element from an array
const randomlySelect = array => {
	const position = Math.floor(Math.random() * array.length);
	return array[position];
};

const footballGame = () => {
	const firstTeam = randomlySelect(footballTeams);
	let secondTeam = randomlySelect(footballTeams);
	while (firstTeam === secondTeam) {
		secondTeam = randomlySelect(footballTeams);
	}
	const isFriendly = randomlySelect(friendlyOrCompetitive);
	const isHome = randomlySelect(homeOrAway);
	const firstTeamScore = randomlySelect(possibleScores);
	const secondTeamScore = randomlySelect(possibleScores);
	if (firstTeamScore > secondTeamScore) {
		prediction = 'win against ';
	} else if (firstTeamScore < secondTeamScore) {
		prediction = 'lose to ';
	} else if (firstTeamScore === secondTeamScore) {
		prediction = 'draw with ';
	}

	console.log(
		firstTeam +
			' will ' +
			prediction +
			secondTeam +
			' in a ' +
			isFriendly +
			' match. The score will be: ' +
			firstTeamScore +
			'-' +
			secondTeamScore
	);
};

footballGame();
