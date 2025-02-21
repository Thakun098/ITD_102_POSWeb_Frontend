import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function CreateProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [category, setCategory] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await  axios
                .post("http://localhost:5000/create-product", { name, price, stock, category });
                navigate('/'); //redirect to home page


        } catch (error) {
            setMessage("Error creating user, please try again");
        }
    }

    return (
        <div className='container'>
            <h1>Create Product</h1>
            {message && <p className='text-danger'>{message}</p>}

            <form onSubmit = {handleSubmit}>
                <div className="w-25 p-3">
                    <label className='form-label'>Name: {name}</label>
                    <input type="text" 
                    className="form-control"
                    value = {name}
                    onChange = {(e) => setName(e.target.value)} 
                    required />
                </div>

                <div className="w-25 p-3">
                    <label className='form-label'>Price: {price}</label>
                    <input type="text"
                    className="form-control" 
                    value = {price}
                    onChange = {(e) => setPrice(e.target.value)} 
                    required />
                </div>

                <div className="w-25 p-3">
                    <label className='form-label'>Stock: {stock}</label>
                    <input type="text" 
                    className="form-control" 
                    value = {stock}
                    onChange = {(e) => setStock(e.target.value)} 
                    required />
                </div>

                <div className="w-25 p-3">
                    <label className='form-label'>Category: {category}</label>
                    <input type="text" 
                    className="form-control" 
                    value = {category}
                    onChange = {(e) => setCategory(e.target.value)} 
                    required />
                </div>

                <div className="w-25 p-3">
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>
        </div>

    )
}

export default CreateProduct;
