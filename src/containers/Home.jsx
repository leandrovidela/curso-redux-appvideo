import React from "react";
import { connect } from "react-redux";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

import "../assets/styles/App.scss";

const Home = ({ myList, trends, originals, search }) => {
  return (
    <div className="App">
      <Search isHome />
      {search.length > 0 && (
        <Categories title="Search">
          <Carousel>
            {search.map(item => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
      {myList.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {myList.map(item => (
              <CarouselItem key={item.id} {...item} isList={true} />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    search: state.search
  };
};

export default connect(mapStateToProps, null)(Home);
