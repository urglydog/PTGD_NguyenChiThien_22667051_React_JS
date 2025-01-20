const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  
  // Task 1: Create one player array for each team
  const [players1, players2] = game.players;
  
  // Task 2: Separate goalkeeper and field players for team 1
  const [gk, ...fieldPlayers] = players1;
  
  // Task 3: Create an array containing all players
  const allPlayers = [...players1, ...players2];
  
  // Task 4: Create a final array for team 1 with substitutes
  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  
  // Task 5: Extract odds into separate variables
  const { team1, x: draw, team2 } = game.odds;
  
  // Task 6: Write the printGoals function
  const printGoals = (...players) => {
    console.log(`${players.length} goals were scored by:`);
    players.forEach(player => console.log(player));
  };
  
  // Test printGoals function
  printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich'); // Test 1
  printGoals(...game.scored); // Test 2
  
  // Task 7: Determine which team is more likely to win
  team1 < team2 && console.log('Team 1 is more likely to win');
  team1 > team2 && console.log('Team 2 is more likely to win');
  