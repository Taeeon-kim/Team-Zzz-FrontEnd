import React from "react";
import styled from "styled-components";

//이미지
import bg1 from "../static/images/bg/main_bg1.png";
import bg2 from "../static/images/bg/main_bg2.png";
import bg3 from "../static/images/bg/main_bg3.png";

const Background = () => {
  return (
    <Bg>
      <Bg1 src={bg1}></Bg1>
      <Bg2 src={bg2}></Bg2>
      <Logo src={bg3}></Logo>
    </Bg>
  );
};
const Bg = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
  & img {
    position: absolute;
    cursor: default;
  }
`;
const Bg1 = styled.img`
  width: 100%;
  height: 100vh;

  top: 0;
`;
const Bg2 = styled.img`
  width: 100%;
  /* position: absolute; */
  bottom: -100px;
`;
const Logo = styled.img`
  width: 300px;
  top: 30%;
  left: 17%;
`;
export default Background;
