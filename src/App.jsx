import "./style.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPostController from "./pages/ListPostPage/ListPostController";
import AddPostController from "./pages/AddPostPage/AddPostController";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ListPostController />} />
        <Route path="/add-post" element={<AddPostController />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
