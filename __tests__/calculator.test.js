import { add, divide } from "../src/calculator";

describe("add", () => {
  it("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("adds negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
  });

  it("throws when inputs are not numbers", () => {
    expect(() => add("2", 3)).toThrow("add expects two numbers");
  });
});

describe("divide", () => {
  it("divide two positive numbers", () => {
    expect(divide(6, 3)).toBe(2);
  });

  it("divide two negative numbers", () => {
    expect(divide(-6, -3)).toBe(2);
  });

  it("throws when inputs are not numbers", () => {
    expect(() => divide("2", 3)).toThrow("Both arguments must be numbers");
  });

  it("throws when inputs are NaN", () => {
    expect(() => divide(NaN, 3)).toThrow("Arguments cannot be NaN");
  });

  it("throws when divide to zero", () => {
    expect(() => divide(6, 0)).toThrow("Division by zero is not allowed");
  });
});
