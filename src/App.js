import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Header } from "./Components/Header";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Components/butTheme";
import Test2 from "./Components/Test2";
import Test1 from "./Components/Test1";
import { QueryClient, QueryClientProvider } from "react-query";
import Test3 from "./Components/Test3";


function App() {
  
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/test1" element={<Test1 />} />
          <Route path="/test3" element={<Test3 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </QueryClientProvider>
  );
}

export default App;
