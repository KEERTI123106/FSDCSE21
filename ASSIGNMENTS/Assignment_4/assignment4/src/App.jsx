import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [campusData, setCampusData] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [problem, setProblem] = useState("");
  const [priority, setPriority] = useState("");

  // Store ID when editing
  const [editId, setEditId] = useState(null);


  // GET all requests
  const getRequests = async () => {
    const response = await fetch(
      "http://localhost:8000/api/requests"
    );

    const data = await response.json();

    setCampusData(data);
  };


  // Load requests when page opens
  useEffect(() => {
    getRequests();
  }, []);


  // ADD / UPDATE request
const handleSubmit = async (e) => {
  e.preventDefault();

  const request = {
    name,
    email,
    category,
    problem,
    priority
  };

  try {
    let response;

    if (editId !== null) {
      // UPDATE
      response = await fetch(
        `http://localhost:8000/api/requests/${editId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(request)
        }
      );

      setEditId(null);
    } else {
      // ADD
      response = await fetch(
        "http://localhost:8000/api/requests",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(request)
        }
      );
    }

    // Check if server returned an error
    if (!response.ok) {
      const errorData = await response.text();
      console.log("Server Error:", errorData);
      return;
    }

    const result = await response.json();
    console.log("Server Response:", result);

    // Clear form
    setName("");
    setEmail("");
    setCategory("");
    setProblem("");
    setPriority("");

    // Refresh table
    await getRequests();

  } catch (error) {
    console.log("Fetch Error:", error);
  }
};


  // EDIT button
  const editRequest = (request) => {
    setEditId(request.id);

    setName(request.name);
    setEmail(request.email);
    setCategory(request.category);
    setProblem(request.problem);
    setPriority(request.priority);
  };


  // CANCEL EDIT
  const cancelEdit = () => {
    setEditId(null);

    setName("");
    setEmail("");
    setCategory("");
    setProblem("");
    setPriority("");
  };


  // DELETE request
  const deleteRequest = async (id) => {
    await fetch(
      `http://localhost:8000/api/requests/${id}`,
      {
        method: "DELETE"
      }
    );

    getRequests();
  };


  return (
    <div className="container">

      <h1>CAMPUS HELP DESK</h1>


      {/* FORM */}

      <form onSubmit={handleSubmit} className="form-card">

        <h2>
          {editId !== null
            ? "Update Campus Request"
            : "Submit Campus Request"}
        </h2>


        {/* Student Name */}

        <label>Student Name : </label>
        <input
          type="text"
          placeholder="Enter Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br></br>
        <label>Email Id : </label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br></br>
        <label>Category : </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="Facilities">Facilities</option>
          <option value="IT Support">IT Support</option>
          <option value="Housing">Housing</option>
          <option value="Academic">Academic</option>
          <option value="Safety">Safety</option>
          <option value="Dining Services">Dining Services</option>
          <option value="Finance">Finance</option>
          <option value="Parking">Parking</option>
          <option value="Other">Other</option>
        </select>

        <br />
        <br />

        <label>Problem Description : </label>
        <textarea
          placeholder="Describe your problem"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          rows="4"
          cols="40"
          required
        />
        <br></br>
        <br></br>
        <label>Priority : </label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          required
        >
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <br />
        <br />


        {/* Submit / Update */}

        <button type="submit">
          {editId !== null? "Update Request" : "Submit Request"}
        </button>


        {/* Cancel */}

        {editId !== null && (

          <button
            type="button"
            className="cancel-btn"
            onClick={cancelEdit}
          >
            Cancel
          </button>

        )}

      </form>
      <hr />

      {/* DISPLAY REQUESTS */}
      <div className="table-card">
        <h2>Submitted Campus Requests</h2>

      <table border="1" cellPadding="10" cellSpacing="0">

        <thead>
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Email</th>
            <th>Category</th>
            <th>Problem</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {campusData.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.name}</td>
              <td>{request.email}</td>
              <td>{request.category}</td>
              <td>{request.problem}</td>
              <td className={request.priority === "High"? "priority-high": request.priority === "Medium"
                  ? "priority-medium" : "priority-low"}>{request.priority}</td>
              <td><button onClick={() => editRequest(request)} className="edit-btn">Edit</button>
                <br></br>
                <br></br>
                <button onClick={() => deleteRequest(request.id)} className="delete-btn">Delete</button>
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
     </div>
    </div>
  );
}

export default App;

