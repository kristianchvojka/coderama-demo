import styled from "styled-components";
import { FlexBox } from "../../components/shared/shared.styles";

export const SearchWrapper = styled(FlexBox)`
  align-items: center;
`;

export const ResultWrapper = styled(FlexBox)`
  flex-direction: column;
  ${({ theme }) => `
    gap: ${theme.spacing["spacing-xs3"]};
  `}
`;
