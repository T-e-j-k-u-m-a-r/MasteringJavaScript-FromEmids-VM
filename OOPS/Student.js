class Student {

    constructor(name, standard, skill) {
        this.name = name;
        this.standard = standard;
        this.skill = skill;
    }

    getName() {
        return this.name
    }

    getStandard() {
        return this.standard
    }

    getSkill() {
        return this.skill
    }
}

class Singer extends Student {

    constructor(languageOfSinging, singingType) {
        super()
        this.languageOfSinging = languageOfSinging
        this.singingType = singingType
    }

    singSong() {
        console.log(`Hey all, I'm singing a song...... of type: ${this.singingType}, and language is ${this.languageOfSinging}`);
    }

}


module.exports = { Student, Singer }