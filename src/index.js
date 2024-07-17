import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Body from './components/Body';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import AddTodo from './components/AddTodo';



const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/add",
        element:<AddTodo/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);



