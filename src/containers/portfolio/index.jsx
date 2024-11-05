import React from "react";
import PageHeaderContent from '../../components/pageHeaderContainer'
import { BsDistributeVertical } from "react-icons/bs"

import ImageThree from "../../images/image3.png";
import ImageFour from "../../images/image4.png";
import ImageFive from "../../images/image5.jpg";
import "./styles.scss";
import { useState } from "react";
const portfolioData = [
  
  {
    id: 2,
    name: "Email",
    image: ImageThree,
    link: "https://github.com/yashhadade/Email.git",
  },
  {
    id: 2,
    name: "Todo App",
    image: ImageFour,
    link: "https://github.com/yashhadade/toDoReactApp.git",
  },
  {
    id: 3,
    name: "Keeper App",
    image: ImageFive,
    link: "https://github.com/yashhadade/keeperApp.git",
  },
];
const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  // {
  //   filterId: 2,
  //   label: "Developement",
  // },
  // {
  //   filterId: 3,
  //   label: "Design",
  // },
];
const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);
  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }
  function handleHover(index) {
    setHoveredValue(index);
  }
  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");
  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);
  console.log(filteredItems);
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsDistributeVertical size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;