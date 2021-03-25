import React from 'react';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import Button from '../04/Button';
export const withCountState = withState('count', 'setCount', 0);
export const CounterWithCountState = withCountState(Counter);
export const withCountHandlers = withHandlers({
  // 여기부터
  increaseCount: ({ setCount }) => () => setCount((value) => value + 1),
  decreaseCount: ({ setCount }) => () => setCount((value) => value - 1),
  resetCount: ({ setCount }) => () => setCount(0),
});

function Counter({ count, setCount }) {
  const increaseCount = () => setCount((value) => value + 1);
  return (
    <div>
      현재 카운트: {count}
      <Button onPress={increaseCount}>카운트 증가</Button>
    </div>
  );
}
function Counter2({ count, increaseCount }) {
  return (
    <div>
      현재 카운트: {count}
      <Button onPress={increaseCount}>카운트 증가2</Button>
    </div>
  );
} // 여기까지가 핸들러를 위해 추가된 것.

export const CounterWithCountHandler = withCountState(
  withCountHandlers(Counter2),
);
