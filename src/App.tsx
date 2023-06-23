import { MantineProvider } from "@mantine/core";
import { HeaderMegaMenu } from "./components/Header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import UserSettings from "./components/User";

function App() {
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
        <HeaderMegaMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<UserSettings />} />
        </Routes>
        <Footer />
      </MantineProvider>
    </BrowserRouter>
  );
}

export default App;
