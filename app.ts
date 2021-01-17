// const person:{
//     name : string;
//     location: string;
//     skills:string[];
//     role:[number,string];       // to maintain fixed length strings
// } = {
//     name : 'sandeep',
//     location : 'canada',
//     skills: ['js', 'react'],
//     role: [2, 'author'],
// }

enum Role {ADMIN= "is a Admin", READ_ONLY=15, AUTHOR};

const person = {
    name : 'sandeep',
    location : 'canada',
    skills: ['js', 'react'],
    role: Role.ADMIN,
}

console.log(person);

person.skills.map(skill=>{
    console.log(skill);
})

// person.role = [2,"test"];

console.log(person);
console.log(person.role);