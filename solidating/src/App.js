import { useState } from 'react';
import './App.scss';
import  Main from './components/Main';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

function App() {

  const [userInfo, setUserInfo] = useState({
    phone: '',
    name: '',
    email: '',
    birthdate: '',
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
