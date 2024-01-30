import { useState, useEffect } from "react";

import { Error } from "./Error";

function AppForm({ patients, setPatients }) {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [sin, setSin] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // form validation
    if ([name, owner, email, date, sin].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    //patients object

    const patientsObject = {
      name,
      owner,
      email,
      date,
      sin,
    };
    setPatients([...patients, patientsObject]);

    // Clear form
    setName("");
    setOwner("");
    setEmail("");
    setDate("");
    setSin("");
  };

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Anade pacientes y{" "}
        <span className="text-indigo-600 font-bold">administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error message="Todos los campos son obligatorios" />}
        <div className="mb-5">
          <label
            htmlFor="pet"
            className="block text-gray-700 font-bold uppercase"
          >
            Nombre Mascota
          </label>
          <input
            id="pet"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 font-bold uppercase"
          >
            Nombre Propietario
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Nombre propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={(e) => {
              setOwner(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="Email"
            className="block text-gray-700 font-bold uppercase"
          >
            Email
          </label>
          <input
            id="Email"
            type="email"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="date"
            className="block text-gray-700 font-bold uppercase"
          >
            Alta
          </label>
          <input
            id="date"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="date"
            className="block text-gray-700 font-bold uppercase"
          >
            Sintomas
          </label>
          <textarea
            id="sintoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sin}
            onChange={(e) => {
              setSin(e.target.value);
            }}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Agregar paciente"
        />
      </form>
    </div>
  );
}

export default AppForm;
