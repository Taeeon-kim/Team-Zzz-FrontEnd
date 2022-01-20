import React from "react";
import styled from "styled-components";

import { useReactPWAInstall } from "react-pwa-install";
import { logo } from "../static/images";

import { isMobile } from "./DeviceDetector";
import { use100vh } from "react-div-100vh";

// --- images ---
import { web_phone, web_back, web_logo } from "../static/images/index";

import { Button } from "../elements";

const Device = ({ children }) => {
  const { pwaInstall } = useReactPWAInstall();
  //모바일 높이
  const height = use100vh();

  const installApp = () => {
    pwaInstall({
      title: "Zzz 다운받기",
      logo: logo,
      features: (
        <ul>
          <li>Cool feature 1</li>
          <li>Cool feature 2</li>
          <li>Even cooler feature</li>
          <li>Works offline</li>
        </ul>
      ),
      description: "This is a very good app that does a lot of useful stuff. ",
    })
      .then(() =>
        alert("App installed successfully or instructions for install shown")
      )
      .catch(() => alert("User opted out from installing"));
  };

  return isMobile ? (
    <Mobile style={{ height: height }}>{children}</Mobile>
  ) : (
    <WebBackgroundWrapper>
      <Button _onClick={installApp}>설치 버튼</Button>
      <ClayPhone>
        <WebViewLayout>{children}</WebViewLayout>
      </ClayPhone>
    </WebBackgroundWrapper>
  );
};

const Mobile = styled.div`
  display: flex;
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 640px;
  min-width: 280px;
  /* height: 100vh; */
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.bg};
`;

const WebBackgroundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${web_logo}), url(${web_back});
  background-size: 300px 144px, cover;
  background-position: 190px 230px, 0% 100%;
  background-repeat: no-repeat;
`;

const ClayPhone = styled.div`
  width: 431px;
  height: 864px;
  position: fixed;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  background: url(${web_phone}) no-repeat center/cover;

  @media screen and (min-width: 1120px) {
    right: 10%;
    top: 50%;
    transform: translate(0%, -50%);
  }
`;

const WebViewLayout = styled.div`
  max-width: 375px;
  height: 810px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.bg};
  overflow: hidden;
`;

export default Device;
