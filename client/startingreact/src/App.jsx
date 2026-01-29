import './App.css';
import Footer from './components/footer';
import Navbar from "./components/navbar";
import Todos from "./components/todos";
import { Outlet } from 'react-router-dom';

const links = [];

export default function App() {
  return (
    <div>
      <Navbar links={links} />
      
      {/* This is where child routes render */}
      <Outlet />
      <Todos/>
      <Footer />
    </div>
  );
}
