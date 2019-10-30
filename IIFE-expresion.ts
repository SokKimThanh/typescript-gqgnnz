function waiting_time(in_so_nguyen: Function, milisecond: number) {
    // scope argument milisecond
    setTimeout(in_so_nguyen(milisecond), milisecond * 100);
}
// Ensure
function in_so_nguyen(i: number): void {
    if (i) {
        console.log(i);
    }
}
for (var i = 0; i < 10; i++) {
    // scope var i
    waiting_time((in_so_nguyen), i);
}
// IIFE expression
for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value 
    (function(i) {
        setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
}
