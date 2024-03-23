import React from "react";
import "../styles/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/holi_fest/gw_unrec/Holi24_GW_PC_Hero_3000X1200_Unrec._CB579797930_.jpg"
          alt="HomeLogo"
        />

        <div className="home__row">
          <Product
            title="Samsung 32-inch(80cm) FHD Odyssey G3 Gaming, 165 Hz, 1 Ms MPRT, Flat Monitor, Height Adjustable Stand, Bezel-Less Display, Eye-Saver Mode, AMD FreeSync Premium, (LS32AG320NWXXL, Black)"
            price={23470}
            image="https://m.media-amazon.com/images/I/71IYBPoc8pL._AC_SY110_.jpg"
            rating={4}

          />
          {/* <Product/> */}
        </div>

        <div className="home__row">
          {/* <Product/>
      <Product/>
      <Product/> */}
        </div>
        {/* <Product/> */}
        <div className="home__row"></div>
      </div>
    </div>
  );
}

export default Home;
