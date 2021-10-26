'use strict';

import { WriteStream, createWriteStream } from "fs";
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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades: number[]): number[] {
    let result = [];
    for (let i = 0; i < grades.length; i++) {
        let first = 0;
        let second = 0;

        first = Math.floor(grades[i] / 10);
        second = grades[i] % 10;

        if (grades[i] >= 38) {
            let roundup = ((first * 10) + 10);
            let roundown = ((first * 10) + 5);


            if ((roundup - grades[i] < 3) || (roundown - grades[i] > 0 && roundown - grades[i] < 3)) {
                if (second > 5) {
                    result.push(roundup);
                }
                else {
                    result.push(roundown);
                }
            }
            else {
                result.push(grades[i]);
            }
        }
        else {
            result.push(grades[i]);
        }

    }
    return result;

}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const gradesCount: number = parseInt(readLine().trim(), 10);

    let grades: number[] = [];

    for (let i: number = 0; i < gradesCount; i++) {
        const gradesItem: number = parseInt(readLine().trim(), 10);

        grades.push(gradesItem);
    }

    const result: number[] = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
