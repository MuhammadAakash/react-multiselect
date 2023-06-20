import { useState } from "react";
import Select, { SelectOption } from "./Select";

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
  {
    label: "🐶 Dog",
    value: "dog",
  },
];

function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);

  return (
    <>
      <Select
        multiple
        value={value1}
        options={options}
        onChange={(opt) => {
          setValue1(opt);
        }}
        backgroundColor="#ECF5FD"
        borderColor="#67AAE4"
        tagBackgroundColor="#F4DAD7"
        closeTagColor="#67AAE4"
      />
      <br />

      <Select
        value={value2}
        options={options}
        onChange={(opt) => {
          setValue2(opt);
        }}
      />
    </>
  );
}

export default App;
