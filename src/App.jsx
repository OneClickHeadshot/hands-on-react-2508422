function App() {
  const name = 'WeirdAliens'
  const style1 = {color:"steelblue"} 
  //const style2 = {font-family:"verdana"}

  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" alt="group" />
          <h1>Meet the <i style={style1}>{name}</i></h1>
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <button className="outline" onClick={()=> alert('Hey There!')}> Click Here for Surprise</button>
        </hgroup>
      </article>
    </div>
  )
}
export default App
