import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom' 

const NovoGenero = () => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)
    const onChange = evt => {
        setName(evt.target.value);
    }
    const save = () => {
        axios
        .post('/api/genres', {
            name: name
        })
        .then(res => {
            console.log(res);
        })
    }
    return (
        <div className='container'>
            <h1>Novo Genêros</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input type='email' className='form-control' id='name' placeholder='Nome do Genêro'></input>
                </div>
                <button type='button' onClick={save} className='btn btn-primary'>Salvar</button>
            </form>
        </div>
    )
}

export default NovoGenero;