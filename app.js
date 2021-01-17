var person = {
    name: 'sandeep',
    location: 'canada',
    skills: ['js', 'react']
};
console.log(person);
for (var _i = 0, _a = person.skills; _i < _a.length; _i++) {
    var skill = _a[_i];
    console.log(skill.toLowerCase());
}
person.skills.map(function (skill) {
    console.log(skill);
});
