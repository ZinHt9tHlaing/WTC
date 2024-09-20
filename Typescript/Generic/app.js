var identity = function (arg) {
    return arg;
};
function identity2(params) {
    return params;
}
var a1 = identity2("hello"); // argumentကနေ typeသတ်မှတ်တာ
var a2 = identity2(200);
var a3 = identity2(true);
var registerForm = {
    name: "aaa",
    email: "aaa@gmail.com",
    password: "bbb123",
    extra: ["abc", 123],
};
console.log(registerForm);
// interface IForm2<T extends object> {
//   email: string;
//   password: string;
//   extra: T[];
// }
// type userAA = {
//   id: number;
//   age: number;
// };
