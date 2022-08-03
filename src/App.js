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
    <Part osat={props.parts[0]}  harjoitus={props.exercises[0]} />
  
    <Part osat={props.parts[1]} harjoitus={props.exercises[1]} />
  
    <Part osat={props.parts[2]} harjoitus={props.exercises[2]} />
  
  </div>
  )
  }
  const Part = (props) => {
  
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
      
        
        <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />

  
        <Total inTot={exercises1 + exercises2 + exercises3}/>
  
      </div>
    )
  }
  
  export default App

  // ************************************************************************************************teht.1.2
*/
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
    <Part osat={props.parts[0]}  harjoitus={props.exercises[0]} />
  
    <Part osat={props.parts[1]} harjoitus={props.exercises[1]} />
  
    <Part osat={props.parts[2]} harjoitus={props.exercises[2]} />
  
  </div>
  )
  }
  const Part = (props) => {
  
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
    const part1 = {

      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {

      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {

      name: 'State of a component',
      exercises: 14
    }
  
  
    return (
      <div>
        <h1>{course}</h1>
	  <p>{part1.name}: {part1.exercises}</p>
	  <p>{part2.name}: {part2.exercises}</p>
	  <p>{part3.name}: {part3.exercises}</p>
	  <p>Number of exercises: {part1.exercises + part2.exercises + part3.exercises}</p>

      </div>
    )
  }
  
  export default App