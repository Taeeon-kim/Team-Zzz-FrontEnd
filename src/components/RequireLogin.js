import { fontWeight, margin, textAlign } from "@mui/system";
import React from "react";
import Modal from "react-modal";
import { history } from "../redux/configureStore";
const RequireLogin = (props) => {
  const [modal, setModal] = React.useState(props.modal ? true : false); // 모달창

  const modalOff = (path = null) => {
    if (path) {
      history.push(path);
    }

    setModal(false);
    props.setDiaryModal(false);
  };

  return (
    <>
      <Modal
        isOpen={modal}
        ariaHideApp={false}
        onRequestClose={modalOff}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0)",
          },
          content: {
            position: "absolute",
            top: "200px",
            left: "40%",
            width: "20%",
            height: "40%",
            border: "1px solid #ccc",
            background: "#C4C4C4ff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "30px",
            outline: "none",
            padding: "0px",
          },
        }}
      >
        <div>
          <p
            style={{
              fontSize: "13px",
              fontWeight: "700",
              textAlign: "center",
              margin: "40px 0px 0px 0px",
            }}
          >
            해당 서비스는 로그인 후 이용 가능합니다
          </p>
          <p
            style={{
              fontSize: "13px",
              fontWeight: "500",
              textAlign: "center",
              margin: "10px 0px 0px 0px",
            }}
          >
            로그인하러 가시겠습니까?
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignContent: "flex-end",
            position: "absolute",
            bottom: "0px",
            width: "100%",
          }}
        >
          <button
            style={{
              width: "100%",
              height: "50px",
              border: "none",
              margin: "0px 1px 0px 0px",
            }}
            onClick={() => {
              modalOff("/login");
            }}
          >
            예
          </button>
          <button
            style={{ width: "100%", height: "50px", border: "none" }}
            onClick={modalOff}
          >
            아니오
          </button>
        </div>
      </Modal>
    </>
  );
};

export default RequireLogin;
