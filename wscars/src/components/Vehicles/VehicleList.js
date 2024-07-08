import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddVehicleForm from './AddVehicleForm';


const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]);
    
    const fetchVehicles = async () => {
        try {
            const response = await axios.get('/api/cars.json');
            setVehicles(response.data.cars);
        } catch (error) {
            console.error('Erro ao buscar veículos:', error);
        }
    };

    useEffect(() => {
        fetchVehicles();
    }, []);

    const onAddVehicle = (newVehicle) => {
        setVehicles((prevVehicles) => [...prevVehicles, newVehicle]);
    };

    return (
        <div>
            <h1>Gerenciamento de Veículos</h1>
            <AddVehicleForm onAddVehicle={onAddVehicle} />
            <h2>Listagem de Veículos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Ano</th>
                        <th>Cor</th>
                        <th>Combustível</th>
                        <th>Número de Portas</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map((vehicle) => (
                        <tr key={vehicle.id}>
                            <td>{vehicle.modelo_id}</td>
                            <td>{vehicle.nome_modelo}</td>
                            <td>{vehicle.ano}</td>
                            <td>{vehicle.cor}</td>
                            <td>{vehicle.combustivel}</td>
                            <td>{vehicle.num_portas}</td>
                            <td>{vehicle.valor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VehicleList;
