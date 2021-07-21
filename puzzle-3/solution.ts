function getMap(fname: string): string[] {
    const lines = Deno.readTextFileSync(fname).split('\n');
    const cleanedLines = [];
    for (const l of lines) {
        if (l.length > 0) {
            cleanedLines.push(l);
        }
    }
    return cleanedLines;
}
function countTreeHits(map: string[], slope: number): number {
    let yIncrement = 1;
    let xIncrement = slope;
    if (slope < 1) {
        yIncrement = (1 / slope);
        xIncrement = 1;
    }
    let hits = 0;
    let x = 0;
    for (let y = 0; y < map.length; y += yIncrement, x += xIncrement) {
        if (map[y].charAt(x % map[y].length) === "#") {
            hits++;
        }
    }
    return hits;
}



const map = getMap("input");
const hits = countTreeHits(map, 3);
console.log(`Total Hits: ${hits}`);

// Check Some More Slopes
let mul = 1;
const slopes = [1, 3, 5, 7, 0.5];

for (const s of slopes) {
    const temp = countTreeHits(map, s);
    console.log(`Total Hits on ${s} slope is ${temp}`);
    mul *= temp;
}

console.log(`Multiplication is ${mul}`)