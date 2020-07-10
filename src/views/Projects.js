import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Projects() {
    /*const { id } = useParams()
    const apiUrl = `https://5f062f19ee44800016d38bcf.mockapi.io/v1/projects/${id}`
    const [product, setProduct] = useState(null)
    
    useEffect(() => {
        axios.get(apiUrl)
            .then(response => {
                setProduct(response.data)
                console.log(response.data)
            })
    }, [apiUrl])
    */ 
    return (
        <div>
            <h1>This is the project page. </h1>
        </div>
    )
}

export default Projects