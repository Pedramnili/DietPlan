import {SplitScreen} from "layout";
import {Logo , Table} from "./components";
import {COLUMNS} from "config/Variables/variables.js";

export const Home = () => {
    return (
        <SplitScreen partOneW={2} partTwoW={3} fDirectionContainer={'column'} widthContainer={100} >
            <Logo fontSize={5} children={'👩🏽‍🍳'} width={100}/>
            <Table rowHead={COLUMNS}/>
        </SplitScreen>
    )
}