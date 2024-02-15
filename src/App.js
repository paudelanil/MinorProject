import logo from './logo.svg';
import './App.css';
import PostCreate from './components/PostCreate';
import NavbarMenu from './components/Navbar';



function App() {
  
  return (
    <div className="App">
      <div>
        <NavbarMenu/>
      </div>
     <PostCreate></PostCreate>
    
    
    </div>
  );
}

export default App;
