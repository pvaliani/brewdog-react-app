const BeerFilterForm = ({ onUserInput }) => {
    const handleFilterInput = (event) => {
      const userInput = event.target.value;
      onUserInput(userInput);
    };
  
    return (
      <>
        <span>Filter by beer:</span>
        <input 
          type="text" 
          placeholder="search..."
          onChange={handleFilterInput}
        />
      </>
    )
  };
  
  export default BeerFilterForm;