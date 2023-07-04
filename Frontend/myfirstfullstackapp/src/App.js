import './App.css';
import { Heading } from '@chakra-ui/react';
import LoginSignup from './Components/Login-Signup';
function App() {
  return (
    <div className="App">
      <Heading>Hey There Welcome! Please Login or Signup First.</Heading>
      <LoginSignup/>
    </div>
  );
}

export default App;
