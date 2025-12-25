
const student = {
	name: "John Doe",
	grades: [
		{name: "math",grade: 80},
		{name: "science",grade: 100},
		{name: "history",grade: 60},
		{name: "PE",grade: 90},
		{name: "music",grade: 98}
	]
}
const studentName= student.name;
let total = 0;
for (let i=0; i<student.grades.length; i++){
	total += student.grades[i].grade;
}
const average = total / student.grades.length;

let highestGrade = student.grades[0].grade;
for (let i=1; i<student.grades.length; i++){
	if (student.grades[i].grade > highestGrade){
		highestGrade = student.grades[i].grade;
	}
}
let lowestGrade = student.grades[0].grade;
for (let i=1; i<student.grades.length; i++){
	if (student.grades[i].grade < lowestGrade){
		lowestGrade = student.grades[i].grade;
	}
}
console.log(`Student Name: ${studentName}`);
console.log(`Average Grade: ${average}`);
console.log(`Highest Grade: ${highestGrade}`);
console.log(`Lowest Grade: ${lowestGrade}`);