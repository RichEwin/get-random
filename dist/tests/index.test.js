import { describe, it, expect } from 'vitest';
import { getRandom } from '../utils.js';
describe("getRandom", () => {
    it("1) should select and return a random string from a list", () => {
        const list = ["one", "two", "three"];
        const result = getRandom(list);
        expect(list).toContain(result);
    });
    it("2) should select and return a random number from a list", () => {
        const list = [1, 2, 3];
        const result = getRandom(list);
        expect(list).toContain(result);
    });
    it("3) should select and return a random object from a list", () => {
        const list = [{ number: 1 }, { number: 2 }, { number: 3 }];
        const result = getRandom(list);
        expect(list).toContain(result);
    });
});
//# sourceMappingURL=index.test.js.map