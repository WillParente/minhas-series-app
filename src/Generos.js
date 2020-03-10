import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Generos = () => {
    const [data, setData] = useEffect({})
    useEffect(() => {
        axios
        .get('/generos')
        .then(res => {
            setData(res.data)
        })
    })
    return <h1>Genêros</h1>
}

export default Generos;