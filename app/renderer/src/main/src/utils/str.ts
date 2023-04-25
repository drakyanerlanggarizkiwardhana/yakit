export function Uint8ArrayToString(fileData: Uint8Array, encoding?: "utf8" | "latin1" | any) {
    const result = Buffer.from(fileData).toString(encoding ? encoding : "utf8");
    return result;
}


export function StringToUint8Array(str: string, encoding?: "latin1" | "ascii" | "utf8") {
    if (!encoding) {
        return Buffer.from(str, "utf8")
    }
    return Buffer.from(str, encoding)
}

export function removeRepeatedElement<T = string>(arr: T[]) {
    return arr.filter((element, index) => {
        return arr.indexOf(element) === index
    })
}