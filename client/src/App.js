import LoginPage from "./scenes/loginPage";
import Navbar from "./scenes/navBar";
import "../src/styles/index.scss";
import Map from "./scenes/homePage/Map";

function App() {
  return (
    <div>
      <Navbar />
      <Map />
      <LoginPage />
    </div>
  );
}

export default App;
