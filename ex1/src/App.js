import Adress from "./compensant/Adress";
import FullName from "./compensant/fullName";
import ProfilePhoto from "./compensant/profilePhotos";


function App() {
  return (
    <div className="App">
        <ProfilePhoto/>
        <Adress/>
        <FullName/>
    </div>
  );
}

export default App;
