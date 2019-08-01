import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid black;
`;

export class Overview extends React.Component {
  componentDidMount() {
    console.log('Overview mounted!')
  }

  render() {
    return (
      <Wrapper>
        <h1>Overview</h1>
        EMBEDDED COMPONENT!!
      </Wrapper>
    );
  }
}

if (typeof window !== 'undefined') {
  window.Overview = Overview;
}
