import React from "react";
import styled from "styled-components";

// --- images ---
import NoRecord_B from "../../static/images/diary/NoRecord_B.png";
import NoRecord_R from "../../static/images/diary/NoRecord_R.png";

const NoRecord = (props) => {
  return (
    <Wrap>
      <Image></Image>
    </Wrap>
  );
};

// --- styled-components ---
const Wrap = styled.div`
  height: 100vh;
`;

const Image = styled.div`
  width: 100%;
  height: inherit;
  background: url(${NoRecord_R}), url(${NoRecord_B});
  /* background-size: 685px, 600px; */
  background-position: 50% 100%;
  background-size: 100%;

  /* background-position: 50% 100%, 49% 50%; */
  /* background-position: 0% 0%, 0%; */
  background-repeat: no-repeat;
`;

export default NoRecord;
