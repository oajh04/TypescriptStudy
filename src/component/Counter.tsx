import { RootState } from '../reducer';
import { useDispatch, useSelector } from 'react-redux';
import {
  PlusAction,
  MinusAction,
  CustomAction,
  ZeroAction,
} from '../reducer/actions';
import React, { useState } from 'react';

const Counter = () => {
  const [ num, setNum ] = useState<number>(1)

  const count = useSelector((state: RootState) => state.reducer.count);
  console.log(count);
  const dispatch = useDispatch();

  const onPlus = () => dispatch(PlusAction())
  const onMinus = () => dispatch(MinusAction())
  const onCustom = () => dispatch(CustomAction(num))
  const onZero = () => dispatch(ZeroAction());

  return (
    <>
      <div>{count}</div>
      <button onClick={onPlus}>+1</button>
      <button onClick={onMinus}>-1</button>
      <input onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setNum(parseInt(e.target.value))}/><button onClick={onCustom}>+</button>
      <button onClick={onZero}>초기화</button>
    </>
  )
}

export default Counter;
