import './App.css';
import { useState, useEffect } from 'react';
import BeerList from './components/BeerList';
import BeerFilterForm from './components/BeerFilterForm';

// app.js is the container in this case

function App() {

  // destructured array stores the array of beers and allows us to set the beers with a setBeer method. The same is true for the filteredBeers when we invoke the BeerFilterForm. UseState is an empty array

  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);

  // Create a method to fetchBeers using the fetch method of React

  const fetchBeers = () => {
    const url = `https://api.punkapi.com/v2/beers?per_page=80`;

  // fetch returns a promise object

    fetch(url) 

    // .then returns another promise which is a response that is then converted to JSON

      .then((response) => response.json())  // returns another promise

      // we then spread the json data returned to add in niall's beer object to the array of beers 

      .then((jsonData) => {
        setBeers([...jsonData, {
          id: 420,
          name: "niall's tasty malts",
          tagline: "home of the whoppy",
          image_url: "https://i.imgur.com/vGNZn3F.jpg"
        }]);

        // pass setFilteredBeers the JSON data
        setFilteredBeers(jsonData);
      });
  };

  const handleUserFilter = (userInput) => {
    const someBeers = beers.filter((currentBeer) => {
      return currentBeer.name.toUpperCase().includes(userInput.toUpperCase());
    });
    setFilteredBeers(someBeers);
  };

  useEffect(() => {
    fetchBeers();
  }, []);



  return (
    <main>
      <h1>The Brewdog Collection</h1>
      <div id="top-section">
        <BeerFilterForm onUserInput={handleUserFilter}/>
      </div>
      <BeerList beers={filteredBeers}/>
    </main>
  );
}

export default App;