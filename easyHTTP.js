class EasyHTTP {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((Response) => {
          return Response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => reject(err));
    });
  }
  post(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((Response) => {
          return Response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => reject(err));
    });
  }

  put(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((Response) => {
          return Response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => reject(err));
    });
  }

  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
      })
        .then((Response) => {
          return Response.json();
        })
        .then(() => {
          resolve("resource deleted");
        })
        .catch((err) => reject(err));
    });
  }
}
