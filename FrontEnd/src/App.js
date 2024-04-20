import logo from './logo.svg';
import './App.css';
import PostCreate from './components/PostCreate';
import NavbarMenu from './components/Navbar';



function App() {
  
  return (
    <div className="App">
      
     <div style={{ backgroundColor: '#E8E9EF', minHeight: '100vh' }}>
     <div>
        <NavbarMenu/>
      </div>
     <PostCreate></PostCreate>
    </div>
    
     </div>
  );
}

export default App;
