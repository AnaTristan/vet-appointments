
import Header from "./components/Header"
import AppForm from "./components/Form"
import PatientsList from "./components/PatientsList"

function App() {

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <AppForm />
        <PatientsList />
      </div>
    </div>
  )

}

export default App
