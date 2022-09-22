const App = () => {
  const courses = [
    {
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    },
    {
      name: 'PHP rules',
      id: 3,
      parts: [
        {
          name: 'return [results]',
          exercises: 30,
          id: 1
        },
        {
          name: '(Succes == 1 usually)',
          exercises: 70,
          id: 2
        }
      ]
    }
  ]
  
  return (
    <div>
      {courses.map((course) =>{
        console.log(course)
        return <Course course = {course} key = {course.id}/>

      })}
      
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
const Content = ({ course }) => {
  //console.log(course)

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
const Total = ({ course }) => {
  const total = course.parts.reduce((totalValue, currentPartOfTheArray, currentIndex) => {
    //console.log('totalvalue', totalValue, 'currentPartOfTheArray', currentPartOfTheArray, 'currentIndex', currentIndex)
    return totalValue + currentPartOfTheArray.exercises;
  },0)
  return (
  <p><b>Number of exercises: {total}</b></p>
  )
}
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

export default App