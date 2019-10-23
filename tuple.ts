

// [ts] Cannot redeclare block-scoped variable 'name'.

// fix: export {};
export {}; 
type ColorType = [string, number, number, number];
let red: ColorType = ['red', 1, 0, 0];
let green: [string, number, number, number] = ['Green', 0, 1, 0];
let blue = ['Blue', 0, 0, 1]