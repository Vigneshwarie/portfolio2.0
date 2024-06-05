import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Awards from './pages/Awards';
import Contact from './pages/Contact';



const router = createBrowserRouter([
     {
		path: '/',
          element: <App />,
		children: [
			{
				index: true,
               },
               {
                    path: '/About',
                    element: <About />,
               },
               {
                    path: '/Experience',
                    element: <Experience />,
               },
               {
                    path: '/Projects',
                    element: <Projects />,
               },
               {
                    path: '/Education',
                    element: <Education />,
               },
               {
                    path: '/Skills',
                    element: <Skills />,
               },
               {
                    path: '/Awards',
                    element: <Awards />,
               },
               {
                    path: '/Contact',
                    element: <Contact />,
               },
          ],
     },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
     <RouterProvider router={router} />
);
