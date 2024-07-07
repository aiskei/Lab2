import CountriesAppBar from './CountriesAppBar'
import CountriesFlags from './CountriesFlags'
import AllCountries from './AllCountries'
import FlagButton from './FlagButton'
import { Route, Routes } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <>
                <CountriesAppBar />
            </>
            <Routes>
                <Route path="/" element={<CountriesFlags />} />
                <Route path="/flags" element={<FlagButton />} />
                <Route path="/allCountries" element={<AllCountries />} />
            </Routes>
        </div>
    )
}

export default App
