import { sum } from "@/utils/number";
import { expect, describe } from "@jest/globals";

describe("Test sum function", () => {
  test("should return the sum of 6 + 5", () => {
    const result = sum(6, 5);
    expect(result).toBe(11);
  });
});
