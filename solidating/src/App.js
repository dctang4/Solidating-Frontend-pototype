import { useState } from 'react';
import './App.css';
import  Main from './components/Main.js';

function App() {

  const [userInfo, setUserInfo] = useState({
    phone: '',
    name: '',
    email: '',
    birthday: '',
    gender: '',
    interest: '',
    location: '',
    passions: '',
    photos: '',
    mybasics: '',
    avoidcontacts: '',
  });

  const handleAdd = (info) => {
    setUserInfo({
      ...userInfo,
      ...info
    })
  }

  return (
    <div className="App">
      <Main
        userInfo={userInfo}
        handleAdd={handleAdd}
      />
    </div>
  );
}

export default App;
