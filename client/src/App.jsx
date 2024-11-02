
import Layout from "./Layout";

import IndexPage from "./pages/IndexPage";
import Register from "./pages/RegisterPage"
import './App.css';
import { Routes, Route } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL='http://localhost:4000';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<IndexPage/>}/>
      <Route path="/register" element={<Register/>}/>
      </Route>

    </Routes>
  );
}

export default App;