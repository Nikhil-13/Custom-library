const http = new EasyHTTP();
/* http
  .get("http://api.github.com/users")
  .then((data) => console.log(data))
  .catch((err) => console.log(err)); */
const data = { name: "nikhil", username: "nikhil-13", email: "nnik270@gmail.com" };
/* http
  .post("http://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((err) => console.log(err)); */
http
  .delete("http://jsonplaceholder.typicode.com/users/2")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
