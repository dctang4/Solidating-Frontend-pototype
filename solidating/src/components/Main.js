import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './Main.scss';

import Landing from './pages/Landing';
import RegPhone from './pages/RegPhone';
import RegName from './pages/RegName';
import RegEmail from './pages/RegEmail';
import RegBirthday from './pages/RegBirthday';
import RegGender from './pages/RegGender';
import RegInterest from './pages/RegInterest';
import RegLocation from './pages/RegLocation';
import RegPassions from './pages/RegPassions';
import RegPhotos from './pages/RegPhotos';
import RegMyBasics from './pages/RegMyBasics';
import RegAvoidContacts from './pages/RegAvoidContacts';
import RegWelcome from './pages/RegWelcome'

const Main = ({userInfo, handleAdd}) => {

  return (
    <Switch>

      <Route exact path='/'>
        <Landing/>
      </Route>

      <Route exact path='/phone'>
        <RegPhone 
          handleAdd={handleAdd}
        />
      </Route>

      <Route exact path='/name'>
        <RegName 
          handleAdd={handleAdd}
        />
      </Route>

      <Route exact path='/email'>
        <RegEmail 
          handleAdd={handleAdd}
        />
      </Route>

      <Route exact path='/birthday'>
        <RegBirthday 
          handleAdd={handleAdd}
        />
      </Route>

      <Route exact path='/gender'>
        <RegGender
          handleAdd={handleAdd}
        />
      </Route>

      <Route exact path='/interest'>
        <RegInterest
          handleAdd={handleAdd}
        />
      </Route>

      <Route exact path='/location'>
        <RegLocation
          handleAdd={handleAdd}
        />
      </Route>

      <Route exact path='/passions'>
        <RegPassions
          handleAdd={handleAdd}
        />
      </Route>

      <Route exact path='/photos'>
        <RegPhotos
          handleAdd={handleAdd}
        />
      </Route>

      <Route exact path='/mybasics'>
        <RegMyBasics
          handleAdd={handleAdd}
        />
      </Route>

      <Route exact path='/avoidcontacts'>
        <RegAvoidContacts
          handleAdd={handleAdd}
        />
      </Route>

      <Route exact path='/welcome'>
        <RegWelcome
          userInfo={userInfo}
        />
      </Route>

    </Switch>
  )
  

}

export default Main;