import "./App.css";
import Input from "./components/Input";
import Footer from "./components/UI/Footer";

function App() {
  return (
    <section>
      <h1>Inputs</h1>
      <Input />
      <Input error />
      <Input disabled />
      <div className="grid-1-2">
        <Input helperText="Algún texto interesante" />
        <Input helperText="Otro texto interesante" error />
      </div>
      <Input icon />
      <Input value="Text" />
      <div className="grid-1-2">
        <Input size="sm" />
        <Input size="md" />
      </div>
      <Input fullWidth />
      <Input multiline row="4" />
      <Footer />
    </section>
  );
}

export default App;
