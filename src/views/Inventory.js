import { useState } from 'react'
import Counter from '../components/Counter'

export default function Inventory() {
    const [counters, setCounters] = useState([
        {
          title: 'Honda Counter',
          initialCount: 0
        },
        {
          title: 'BMW Counter',
          initialCount: 0
        },
        {
          title: 'Insurance Deluxe Package',
          initialCount: 1
        },
        {
          title: 'Insurance Basic Package',
          iniitalCount: 0
        }
      ])
    
    
    
    
      return (
        <div className="App">
         {
          counters.map((counter) => <Counter title ={counter.title} initialCount={counter.initialCount}/>)
          }
        </div>
      );
}