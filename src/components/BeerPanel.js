  
const BeerPanel = ({beer}) => {

    return (
      <div className="beer-overview">
        <h3>{beer.name}</h3>
        <img src={beer.image_url} alt={`logo for the beer ${beer.name}`}/>
        <p>{beer.tagline}</p>
      </div>
    )
  };
  
  export default BeerPanel;