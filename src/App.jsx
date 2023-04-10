import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import NotFound from "./pages/NotFound";
import ReactBaseTasks from "./pages/ReactBase";
import About from "./pages/About/About";
import ReactBaseList from "./pages/ReactBaseList";
import ReactList from "./pages/ReactList";
import ReactState from "./pages/ReactState";
import ReactState2 from "./pages/ReactState2";
import MyLittleFarm from "./pages/MyLittleFarm";
function App() {
  return (
    // <BrowserRouter>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="react-base" element={<ReactBaseTasks />} />
          <Route path="react-base-list" element={<ReactBaseList />} />
          <Route path="react-list" element={<ReactList />} />
          <Route path="react-state" element={<ReactState />} />
          <Route path="react-state2" element={<ReactState2 />} />
          <Route path="react-state3" element={<MyLittleFarm />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
    // </BrowserRouter>
  );
}

export default App;
