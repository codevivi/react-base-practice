import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import NotFound from "./pages/NotFound";
import ReactBaseTasks from "./pages/ReactBase";
import About from "./pages/About/About";
import ReactBaseList from "./pages/ReactBaseList";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-base-practice" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="react-base" element={<ReactBaseTasks />} />
          <Route path="react-base-list" element={<ReactBaseList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
