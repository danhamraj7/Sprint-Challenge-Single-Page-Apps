import React from "react";
import styled from "styled-components";

const StyledLocation = styled.div`
  border: 0.5em solid purple;
  margin: 1em;
  width: 40%;
  padding: 1em;
`;

export default function LocationCard({ name, type, dimension }) {
  return (
    <StyledLocation>
      <h4>{name}</h4>
      <div>
        <p>{type}</p>
        <p>{dimension}</p>
      </div>
    </StyledLocation>
  );
}
