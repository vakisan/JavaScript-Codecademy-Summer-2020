const team = {
    _players: [{
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
    },
    {
        firstName: 'Pete',
        lastName: 'Wheeler',
        age: 54
    },
    {
        firstName: 'Chritiano',
        lastName: 'Ronaldo',
        age: 30
    }
    ],
    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Real Madrid',
            teamPoints: 56,
            opponentPoints: 37
        },
        {
            opponent: 'Chelsea',
            teamPoints: 12,
            opponentPoints: 7
        }
    ],
    get player() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        const player = {
            firstName,
            lastName,
            age
        }
        this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        const game = {
            opponent,
            teamPoints,
            opponentPoints
        }
        this.games.push(game);
    }
}

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);
team.addGame('AC Milan', 100, 98);
team.addGame('Barcelona', 100, 98);

