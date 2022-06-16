/* eslint-disable no-unused-vars */
import React, { Children } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';


const ProgressBar = ({ value, size }) => {

  let BarBox;
  if(size === 'small') {
    BarBox = SmallBarBox;
  } else if(size === 'medium'){
    BarBox = MediumBarBox;
  } else if(size === 'large'){
    BarBox = LargeBarBox;
  } else {
    throw new Error(`Unrecognized Bar size: ${size}`);
  }

  return (
    <BarBox 
      role="progressbar" 
      aria-valuenow={value} 
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <Bar width={value}/>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </BarBox>
  );
};

const BarBoxBase = styled.div `
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  /* Trims off corners when progress bar is near full */
  overflow: hidden;
`;

const Bar = styled.div `
  height: 100%;
  width: ${p => p.width + '%'};
  background-color: ${COLORS.primary};
  border-radius:${p => p.width === 100 ? '4px' : '4px 0 0 4px'}
`;

const SmallBarBox = styled(BarBoxBase)`
  height: 8px;
  border-radius: 4px;
`;

const MediumBarBox = styled(BarBoxBase)`
  height: 12px;
  border-radius: 4px;
`;

const LargeBarBox = styled(BarBoxBase)`
  height: 24px;
  padding: 4px;
  border-radius: 8px;
`;

export default ProgressBar;
