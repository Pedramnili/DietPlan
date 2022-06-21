export const TableHead = ({row}) => {

    return (
        <thead>
        <tr>
            {row?.map((column) => (
                <th key={column.id} className={column.class}>
                    {column.label}
                </th>
            )) || null}
        </tr>
        </thead>
    )
}
