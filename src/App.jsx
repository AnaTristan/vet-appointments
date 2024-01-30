import { useState } from "react";
import Header from "./components/Header";
import AppForm from "./components/Form";
import PatientsList from "./components/PatientsList";

function App() {
  const [patients, setPatients] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <AppForm 
          patients={patients}
          setPatients={setPatients} 
        />
        <PatientsList />
      </div>
    </div>
  );
}

export default App;
