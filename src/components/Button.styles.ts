import styled, { css } from "styled-components";

export type ButtonVariantColor = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: 'primary' | 'secondary' | 'danger' | 'success',
}

const ButtonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;
  
  background-color: ${ props => props.theme['green-500'] };
  color: ${ props => props.theme.white}

  /* ${props => css`background-color: ${ButtonVariants[props.variant]}`} */
`