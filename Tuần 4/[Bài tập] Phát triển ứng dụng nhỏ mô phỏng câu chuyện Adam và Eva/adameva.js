function Apple() {
    this.weight = 10;
    this.isEmpty = false;
}

function Human(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.say = function (message) {
        console.log(message)
    }
    this.checkApple = function (Apple) {
        if (Apple.weight > 0) {
            return true;
        }
        if (Apple.weight <= 0) {
            return false;
        }
    }
    this.eat = function (Apple) {
        if (this.checkApple(Apple) === true) {
            Apple.weight--;
        }
        if (this.checkApple(Apple) === false) {
            this.say("lam gi co ma an");
        }
    }
}

let apple = new Apple();
let adam = new Human("adam", "male", 50);
adam.say("hello");
adam.eat(apple);
adam.say(adam.name);
adam.say(adam.gender);
adam.say(adam.weight);
console.log(apple.weight);