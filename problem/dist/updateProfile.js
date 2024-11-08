"use strict";
const updateProfile = (profile, update) => {
    return Object.assign(Object.assign({}, profile), update);
};
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { email: "abc@gmail.com" }));
