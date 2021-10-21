'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
    let pos = 0;
    let neg = 0;
    let zero = 0;
    let size = arr.length;

    arr.forEach(item => {
        if (item > 0) {
            pos += 1;
        }
        else {

            if (item < 0) {
                neg += 1;
            }
            else {
                zero += 1;
            }
        }
    })


    console.log((pos / size).toFixed(6));
    console.log((neg / size).toFixed(6));
    console.log((zero / size).toFixed(6));


}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
