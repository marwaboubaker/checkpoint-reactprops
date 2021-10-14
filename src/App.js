
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./component/Navbar";
import Profilepicture from "./component/Profilepicture";
import Profile from "./component/Profile";



function App() {
  let name="Marwa";
  let bio="Developer";
  let contry="Tunisia";
  let img="https://www.campusfrance.org/sites/default/files/styles/desktop_visuel_principal_page/public/Les%20bourses%20pour%20les%20%C3%A9tudiants%20%C3%A9trangers.jpg?itok=r8AlQSis"
  return (
   <div>
  <Navbar/>;
  <Profilepicture img={img}/>;
  <Profile name={name} bio={bio} contry={contry}/>
  </div>
  );
}

export default App;
