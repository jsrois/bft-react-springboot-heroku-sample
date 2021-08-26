import * as React from 'react'
import {useEffect, useState} from "react";

export const App = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("/books").then(response => response.json()).then(setBooks)
    }, [])

    return (<table>
        <thead>
        <th>
            <td>Title</td>
            <td>Author</td>
        </th>
        </thead>
        <tbody>
        {
            books.map(book => <tr>
                <td>{book.title}</td>
                <td>{book.author}</td>
            </tr>)
        }
        </tbody>
    </table>)
}