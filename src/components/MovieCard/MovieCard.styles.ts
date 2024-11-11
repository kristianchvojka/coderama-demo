import styled from "styled-components";
import { FlexBox } from "../shared/shared.styles";

export const Wrapper = styled(FlexBox)`
  max-width: 320px;
  box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.1);
  ${({ theme }) => `
    padding: ${theme.spacing["spacing-xs"]} ${theme.spacing["spacing-xs"]};
    border: 1px solid ${theme.colors["on-surface5"]};
    border-radius: ${theme.spacing["radius-xs"]};
    gap: ${theme.spacing["spacing-m"]};
  `}
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow:
      0 4px 8px 0 rgba(0, 0, 0, 0.1),
      0 6px 20px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const MoviePoster = styled.img`
  height: 102px;
  width: 68px;
`;

export const MovieInfo = styled(FlexBox)`
  flex-direction: column;
  max-width: 320px;
  ${({ theme }) => `
     padding: ${theme.spacing["spacing-xs4"]} 0;
  `}
  h6 {
    color: ${({ theme }) => theme.colors["subtitle"]};
  }
`;

export const RemoveFavourite = styled.div`
  align-self: center;
  margin-left: auto;
`;
