import axios from "axios";

const client = axios.create({ baseURL: "http://localhost:8001" });

export async function getProducts() {
  const { data } = await client.get("/products");
  return data;
}

export async function getProduct(id: string | number) {
  const { data } = await client.get(`/products/${id}`);
  return data;
}

export async function login(username: string, password: string) {
  const { data } = await client({
    method: "POST",
    url: "/login", //dont have backend so this is fake
    data: {
      username,
      password,
    },
  });
  return data;
}
