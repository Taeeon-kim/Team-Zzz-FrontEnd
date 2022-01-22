import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as noticeActions } from "../../redux/modules/notice";

import { DropDown, Toggle, Button } from "../../elements/index";

const Notifications = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    day,
    dayActive,
    hour,
    hourActive,
    minutes,
    minutesActive,
    notice,
    setDay,
    setDayActive,
    setHour,
    setHourActive,
    setMinutes,
    setMinutesActive,
    setNotice,
    state,
    setNoticationModal,
  } = props;

  const send = () => {
    if (state === "set") {
      if (!notice) {
        dispatch(noticeActions.setNoticeDB(notice));
      } else {
        dispatch(noticeActions.setNoticeDB(notice, day, hour, minutes));
      }

      localStorage.setItem("noticeSet", true);
      setNoticationModal(false);
    } else {
      if (!notice) {
        dispatch(noticeActions.updateNoticeDB(notice));
      } else {
        dispatch(noticeActions.updateNoticeDB(notice, day, hour, minutes));
      }

      localStorage.setItem("noticeSet", true);
      history.replace("/myPage");
    }
  };

  return (
    <>
      <Title color={state === "update" ? "white" : null}>
        매일 알림 받고 기록하기
      </Title>
      <ToggleSwitch color={state === "update" ? "white" : null}>
        <div style={{ margin: "auto 0px" }}>수면 기록 알림 받기</div>
        <Toggle notice={notice} setNotice={setNotice} label=" " />
      </ToggleSwitch>
      {notice ? (
        <>
          <Wrap>
            <DropDown
              dayActive={dayActive}
              setDayActive={setDayActive}
              setHourActive={setHourActive}
              setMinutesActive={setMinutesActive}
              condition={""}
              title={day}
              state={setDay}
            />
            <DropDown
              hourActive={hourActive}
              setDayActive={setDayActive}
              setHourActive={setHourActive}
              setMinutesActive={setMinutesActive}
              condition={"시"}
              title={hour}
              state={setHour}
            />
            <DropDown
              minutesActive={minutesActive}
              setDayActive={setDayActive}
              setHourActive={setHourActive}
              setMinutesActive={setMinutesActive}
              condition={"분"}
              title={minutes === 0 ? "00" : minutes}
              state={setMinutes}
            />
          </Wrap>
        </>
      ) : (
        <Wrap>
          <DropDown state="disabled" condition={""} title={"PM"} />
          <DropDown state="disabled" condition={"시"} title={"12"} />
          <DropDown state="disabled" condition={"분"} title={"00"} />
        </Wrap>
      )}

      <Button _onClick={send} marginT="20">
        확인
      </Button>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: "10px";
`;

const Title = styled.p`
  color: ${(props) => (props.color === "white" ? "#ffffff" : "#222222")};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeight.Bold};
  letter-spacing: -0.3px;
  vertical-align: top;
  text-align: left;
`;

const ToggleSwitch = styled.div`
  color: ${(props) => (props.color === "white" ? "#ffffff" : "#222222")};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  letter-spacing: -0.3px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default Notifications;
