import React from 'react'

const FormAside = () => {
    return (
        <div className='form'>
            <h3>Reportar CyberBullying</h3>

            <div className='content-form'>
                <label className='label-form-fix' for='Name'>Nombre Completo</label>
                <input type='text' id='Name' name='Name' placeholder='Introduzca su Nombre completo' />

                <label for='Email'>Correo Electrónico</label>
                <input type='email' id='Email' name='Email' placeholder='Introduzca su Correo electronico' />

                <label for='Name'>Usuario al que denuncia</label>
                <input type='text' id='Name' name='Name' placeholder='Introduzca al Usuario' />

                <label for='Select'>Indique Red Social</label>
                <select name="Select" id='Select' className='select-form'>
                    <option value="value1">Instagram</option>
                    <option value="value2" selected>Twitter</option>
                    <option value="value3">Facebook</option>
                    <option value="value3">TikTok</option>
                </select>

                <label for='File'>Subir captura de pantalla</label>
                <input type="file" id='File' name="File" className='file-form'></input>

                <label>Mensaje</label>
                <textarea placeholder='Explique su situación aqui...'></textarea>

                <button className='btn-form-report ov-btn-slide-left-report' type='submit'>Reportar</button>
            </div>
        </div>
    )
}

export default FormAside
