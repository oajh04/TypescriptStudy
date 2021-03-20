import { RootState } from '../reducer';
import { useDispatch, useSelector } from 'react-redux';
import {
  PlusAction,
  MinusAction,
} from '../reducer/actions';

const Counter = () => {
  const count = useSelector((state: RootState) => state.reducer.count);
  console.log(count);
  const dispatch = useDispatch();

  const onPlus = () => dispatch(PlusAction())
  const onMinus = () => dispatch(MinusAction())

  return (
    <>
      <div>{count}</div>
      <button onClick={onPlus}>+1</button>
      <button onClick={onMinus}>-1</button>
    </>
  )
}

export default Counter;
