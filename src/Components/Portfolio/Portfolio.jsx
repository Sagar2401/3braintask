import React, { useState } from "react";
import Items from "./Items";
import Model from "./Model";
import StarDivider from "../Common/StarDivider";

const Portfolio = () => {
  const [show, setShow] = useState({
    show: false,
    data: null,
  });
  const Portfolioitems = [
    {
      id: 1,
      image: "assets/img/portfolio/cabin.png",
      title: "Log Cabin",
      modelID: "portfolioModel1",
    },
    {
      id: 2,
      image: "assets/img/portfolio/cake.png",
      title: "cake",
      modelID: "portfolioModel2",
    },
    {
      id: 3,
      image: "assets/img/portfolio/circus.png",
      title: "circus",
      modelID: "portfolioModel3",
    },
    {
      id: 4,
      image: "assets/img/portfolio/game.png",
      title: "game",
      modelID: "portfolioModel4",
    },
    {
      id: 5,
      image: "assets/img/portfolio/safe.png",
      title: "safe",
      modelID: "portfolioModel5",
    },
    {
      id: 6,
      image: "assets/img/portfolio/submarine.png",
      title: "submarine",
      modelID: "portfolioModel6",
    },
  ];

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <StarDivider label={"Portfolio"} />
        <div className="row justify-content-center">
          {Portfolioitems.map((items, i) => {
            return (
              <Items
                image={items.image}
                modelID={items.modelID}
                setShow={setShow}
                item={items}
                show={show}
                key={i}
              />
            );
          })}
        </div>
      </div>
      {show.show && <Model show={show.show} setShow={setShow} {...show.data} />}
      {/* {Portfolioitems.map((items, index) => {
        return (
          <Model
            key={index}
            image={items.image}
            title={items.title}
            modelID={items.modelID}
            show={show}
            item={items.id}
            setShow={setShow}
          />
        );
      })} */}
    </section>
  );
};

export default Portfolio;
