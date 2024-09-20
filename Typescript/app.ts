// console.log('\x1b[36m%s\x1b[0m', 'I am cyan');

// let a = "apple";
// // a = 100;
// console.log('\x1b[36m%s\x1b[0m', a);

// let b = 100;
// // b = "banana";
// console.log(b);

// let a: string;
// a = "aaa";
// let b: string | boolean | number; // union
// b = "aaa";
// let c: (string | number | boolean)[];
// c = ["aaa", 200, true];
// let d: [string, boolean, number];
// d = ["ddd", false, 200]; // tuple
// console.log(a, b, c, d);

type UsersType = {
  name: string;
  age: number;
  isDev?: boolean;
  gender: "male" | "female" | "others";
};

// type UserGender = {
//   gender: "male" | "female" | "others";
// };

// let user: UsersType | UserGender = {
//   name: "zin htet",
//   age: 22,
//   gender: "male",
// };

// console.log(user);

type CompanyType = {
  ComName: string;
  year: number;
};

let user: UsersType | CompanyType = {
  name: "zin htet",
  age: 22,
  gender: "male",
};

let user2: UsersType & CompanyType = {
  name: "zin htet",
  age: 22,
  gender: "male",
  ComName: "WTC",
  year: 2000,
};
// console.log(user, user2);

let addNumber = (num: number) => {
  return num + num;
};

// console.log(addNumber(20));
// console.log(addNumber("20"));

let addNumber2 = (num: number): number | string => {
  return num + "\n";
};
// console.log(addNumber2(30));

let addNumber3 = (num: number): void => {
  console.log("first");
  // return num + num;
};

let addNumber4 = (num: number, num2: number): number | string => {
  return num * num2;
};
// console.log(addNumber4(20,20));

// Not Operator
const pending: boolean = true;
const notPending = !pending; // false
// console.log(notPending); // false

const hasError: boolean = false;
const completed: boolean = true;

// AND Operator
const result = completed && hasError;
// console.log(result); // false

// OR Operator
const result1 = completed || hasError;
// console.log(result1); // true

enum Direction {
  Up = 10, // 10
  Down, // 11
  left, // 12
  Right, // 13
}

let up: Direction = Direction.Up;
// console.log(up);
let down: Direction = Direction.Down;
// console.log(down);
let left: Direction = Direction.left;
// console.log(left);
let right: Direction = Direction.Right;
// console.log(right);

enum Status {
  Success = 200,
  NotFound = 404,
  InternalError = 500,
}

let responseStatus: Status = Status.Success;
// console.log(responseStatus);

enum Gender {
  MALE = "male",
  FEMALE = "female",
}

let gender: Gender = Gender.MALE;
// console.log(gender);

enum Day {
  Monday, // 0
  Tuesday, // 1
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isItWeekdays(day: Day): boolean {
  return day >= Day.Monday && day <= Day.Friday;
}
let today: Day = Day.Monday;
// console.log(isItWeekdays(today));

// enum Day2 {
//   Monday = " monday", // 0
//   Tuesday = " tuesday", // 1
//   Wednesday = " wednesday",
//   Thursday = " thursday",
//   Friday = " friday",
//   Saturday = " saturday",
//   Sunday = " sunday",
// }

// function isItWeekday(day: Day2): boolean {
//   let isWeekday: boolean;
//   switch (day) {
//     case Day2.Sunday:
//     case Day2.Saturday:
//       isWeekday: false;
//       break;
//     default:
//       isWeekday = true;
//       break;
//   }
//   return isWeekday;
// }
// let today2: Day2 = Day2.Sunday;
// console.log(isItWeekday(today2));

interface UserInterface {
  userName: string;
  age: 20;
}

interface Student extends UserInterface {
  studentId: number;
}

const mgMg: Student = {
  userName: "mg mg",
  age: 20,
  studentId: 1,
};
// console.log("mgmg", mgMg);

interface UserInterface2 {
  userId: number;
  username: string;
}

interface CategoryInterface {
  catId: number;
  category: string;
}

interface PostInterface {
  id: number;
  title: string;
  description: string;
  extra: UserInterface2[] | CategoryInterface[];
}

const post: PostInterface = {
  id: 1,
  title: "aaa",
  description: "bbb",
  extra: [
    {
      catId: 1,
      category: "ccc",
    },
  ],
};
// console.log(post);


