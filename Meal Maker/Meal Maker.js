const menu = {
    _courses: {
        appetisers: [],
        mains: [],
        desserts: [],
    },
    get appetisers() {
        return this._courses.appetisers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set appetisers(appetiser) {
        this.appetisers().push(appetiser);
    },
    set mains(main) {
        this._courses.mains[this.mains.length] = main;
    },
    set desserts(dessert) {
        this.desserts().push(dessert);
    },
    get courses() {
        return {
            appetiser: this.appetisers,
            mains: this.mains,
            dessert: this.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        }
        this._courses[courseName].push(dish);
        let message = `You have added the following dish\\dishes:\n${dish.name} which costs £${dish.price}.\n`;
        this.printMessages(message);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return this._courses[courseName][randomIndex];
    },
    generateRandomMeal() {
        const appetiser = this.getRandomDishFromCourse('appetisers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetiser.price + main.price + dessert.price;
        let message = `Your meal is ${appetiser.name}, ${main.name}, ${dessert.name} and The price is $${totalPrice}.`;
        this.printMessages(message);
        return message;
    },
    printMessages(message) {
        console.log(message);
    }
};

menu.addDishToCourse('appetisers', 'Caesar Salad', 3.25);
menu.addDishToCourse('appetisers', 'Cajun Salad', 4.25);
menu.addDishToCourse('mains', 'Vegetarian Lasagne', 4.75);
menu.addDishToCourse('mains', 'Spaghetti Carbonara', 6.15);
menu.addDishToCourse('desserts', 'Profiterole', 2.25);
menu.addDishToCourse('desserts', 'Mango Icecream', 5.55);
menu.generateRandomMeal();
