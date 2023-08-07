import './App.css';
import router from "./router";
import {RouterProvider} from 'react-router-dom';

function App() {



  return (
    <div className="App">

        <header></header>


        <RouterProvider router={router} />


        <footer></footer>

    </div>
  );
}

export default App;
