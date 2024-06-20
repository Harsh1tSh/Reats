import { useState } from "react";
import MyComponent from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London"];
  const handleSelectItem = (item: String) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelctItem={handleSelectItem}
      />
      <></>
      {alertVisible && (
        <MyComponent>
          <span>Heloooooo World</span>
        </MyComponent>
      )}
      <Button color="secondary" onClick={() => setAlertVisible(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
