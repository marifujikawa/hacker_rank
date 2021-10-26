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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string {
    let horas = s.substr(0, 2);
    let timezone = s.substr(8, 2);
    let newhoras = '';

    if (timezone == 'PM' && Number(horas) < 12) {
        newhoras = (Number(horas) + 12).toString();
    }
    else {
        newhoras = horas.toString();
        if (timezone == 'AM' && Number(horas) == 12) {
            newhoras = '00';
        }

    }
    return `${newhoras}:${s.substr(3, 5)}`


}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const s: string = readLine();

    const result: string = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
