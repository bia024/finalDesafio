import React from "react";
import DellLupa from "../images/dell.svg";
import styled from "styled-components";
import Lupa from "../images/lupa.svg";

const Box = styled.div`
  height: 5rem;
  background-color: black;
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    height: 4rem;
  }
  input {
    justify-content: space-evenly;
  }
  li {
    text-decoration: none;
    list-style: none;
    color: whitesmoke;
    /* justify-content: space-evenly
     */
    /* flex-direction: row;
      */
    /* flex-wrap: wrap; */
  }
  .lupa {
    width: 2rem;
  }
  .box2 {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  /* justify-content: space-between; */
`;
export default function Header() {
  return (
    <Box>
      <div>
        <img src={DellLupa} alt="Dell lupa" />
      </div>
      <div>
        <button>Filmes</button>
        <button>Series</button>
      </div>
      {/* <div>
        <img class="lupa" src={Lupa} alt="lupa" />
      </div> */}
      <div class="box2">
        <img class="lupa" src={Lupa} alt="lupa" />
        <button>Filtro</button>
        {/* <img src={Lupa} alt="lupa" /> */}
        {/* <input>Filtro</input> */}
        <button>Login</button>
      </div>
    </Box>
  );
}
