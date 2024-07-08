import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./AddVehicleForm.css"

const AddVehicleForm = ({ onAddVehicle }) => {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  const [vehicle, setVehicle] = useState({
    modelo_id: "",
    nome_modelo: "",
    ano: "",
    cor: "",
    combustivel: "",
    num_portas: "",
    valor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "ano") {
      const newValue = value.replace(/\D/g, "").slice(0, 4);
      setVehicle({ ...vehicle, [name]: newValue });
    } else if (name === "num_portas" || name === "valor") {
      const newValue = value.replace(/\D/g, "");
      setVehicle({ ...vehicle, [name]: newValue });
    } else {
      setVehicle({ ...vehicle, [name]: value.toUpperCase() });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "e" || e.key === "." || e.key === ",") {
      e.preventDefault();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const year = parseInt(vehicle.ano);
    if (year < 1900 || year > nextYear) {
      alert(`Insira uma ANO entre 1900 e ${nextYear}`);
      return;
    }

    const numPortas = parseInt(vehicle.num_portas);
    if (numPortas < 2 || numPortas > 4) {
      alert(`Insira um número de portas entre 2 e 4`);
      return;
    }

    onAddVehicle(vehicle);
    setVehicle({
      modelo_id: "",
      nome_modelo: "",
      ano: "",
      cor: "",
      combustivel: "",
      num_portas: "",
      valor: "",
    });
  };

  return (
    <div className="container mt-4">
  <div className="card mb-4">
    <div className="card-header">
      <h1 className="text-center">Gerenciamento de Veículos</h1>
    </div>
    <div className="card-body">
      <form onSubmit={handleSubmit} className="formVehicle">
        <div className="form-group row mb-2">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              id="modelo_id"
              name="modelo_id"
              value={vehicle.modelo_id}
              onChange={handleChange}
              placeholder="Marca"
              required
            />
          </div>
          <div className="col-md-6 mt-2 mt-md-0">
            <input
              type="text"
              className="form-control"
              id="nome_modelo"
              name="nome_modelo"
              value={vehicle.nome_modelo}
              onChange={handleChange}
              placeholder="Modelo"
              required
            />
          </div>
        </div>
        <div className="form-group row mb-2">
          <div className="col-md-6">
            <input
              type="number"
              className="form-control"
              id="ano"
              name="ano"
              value={vehicle.ano}
              onChange={handleChange}
              placeholder="Ano"
              onKeyDown={handleKeyDown}
              maxLength="4"
              required
            />
          </div>
          <div className="col-md-6 mt-2 mt-md-0">
            <input
              type="text"
              className="form-control"
              id="cor"
              name="cor"
              value={vehicle.cor}
              onChange={handleChange}
              placeholder="Cor"
              required
            />
          </div>
        </div>
        <div className="form-group row mb-2">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              id="combustivel"
              name="combustivel"
              value={vehicle.combustivel}
              onChange={handleChange}
              placeholder="Combustível"
              required
            />
          </div>
          <div className="col-md-6 mt-2 mt-md-0">
            <input
              type="number"
              className="form-control"
              id="num_portas"
              name="num_portas"
              value={vehicle.num_portas}
              onChange={handleChange}
              placeholder="Número de Portas"
              onKeyDown={handleKeyDown}
              required
            />
          </div>
        </div>
        <div className="form-group row mb-2 justify-content-center">
          <div className="col-md-6">
            <input
              type="number"
              className="form-control"
              id="valor"
              name="valor"
              value={vehicle.valor}
              onChange={handleChange}
              placeholder="Valor"
              onKeyDown={handleKeyDown}
              required
            />
          </div>
        </div>
        <div className="form-group row justify-content-center">
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">
              Adicionar Veículo
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>

    <div className="card-body table-responsive" style={{ maxHeight: "400px", overflowY: "auto" }}>
      <table className="table table-striped">
        {/* Aqui vai o conteúdo da tabela */}
      </table>
    </div>
  </div>

  );
};

export default AddVehicleForm;
