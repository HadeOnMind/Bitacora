import { useState } from 'react';

function LeftPage() {
  // React state to handle the image and text area content
  const [image, setImage] = useState(null);  // To store the selected image
  const [text, setText] = useState('');      // To store the text input
  
  // Handler for the image file input
  const handleImageChange = (event) => {
    const file = event.target.files[0];  // Get the selected image file
    if (file) {
      setImage(URL.createObjectURL(file));  // Create an object URL for the image preview
    }
  };

  // Handler for the text area input
  const handleTextChange = (event) => {
    setText(event.target.value);  // Update the state with the current text input
  };

  return (
    <div className="Page" id="LeftPage">
      <div className="PageImage" id="PageImageLeft">
        {/* Show the selected image or the default text */}
        {image ? <img src={image} alt="Selected" /> : 'Click to Add Image'}
      </div>
      
      {/* Image input field */}
      <input 
        type="file" 
        id="imageInputLeft" 
        accept="image/*" 
        onChange={handleImageChange}  // Handle image selection
      />
      
      <div className="PageText">
        {/* Text area, controlled component */}
        <textarea 
          name="lefText" 
          id="lefText" 
          placeholder="Place some text right here" 
          value={text}             // The text area value is controlled by React state
          onChange={handleTextChange}  // Handle text input change
        />
      </div>
    </div>
  );
}

export default LeftPage;
