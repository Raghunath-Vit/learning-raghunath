const { prime } = require("../prime");

describe("Testing Number is Not Prime", () => {
  test("Should not be a prime Number (non-prime small number)", () => {
    expect(prime(0)).toEqual(false);
    expect(prime(1)).toEqual(false);
    expect(prime(4)).toEqual(false);
    expect(prime(6)).toEqual(false);
    expect(prime(8)).toEqual(false);
    expect(prime(9)).toEqual(false);
    expect(prime(10)).toEqual(false);
    expect(prime(15)).toEqual(false);
    expect(prime(21)).toEqual(false);
  });

  test("Should not be a prime Number (negative numbers and zero)", () => {
    expect(prime(-1)).toEqual(false);
    expect(prime(-7)).toEqual(false);
  });

  test("Should not be a prime Number (even numbers greater than 2)", () => {
    expect(prime(22)).toEqual(false);
    expect(prime(49)).toEqual(false);
    expect(prime(50)).toEqual(false);
  });
});

describe("Testing Number is a Prime Number", () => {
  test("Should be a prime Number (small primes)", () => {
    expect(prime(2)).toEqual(true);
    expect(prime(3)).toEqual(true);
    expect(prime(5)).toEqual(true);
    expect(prime(7)).toEqual(true);
    expect(prime(11)).toEqual(true);
    expect(prime(13)).toEqual(true);
    expect(prime(17)).toEqual(true);
    expect(prime(19)).toEqual(true);
    expect(prime(29)).toEqual(true);
  });

  test("Should be a prime Number (larger primes)", () => {
    expect(prime(31)).toEqual(true);
    expect(prime(37)).toEqual(true);
    expect(prime(41)).toEqual(true);
    expect(prime(43)).toEqual(true);
    expect(prime(47)).toEqual(true);
    expect(prime(53)).toEqual(true);
    expect(prime(59)).toEqual(true);
    expect(prime(61)).toEqual(true);
    expect(prime(67)).toEqual(true);
    expect(prime(71)).toEqual(true);
  });
});
