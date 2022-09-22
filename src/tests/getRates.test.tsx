import getRates from '../utils/getRates';

it("call", async () => {
  const rates = await getRates('http://localhost:4000/api/v1/rates/', 'USA', jest.fn());
  expect(rates['USA']).toEqual(0.65)
})

