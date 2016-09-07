import timerGame from './timerGame'

jest.useFakeTimers();

it('waits 1 second before ending the game', () => {
  timerGame();
  expect(setTimeout.mock.calls.length).toBe(1);
  expect(setTimeout.mock.calls[0][1]).toBe(1000);
});

it('calls the callback after 1 second', () => {
  const callback = jest.fn();

  timerGame(callback);

  // At this point in time, the callback should not have been called yet
  expect(callback).not.toBeCalled();

  // Fast-forward until all timers have been executed
  jest.runAllTimers();

  // Now our callback should have been called!
  expect(callback).toBeCalled();
  expect(callback.mock.calls.length).toBe(1);
});