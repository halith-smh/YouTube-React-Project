import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch" element={<Watch />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
