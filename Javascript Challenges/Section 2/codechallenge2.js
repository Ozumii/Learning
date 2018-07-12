/*
John and Mike both play basketball on different teams. 
In the latest 3 games, John's team scored 89,120,103, 
while Mike's team scored 116, 94, and 123 points. 

1.) Calculate the average score for each team
2.Decide which team wins in average,
 and print the winner to the console, also include the average score in the output
3. Change the scores to show different winnders, dont forget to take into account if the
 averages are equal

4.Mary also plays basketball, and her team scored 97,134,105 pints. Like before, log the average winner to the console

5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
 */


function Team(name,scores){
    this.name = name;
    this.scores = scores;
    this.average = scores.reduce((a,b)=>a+b,0)/scores.length;
    this.won = this.name + " won with an average offensive rating of:" + this.average;
}

function winning(avg1,avg2){
    /*
 ternary operators start with
 [condition] ? [if true, run code] 
 : [else, run code]

*/
avg1>avg2? console.log(john.won):console.log(mike.won)
};

let john = new Team("John\'s Team",[89,120,103]);

let mike = new Team("Mike\'s Team",[116, 94, 123]);

winning(john.average,mike.average);