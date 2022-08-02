/*
const Header = (props) =>{
return (
<div>
<h1>{props.course}</h1>

</div>
)
}
const Content = (props) =>{
return(
 <p>{props.osio} {props.harjoitukset}</p>
)
}


const Total = (props) =>{
  return(

<p>Number of exercises: {props.inTot}</p>

  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
    
      <Content osio={part1} harjoitukset={exercises1}/>
      <Content osio={part2} harjoitukset={exercises2}/>
      <Content osio={part3} harjoitukset={exercises3}/>


      <Total inTot={exercises1 + exercises2 + exercises3}/>

    </div>
  )
}

export default App

//**************************************************************************************** teht1.1
*/

/*

const Header = (props) =>{
  return (
  <div>
  <h1>{props.course}</h1>
  
  </div>
  )
  }
  const Content = (props) =>{
  return(
    <div>
    <Part osat={props.parts[0]} harjoitus={props.exercises[0]} />
  
    <Part osat={props.parts[1]} harjoitus={props.exercises[1]} />
  
    <Part osat={props.parts[2]} harjoitus={props.exercises[2]} />
  
  </div>
  )
  }
  const Part = (props) => {
  
    //console.log(props); / Tähän kohtaan kun halutaan tulostaa senhetkisen propsin sisältö
  
    return(
  
      <div>
  
        {props.osat} {props.harjoitus}
  
      </div>
  
    )
    }
  
  const Total = (props) =>{
    return(
  
  <p>Number of exercises: {props.inTot}</p>
  
    )
  }
  
  const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
  
    return (
      <div>
        <Header course={course}/>
      
        
        <Part osat={part1 + exercises1}/>
        <Part osat={part2 + exercises2}/>
        <Part osat={part3 + exercises3}/>
  
        <Total inTot={exercises1 + exercises2 + exercises3}/>
  
      </div>
    )
  }
  
  export default App

  // ************************************************************************************************teht.1.2
*/



