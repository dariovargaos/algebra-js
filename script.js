// prvi zadatak
var firstName = "Dario";
var lastName = "Varga";
var fullName = firstName + " " +  lastName;

console.log(fullName);

//drugi zadatak


//treci zadatak
for(num = 1; num <= 20; num++){
    if(num % 2 == 0){
        console.log("Broj " + num + " je paran.");
    }
    else{
        console.log("Broj " + num + " je neparan.");
    }
}

//cetvrti zadatak
var array = ["Ivana", "Sanjin", "Marijan", "Doroti", "Damir", "Lorena", "Ružica"];
array.forEach(element => console.log(element));

var array2 = [
    ["Dijete", "Odrasla osoba"],
    ["Računalo", "Pisača mašina"],
    ["Mokro", "Suho"]

];

console.table(array2);

array2.push(["Gladan", "Sit"]);

console.table(array2);