//Objects Demo

//Object is representation of complex data
//An object can contain variable, array, another object, functions int it

//Empty Car Object
let Car = {}
console.log(Car);

let Person = {

    name: "Tejkumar",
    age: 34,
    isMangalorean: true,
    currentCity: "Bangalore",
    skills: {
        sourcecontrol: "git",
        cicd: "jenkins",
        automation: ["Selenium", "Protractor", "Cypress", "Test Project"],
        cloud: ["Aws", "Devops"],
        futureAspiration: "Azure Devops Engineer",
        todo_2020: function futureTodo_2022() {
            console.log("Upskill in technical & project management area");
        }
    }
}

//Object destructuring
const { name, age, isMangalorean, currentCity, skills } = Person
console.log("name : " + name);
console.log("cloud : " + skills.cloud);
console.log("future Aspiration : " + skills.futureAspiration);
console.log(skills.todo_2020())

console.log("**__**__**__**");
console.table(Person)