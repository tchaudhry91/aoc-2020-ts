function findSum2020(nums: number[]): [number, number] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) == 2020) {
                return [nums[i], nums[j]]
            }
        }
    }
    throw new Error("Combination Not Found")
}

function findSum2020Three(nums: number[]): [number, number, number] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + i; k < nums.length; k++) {
                if ((nums[i] + nums[j] + nums[k]) == 2020) {
                    return [nums[i], nums[j], nums[k]]
                }
            }
        }
    }
    throw new Error("Combination not Found")
}

function readNums(fname: string): number[] {
    const nums: number[] = []
    const ftext = Deno.readTextFileSync(fname)
    const numsStr = ftext.split("\n");
    for (const n of numsStr) {
        const parsed = parseInt(n);
        if (isNaN(parsed)) {
            continue
        }
        nums.push(parsed);
    }
    return nums
}

const nums = readNums("input")
const [a, b] = findSum2020(nums)
console.log(`${a}*${b}=${a * b}`)

const [x, y, z] = findSum2020Three(nums)
console.log(`${x}*${y}*${z} = ${x * y * z}`)