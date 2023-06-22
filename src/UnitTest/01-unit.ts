export function sum(a: number, b: number) {
    return a + b
}

export function multiply(a: number, b: number) {
    return a * b
}

export function splitInoWords(sentense: string) {
    return sentense.toLowerCase().split(' ').filter(w => w !== '').map((w) => w.replace('!', ''))
}