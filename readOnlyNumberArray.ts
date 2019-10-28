let a: number[] = [1, 2, 3];
let ro: ReadonlyArray<number> = a;

ro[0] = 12; // error!Index signature in type 'readonly number[]' only permits reading.ts(2542)

ro.push(5); // error!Property 'push' does not exist on type 'readonly number[]'.ts(2339)

ro.length = 100; // error!Cannot assign to 'length' because it is a read-only property.ts(2540)

a = ro   // error!Type 'readonly number[]' is missing the following properties from type 'number[]': pop, push, reverse, shift, and 3 more.ts(2740)
a = ro as number[];