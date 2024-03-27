"use client"
import { useState } from "react";
import DataTable from "react-data-table-component";


export default function Myblog() {

    const columns = [
        {
            name: "Title",
            selector: row => row.title,
            sortable: true
        },
        {
            name: "Category",
            selector: row => row.Category,
            sortable: true
        },
        {
            name: "Description",
            selector: row => row.Description,
            sortable: true
        },
    ]
    const data = [
        {
            title: 'First Time Home Owner Ideas',
            Category: 'tech',
            Description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.'
        },
        {
            title: 'First Time Home Owner Ideas',
            Category: 'lifestyle',
            Description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.'
        },
        {
            title: 'First Time Home Owner Ideas',
            Category: 'Fashion',
            Description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.'
        },
        {
            title: 'First Time Home Owner Ideas',
            Category: 'Fashion',
            Description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.'
        },
        {
            title: 'First Time Home Owner Ideas',
            Category: 'Fashion',
            Description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.'
        },
        {
            title: 'First Time Home Owner Ideas',
            Category: 'Fashion',
            Description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.'
        },
        {
            title: 'First Time Home Owner Ideas',
            Category: 'Fashion',
            Description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.'
        },
        {
            title: 'First Time Home Owner Ideas',
            Category: 'Fashion',
            Description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.'
        },
        {
            title: 'First Time Home Owner Ideas',
            Category: 'Fashion',
            Description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.'
        },
        {
            title: 'First Time Home Owner Ideas',
            Category: 'Fashion',
            Description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.'
        },
        {
            title: 'First Time Home Owner Ideas',
            Category: 'Fashion',
            Description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.'
        },
    ]

    const [records, setRecords] = useState(data);

    function handleFilter(event) {
        const newData = data.filter(row => {
            return row.Category.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
    }

    return (
        <>
            <div className="container mt-5">
                <div className="text-end">
                    <input type="text" onChange={handleFilter} />
                </div>
                <DataTable
                    columns={columns}
                    data={data}
                    selectableRows
                    fixedHeader
                >
                </DataTable>
            </div>
        </>
    )
}