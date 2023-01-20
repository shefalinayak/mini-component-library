/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return (
  <Wrapper role="progressbar" aria-valuenow={value} style={styles[size]}>
    <VisuallyHidden>{value}%</VisuallyHidden>
    <BarWrapper>
      <Bar style={{'--width': value + '%'}} />
    </BarWrapper>
  </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: 100%;
`;

const BarWrapper = styled.div`
  height: 100%;
  border-radius: 4px;
  /* trim off corners when progress bar is near full */
  overflow: hidden;
`;

const styles = {
  large: {
    '--height': '24px',
    '--padding': '4px',
    '--borderRadius': '8px',
  },
  medium: {
    '--height': '12px',
    '--padding': 0,
    '--borderRadius': '4px',
  },
  small: {
    '--height': '8px',
    '--padding': 0,
    '--borderRadius': '4px',
  }
}

export default ProgressBar;
