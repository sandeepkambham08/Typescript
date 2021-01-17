const person = {
    name : 'sandeep',
    location : 'canada',
    skills: ['js', 'react'],
}

console.log(person);

for(const skill of person.skills){
    console.log(skill.toLowerCase());
}

person.skills.map(skill=>{
    console.log(skill);
})