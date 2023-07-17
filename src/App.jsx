import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { UserContext } from "./context/userContext";
import { useState } from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import User from "./components/User";
import HeaderMenu from "./components/Header";
import Post from "./components/Gallery";
import { About } from "./components/About";
function App() {
  const [userDetails, setUserDetails] = useState(null);

  function updateUserDetails(userData) {
    setUserDetails(userData);
  }

  return (
    <BrowserRouter>
      <MantineProvider
        theme={{
          fontFamily: "'Source Sans 3', sans-serif",
          lineHeight: "1.6",
          headings: {
            fontFamily: "'Playfair Display', serif",
          },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <ToastContainer transition={Slide} />
        <UserContext.Provider value={{ userDetails, updateUserDetails }}>
          <HeaderMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/gallery" element={<Post />} />
            <Route path="/user" element={<User />} />
          </Routes>
          <Footer />
          <button
            onClick={() => {
              console.log(userDetails);
            }}
          >
            asdasdasdsdad
          </button>
        </UserContext.Provider>
      </MantineProvider>
    </BrowserRouter>
  );
}

export default App;
