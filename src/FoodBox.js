import React, { useState } from 'react';
import { Card, Divider, Input, Button } from 'antd';

function FoodBox({ food, onDelete }) {
  const [servings, setServings] = useState(food.servings);

  const totalCalories = food.calories * servings;

  const handleServingsChange = (e) => {
    const newServings = parseInt(e.target.value, 10);
    setServings(newServings);
  };

  const handleDeleteClick = () => {
    onDelete(food);
  };

  return (
    <Card title={food.name}>
      <img src={food.image} alt={food.name} width={100} />
      <Divider />
      <p>Calories per serving: {food.calories}</p>
      <Input value={servings} onChange={handleServingsChange} />
      <p>Total Calories: {totalCalories}</p>
      <Button type="danger" onClick={handleDeleteClick}>
        Delete
      </Button>
    </Card>
  );
}

export default FoodBox;
