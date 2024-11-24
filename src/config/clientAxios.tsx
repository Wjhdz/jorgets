import axios from "axios";

const cliente = axios.create({
  baseURL: "http://localhost:3000/usuarios/",
});

export default cliente;
