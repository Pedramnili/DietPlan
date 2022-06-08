export const TableHead = ({rowHead}) => {
    return (
        <thead>
        <tr>
            {rowHead.map((column, index) => (
                <th key={index} className={"colorRed"}>
                    {column.label}
                </th>
            ))}
        </tr>
        </thead>
    )
}
