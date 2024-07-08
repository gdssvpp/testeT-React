import React, { useState } from 'react';

const AddVehicleForm = ({ onAddVehicle }) => {
    const [vehicle, setVehicle] = useState({
        modelo_id: '',
        nome_modelo: '',
        ano: '',
        cor: '',
        combustivel: '',
        num_portas: '',
        valor: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVehicle({ ...vehicle, [name]: value.toUpperCase() });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddVehicle(vehicle);
        setVehicle({
            modelo_id: '',
            nome_modelo: '',
            ano: '',
            cor: '',
            combustivel: '',
            num_portas: '',
            valor: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="modelo_id" value={vehicle.modelo_id} onChange={handleChange} placeholder="Marca" required />
            <input type="text" name="nome_modelo" value={vehicle.nome_modelo} onChange={handleChange} placeholder="Modelo" required />
            <input type="number" name="ano" value={vehicle.ano} onChange={handleChange} placeholder="Ano" required />
            <input type="text" name="cor" value={vehicle.cor} onChange={handleChange} placeholder="Cor" required />
            <input type="text" name="combustivel" value={vehicle.combustivel} onChange={handleChange} placeholder="Combustível" required />
            <input type="number" name="num_portas" value={vehicle.num_portas} onChange={handleChange} placeholder="Número de Portas" required />
            <input type="number" name="valor" value={vehicle.valor} onChange={handleChange} placeholder="Valor" required />
            <button type="submit">Adicionar Veículo</button>
        </form>
    );
};

export default AddVehicleForm;
