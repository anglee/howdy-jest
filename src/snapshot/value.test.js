import { text, number, object, array, func } from './value';

describe('text', () => {
  it('should match snapshot', () => {
    expect(text).toMatchSnapshot();
  });
});

describe('number', () => {
  it('should match snapshot', () => {
    expect(number).toMatchSnapshot();
  });
});

describe('object', () => {
  it('should match snapshot', () => {
    expect(object).toMatchSnapshot();
  });
});

describe('array', () => {
  it('should match snapshot', () => {
    expect(array).toMatchSnapshot();
  });
});

describe('func', () => {
  it('should match snapshot', () => {
    expect(func).toMatchSnapshot();
  });
  it('should return expected value', () => {
    expect(func(2)).toEqual(4);
  });
});
