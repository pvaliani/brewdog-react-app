const BeerFilterForm = ({ onUserInput }) => {
    const handleFilterInput = (event) => {
      const userInput = event.target.value;
      onUserInput(userInput);
    };
  
    return (
      <>
        <span>beer filter: </span>
        <input 
          type="text" 
          placeholder="search..."
          onChange={handleFilterInput}
        />
      </>
    )
  };
  
  export default BeerFilterForm;