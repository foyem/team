const team = {
    _players: [{
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
        },
        {
            firstName: 'Mikel',
            lastName: 'Obi',
            age: 11
        },
        {
            firstName: 'Sergio',
            lastName: 'Ramos',
            age: 11
        }
    ],
    _games: [{
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Madrid',
            teamPoints: 82,
            opponentPoints: 12
        },
        {
            opponent: 'ManCity',
            teamPoints: 92,
            opponentPoints: 20
        }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age,
        };
        this.players.push(player);
    },

    addGame(oppName, points, oppPoints) {

        const game = {
            opponent: oppName,
            teamPoints: points,
            opponentPoints: oppPoints
        }
        this.games.push(game);
    }
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

console.log(team.players);

team.addGame("Chelsea", 20, 40);
team.addGame("Barcelona", 25, 32);
team.addGame("Bayern", 22, 45);

console.log(team.games);