import Header from './components/Header';
//import Social from './components/Social';
//import Footer from './components/Footer';
import NavbarMenu from "./components/NavbarMenu";
//import Home from './pages/Home';
import { Outlet } from 'react-router-dom';
import './App.css'

function App() {
  	return (
    		<>
			<div>
				<Header />
				<NavbarMenu />
				<Outlet />
      		</div>
    		</>
  	)
}

export default App;
