import { Route, Routes} from "react-router-dom"
import Layout from "./Layout"
import { ThemeProvider } from "styled-components"
import theme from "./utils/constants/theme"
import GlobalStyle from "./components/GlobalStyle/GlobalStyle"
import HomePage from "./pages/HomePage"
import CovidContext from "./Context/CovidContext"
import IndonesiaCovid from "./pages/Indonesia"
import ProvinsiCovid from "./pages/Provinsi"
import { useState } from "react"
import data from "./utils/constants/provinces"
import AboutPage from "./pages/About"

function App() {

  const [province, setProvince] = useState(data);

  const contextValue = {
    province,
    setProvince,
  };

  return (
    <ThemeProvider theme={theme}>
      <CovidContext.Provider value={contextValue} >
      <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/Indonesia" element={<IndonesiaCovid />}></Route>
            <Route path="/Provinsi" element={<ProvinsiCovid />}></Route>
            <Route path="/About" element={<AboutPage />}></Route>
          </Routes>
        </Layout>
        </CovidContext.Provider>
    </ThemeProvider>
  );
}

export default App;
