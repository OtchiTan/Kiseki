import {
    createRoutesFromElements,
    Route,
    RouterProvider,
    Routes,
} from "react-router";
import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
