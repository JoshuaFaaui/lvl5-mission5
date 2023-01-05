import React, { useState } from 'react'

function Search() {
    const [userinput, setUserinput] = useState('')
    const InputtedText = (self) => {
        setUserinput(self.target.value)
    }

    const SendData = () => {
        fetch("http://localhost:3001/data",{
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "d1": 0,
                "d2":userinput
            })
        })
          .then((self) => self.json())
          .then((results) => {
            console.log(results)
          })
          .catch((err) => {
            console.log(err);
          });
    }

    const deleteAll = () => {
        fetch("http://localhost:3001/deleter")
        .then(self=>self.json())
        .then(self=>{console.log('deleted')})
    }
    return (
    <>
        <form onSubmit={SendData}>
            <input id='userinp' onChange={InputtedText}/>
            <button type='submit'>ADD</button>  
        </form>
        <form onSubmit={deleteAll}>
            <button type='submit'>Delete</button>
        </form>
        
        
    </>
    
  )
}

export default Search