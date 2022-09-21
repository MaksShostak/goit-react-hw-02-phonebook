import styled from 'styled-components';

export const FilterLabelStyled = styled.label`
  margin-bottom: ${({ theme }) => theme.space[5]}px;
  font-size: ${({ theme }) => theme.fontSizes.ml};
`;
export const StyledInput = styled.input`
  padding-left: ${({ theme }) => theme.space[4]}px;
  display: block;
  height: 40px;
  width: 400px;
  font-size: ${({ theme }) => theme.fontSizes.ml};
  border-radius: ${({ theme }) => theme.radii.lg};
`;
