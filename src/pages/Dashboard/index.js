import React, { useState, useEffect } from "react";
import Navbar from "../../molecules/Navbar";
import firebase from "../../config/Firebase";

const Dashboard = () => {
  const [namaBarang, setNamaBarang] = useState("");
  const [kategori, setKategori] = useState("");
  const [harga, setHarga] = useState("");
  const [product, setProduct] = useState([]);
  const [button, setButton] = useState("Save");
  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    firebase
      .database()
      .ref("products")
      .on("value", (res) => {
        if (res.val()) {
          const rawData = res.val();
          const productArr = [];
          Object.keys(rawData).map((item) => {
            productArr.push({
              id: item,
              ...rawData[item],
            });
          });
          setProduct(productArr);
        }
      });
  }, []);

  const resetForm = () => {
    setNamaBarang("");
    setKategori("");
    setHarga("");
    setButton("Save");
    setSelectedProduct({});
  };

  const onSubmit = () => {
    const data = {
      namaBarang: namaBarang,
      kategori: kategori,
      harga: harga,
    };
    if (button === "Save") {
      //Insert
      firebase.database().ref("products").push(data);
    } else {
      //Update
      firebase.database().ref(`products/${selectedProduct.id}`).set(data);
    }
    resetForm();
  };

  const onUpdateData = (item) => {
    setNamaBarang(item.namaBarang);
    setKategori(item.kategori);
    setHarga(item.harga);
    setButton("Update");
    setSelectedProduct(item);
  };

  const onDeleteData = (item) => {
    firebase.database().ref(`products/${item.id}`).remove();
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h3>Dashboard</h3>
        <div className="col-6">
          <p>Nama Barang</p>
          <input
            className="form-control"
            placeholder="Masukan nama barang"
            value={namaBarang}
            onChange={(e) => setNamaBarang(e.target.value)}
          />
          <p>Kategori</p>
          <input
            className="form-control"
            placeholder="Masukan kategori"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
          />
          <p>Harga</p>
          <input
            className="form-control"
            placeholder="Masukan harga"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
          />
          <br />
          <button className="btn btn-dark" onClick={onSubmit}>
            {button}
          </button>
          {button === "Update" && (
            <button className="btn btn-danger" onClick={resetForm}>
              Cancel Update
            </button>
          )}
        </div>
        <hr />
        <table class="table table-dark table-hover">
          <thead>
            <tr>
              <th>Nama Barang</th>
              <th>Kategori</th>
              <th>Harga</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item) => (
              <tr key={item.id}>
                <td>{item.namaBarang}</td>
                <td>{item.kategori}</td>
                <td>{item.harga}</td>
                <td>
                  <button onClick={() => onUpdateData(item)}>Update</button>
                  <button onClick={() => onDeleteData(item)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
