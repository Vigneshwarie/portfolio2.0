import { useState } from 'react'
import Home from './pages/Home';
import Header from './components/Header';
import NavbarMenu from "./components/NavbarMenu";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

function App() {
  	return (
    		<>
			<div>
				<Header />
				<NavbarMenu />
      		</div>
    		</>
  	)
}

export default App;
