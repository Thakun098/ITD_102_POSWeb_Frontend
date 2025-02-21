import React from 'react';
import { useState, useEffect } from 'react';
import axios, { isCancel, AxiosError } from 'axios';
import { Link } from 'react-router-dom';    //import Link

function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const res = await axios.get('http://localhost:5000/');
            console.log("Fetched Data:", res.data);  // ตรวจสอบข้อมูลที่ได้จาก API
            setData(res.data);
            console.log("Success");
        } catch (error) {
            console.log("Fail", error);
        }
    };


    const deleteUser = async (id) => {
        if (window.confirm("Are you sure ?")) {
            try {
               await axios.delete(`http://localhost:5000/delete-product/${id}`);
                fetchProduct()
                

            } catch (error) {
                console.log("Error deleting product: " + error)
            }
        }
    }

    return (
        <>

            <div className='container text-center'>

                <h1>Product Management</h1>

                <Link to="/create-product" className='btn btn-primary btn-sm mb-3'>Create New</Link> 

                <table class="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Category</th>
                            <th scope="col">Action</th>
                            
                            

                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.stock}</td>
                                <td>{item.category}</td>
                                <td>
                              <button className="btn btn-warning">  <Link to ={`edit-product/${item.id}`} className='MyFontBlack'>Edit</Link></button>
                                    {" "}
                                    <button className="btn btn-danger"> <Link to="#" className='MyFont' onClick={() => deleteUser(item.id)}>Delete</Link> </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        </>

    )
}
export default Home;