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
var Role;
(function (Role) {
    Role["ADMIN"] = "is a Admin";
    Role[Role["READ_ONLY"] = 15] = "READ_ONLY";
    Role[Role["AUTHOR"] = 16] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'sandeep',
    location: 'canada',
    skills: ['js', 'react'],
    role: Role.ADMIN
};
console.log(person);
person.skills.map(function (skill) {
    console.log(skill);
});
// person.role = [2,"test"];
console.log(person);
console.log(person.role);
