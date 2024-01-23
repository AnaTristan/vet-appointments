
function AppForm() {

    return (

        <div className="md:w-1/2 lg:w2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Anade pacientes y <span className="text-indigo-600 font-bold">administralos</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                <div className="mb-5">
                    <label htmlFor="pet" className="block text-gray-700 font-bold uppercase">Nombre Mascota</label>
                    <input
                        id="pet"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="owner" className="block text-gray-700 font-bold uppercase">Nombre Propietario</label>
                    <input
                        id="owner"
                        type="text"
                        placeholder="Nombre propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="Email" className="block text-gray-700 font-bold uppercase">Email</label>
                    <input
                        id="Email"
                        type="email"
                        placeholder="Email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="date" className="block text-gray-700 font-bold uppercase">Alta</label>
                    <input
                        id="date"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="date" className="block text-gray-700 font-bold uppercase">Alta</label>
                    <textarea
                        id="sintoms"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los sintomas"
                    />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value="Agregar paciente"
                />
            </form>
        </div>

    )
}

export default AppForm

