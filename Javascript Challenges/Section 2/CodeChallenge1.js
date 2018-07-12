/**
 * Coding Challenge 1
 * 
 * Mark and John are trying to compare their BIM, which is calculated using BMI = mass/height^2 
 * 
 * 1. Store Mark and Johns mass and height in variables
 * 2. Calculate their BMI's
 * 3. Create a Boolean variable containing information about whether Mark has a higher BMI than John.
 * 
 * 4. Print a string to the console containing the variable from step 3. Like "Is Mark's BMI higher than John's True"
 * 
 */

function Person(name, mass, height){
        this.name = name;
        this.mass = mass;
        this.height = height;

        this.BMI =BMI(mass,height);

}

let userBMI;

 function BMI(mass, height){
    return mass/(Math.pow(height,2));

 }

function compare(bmi1,bmi2){

     var masses =[bmi1,bmi2];

     masses.sort();

     if(bmi1 > bmi2){
             console.log("Dave has a BMI of: " +bmi1 + " that is greater than Mark\'s");
     }
     if(bmi2>bmi1){
        console.log("Mark has a BMI of: " +bmi2 + " that is greater than Dave\'s");    
     }
 };

 let dave = new Person("Dave", 75,2);
 let mark = new Person("Mark",80,2);

 compare(mark.BMI,dave.BMI);
 