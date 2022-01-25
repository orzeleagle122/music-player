import React from "react";
import styled from 'styled-components';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import InfoIcon from '@mui/icons-material/Info';
import ReportIcon from '@mui/icons-material/Report';

export const AlertTemplate = ({style, options, message}) => (
    <AlertWrapper style={style}>
        {options.type === 'info' && <InfoIcon/>}
        {options.type === 'success' && <CheckCircleOutlineIcon/>}
        {options.type === 'error' && <ReportIcon/>}
        <span>{message}</span>
        {/*<button onClick={close}>X</button>*/}
    </AlertWrapper>
);


const AlertWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
  gap: 15px;
`
