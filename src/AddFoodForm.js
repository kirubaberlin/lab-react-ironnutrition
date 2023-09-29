import React, { useState } from 'react';
import { Input, Form, Button } from 'antd';

function AddFoodForm({ onAddFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      name,
      image,
      calories: parseInt(calories),
      servings: parseInt(servings),
    };

    onAddFood(newFood);

    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item label="Name">
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Item>
      <Form.Item label="Image URL">
        <Input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </Form.Item>
      <Form.Item label="Calories">
        <Input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          required
        />
      </Form.Item>
      <Form.Item label="Servings">
        <Input
          type="number"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
          required
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Food
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddFoodForm;
