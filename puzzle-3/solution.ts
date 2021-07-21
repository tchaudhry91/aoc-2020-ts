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
    let hits = 0;
    let x = 0;
    for (let y = 0; y < map.length; y++, x += slope) {
        if (map[y].charAt(x % map[y].length) === "#") {
            hits++;
        }
    }
    return hits;
}



const map = getMap("input");
let hits = countTreeHits(map, 3);
console.log(hits);