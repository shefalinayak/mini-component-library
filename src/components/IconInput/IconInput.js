import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const iconSize = size === 'small' ? 16 : 24; 
  return (
    <Wrapper size={size}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <TextInput type="text" placeholder={placeholder} width={width} style={styles[size]}/>
      <IconWrapper style={{'--size': iconSize + 'px'}}>
        <Icon id={icon} size={iconSize} strokeWidth="2"/>
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const styles = {
  small: {
    '--borderWidth': '1px',
    '--padding': '0 0 0 24px',
    '--fontSize': 14/16 + 'rem',
    '--height': 24/16 + 'rem',
  },
  large: {
    '--borderWidth': '2px',
    '--padding': '0 0 0 32px',
    '--fontSize': 18/16 + 'rem',
    '--height': 36/16 + 'rem',
  },
};

const TextInput = styled.input`
  border: none;
  border-bottom: var(--borderWidth) solid ${COLORS.black};
  padding: var(--padding);
  height: var(--height);

  font-family: 'Roboto', sans-serif;
  font-size: var(--fontSize);
  font-weight: 700;
  color: inherit;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
  
  &:focus {
    outline-offset: 2px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: var(--size);
  margin: auto 0;
`;


export default IconInput;
