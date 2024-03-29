import { useState, useEffect } from "react";
import Patient from "./Patient";


const PatientsList = ({ patients, setPatient }) => {

  useEffect(() => {
    if (patients.length > 0)
      console.log("new patient");
  }, [patients]);

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">pacientes y citas</span>
          </p>
          {patients.map((patient) => (
            <Patient key={patient.id} {...patient} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">pacientes y citas</span>
          </p>
        </>
      )}
    </div>
  );
};

export default PatientsList;
