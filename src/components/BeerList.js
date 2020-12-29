import BeerPanel from './BeerPanel';

const BeerList = ({ beers }) => {
  const beerNodes = beers.map((currentBeer) => {
    return (
      <BeerPanel beer={currentBeer} key={currentBeer.id}/>
    )
  });

  return (
    <section id="beer-list">
      {beerNodes}
    </section>
  )
};

export default BeerList;