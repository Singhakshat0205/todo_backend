
import Header from './components/Header';

import './index.css';
import {Outlet} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
      
    </div>
  );
}

export default App;
