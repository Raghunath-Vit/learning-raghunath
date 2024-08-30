const {prime}=require("../prime");
describe("Testing Number is Not Prime",()=>{
  test("Should not be a prime Number",()=>{
    expect(prime(9)).toEqual(false);
  });
});

describe("Testing Number is a Prime Number",()=>{
  test("Should be a prime Number",()=>{
    expect(prime(23)).toEqual(true);
  })
})