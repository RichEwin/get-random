/**
 * Returns a random element from the given non-empty array.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} list - The array to select a random element from.
 * @returns {T} A randomly selected element from the array.
 * @throws {Error} If the array is empty.
 */
export function getRandom<T>(list: T[]) {
    if (list.length === 0) {
        throw new Error("List cannot be empty");
    }
    return list[Math.floor(Math.random() * list.length)];
}