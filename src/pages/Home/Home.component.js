import {CONFIG_LOGO, CONFIG_SPLIT_SCREEN, COMPONENTS_TABLE} from "config/variables.js";
import {Logo, Table} from "./components";
import {SplitScreen} from "layout";
import "./Home.component.scss";

export const Home = () => {

    return (
        <SplitScreen {...CONFIG_SPLIT_SCREEN}>
            <Logo {...CONFIG_LOGO}/>
            <Table {...COMPONENTS_TABLE}/>
        </SplitScreen>
    )
}