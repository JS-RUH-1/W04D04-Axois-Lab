import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [randomImage, setRandomImage] = useState("");

  const fetchDog = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        setRandomImage(res.data.message);
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    fetchDog();
  }, []);
  
  return (
    <div>
      <button onClick={() => fetchDog()}>Get random dog pc</button>
      <br />
      <img src={randomImage} />
    </div>
  );
}

export default App;
