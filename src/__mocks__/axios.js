const mockAxios = {
  get: jest.fn(() => Promise.resolve({ data: { USA: 0.65 } })),
};

export default mockAxios;
