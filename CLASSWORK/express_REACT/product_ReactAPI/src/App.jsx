import "./App.css"
import { useEffect, useState } from "react";

function App() {

  
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState("");

  // Get Products
  const getProducts = async () => {

    const response = await fetch(
      "http://localhost:8000/api/products"
    );

    const data = await response.json();

    setProducts(data);
  };

  // Run when page loads
  useEffect(() => {
    getProducts();
  }, []);


  // Add Product
  const addProduct = async (e) => {

    e.preventDefault();

    const product = {
      name: name,
      price: price,
      inStock: inStock
    };

    await fetch("http://localhost:8000/api/products", {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(product)
    });

    // Clear form
    setName("");
    setPrice("");
    setInStock("");

    // Get updated products
    getProducts();
  };


  // Delete Product
  const deleteProduct = async (id) => {

    await fetch(
      `http://localhost:8000/api/products/${id}`,
      {
        method: "DELETE"
      }
    );

    getProducts();
  };


  return (
    <div>
      <h1>PRODUCT MANAGEMENT SYSTEM</h1>


      {/* Add Product Form */}

      <form onSubmit={addProduct}>
       <label className="label">PRODUCT NAME : </label>
        <input
          type="text"
          placeholder="Enter Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <br></br>
        <label className="label">PRODUCT PRICE : </label>
        <input
          className="price"
          type="number"
          placeholder="Enter Product Price(in Rs.)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br></br>
        <br></br>
        <label className="label">AVAILABILITY : </label>
        <input
          type="text"
          placeholder="inStock"
          value={inStock}
          onChange={(e) => setInStock(e.target.value)}
        />
        <br></br>
        <br></br>
        <button type="submit" className="submit-btn">
          Add Product
        </button>

      </form>


      <hr />


      {/* Product Table */}
      <div>
      <h1 className="main">DASHBOARD TABLE</h1>
      <hr></hr>
      <table border="1" width="1000px" cellPadding="10" >

        <thead>

          <tr className="heading">
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>InStock</th>
            <th>Action</th>
          </tr>

        </thead>


        <tbody>

          {products.map((product) => (

            <tr key={product.id}>

              <td>{product.id}</td>

              <td>{product.name}</td>

              <td>₹{product.price}</td>

              <td>{product.inStock}</td>

              <td>

                <button
                  className="del-btn" onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>
     </div>
    </div>
  );
}

export default App;