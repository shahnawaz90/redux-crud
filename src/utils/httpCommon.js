import axios from "axios";
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjFlNWIyMmJlMzcyZTAwMTc3ZWJiNDEiLCJpYXQiOjE2NDgxOTUyNTl9.f2pAansw6QeKngZ1E6529QKvszgXYMz7lIxk7uoGTdc'
export default axios.create({
  baseURL: "https://reqres.in/",
  headers: {
    'Content-type': 'application/json',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0'
  }
});