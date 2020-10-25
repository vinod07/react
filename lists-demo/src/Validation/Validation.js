const validation = props => {
  let displayText = "Text long enough";
  if (props.inputLength < 5) {
    displayText = "Text too short";
  }
  return (
    <div>
      <p>{displayText}</p>
    </div>
  );
};

export default validation;
