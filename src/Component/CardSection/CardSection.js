import React from "react";
import "./CardSection.css";
import carOne from "../image/car11.jpg";
import carTwo from "../image/car21.jpg";
import carThree from "../image/car31.jpg";
const CardSection = () => {
  return (
    <div className="card_section">
      <div className="card_img">
        <div>
          <img src={carOne} alt="" className="img-fluid" />
        </div>
        <div className="card_border">
          <h1 className="card_header">FACTORY READY FOR TRACK DAY</h1>
          <p className="card_para">
            Sea veniam lucilius neglegentur ad, an per sumo volum voluptatibus.
            Qui cu everti repudiare. Eam ut cibo nobis aperiam, elit qualisque
            at cum. Possit antiopam id est. Illud delicata ea mel, sed novum
            mucius id. Nullam qua.
          </p>
        </div>
      </div>
      <div className="card_img">
        <div>
          <img src={carTwo} alt="" className="img-fluid" />
        </div>
        <div className="card_border">
          <h1 className="card_header">SPORT UTILITY FOR THE FAMILY</h1>
          <p className="card_para">
            Cum ut tractatos imperdiet, no tamquam facilisi qui. Eum tibique
            consectetuer in, an legimus referrentur vis, vocent deseruisse ex
            mel. Sed te idque graecis. Vel ne libris dolores, in mel graece
            dolorum.
          </p>
        </div>
      </div>
      <div className="card_img">
        <div>
          <img src={carThree} alt="" className="img-fluid"/>
        </div>
        <div className="card_border">
          <h1 className="card_header">MAKE AN EXECUTIVE STATEMENT</h1>
          <p className="card_para">
            Te inermis cotidieque cum, sed ea utroque atomorum sadipscing. Qui
            id oratio everti scaevola, vim ea augue ponderum vituperatoribus,
            quo adhuc abhorreant omittantur ad. No his fierent perpetua
            consequat, et nis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
