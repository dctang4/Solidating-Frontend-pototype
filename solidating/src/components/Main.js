import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Main.scss";

import Landing from "./pages/Landing";
import RegPhone from "./pages/RegPhone";
import RegName from "./pages/RegName";
import RegEmail from "./pages/RegEmail";
import RegBirthday from "./pages/RegBirthday";
import RegGender from "./pages/RegGender";
import RegInterest from "./pages/RegInterest";
import RegLocation from "./pages/RegLocation";
import RegPassions from "./pages/RegPassions";
import RegPhotos from "./pages/RegPhotos";
import RegMyBasics from "./pages/RegMyBasics";
import RegAvoidContacts from "./pages/RegAvoidContacts";
import RegWelcome from "./pages/RegWelcome";

const Main = ({ userInfo, handleAdd }) => {
  return (
    <div>
      <Routes>
        <Route 
          path="/" 
          element={<Landing />} 
        />

        <Route 
          path="phone" 
          element={<RegPhone handleAdd={handleAdd} />} 
        />

        <Route 
          path="phone" 
          element={<RegPhone handleAdd={handleAdd} />} 
        />

        <Route 
          path="phone" 
          element={<RegPhone handleAdd={handleAdd} />} 
        />

        <Route 
          path="name" 
          element={<RegName handleAdd={handleAdd} />} 
        />

        <Route 
          path="email" 
          element={<RegEmail handleAdd={handleAdd} />} 
        />

        <Route
          path="birthday"
          element={<RegBirthday handleAdd={handleAdd} />}
        />

        <Route 
          path="gender" 
          element={<RegGender handleAdd={handleAdd} />} 
        />

        <Route
          path="interest"
          element={<RegInterest handleAdd={handleAdd} />}
        />

        <Route
          path="location"
          element={<RegLocation handleAdd={handleAdd} />}
        />

        <Route
          path="passions"
          element={<RegPassions handleAdd={handleAdd} />}
        />

        <Route 
          path="photos" 
          element={<RegPhotos handleAdd={handleAdd} />} 
        />

        <Route
          path="mybasics"
          element={<RegMyBasics handleAdd={handleAdd} />}
        />

        <Route
          path="avoidcontacts"
          element={<RegAvoidContacts handleAdd={handleAdd} />}
        />

        <Route 
          path="welcome" 
          element={<RegWelcome userInfo={userInfo} />} 
        />

      </Routes>
    </div>
  );
};

export default Main;
