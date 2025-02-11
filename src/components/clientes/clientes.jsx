import React from 'react'

export const Clientes = (props) => {
    return (
        <tr>
            <th scope="row">{props.id_clientes}</th>
            <td>{props.empresa}</td>
            <td>{props.registration}</td>
            <td>{props.phone}</td>
            <td>{props.cloud}</td>
            
        </tr>
    )
}