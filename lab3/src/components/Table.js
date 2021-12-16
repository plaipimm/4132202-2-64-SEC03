import React from 'react'

function GenTable(peoples) {
    return people.map((people)=>{
        const { id, name: rname } = people;
        return(
            <tr>
                <td>{id}</td>
                <td>{rname}</td>
            </tr>
        );
    });

}

function DataTable() {
    const students = [
        { id: 1, name: "Plai"},
        { id: 2, name: "ma"},
    ];
        
    return (
        <>
        <table>
            <tbody>{GenTable(studens)}</tbody>
        </table>
    </>
    )
}

export default DataTable