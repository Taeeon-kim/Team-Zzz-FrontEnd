import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

// --- components ---
import RequireLogin from "../components/RequireLogin";

// --- images ---
import { ReactComponent as Main } from "../static/images/navigation/homeIcon.svg";
import { ReactComponent as Asmr } from "../static/images/navigation/asmrIcon.svg";
import { ReactComponent as Diary } from "../static/images/navigation/diaryIcon.svg";
import { ReactComponent as MyPage } from "../static/images/navigation/myPageIcon.svg";

const Navigation = () => {
  const history = useHistory();
  const [diaryModal, setDiaryModal] = React.useState(false);
  const [select, setSelect] = React.useState(
    history.location.pathname.split("/")[1] === ""
      ? "main"
      : history.location.pathname.split("/")[1]
  );

  const diary = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setDiaryModal(true);
    } else {
      setSelect("diary");
      history.push("/diary");
    }
  };

  const closeModal = () => {
    setDiaryModal(false);
  };

  const loginModal = () => {
    setDiaryModal(false);
    history.push("/login");
  };

  return (
    <div>
      <Gnb>
        <Box
          select={select !== "main" && "null"}
          onClick={() => {
            setSelect("main");
            history.push("/");
          }}
        >
          <Main
            fill={select === "main" ? "#FBC037" : "#ffffff"}
            width={24}
            height={24}
          ></Main>
          <P>홈</P>
        </Box>

        <Box
          select={select !== "asmr" && "null"}
          onClick={() => {
            setSelect("asmr");
            history.push({ pathname: "/asmr" });
          }}
        >
          <Asmr
            fill={select === "asmr" ? "#FBC037" : "#ffffff"}
            width={24}
            height={24}
          ></Asmr>
          <P>ASMR</P>
        </Box>

        <Box select={select !== "diary" && "null"} onClick={diary}>
          <Diary
            fill={select === "diary" ? "#FBC037" : "#ffffff"}
            width={24}
            height={24}
          ></Diary>
          <P>다이어리</P>
        </Box>

        <Box
          select={select !== "mypage" && "null"}
          onClick={() => {
            setSelect("mypage");
            history.push("/mypage");
          }}
        >
          <MyPage
            fill={select === "mypage" ? "#FBC037" : "#ffffff"}
            width={24}
            height={24}
          ></MyPage>
          <P>마이</P>
        </Box>
      </Gnb>
      {diaryModal && (
        <RequireLogin close={closeModal} move={loginModal}></RequireLogin>
      )}
    </div>
  );
};

// --- styled-components ---
const Gnb = styled.div`
  width: 100%;
  height: 56px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 8px 24px 6px 24px;
  text-align: center;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.white};

  ::before {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: #2a2245;
  }
`;

const Box = styled.div`
  width: 75px;
  color: ${(props) => (props.select !== "null" ? "#FBC037" : "#ffffff")};
  & > Div:nth-child(1) {
    color: ${(props) => (props.select !== "null" ? "#FBC037" : "#ffffff")};
  }
  cursor: pointer;
  display: flex;
  flex-direction: column;
  & svg {
    margin: 0 auto;
  }
`;
const P = styled.p`
  width: 75px;
  height: 18px;
  font-size: ${({ theme }) => theme.fontSizes.ssmall};
  line-height: ${({ theme }) => theme.lineHeight.ssmall};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
`;

export default Navigation;
