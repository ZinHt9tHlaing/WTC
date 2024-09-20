// console.log('\x1b[36m%s\x1b[0m', 'I am cyan');
var user = {
    name: "zin htet",
    age: 22,
    gender: "male",
};
var user2 = {
    name: "zin htet",
    age: 22,
    gender: "male",
    ComName: "WTC",
    year: 2000,
};
// console.log(user, user2);
var addNumber = function (num) {
    return num + num;
};
// console.log(addNumber(20));
// console.log(addNumber("20"));
var addNumber2 = function (num) {
    return num + "\n";
};
// console.log(addNumber2(30));
var addNumber3 = function (num) {
    console.log("first");
    // return num + num;
};
var addNumber4 = function (num, num2) {
    return num * num2;
};
// console.log(addNumber4(20,20));
// Not Operator
var pending = true;
var notPending = !pending; // false
// console.log(notPending); // false
var hasError = false;
var completed = true;
// AND Operator
var result = completed && hasError;
// console.log(result); // false
// OR Operator
var result1 = completed || hasError;
// console.log(result1); // true
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 10] = "Up";
    Direction[Direction["Down"] = 11] = "Down";
    Direction[Direction["left"] = 12] = "left";
    Direction[Direction["Right"] = 13] = "Right";
})(Direction || (Direction = {}));
var up = Direction.Up;
// console.log(up);
var down = Direction.Down;
// console.log(down);
var left = Direction.left;
// console.log(left);
var right = Direction.Right;
// console.log(right);
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["NotFound"] = 404] = "NotFound";
    Status[Status["InternalError"] = 500] = "InternalError";
})(Status || (Status = {}));
var responseStatus = Status.Success;
// console.log(responseStatus);
var Gender;
(function (Gender) {
    Gender["MALE"] = "male";
    Gender["FEMALE"] = "female";
})(Gender || (Gender = {}));
var gender = Gender.MALE;
// console.log(gender);
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function isItWeekdays(day) {
    return day >= Day.Monday && day <= Day.Friday;
}
var today = Day.Monday;
var mgMg = {
    userName: "mg mg",
    age: 20,
    studentId: 1,
};
var post = {
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
console.log(post);
