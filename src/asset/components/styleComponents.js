import Box from '@mui/material/Box';
import styled from "styled-components";
import {styled as styledM} from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

export const Container = styled.div`
  align-items: ${(props) => props.align};
  display: flex;
  flex-direction: ${(props) => props.fDirection};;
  height: ${(props) => props.height}vh;
  justify-content: ${(props) => props.justify};
  width: ${(props) => props.width}%;
`;

export const Content = styled.div`
  align-items: ${(props) => props.align};
  display: flex;
  flex-direction: ${(props) => props.fDirection};;
  height: ${(props) => props.height}%;
  justify-content: ${(props) => props.justify};
  width: ${(props) => props.width}%;
`;

export const CustomTooltip = styledM(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }}>
        <Box>
            {props.children}
        </Box>
    </Tooltip>
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
        fontFamily: `'Baloo Bhaijaan 2'` ,
    },
}));

export const IconLogo = styled.div`
  cursor: pointer;
  font-size: ${(props) => props.fontSize}rem;
  text-align: center;
  width: ${(props) => props.width}px;
`;

export const Pane = styled.div`
  flex: ${(props) => props.weight};
  width: ${(props) => props.width}%;
`;

export const Tables = styled.table`
  border-collapse: collapse;
  height: 70vh;
  width: 100vw;
`;