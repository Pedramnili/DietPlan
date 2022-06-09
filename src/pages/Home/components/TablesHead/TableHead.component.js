export const TableHead = ({row}) => {
    return (
        <thead>
        <tr>
            {row.map((column, index) => (
                <th key={index} className={"colorRed"}>
                    {column.label}
                </th>
            ))}
        </tr>
        </thead>
    )
}
