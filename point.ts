interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 1, y: 2 };
p1.x = 5; 
/* Cannot assign to 'x' because it is a read-only property.ts(2540)
 */