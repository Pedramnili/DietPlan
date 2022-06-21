import {CONFIG_LOGO, CONFIG_SPLIT_SCREEN, COMPONENTS_TABLE} from "config/variables.js";
import {Logo, ModalSuggestionFood , Table} from "pages/Home/components";
import {SplitScreen} from "layout";
import "./Home.scss";

export const Home = () => {

    return (
        <>
            <SplitScreen {...CONFIG_SPLIT_SCREEN}>
                <Logo {...CONFIG_LOGO}/>
                <Table {...COMPONENTS_TABLE}/>
            </SplitScreen>
            <ModalSuggestionFood/>
        </>

    )
}