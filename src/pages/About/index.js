import React from "react";
import Navbar from "../../molecules/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <h1>About</h1>
      <div className="container mt-5">
        <p>
          Aplikasi ini menunjukan bagaimana untuk mengupdate barang lebih
          tepatnya elektronik agar bisa bisa mengetahui
        </p>
        <p>jenis barang yang diupdate lewat firebase.</p>

        <h3>Author</h3>
        <p>Ferdinand B M Rattu</p>
      </div>
    </div>
  );
};

export default About;
