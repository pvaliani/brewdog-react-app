import './App.css';
import { useState, useEffect } from 'react';
import BeerList from './components/BeerList';
import BeerFilterForm from './components/BeerFilterForm';

function App() {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);

  const fetchBeers = () => {
    const url = `https://api.punkapi.com/v2/beers?per_page=80`;

    fetch(url)      // returns a promise
      .then((response) => response.json())  // returns another promise
      .then((jsonData) => {
        setBeers([...jsonData, {
          id: 420,
          name: "niall's tasty malts",
          tagline: "home of the whoppy",
          image_url: "https://i.imgur.com/vGNZn3F.jpg"
        }]);
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
      <h1>getting the beers in</h1>
      <div id="top-section">
        <BeerFilterForm onUserInput={handleUserFilter}/>
      </div>
      <BeerList beers={filteredBeers}/>
    </main>
  );
}

export default App;