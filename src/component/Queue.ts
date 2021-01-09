import React from 'react';

const Queue = () => {


    class Q {
        protected data: any = [];
        
        push(item: number): void {
          this.data.push(item);
        }
        
        pop(): void {
          return this.data.shift();
        }
    }

    const Queue = new Q();
      
    Queue.push(4)
    Queue.push(1)
    Queue.push(5)

    console.log(Queue.pop())
    console.log(Queue.pop())
    console.log(Queue.pop())

}

export default Queue;