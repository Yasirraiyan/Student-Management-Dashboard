import "./App.css";
import Login from "./components/context/Login";
import LanguageToggle from "./components/context/LanguageToggle";
import { UserProvider } from "./components/context/UserContext";
import { MyProvider } from "./components/context/MyContext";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { LanguageContextProvider } from "./components/context/LanguageContext";
import { StudentProvider } from "./components/context/StudentContext";
import StudentList from "./components/StudentList";
function App() {
  return (
    <UserProvider>
      <MyProvider>
        <ThemeContextProvider>
          <LanguageContextProvider>
            <StudentProvider>
              <div className="App">
                <h1>Student Management Dashboard</h1>
                <Login />

                <LanguageToggle />
                <StudentList />
              </div>
            </StudentProvider>
          </LanguageContextProvider>
        </ThemeContextProvider>
      </MyProvider>
    </UserProvider>
  );
}

export default App;
