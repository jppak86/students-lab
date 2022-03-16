import Score from "./Score";

const Student = (props) => {
  return (
    <>
    {props.students.map(student =>
    <div key={student.name}>
      <h3>
      Name: {student.name}
      </h3> 
      <p>
      Bio: {student.bio}
      </p>
      <h4>
      scores:
      </h4>
      <Score scores={student.scores}/>
    </div> 
    )}
    </>
  )
}

export default Student;