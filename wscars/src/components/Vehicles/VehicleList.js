import React, { useState, useEffect } from "react";
import axios from "axios";
import AddVehicleForm from "./AddVehicleForm";
import "bootstrap/dist/css/bootstrap.min.css";

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  const fetchVehicles = async () => {
    try {
      const response = await axios.get("https://wswork.com.br/cars.json");
      setVehicles(response.data || []);
    } catch (error) {
      console.error("Erro ao buscar veículos:", error);
      setVehicles([]); // Garantir que vehicles seja um array vazio em caso de erro
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const onAddVehicle = (newVehicle) => {
    setVehicles((prevVehicles) => [...prevVehicles, newVehicle]);
  };

  const groupByMarca = () => {
    const grouped = {};
    vehicles.forEach((vehicle) => {
      if (!grouped[vehicle.modelo_id]) {
        grouped[vehicle.modelo_id] = [];
      }
      grouped[vehicle.modelo_id].push(vehicle);
    });
    return grouped;
  };

  const sortVehicles = (vehicles) => {
    return vehicles.sort((a, b) => a.nome_modelo.localeCompare(b.nome_modelo));
  };

  const renderGroupedVehicles = () => {
    if (vehicles.length === 0) {
      return <p>Nenhum veículo encontrado.</p>;
    }

    const groupedVehicles = groupByMarca();
    const sortedKeys = Object.keys(groupedVehicles).sort((a, b) =>
      a.localeCompare(b)
    );

    return (
      <div className="container">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">
              <h2 className="my-4 vehicleList">Listagem de Veículos</h2>
            </div>
            <div className="card-body">
              {sortedKeys.map((marca) => (
                <div key={marca} className="mb-4">
                  <h5 className="card-title">Marca: {marca}</h5>
                  <div className="table-responsive">
                    <table className="table table-dark table-striped table-hover">
                      <thead>
                        <tr>
                          <th>Modelo</th>
                          <th>Ano</th>
                          <th>Cor</th>
                          <th>Combustível</th>
                          <th>Número de Portas</th>
                          <th>Valor</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sortVehicles(groupedVehicles[marca]).map(
                          (vehicle, index) => (
                            <tr key={index}>
                              <td
                                style={{
                                  minWidth: "150px",
                                  padding: "8px",
                                  margin: "0",
                                }}
                              >
                                {vehicle.nome_modelo}
                              </td>
                              <td
                                style={{
                                  minWidth: "80px",
                                  padding: "8px",
                                  margin: "0",
                                }}
                              >
                                {vehicle.ano}
                              </td>
                              <td
                                style={{
                                  minWidth: "100px",
                                  padding: "8px",
                                  margin: "0",
                                }}
                              >
                                {vehicle.cor}
                              </td>
                              <td
                                style={{
                                  minWidth: "120px",
                                  padding: "8px",
                                  margin: "0",
                                }}
                              >
                                {vehicle.combustivel}
                              </td>
                              <td
                                style={{
                                  minWidth: "100px",
                                  padding: "8px",
                                  margin: "0",
                                }}
                              >
                                {vehicle.num_portas}
                              </td>
                              <td
                                style={{
                                  minWidth: "100px",
                                  padding: "8px",
                                  margin: "0",
                                }}
                              >
                                {vehicle.valor}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <AddVehicleForm onAddVehicle={onAddVehicle} />
      {renderGroupedVehicles()}
    </div>
  );
};

export default VehicleList;
