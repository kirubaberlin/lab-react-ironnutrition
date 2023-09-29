import React, { useState } from 'react';
import { Input } from 'antd';

function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <Input
      type="text"
      value={searchQuery}
      onChange={handleInputChange}
      placeholder="Search food..."
    />
  );
}

export default Search;
