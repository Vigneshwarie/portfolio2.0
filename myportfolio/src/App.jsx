import Header from './components/Header';
//import Footer from './components/Footer';
import NavbarMenu from "./components/NavbarMenu";
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
