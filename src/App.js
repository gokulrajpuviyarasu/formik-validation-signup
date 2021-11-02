
import './App.css';
import rocketImage from './asset/rocket.png';
import { Singup } from './components/Singup';

function App() {
  return (
   <div className="container mt-3">
     <div className="row">
        <div className="col-md-5">
        <Singup/>
          </div>
          <div className="col-md-7">
            <img className="img-fluid w-80" src={rocketImage} alt=""/>
            </div>
       </div>
       </div>
  );
}

export default App;
