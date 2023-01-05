import { useEffect, useState } from "react"

function Display() {
    const [datadisplayed,setDatadisplayed] = useState([])
    const fetcher = () => {
        fetch("http://localhost:3001/")
          .then((self) => self.json())
          .then((data) => {
              setDatadisplayed(data)
              console.log(datadisplayed)
          });
    }
    useEffect(()=>{
        fetcher()
    },[])
  return (
      <div>
        {
            datadisplayed.length===0?console.log('none'):
            datadisplayed.map((elem,index) => {
                return (
                    <div key={index}>
                        <h3>{elem.quote}</h3>
                    </div>
                )
            })
        }
      </div>
  )
}

export default Display