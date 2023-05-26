import Main from "./main/index";
import Header from "./header/index";
import { createGlobalStyle } from "styled-components";
import Carousel from "./carousel/carousel";
import CarouselTwo from "./carousel/carouselTwo.js";
// import Header from "./header/header.js";
//reset
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Carousel />
      <CarouselTwo />
    </>
  );
}
//https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-Br&page=1
