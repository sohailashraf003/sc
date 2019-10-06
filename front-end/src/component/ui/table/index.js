import React from 'react';

function TableRow(props) {
    return (
        <tr {...props}>{props.children}</tr>
    );
}

function TableCell(props) {
    return (
        <td>{props.children}</td>
    );
}

function TableHead(props) {
    return (
        <th>{props.children}</th>
    );
}

function Table({
    head,
    body,
    ...otherProps
}) {

    let thead = null;
    if (head.length > 0) {
        thead = (
            <TableRow>
                {head.map(cell => <TableHead key={cell}>{cell}</TableHead>)}
            </TableRow>
        );

    }

    let tbody = null;
    if (body.length > 0) {
        let rowKey = 1;
        let cellKey = 1;
        tbody = body.map(row => {
            return (
                <TableRow key={rowKey++}>
                    {row.map(cell => <TableCell key={cell + cellKey++}>{cell}</TableCell>)}
                </TableRow>
            );
        });
    }
    let cssClass = ['table', otherProps.className].join(" ");
    return (
        <table className={cssClass}>
            <thead className="thead-dark">{thead}</thead>
            <tbody>{tbody}</tbody>
        </table>
    )
}

export default Table;