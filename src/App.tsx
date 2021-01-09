import React from 'react';
import logo from './logo.svg';
import './App.css';
import Queue from './component/Queue';

function App() {

  class S {
    protected data: any = [];
    
    push(item: number): void {
      this.data.push(item);
    }
    
    pop(): void {
      return this.data.pop();
    }
  }

  const Stack = new S();
    
  Stack.push(4)
  Stack.push(1)
  Stack.push(5)

  console.log(Stack.pop())
  console.log(Stack.pop())
  console.log(Stack.pop())

  return (
    <div>
      asd
    </div>
  );
}

export default App;
