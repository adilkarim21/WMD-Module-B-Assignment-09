import React from 'react'
import './App.css'
import Card from './components/Card/Card'
import { Data } from './Data'

function App() {

  return (
    <>
      <div className='MainDiv'>
        {
          Data.map((e, i) => {
            return <Card key={i} category={e.category} id={e.id} title={e.title} description={e.description} price={e.price} rate={e.rating.rate} count={e.rating.count} image={e.image} />
          })
        }
      </div>
    </>
  )
}

export default App
