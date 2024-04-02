"use client"
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";





export default function Myblog() {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:7000/api/blog/getblog`);
                console.log(response.data.blogs)
                setData(response.data.blogs)
            } catch (error) {
                console.error(error.message)
            }
        }
        fetchData()
    }, [])

const deleteblog =(e) =>{
    const id = e.currentTarget.getAttribute("data-id")
        console.log("working",id)
        return confirm('Are you sure?')
        
    }

    const columns = [
        {
            name: "Title",
            selector: row => row.blogTitle,
            sortable: true
        },
        {
            name: "Category",
            selector: row => row.category,
            sortable: true
        },
        {
            name: "Description",
            selector: row => row.blogDescription,
            sortable: true
        },
        {
            name: "Action",
            selector: row => row.Action,
            sortable: true,
            cell: row =>
                <div>
                   <span><FontAwesomeIcon icon={faPen} className="px-4" /></span>
                   <span ><FontAwesomeIcon icon={faTrash} onClick={deleteblog} data-id={row._id}/></span>
                </div>
        }
    ]
    // const data = [
    //     {
    //         id: 1,
    //         title: 'First Time Home Owner Ideas',
    //         Category: 'tech',
    //         Description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.'
    //     },
    //     {
    //         id: 2,
    //         title: 'First Time Home Owner Ideas',
    //         Category: 'lifestyle',
    //         Description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.'
    //     },
    //     {
    //         id: 3,
    //         title: 'First Time Home Owner Ideas',
    //         Category: 'Fashion',
    //         Description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.'
    //     },

    // ]


    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="text-end">
                        <input type="text" id="search-box" name="search-box"/>
                    </div>
                    <DataTable
                        columns={columns}
                        data={data}
                        selectableRows
                        fixedHeader
                    >
                    </DataTable>
                </div>
            </div>
        </>
    )
}