
/* How much would the servant have after 30 days? */
var penny = 0.01;
for (var day = 1; day <= 30; day++) {
    penny *= 2;
}
console.log(penny);



/* How long to get to $10,000? */
penny = 0.01;
var days = 1;
while (penny < 10000) {
    penny *= 2;
    days++;
}
console.log(days);



/* One billion? */
penny = 0.01;
days = 1;
while (penny < 1000000000) {
    penny *= 2;
    days++;
}
console.log(days);



/* Infinity? */
penny = 0.01;
days = 1;
while (penny < Infinity) {
    penny *= 2;
    days++;
}
console.log(days);
