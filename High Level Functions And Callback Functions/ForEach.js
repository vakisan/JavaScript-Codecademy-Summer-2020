const randomNumbers = [375, 200, 3.14, 7, 13, 852];


const smallNumbers = randomNumbers.filter(randomNumber => { return randomNumber < 250 });

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


const longFavoriteWords = favoriteWords.filter(favoriteWord => {
    return favoriteWord.length > 7 ? true : false
});