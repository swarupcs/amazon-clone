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
            id={123}
            title="Samsung 32-inch(80cm) FHD Odyssey G3 Gaming, 165 Hz, 1 Ms MPRT, Flat Monitor, Height Adjustable Stand, Bezel-Less Display, Eye-Saver Mode, AMD FreeSync Premium, (LS32AG320NWXXL, Black)"
            price={23470}
            image="https://m.media-amazon.com/images/I/71IYBPoc8pL._AC_SY110_.jpg"
            rating={5}
          />
          <Product
            id={1234}
            title="iQOO 12 5G (Legend, 12GB RAM, 256GB Storage) | India's 1st Snapdragon® 8 Gen 3 Mobile Platform | India's only Flagship with 50MP + 50MP + 64MP Camera"
            price={52999}
            image="https://m.media-amazon.com/images/I/619lW2YtVhL._SX522_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={1253}
            title="Skybags Casual Backpack 28L, 2 Main Compartments, Bottle Pocket, Front Pocket, Padded Shoulder Strap"
            price={529}
            image="https://m.media-amazon.com/images/I/810s53kR8tL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id={1263}
            title="LG 185 L 5 Star Inverter Direct-Cool Single Door Refrigerator (GL-D201ABEU, Blue Euphoria, Base stand with drawer)"
            price={17690}
            image="https://m.media-amazon.com/images/I/71Q46li47mL._SX425_.jpg"
            rating={4}
          />
          <Product
            id={1237}
            title="ANISHWAR Aroma Metal Painted Frame King Size Bed | Metal Double Bed With Headboard & Footboard | Bed For Bedroom | Iron Black"
            price={12668}
            image="https://m.media-amazon.com/images/I/81oOocTSAyL._SX425_.jpg"
            rating={4}
          />
        </div>
        <Product
          id={1283}
          title="HP Victus Gaming Laptop, 12th Gen Intel Core i7-12650H, 4GB RTX 3050 GPU, 15.6-inch (39.6 cm), 75W TGP, FHD, IPS, 144Hz, 16GB DDR4, 512GB SSD, Backlit KB, B&O (MSO, Blue, 2.37 kg), fa0188TX"
          price={79990}
          image="https://m.media-amazon.com/images/I/71foAS+2AjL._SY450_.jpg"
          rating={4}
        />
        <div className="home__row"></div>
      </div>
    </div>
  );
}

export default Home;
