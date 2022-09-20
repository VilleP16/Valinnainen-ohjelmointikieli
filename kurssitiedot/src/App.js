const App = () => {
  const course = 'Half Stack application development'
  const olio1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const olio2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const olio3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content 
        contentName1 = {olio1.name} contentExercises1 = {olio1.exercises}
        contentName2 = {olio2.name} contentExercises2 = {olio2.exercises}
        contentName3 = {olio3.name} contentExercises3 = {olio3.exercises}
      />
      <Total
        ekaReeni= {olio1.exercises} 
        tokaReeni = {olio2.exercises} 
        kolmasReeni = {olio3.exercises}
      />
    </div>
  )
}
const Content = (props) => {
  return(
    <>
      <Part name={props.contentName1} exercises={props.contentExercises1}/>
      <Part name={props.contentName2} exercises={props.contentExercises2} />
      <Part name={props.contentName3} exercises={props.contentExercises3} />
    </>
  )
}
const Part = (props) =>{
  return(
    <p>{props.name} {props.exercises}</p>

  )
}
const Total = (props)  =>{
  return(
    <p>Number of exercises {props.ekaReeni + props.tokaReeni + props.kolmasReeni}</p>
  )
}
const Header = (props) =>{
  return(
    <h1>{props.course}</h1>
  )
}

export default App