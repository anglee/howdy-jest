import * as user from './user';

// The promise that is being tested should be returned.
it('works with promises', () => {
  return user.getUserName(5)
    .then(name => expect(name).toEqual('Paul'));
});

it('works with async/await', async () => {
  const userName = await user.getUserName(4);
  expect(userName).toEqual('Mark');
});