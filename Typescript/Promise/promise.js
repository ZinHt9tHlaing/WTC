// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() > 0.1) {
//       resolve("success");
//     } else {
//       reject("failed");
//     }
//   }, 1000);
// });
// myPromise
//   .then((message) => console.log("resolve1: ", message))
//   .catch((error) => console.error("reject1: ", error))
//   .finally(() => {
//     console.log("finally1");
//   });
// myPromise
//   .then((message) => {
//     console.log("resolve: ", message);
//     return new Promise((resolve, _reject) => {
//       setTimeout(() => {
//         resolve("Next Operation successfully");
//       },2000);
//     });
//   })
//   .then((message) => console.log("resolve2:", message))
//   .catch((error) => console.error("reject2:", error))
//   .finally(() => {
//     console.log("finally1");
//   });
// TODO: Promise with Typescript
// let myPromise2: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = Math.random() > 0.3;
//     if (success) {
//       resolve("Operation was successfully");
//     } else {
//       reject("Operation failed");
//     }
//   }, 1000);
// });
// myPromise2
//   .then((message: string) => console.log("resolve2: ", message))
//   .catch((error: string) => console.error(error))
//   .finally(() => {
//     console.log("finally2");
//   });
function fetchData(url) {
    return new Promise(function (resolve, reject) {
        fetch(url)
            .then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP error! status: ".concat(response.status));
            }
            return response.json();
        })
            .then(function (data) { return resolve(data); })
            .catch(function (error) { return reject(error); });
    });
}
fetchData("https://jsonplaceholder.typicode.com/users")
    .then(function (data) {
    console.log(data);
})
    .catch(function (error) {
    console.error(error);
});
