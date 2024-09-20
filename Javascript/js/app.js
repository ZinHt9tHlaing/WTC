const employees = [
  { id: 1, name: "bobo", salary: 700000, department: "IT", DOB: "01/30/1990" },
  {
    id: 2,
    name: "mgmg",
    salary: 850000,
    department: "Account",
    DOB: "10/15/1992",
  },
  {
    id: 3,
    name: "nono",
    salary: 700000,
    department: "Finance",
    DOB: "02/7/2000",
  },
  { id: 4, name: "popo", salary: 900000, department: "IT", DOB: "04/9/2001" },
  {
    id: 5,
    name: "koko",
    salary: 850000,
    department: "Finance",
    DOB: "09/25/1991",
  },
  {
    id: 6,
    name: "aungaung",
    salary: 880000,
    department: "Finance",
    DOB: "09/25/1981",
  },
  {
    id: 7,
    name: "rose",
    salary: 880000,
    department: "Account",
    DOB: "09/25/1995",
  },
];

const comments = {
  100: { text: "this is good 33", userId: 1 },
  201: { text: "this is nice ff", userId: 2 },
  3012: { text: "this is nice dd", userId: 2 },
  320: { text: "this is nice dddd", userId: 1 },
  100: { text: "this is nice asdf", userId: 2 },
  435: { text: "this is fffds goo 33", userId: 3 },
  111: { text: "this is ddddsf ba 33", userId: 4 },
  200: { text: "this is ddd ba 33", userId: 4 },
  120: { text: "this is dddsdf ba 33", userId: 5 },
  301: { text: "this is sddsgood", userId: 6 },
  130: { text: "this isdsfds bad", userId: 3 },
};

// console.log(Object.keys(comments));
// console.log(Object.values(comments));

// const userComments = Object.values(comments).reduce((acc, comment) => {
//   const key = comment.userId;
//   if (!acc[key]) {
//     acc[key] = [];
//   }
//     acc[key].push(comment.text);
//     return acc;
// }, {});
// console.table(userComments);

// const allComments = Object.values(comments).reduce((acc, comment) => {
//   const key = comment.userId;
//   const value = acc[key] || [];
//   return { ...acc, [key]: [...value, comment.text] };
// }, {});
// console.table(allComments);

// const nameGroup = employees.reduce((acc, employee) => {
//     const key = employee.department;
//     const value = acc[key] || [];
//     return {...acc,[key]:[...value,employee.department]}
// },[])

// let over30 = employees.filter(
//   (employee) =>
//     new Date().getFullYear() - new Date(employee.DOB).getFullYear() > 30
// );
// console.log(over30);

// let sort = employees.sort(
//   (a, b) => new Date(b.DOB).getFullYear() - new Date(a.DOB).getFullYear()
// );

// let sort = employees.sort((a, b) => b.salary > a.salary);
// console.log(sort);

// const employeeDetails = employees.map(({ name, department, salary }) => {
//   return `${name} works in the ${department} department and earns ${
//     salary / 1000
//   }k per year`;
// });
// console.table(employeeDetails);

// const totalSalary = employees.reduce((pv, cv) => pv + cv.salary, 0);
// console.log(totalSalary);

// let dobDate = new Date(`${year}-${month}-${day}`);
// console.log('first', dobDate.getFullYear());
// let date1 = "01/30/1990"
// console.log(new Date(date1).getFullYear());

// let date = "9/4/2002";
// let [day,month,year] = date.split("/");
// let formattedDate = `${month}/${day}/${year}`;
// let formattedDate2 = `${year}/${month}/${day}`;
// console.log(new Date(formattedDate).getFullYear());

const myMap = new Map();
myMap.set("name", "zhh");
myMap.set("age", 20);
myMap.set("bool", true);
// console.log(myMap.get("name"));
// console.log(myMap.get("age"));
// console.log(myMap.has("bool"));
// console.log(myMap.keys("bool"));
// console.log(myMap.values(true));
// myMap.delete("bool");
// console.log(myMap.size);

// myMap.forEach((value, key) => {
//   console.log(`${key} : ${value}`);
// });

// myMap.forEach((value, key) => {
//   console.log(key)
// });

// for (let key of myMap.keys()) {
//   console.log(key);
// }

// for (let value of myMap.values()) {
//   console.log(value);
// }

