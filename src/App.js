import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackagingList from "./components/PackingList";
import Stats from "./components/Stats";


function App() {
  const [items, setitems] = useState([]);
  console.log(items)

  return (
    <div className="app">
      <Logo/>
      <Form setitems={setitems}/>
      <PackagingList items={items}  setitems={setitems}/>
      <Stats items={items}/>
    </div>
  );
}

export default App;
