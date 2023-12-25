const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    return colors.filter((item) => {
        return item === "черный" || item === "красный" || item === "желтый";
    }).join("-");
}

console.log(createColorString());