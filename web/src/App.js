import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

import DevItem from "./components/DevItem";
import DevForm from "./components/DevForm";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");

      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post("/devs", data);

    setDevs([...devs, response.data]);
  }

  async function handleDelete(dev_id) {
    await api.delete(`/devs/${dev_id}`);

    setDevs(
      devs.filter(dev => {
        return dev._id !== dev_id;
      })
    );
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} handleDelete={handleDelete} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
