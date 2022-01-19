// Class code examples

// Objects inside arrays

const student1 = {name: "Bob", age: 17}
const student2 = {name: "Susy", age: 18}
const student3 = {name: "Ted", age: 18}

const students = [ 
    {name: "Bob", age: 17},
    {name: "Susy", age: 18},
    {name: "Ted", age: 18}
]

console.log(students[1]) // in this case we search by number
console.log(students[1].age) 
console.log(students[students.indexOf("Susy")]) // this will give an undefined


const Bob = {name: "Bob", age: 17}
const Susy = {name: "Susy", age: 18}
const Ted = {name: "Ted", age: 18}

const studentsObj = {
    Bob : {name: "Bob", age: 17},
    Susy : {name: "Susy", age: 18},
    Ted : {name: "Ted", age: 18}
}

console.log(studentsObj["Susy"]) // in this case we search by string
console.log(studentsObj.Susy.age)

console.log(studentsObj.hasOwnProperty("Susy"))
console.log(studentsObj.hasOwnProperty("Marco"))

// Arrays inside Objects

const classroom = {
    marco: { name: "Marco", friends: [{name: "Paolo", age: 49}] },
    carlos: { name: "Carlos", friends: [{name: "Gabriel", age: 45}] },
    carol: { name: "Marco", friends: [{name: "Bob", age: 17}, {name: "Susy", age: 18}, {name: "Ted", age: 18}]}
}

console.log(classroom.carlos.friends.length)

for (const friend of classroom.
    carol
    .friends) console.log(friend.name)
    