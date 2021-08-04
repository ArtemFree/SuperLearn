import React from "react";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
`;

function Loader() {
  return (
    <LoaderWrapper className="spinContainer">
      <div className="spin2 spin2_progress_yes spin2_size_m spin2_view_default spin2_tone_default"></div>
    </LoaderWrapper>
  );
}

export default Loader;
