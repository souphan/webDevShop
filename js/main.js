var sayHello = function(name, times) {
    for (var i=0; i<times; i++) {
    console.log(i + ": Hello, " + name);
    }
}

sayHello("souphan", 7);

var holidayDrink = function(age) {
    if (age > 21) {
        return "Eggnog w/rum";
    } else if (age === 21){
        return "Rum w/eggnog";
    } else {
        return "Hot Chocolate";
    }
    };

var languages = ["HTML", "CSS", "JavaScript"];
languages.forEach(function(lang) {
    console.log("I love " + lang);
});

var points = [34, 45, 56, 78, 89];
var total = 0;
points.forEach(function(val) {
    total += val;
});
console.log(total);