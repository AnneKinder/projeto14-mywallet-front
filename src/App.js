import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/GlobalStyle.js";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp.js";
import Feed from "./pages/Feed.js";
import NewEntry from "./pages/NewEntry.js";
import NewExit from "./pages/NewExit.js";
import { AuthProvider } from "./context/auth.js";


export default function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/feed" element={<Feed/>} />
        <Route path="/new-entry" element={<NewEntry/>} />
        <Route path="/new-exit" element={<NewExit/>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}
