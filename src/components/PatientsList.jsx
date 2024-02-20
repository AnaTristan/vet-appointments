import { useState, useEffect } from "react";
import Patient from "./Patient";

<<<<<<< HEAD
const PatientsList = ({ patients,setPatient }) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
=======
const PatientsList = ({ patients }) => {
>>>>>>> fbadffdb1f017be5aa06d4b5edf5e2b9b276192a

  useEffect(() => {
    if(patients.length>0)
        console.log("new patient");
  }, [patients]);

<<<<<<< HEAD
                <>
                    <h2 className="font-black text-3xl text-center">Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">pacientes y citas</span>
                    </p>
                    {
                        patients.map(patient => (
                            <Patient
                                key={patient.id}
                                {...patient}                
                                setPatient={setPatient}
                            />
                        ))
                    }
                </>
=======
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
>>>>>>> fbadffdb1f017be5aa06d4b5edf5e2b9b276192a

export default PatientsList;
