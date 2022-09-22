const Course = (props) => {
    return (
      <>
        <Header course={props.course.name} />
        <Content course={props.course} />
        <Total course={props.course} />
      </>
    )
  }
  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
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
  
  export default Course