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
  {
    label: "Fourth",
    value: 4,
  },
  {
    label: "Five",
    value: 5,
  },
];

function App() {
  return (
    <h1>
      <Select
        value="nothing"
        options={options}
        onChange={() => {
          console.log("Change Function");
        }}
      />
    </h1>
  );
}

export default App;
