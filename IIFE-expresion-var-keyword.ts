export {};
var waiting_time_out_side = function(
  print_number_in_side: Function,
  milisecond: number
) {
  // scope argument milisecond print_number
  setTimeout(print_number_in_side(milisecond), milisecond * 100);
};
// Ensure
var print_number = function(i: number): void {
  if (i) {
    console.log(i);
  }
};
for (var i = 0; i < 10; i++) {
  // scope var i
  waiting_time_out_side(print_number, i);
}
// IIFE expression
for (var i = 0; i < 10; i++) {
  // capture the current state of 'i'
  // by invoking a function with its current value
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, 100 * i);
  })(i);
}
