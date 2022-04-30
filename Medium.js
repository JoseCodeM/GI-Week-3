var sharePizza = function cutPizzaSlices(slice) {
    //round nearest 100th
    let splitSlices = Math.round(100 * (8 / slice)) / 100;
    return `Each person get ${splitSlices} slices of pizza`
}
console.log(sharePizza(2))
console.log(sharePizza(3));