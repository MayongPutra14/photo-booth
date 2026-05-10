import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import TemplateLayoutPage from "./pages/TemplateLayoutPage";
import TemplateFrame from "./pages/TemplateFramePage";
import CameraPage from "./pages/CameraPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <main className="font-teachers flex min-h-screen flex-col">
              <Outlet />
            </main>
          }
        >
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/template"
            element={<TemplateLayoutPage />}
          />
          <Route
            path="/frame"
            element={<TemplateFrame />}
          />
          <Route
            path="/camera"
            element={<CameraPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
