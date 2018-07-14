/**
 * Challenge I
 * Calculate BMI with passed arguments
 * BMI = mass/height^2
 * 
 * This program accomplishes this by:
    * Storing numbers in variables
    * Calculating with the equation satisfied
    * Comparing two results with a Boolean variable.
    * Results are printed to the screen
 * 
 */

function Person(name, mass, height){

    this.name = name;
    this.mass = mass;
    this.height = height;
    this.BMI = BMI(mass,height);
    // This is a description of a Person argument
    // We expect three expressions to execute the code
    // Assuming the data is usable (non-zero), our
    // BMI function will return the evaluation of our arguments
    // this.name means the name being passed through the argument
    // is assigned to the local name variable.
}

let userBMI; 
// I think this is declaring an empty variable.

function BMI(mass, height){

    return mass/(Math.pow(height,2))
    // Gives back height^2
    // Divided by mass argument

}

let dave = new Person("Dave", 75, 50);
let mark = new Person("Mark", 40, 70);

function compare(p1,p2){

    var people = [p1,p2]
    people.sort();
    console.log(people[0].name + "'s height is " + people[0].height);
    // This logic works! 
    // Will put in more logic to test BMI. Cannot work on anymore today.
}

compare(dave, mark);