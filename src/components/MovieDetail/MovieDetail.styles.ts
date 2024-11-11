import styled from "styled-components";
import { FlexBox } from "../shared/shared.styles";

export const MovieDetailBox = styled(FlexBox)`
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MovieDetailPoster = styled.img`
  width: 200px;
  height: 300px;
`;

export const MovieTitle = styled(FlexBox)`
  align-items: center;
`;
