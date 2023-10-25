import ReactMarkdown from "react-markdown";
import osnova from "./assets/txt/osnova.md"

const App = () => {
  return (
    <div>
      <ReactMarkdown
        children={osnova}
      />
    </div>
  );
};

export default App;