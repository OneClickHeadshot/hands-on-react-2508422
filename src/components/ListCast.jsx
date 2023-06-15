import{ useState, useEffect } from "react"

export default () => {
  const [cast, setCast] =  useState([])
  const [flip, setFlip] = useState(false)

  const style = {} 

  if (flip){
    style = { transform: 'rotate(360deg)' , transition: 'transform 150ms ease' }
  }
  else {
    style = {}
  }

  async function fetchCast( ){
    const response = await fetch('/cast.json')
    setCast(await response.json())
  }

  useEffect (()=> {
    fetchCast();
  });

  return (
    <div className="CastList" style={{
      display: "grid",
      gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
      gap: `1rem`,
      marginBottom: `1rem`
    }}>
      {
        cast.map(member => (
          <a key={member.id} data-tooltip={member.name}
          onMouseOver={()=>setFlip(true)} 
          onMouseOut={()=>setFlip(false)} >
          <img src={`images/${member.slug}_tn.svg`} alt={member.name} style={style}/>
          </a>
        ))
      }
    </div>
  )
}