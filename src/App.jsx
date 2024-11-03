
import ScrollToTop from "./Components/ScrollToTop";
//Toastify
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RouterPages from "./Components/Router/RouterPages";

function App() {
  return (
    <div className="overflow-hidden ">
        <ScrollToTop/>
        <RouterPages/>
        <ToastContainer position="top-right" autoClose={2000}/>
        
    </div>
  );
}

export default App;
