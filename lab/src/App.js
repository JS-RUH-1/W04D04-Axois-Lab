import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  const [myvalue, setValue] = useState(true);

  const baseurl = "https://dog.ceo/api/breeds/image/random";

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(baseurl);
      setData(res.data.message);
    };
    getData();
  }, [myvalue]);

  const handelclick = () => {
    myvalue ? setValue(false) : setValue(true);
  };

  return (
    <div className="App">
      <br />
      <button onClick={() => handelclick()}>Get random dog pic</button>
      <hr />
      <img src={data} width={400} height={600} alt="" />
    </div>
  );
}

export default App;
