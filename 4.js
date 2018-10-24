/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num) {
    ha = "";
    for (var i=1; i<=num;i++){
        ha= ha + "ha";
    }
    return ha + "!"
}/* finish the function expression */

console.log(laugh(10));
