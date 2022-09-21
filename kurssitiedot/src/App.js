const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Testi',
        exercises: 99,
        id: 4
      },
      {
        name: 'Testing mapping function',
        exercises: 16,
        id: 5
      }
    ]
  }
  return (
    <div>
      <Course course={course} />
    </div>
  )
}
const Course = (props) => {
  return (
    <>
      <Header course={props.course.name} />
      <Content course={props.course} />
      <Total course={props.course} />
    </>
  )
}
const Content = ({course}) => {
  console.log(course)

  return (
     <div>
      {course.parts.map((part) => {
        return <Part name={part.name} exercises={part.exercises} key={part.id} />
      })}
    </div> 
  )
}
const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>

  )
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
  )
}
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

export default App