import {TableBody, TableHead} from "pages/Home/components";

export const COLUMNS = [
    {id: "name", label: "Name" , class: "colorRed width55"},
    {id: "weekday", label: "Day", class: "colorRed"},
    {id: "date", label: 'Date' , class: "colorRed"}
];

export const COMPONENTS_TABLE = {
    componentHead: <TableHead row={COLUMNS}/>,
    componentBody: <TableBody row={COLUMNS}/>
}

export const CONFIG_LOGO = {
    children: '👩🏽‍🍳',
    fontSize: 4,
    width: 100,
}

export const CONFIG_SPLIT_SCREEN = {
    partOneWeight: 2,
    partTwoWeight: 3,
    fDirectionContainer: 'column',
    widthContainer: 100,
}

export const STYLE_MODAL = {
    bgcolor: '#ffe6e6eb',
    borderRadius: '8px',
    boxShadow: 24,
    left: '50%',
    outline: 'none',
    p: 3,
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60vw',
};

export const STYLE_MODAL_S = {
    bgcolor: '#ffe6e6eb',
    borderRadius: '8px',
    boxShadow: 24,
    left: '50%',
    outline: 'none',
    p: 3,
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
};