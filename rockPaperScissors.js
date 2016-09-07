var RPS = function(p1, p2){
    if(p1 === p2)
        console.log("Draw game!");
        
    if(p1 === "R"){
        if(p2 === "S")
            console.log("Player1 Wins!");
        if(p2 === "P")
            console.log("Player2 Wins!");
    }
    
    if(p1 == "P"){
        if(p2 === "S")
            console.log("Player2 Wins!");
        if(p2 === "R")
            console.log("Player1 Wins!");
    }
    
    if(p1 == "S"){
        if(p2 === "R")
            console.log("Player2 Wins!");
        if(p2 === "P")
            console.log("Player1 Wins!");
    }
};

var userChoice = function(){
    var choice = prompt("Choose your weapon:", "R, P or S");
    return choice;
};

var computerChoice = function(){
    var choice = Math.floor((Math.random() * 10) + 1)%3;

    if(choice === 0)
        return "R";
    if(choice === 1)
        return "P";
    if(choice === 2)
        return "S";
};

var main = function(){
    var usr = userChoice();
    var cmp = computerChoice();
    RPS(usr, cmp);
};

main();















