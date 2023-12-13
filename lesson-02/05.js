let passport = {
    name: "Petr",
    surname: "Petrov",
};

let newPassport = Object.assign({}, passport, {name: "Ivan"});

console.log(passport.name);
console.log(newPassport.name);