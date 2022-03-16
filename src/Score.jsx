const Score = (props) => {
  return (
    <>
    {props.scores.map(score => <h4 key={score.date}>
      {score.date}: {score.score} points
     </h4>
    )}
    <br />
    </>
  )
}

export default Score;