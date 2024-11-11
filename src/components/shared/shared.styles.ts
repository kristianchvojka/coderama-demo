import styled from "styled-components";

export const FlexBox = styled.div<{
  gap?: string;
}>`
  display: flex;
  ${({ gap, theme }) => gap && `gap: ${theme.spacing[gap]}`};
`;

export const PageWrapper = styled(FlexBox)`
  margin: 0 auto;
  flex-direction: column;
  ${({ theme }) => `
    padding: ${theme.spacing["spacing-xl"]};
  `}
`;

export const ErrorMessage = styled.div`
  color: red;
`;
