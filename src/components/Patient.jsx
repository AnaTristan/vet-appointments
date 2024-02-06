import React from "react";

const Patient = (patient) => {

  const {name,owner,email,date,sin,} = patient

  return (
    <div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case"> {owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case"> {email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha alta: {""}
        <span className="font-normal normal-case"> {date}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case"> {sin}</span>
      </p>
    </div>
  );
};

export default Patient;
