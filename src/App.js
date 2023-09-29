import React, { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './FoodBox'; // Iteration 2
import AddFoodForm from './AddFoodForm';
import Search from './Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filteredFoodList, setFilteredFoodList] = useState(foods);

  // Iteration 1 -
  const handleAddFood = (newFood) => {
    setFoodList([...foodList, newFood]);
    setFilteredFoodList([...foodList, newFood]);
  };

  // Iteration 3
  const handleSearch = (query) => {
    const filteredList = foodList.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFoodList(filteredList);
  };

  // Iteration 6
  const handleDelete = (foodToDelete) => {
    const updatedFoodList = foodList.filter(
      (food) => food.id !== foodToDelete.id
    );
    setFoodList(updatedFoodList);
    setFilteredFoodList(updatedFoodList);
  };

  return (
    <div className="App">
      <Search onSearch={handleSearch} /> {/* Iteration 5 */}
      <div className="food-list">
        {filteredFoodList.map((food) => (
          <div className="food-box" key={food.id}>
            {/*  Iteration 6 */}
            <FoodBox food={food} onDelete={handleDelete} />
          </div>
        ))}
      </div>
      <div className="add-food-form">
        <AddFoodForm onAddFood={handleAddFood} /> {/* Iteration 4 */}
      </div>
    </div>
  );
}

export default App;
