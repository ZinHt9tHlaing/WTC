const mySet = new Set();
mySet.add(1);
mySet.add(1);
mySet.add(5);
mySet.add(5);
mySet.add("h1");
mySet.add({ a: 1, b: 2 });
// console.log(mySet.Set(1));
// console.log(mySet.Set(3));
// console.log(mySet.Set("some text"));
// console.log(mySet.size);

mySet.delete(5);
// console.log(mySet.has(5));

mySet.forEach((value) => {
  //   console.log(value);
});

for (let value of mySet.values()) {
  //   console.log(value);
}

for (let entry of mySet.entries()) {
  //   console.log(entry);
}

mySet.clear();
// console.log(mySet.size);

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = Array.from(new Set(numbers));
// console.log(uniqueNumbers); // output - [1, 2, 3, 4, 5]

const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

// union
const union = new Set([...setA, ...setB]);
// console.log(union);

// intersection ( find same value ) // *TODO: တူတဲ့ value ကိုပြန်ပြ
const interSection = new Set([...setA].filter((e) => setB.has(e)));
// console.log(interSection);

// intersection ( find different value ) // *TODO: setAက မတူတဲ့ value ကိုပြန်ပြ
const difference = new Set([...setA].filter((e) => !setB.has(e)));
// console.log(difference);

const addTag = (tagSet, tag) => {
  tag = tag.trim().toLowerCase();
  if (tag) {
    if (tagSet.has(tag)) {
      console.log(`Tag already exits: ${tag}`);
    } else {
      console.log(`Tag added: ${tag}`);
      return new Set([...tagSet, tag]);
    }
  } else {
    console.log("Please enter a valid tag");
  }
  return tagSet;
};

const removeTag = (tagSet, tag) => {
  tag = tag.trim().toLowerCase();
  if (tagSet.has(tag)) {
    const newSet = new Set(tagSet);
    newSet.delete(tag);
    console.log(`Tag removed: ${tag}`);
    return newSet;
  } else {
    console.log(`Tag not found: ${tag}`);
  }
  return tagSet;
};

// const hasTag = (tagSet, tag) => {
//   tag = tag.trim().toLowerCase();
//   if (tag) {
//     if (tagSet.has(tag)) {
//       console.log(`Tag exits: ${tag}`);
//     } else {
//       console.log(`Tag added: ${tag}`);
//       return new Set([...tagSet, tag]);
//     }
//   } else {
//     console.log("Please enter a valid tag");
//   }
//   return tagSet;
// };

const displayTags = (tagSet) => {
  if (tagSet.size === 0) {
    console.log("No tags to display");
  } else {
    console.log("All tags");
    tagSet.forEach((tag) => console.log(tag));
  }
};

let tags = new Set();
tags = addTag(tags, "JavaScript");
tags = addTag(tags, "HTML");
tags = addTag(tags, "CSS");
tags = addTag(tags, "JavaScript");
// hasTag(tags, "HTML");
// hasTag(tags, "TypeScript");
tags = removeTag(tags, "HTML");
removeTag(tags, "Python");
displayTags(tags);
