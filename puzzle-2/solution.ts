class Validator {
    password: string;
    charCheck: string;
    minCheck: number;
    maxCheck: number;

    constructor(password: string, charCheck: string, minCheck: number, maxCheck: number) {
        this.password = password;
        this.charCheck = charCheck;
        this.minCheck = minCheck;
        this.maxCheck = maxCheck;
    }

    validate(): boolean {
        const charCount = countChars(this.password, this.charCheck)
        if (charCount < this.minCheck || charCount > this.maxCheck) {
            return false
        }
        return true
    }
}

function readPasswordLines(fname: string): string[] {
    const ftext = Deno.readTextFileSync(fname)
    return ftext.split("\n")
}

function parseLine(line: string): (Validator | null) {
    const re = /(\d+)-(\d+)\s(\w{1}):\s(\w+)$/
    const match = re.exec(line)
    if (match) {
        return new Validator(match[4], match[3], parseInt(match[1]), parseInt(match[2]))
    }
    return null;
}

// Count the number of characters in a string
function countChars(password: string, charCheck: string): number {
    let count = 0;
    for (let i = 0; i < password.length; i++) {
        if (password.charAt(i) === charCheck) {
            count++;
        }
    }
    return count;
}

let total = 0;
const lines = readPasswordLines("input")
for (const l of lines) {
    const v = parseLine(l)
    if (v?.validate()) {
        total += 1
    }
}
console.log(total);