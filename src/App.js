import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { ColorModeContext, useMode } from "./theme";
import { Sidebar, TopBar } from "./components";
import {
  Bar,
  Contacts,
  Form,
  Geography,
  Invoices,
  Line,
  Pie,
  Team,
  FAQ,
  Dashboard,
  Calender,
} from "./pages";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div
          className="app"
          style={{
            backgroundImage: `url(/assets/${
              theme.palette.mode === "dark" ? "bg-dark1.jpg" : "bg-light1.jpg"
            })`,
          }}
        >
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <TopBar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calender />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
