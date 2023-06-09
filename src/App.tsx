import { useState } from "react";
import Select from "./Select";

const options = [
  {
    label: "First",
    value: 1,
  },
  {
    label: "Second ",
    value: 2,
  },
  {
    label: "Third",
    value: 3,
  },
  { label: "Fourth", value: 4 },
  { label: "Five", value: 5 },
];

function App() {
  const [value, setValue] = useState<(typeof options)[0] | undefined>(
    options[0]
  );
  return (
    <h1>
      <Select
        value={value}
        options={options}
        onChange={(opt) => {
          setValue(opt);
        }}
      />
    </h1>
  );
}

export default App;
