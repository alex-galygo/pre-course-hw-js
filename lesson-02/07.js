let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let newPassportMarried = structuredClone(passportMarried);
newPassportMarried.married = true;

console.log(passportMarried);
console.log(newPassportMarried);
