import {useState} from "react";
import './css/slider.css'
import { Link } from "react-router-dom";




export default function ListSlider() {
  {/*const items = Array.from({ length: 0 }, (_, index) => ({
    id: index + 1,
  }));*/}

  const handleItemClick = (itemId) => {
    console.log(`Item ${itemId} clicked!`);
  }



  const [items, setItems] = useState([]);

  const AddBitacora = () => {
    setItems(prevItems => [
      ...prevItems,
      { id: prevItems.length + 1 }
    ]);
  };




  if (items.length === 0) {
    return (
      <div style={{ height: '30vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }} onClick={AddBitacora}>
        Create Bitacora
      </button>
    </div>
    );
  } else {
    return (
      <div className="slider-container">
        <div id="slider-title">
          My Books
        </div>
        <div className="slider">
        <button style={{ padding: '5px 15px', fontSize: '5px', cursor: 'pointer' }} onClick={AddBitacora}>
        Add bitacora
      </button>
          {items.map((item) => (
            <div key={item.id} className="slider-item">
              <Link to="/Bitacora/Book">
                <div className="placeholder-square" onClick={() => handleItemClick(item.id)}></div>
                <p>{item.text}</p>
              </Link>
              <button style={{ padding: '10px 20px'}} onClick={AddBitacora}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
};