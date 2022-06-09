import {TableBody, TableHead} from "pages/Home/components";

export const COLUMNS = [
    {id: "name", label: "Name"}, {id: "day", label: "Day"}, {id: "date", label: 'Date'}
];

export const COMPONENTS_TABLE = {
    componentHead: <TableHead row={COLUMNS}/>,
    componentBody: <TableBody row={COLUMNS}/>
}

export const CONFIG_LOGO = {
    children: '👩🏽‍🍳',
    fontSize: 5,
    width: 100,
}

export const CONFIG_SPLIT_SCREEN = {
    partOneWeight: 2,
    partTwoWeight: 3,
    fDirectionContainer: 'column',
    widthContainer: 100,
}
