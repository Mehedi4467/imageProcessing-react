
import { useState } from 'react';
import './App.css';
function App() {
  const [message, setMessage] = useState(false);

  const imgHandel = async (event) => {
    event.preventDefault();

    let formData = new FormData();
    const imageData = event.target.img.files[0];
    // const secondImageData = event.target.secondImg.files[0] || [];
    formData.append('primaryImage', imageData);
    // for multipal image
    // for (let i = 0; i < secondImageData.length; i++) {
    //   formData.append(`secondImage`, secondImageData[i]);
    // };

    // const productName = event.target.name.value;
    await fetch('http://localhost:5000/product', {
      method: "POST",
      body: formData,

    })
      .then(res => res.json())
      .then(data => {
        if (data.SUCCESS) {
          setMessage(true)
        }
        else {
          setMessage(false)
        }
        console.log(data)
      })
    event.target.reset();
  }


  return (
    <div className="App">
      <h2>React Image File Resizer(500 X 500)</h2>
      {
        message && <h2>Image Resize Successfuly</h2>
      }
      <br />
      <form onSubmit={imgHandel}>
        <input
          type="file"
          accept="image/*"
          name='img'
          onClick={() => setMessage(false)}
        />
        {/* <input
          type="file"
          accept="image/*"
          // onChange={onFileResize}
          name='secondImg'
          multiple
        /> */}

        <button>Submit</button>

      </form>

    </div>
  );
}

export default App;
