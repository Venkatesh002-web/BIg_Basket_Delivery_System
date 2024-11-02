import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

export default function RegisterPage() {
const [name,setName] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [Phone,setPhone]=useState("");
const [Lat,setLat]=useState("");
const[Long,setLong]=useState("");

async function registerUser(ev) {
    ev.preventDefault();
    try{
        await axios.post('/register', {
                name,
                email,
                password,
                Phone,
                Lat,
                Long,
                });
        alert("Registration Successful You can log in");
        }catch(e){
            alert("Registration unSuccessful  try again later");
            }
        }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input type="text"
                 placeholder="John Doe"
                 value={name}
                 onChange={ev => setName(ev.target.value)} />
          <input type="email"
                 placeholder="your@email.com"
                 value={email}
                 onChange={ev => setEmail(ev.target.value)} />
          <input type="password"
                 placeholder="password"
                 value={password}
                 onChange={ev => setPassword(ev.target.value)} />
          <input type="tel"
                           placeholder="phone"
                           value={phone}
                           onChange={ev => setPhone(ev.target.value)} />
          <input type="number"
                           placeholder="Latitude"
                           value={Latitude}
                           onChange={ev => setLat(ev.target.value)} />
          <input type="number"
                           placeholder="Longitude"
                           value={Long}
                           onChange={ev => setLong(ev.target.value)} />
          <button className="primary">Register</button>
        </form>
      </div>
    </div>
  );
}