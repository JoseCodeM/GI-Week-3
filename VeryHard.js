class Person {
//1. Create a Person constructor that has three properties: name, job, and age.
    constructor (name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }
//2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
    exercise () {
        console.log("Running is fun! - said no one ever!");
    }
//3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".
    fetchJob () {
        console.log(`${this.name} is a ${this.job}`);
    }
}

//4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that
// is passed in and a busy property that is NOT passed in and is set to true by default.
class Programmer {
    constructor (name, job, age, language) {
        this.name = name;
        this.job = job;
        this.age = age;
        this.language = language;
        this.isBusy = true;
    }
//5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give 
// the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
    completeTask () {
        this.isBusy = false;
    }

    acceptNewTask () {
        this.isBusy = true;
    }
//6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the
// programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take
// on a new responsibility." if the programmer is not busy.
    offerNewTask () {
        if (this.isBusy) {
            console.log(`${this.name} can't accept any new tasks right now.`);
        } else {
            console.log(`${this.name} would love to take on a new responsibillity`);
        }
    }

//7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all
// languages the programmer knows.
        learnLanguage () {
            console.log("Time to learn some new languages! Which shall I choose?: Java / Python");
        }

        listLanguage () {
            console.log("Languages I know: JavaScript, C++, Swift");
        }
}

//8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own 
// properties properly and independently of the other programmers?

// const jose = new Programmer("Jose", "Coding Apprentice", 25);
// jose.completeTask();
// jose.offerNewTask();
// jose.learnLanguage();

// const jodi = new Programmer("Jodi", "Coding Instructor", 25);
// jodi.acceptNewTask();
// jodi.offerNewTask();
// jodi.learnLanguage();
