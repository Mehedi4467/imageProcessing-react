
import './App.css';
import Compress from "react-image-file-resizer";
import { useState } from 'react';
function App() {


  const imgHandel = async (event) => {
    event.preventDefault();
    let formData = new FormData();

    const imageData = event.target.img.files[0];
    const secondImageData = event.target.secondImg.files[0] || [];
    formData.append('primaryImage', imageData);
    for (let i = 0; i < secondImageData.length; i++) {
      formData.append(`secondImage`, secondImageData[i]);
    };

    // const productName = event.target.name.value;
    await fetch('http://localhost:5000/product', {
      method: "POST",

      body: formData,

    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          console.log(data)
        }
      })
  }


  return (
    <div className="App">
      <h2>React Image File Resizer</h2>
      <br />
      <form onSubmit={imgHandel}>
        <input type="text" name='name' />
        <input
          type="file"
          accept="image/*"
          name='img'
        // onChange={onFileResize}
        />
        <input
          type="file"
          accept="image/*"
          // onChange={onFileResize}
          name='secondImg'
          multiple
        />

        <button>Submit</button>

      </form>

    </div>
  );
}

export default App;
