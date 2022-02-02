//Variable
const name = "Tejkumar"

//function
function topicName(topic) {
    console.log(`Topic name is ${topic}`);
}

//class
class Subject {
    constructor(subjectName) {
        this.subjectName = subjectName
    }

    getSubjectName() {
        return this.subjectName
    }
}

module.exports = { Subject, topicName, name }