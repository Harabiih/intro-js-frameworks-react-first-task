import React from "react";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>My Team Profiles</h1>
      <div className="cards-container">
        <ProfileCard 
          name="Alice Johnson" 
          image="https://via.placeholder.com/150" 
          description="Frontend Developer passionate about UI/UX." 
        />
        <ProfileCard 
          name="Brian Smith" 
          image="https://via.placeholder.com/150" 
          description="Backend Engineer who loves working with APIs." 
        />
        <ProfileCard 
          name="Clara Brown" 
          image="https://via.placeholder.com/150" 
          description="Fullstack Developer with a knack for problem-solving." 
        />
      </div>
    </div>
  );
}

export default App;
