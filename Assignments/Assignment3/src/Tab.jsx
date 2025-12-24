import { useState } from "react";

function StudentForm(){
    const[student, setStudent]=useState([]);
    const[name, setName]=useState("");
    const[email, setEmail]=useState("");
    const[city, setCity]=useState("");

    const Submit=(e)=>{
        e.preventDefault();
        const array={
            name,email,city
        }
        setStudent([...student,array])
        setName("")
        setEmail("")
        setCity("")
        console.log(student);

    }

    return(
        <div>
        <form onSubmit={Submit}>
        <h2>Student form</h2>
        <label>Name:</label>
        <input type="text"
        value={name}
        placeholder="enter your name"
        onChange={(e)=>setName(e.target.value)}
        required
        />
        <br/><br/>

        <label>Email:</label>
        <input type="email"
        value={email}
        placeholder="enter your email"
        onChange={(e)=>setEmail(e.target.value)}
        required
        />
        <br/><br/>

        <label>city:</label>
        <input type="text"
        name="city"
        value={city}
        placeholder="enter your city"
        onChange={(e)=>setCity(e.target.value)}
        required
        />
        <br/><br/>

        <button type="submit">Submit</button>
        </form>

        <h2>Student List</h2>
        <table border={"2"}>
        <thead>
        <tr>
        <th>Name</th>
        <th>Email</th>
        <th>city</th>
        </tr>
        </thead>
        <tbody>
          {student.length===0?(
            <tr>
                <td colSpan="3"
                style={{textAlign:"center"}}>No Data Available</td>
            </tr>
          ):(  
        student.map((stu,index)=>(
            <tr key={index}>
                <td>{stu.name}</td>
                <td>{stu.email}</td>
                <td>{stu.city}</td>
            </tr>

        )))}
        </tbody>
        </table>
        </div>
    );
}
export default StudentForm;
