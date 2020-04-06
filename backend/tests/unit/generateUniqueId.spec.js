const generateUniqueId = require('../../src/utils/generateUniqueId');
describe('Gernerate Unique ID', () => {

  it('Should generete an unique ID', () => {

    const id = generateUniqueId();

    expect(id).toHaveLength(8)
  })
});