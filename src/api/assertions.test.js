import { drinkAll } from './assertions';

describe('mock', () => {
  it('drinks something lemon-flavored', () => {
    let drink = jest.fn(); // mock
    drinkAll(drink, 'lemon');
    expect(drink).toBeCalled();
    expect(drink).toBeCalledWith('lemon');
  });

  it('does not drink something octopus-flavored', () => {
    let drink = jest.fn(); // mock
    drinkAll(drink, 'octopus');
    expect(drink).not.toBeCalled();
  });
});


describe('stub', () => {
  it('drinks something lemon-flavored', () => {
    let foo = jest.fn(() => 'apple'); // stub
    const ret = foo();
    expect(foo).toBeCalled();
    expect(ret).toEqual('apple');
  });
});