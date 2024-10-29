import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../store';
import { increment, decrement, incrementByAmount } from '../store/counterSlice';
import StyledButton from './StyledButton';

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const CounterValue = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  width: 100px;
  margin-top: 1rem;
`;

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = React.useState<number>(0);

  return (
    <CounterContainer>
      <CounterValue>{count}</CounterValue>
      <ButtonContainer>
        <StyledButton onClick={() => dispatch(decrement())}>-</StyledButton>
        <StyledButton onClick={() => dispatch(increment())}>+</StyledButton>
      </ButtonContainer>
      <Input
        type="number"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(Number(e.target.value))}
      />
      <StyledButton onClick={() => dispatch(incrementByAmount(incrementAmount))}>
        Add Amount
      </StyledButton>
    </CounterContainer>
  );
};

export default Counter;