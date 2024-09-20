const identity = (arg: any) => {
  return arg;
};

function identity2<T>(params: T): T {
  return params;
}

let a1 = identity2("hello"); // argumentကနေ typeသတ်မှတ်တာ
let a2 = identity2(200);
let a3 = identity2(true);

interface IForm<T> {
  name: string;
  email: string;
  password: string;
  extra: T[];
}

const registerForm: IForm<Number | String> = {
  name: "aaa",
  email: "aaa@gmail.com",
  password: "bbb123",
  extra: ["abc", 123],
};
// console.log(registerForm);

interface IForm2<T extends object> {
  email: string;
  password: string;
  extra: T[];
}

type UserAA = {
  name: string;
  id: number;
  age: number;
};

const registerForm2: IForm2<UserAA> = {
  email: "aaa@gmail.com",
  password: "bbb123",
  extra: [{ name: "aaa", id: 1, age: 22 }],
};
// console.log(registerForm2);

// use Multiple Type Parameters

const infoUser = <T, U>(obj1: T, obj2: U): T & U => {
  return { ...obj1, ...obj2 };
};
console.log({ name: "aaa", id: 1, age: 22 }, { name: "bbb", id: 2, age: 22 });
