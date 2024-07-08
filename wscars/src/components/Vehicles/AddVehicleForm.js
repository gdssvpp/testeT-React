import React, { useState } from 'react';

const AddVehicleForm = ({ onAddVehicle }) => {
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
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

        if (name === 'ano') {
            const newValue = value.replace(/\D/g, '').slice(0, 4); 
            setVehicle({ ...vehicle, [name]: newValue });
        } else if (name === 'num_portas' || name === 'valor') {
            const newValue = value.replace(/\D/g, ''); 
            setVehicle({ ...vehicle, [name]: newValue });
        } else {
            setVehicle({ ...vehicle, [name]: value.toUpperCase() });
        }
        
    };

    const handleKeyDown = (e) => {
        if (e.key === 'e' || e.key === '.' || e.key === ',') {
            e.preventDefault();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const year = parseInt(vehicle.ano);
        if(year < 1900 || year > nextYear) {
            alert(`Insira uma ANO entre 1900 e ${nextYear}`);
            return;
        }

        const numPortas = parseInt(vehicle.num_portas);
        if(numPortas < 2 || numPortas > 4){
            alert(`Insira um número de portas entre 2 e 4`);
            return;
        }

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
            <input type="number" name="ano" value={vehicle.ano} onChange={handleChange} placeholder="Ano" onKeyDown={handleKeyDown} maxLength="4" required />
            <input type="text" name="cor" value={vehicle.cor} onChange={handleChange} placeholder="Cor" required />
            <input type="text" name="combustivel" value={vehicle.combustivel} onChange={handleChange} placeholder="Combustível" required />
            <input type="number" name="num_portas" value={vehicle.num_portas} onChange={handleChange} placeholder="Número de Portas" onKeyDown={handleKeyDown} required />
            <input type="number" name="valor" value={vehicle.valor} onChange={handleChange} placeholder="Valor" onKeyDown={handleKeyDown} required />
            <button type="submit">Adicionar Veículo</button>
        </form>
    );
};

export default AddVehicleForm;
