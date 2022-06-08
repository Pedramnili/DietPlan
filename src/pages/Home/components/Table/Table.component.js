import "./Table.component.scss"
import {Tables} from "asset/components/components";
import {TableBody, TableHead} from "../../components"

export const Table = ({rowHead}) => {

    return (
        <Tables>
            <TableHead rowHead={rowHead}/>
            <TableBody rowHead={rowHead}/>
        </Tables>
    )
}
