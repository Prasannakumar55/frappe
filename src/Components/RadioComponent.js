import React, { useState } from 'react';

function RadioComponent() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  }

  return (
    <div>
      <input type="radio" value="Hasthinapuram" checked={selectedOption === 'Option 1'} onChange={handleOptionChange} />
      <label>Hasthinapuram</label>
      <br />
      
      <input type="radio" value="DK Road" checked={selectedOption === 'Option 2'} onChange={handleOptionChange} />
      <label>DK Road</label>
      <br />

      <input type="radio" value="Lalbangalow" checked={selectedOption === 'Option 3'} onChange={handleOptionChange} />
      <label>Lalbangalow</label>
      <br />
      <p>You selected: {selectedOption}</p>
    </div>
  );
}

export default RadioComponent;
