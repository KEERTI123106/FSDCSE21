import http from "http";
import fs from 'fs';

const server = http.createServer((req, res) => {
    if (req.url === "/studentRecord") {
        // Serve the HTML Form
        res.writeHead(200, { "content-type": "text/html" });
        res.end(`
        <html>
        <head>
        <title> STUDENT REGISTRATION FORM </title>
        </head>
        <body>
        <h2>STUDENT REGISTRATION FORM </h2>
        <form>
        <label for="username">STUDENT NAME : </label> <br>
        <input type="text" id="username" placeholder="Enter your name" required> <br><br>
        <label for="number">ROLL NO. : </label> <br>
        <input type="number" id="number" placeholder="Enter your roll no." required> <br><br>
        <label for="course">COURSE : </label> <br>
        <input type="text" id="course" placeholder="Enter your course" required> <br><br>
        <label for="email">E-MAIL : </label> <br>
        <input type="email" id="email" placeholder="Enter your email id" required> <br><br>
        <input type="radio" id="student">
        <label for="student">STUDENT</label>
        <br> 
        <button>SUBMIT</button>     
        </form>
        </body>
        </html>`);
    } 
    else{
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>WELCOME TO THE SERVER</h1>");
    }
});

async function fetchAndSave() {
    try {
        const response = await fetch("http://localhost:5000/studentRecord");
        if (!response.ok) {
            console.log(`HTTP error! STATUS : ${response.status}`);
            return;
        }
        
        const htmlData = await response.text();
        
        // Write the actual variable data to a file
        fs.writeFileSync("studentForm.json", htmlData, 'utf-8');
        console.log("SUCCESSFULLY STORED HTML FILE");
    }
    catch(error) {
        console.log(`Error occurred: ${error.message}`);
    }
}

server.listen(5000, () => {
    console.log("Server is open now on port 3000");
    fetchAndSave(); 
});

