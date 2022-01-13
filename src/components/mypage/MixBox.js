import React from "react";
import styled from "styled-components";

import { Button, Icon } from "../../elements";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as asmrActions } from "../../redux/modules/asmr";

import MixDeletePopup from "./MixDeletePopup";
import PlayList from "../asmr/PlayList";

const MixBox = (props) => {
  console.log(props);
  //-- 다이어리 팝업 모달 --
  const [deletemodal, setDeletemodal] = React.useState(false);
  const [editmodal, setEditmodal] = React.useState(false);
  const closeModal = () => {
    setDeletemodal(false);
    setEditmodal(false);
  };

  const [modalData, setModalData] = React.useState();
  //삭제 클릭
  const deleteClick = () => {
    setDeletemodal(true);
    const data = {
      mixList: props.mixList,
      playlistIdx: props.playlistIdx,
    };
    setModalData(data);
  };
  //수정클릭
  const editClick = () => {
    setEditmodal(true);
    const data = {
      mixName: props.mixTitle,
      playlistIdx: props.playlistIdx,
    };
    setModalData(data);
  };

  return (
    <Box>
      {props.mixList.map((item, idx) => {
        return (
          <Item key={idx}>
            <IconBox>
              <Icon src={item.iconUrl}></Icon>
              {item.title}
              {/* <Icon src={item.iconUrl}></Icon> */}
            </IconBox>
            <Sound>{item.sound}%</Sound>
          </Item>
        );
      })}
      <ButtonBox>
        <Button
          type="boderBtn"
          text="삭제하기"
          _onClick={deleteClick}
          bg="#ffffff"
          color="gray7"
        />
        <Button text="수정 하기" _onClick={editClick} />
      </ButtonBox>

      {/* -- 삭제 팝업 모달 -- */}
      {deletemodal ? (
        <MixDeletePopup close={closeModal} data={modalData} />
      ) : (
        ""
      )}
      {/* -- 수정 팝업 모달 -- */}
      {editmodal ? (
        <PlayList close={closeModal} data={modalData} is_edit />
      ) : (
        ""
      )}
    </Box>
  );
};
const Box = styled.div`
  background: #22265e;
  font-size: ${({ theme }) => theme.fontSizes.ssmall};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  padding: 20px;
  color: #aaa;
  flex-direction: column;

  & div:last-child {
    margin-right: 0;
  }
`;
const Item = styled.div`
  width: 70px;
  margin-right: 18px;
  text-align: center;
  display: inline-block;
`;
const IconBox = styled.div`
  width: 70px;

  background: #3a3e74;
  padding: 13px 23px;
  border-radius: 8px;
  box-sizing: border-box;
`;
const Sound = styled.div`
  padding-top: 10px;
`;
const ButtonBox = styled.div`
  display: flex;
  margin-top: 20px;
  & Button {
    margin-right: 10px;
  }
  & Button:last-child {
    margin-right: 0;
  }
`;
export default MixBox;
