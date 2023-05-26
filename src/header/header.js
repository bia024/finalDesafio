import React from "react";
import styled from "styled-components";
import DellLupa from "../images/dell.svg";

export default function Header() {
  return (
    <div>
      <h2> Avatar: o Caminho da Moana Água </h2>
      <button>
        <img src={DellLupa} alt="dell" />
      </button>
      <h4> 9.0/10 </h4>
    </div>
  );
}
