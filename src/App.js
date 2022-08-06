import Error404 from "./pages/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
