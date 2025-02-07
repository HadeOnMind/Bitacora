import React, { useState } from "react";
import "./css/book.css";





const DoublePageLayout = () => {
const [image, setImage] = useState(null)
const [text, setText] = useState("")


const TextChangeHandler = (event) => {
  setText(event.target.value);
};

const ImageHandler = (event) => {
const file = event.target.files[0]
if (file) {
const Reader = new FileReader();
Reader.onloadend = () => {
  setImage(Reader.result);
}
Reader.readAsDataURL(file);

}
};

  return (
    <div className="book-layout">
      <div className="book-header">
        <h2>Book Title Placeholder</h2>
        <p>Author: Placeholder Author</p>
      </div>

      <div className="book-content">
        <div className="book-page">
          <textarea className="text-placeholder">
            <p>This is a placeholder for text on the left page.</p>
          </textarea>
          <div className="image-placeholder">
            <p>Image Placeholder</p>
          </div>
        </div>

        <div className="book-page">
        <textarea className="text-placeholder"
        value='text'
        onChange={TextChangeHandler}>
            <p>This is a placeholder for text on the left page.</p>
          </textarea>
          <div className="image-placeholder" onClick={() => document.getElementById("image-upload").click()}>
          {image ? (
              <img
                src={image}
                alt="Uploaded"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <p>Click to upload an image</p>
            )}
            <input
            id="image-upload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={ImageHandler}
            />
          </div>
        </div>
      </div>

      <div className="book-footer">
        <p>Page 1 of 10</p>
      </div>
    </div>
  );
};




const SinglePageLayout = () => {
  return (
    <div className="single-book-layout">
      <div className="single-book-header">
        <h2>Book Title Placeholder</h2>
        <p>Author: Placeholder Author</p>
      </div>

      <div className="single-book-content">
        <div className="single-book-page">
          <div className="single-text-placeholder">
            <p>This is a placeholder for text on the page.</p>
          </div>
          <div className="single-image-placeholder">
            <p>Image Placeholder</p>
          </div>
        </div>
      </div>

      <div className="single-book-footer">
        <p>Page 1 of 10</p>
      </div>
    </div>
  );
};



export default function Book() {

  const [isDoublePage, setIsDoublePage] = useState(true);

  const toggleLayout = () => {
    setIsDoublePage((prevLayout) => !prevLayout);
  };

  
  return (
    <div>
      <button onClick={toggleLayout}>Toggle Layout</button>
      {isDoublePage ? <DoublePageLayout /> : <SinglePageLayout />}
    </div>
  );
}
