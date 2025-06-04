import { AppRouter } from "./providers/router/intex";
import { classNames } from "../shared/lib/classNames/classNames";
import { Sidebar } from "../widgets/Sidebar";
import Navbar from "@/widgets/Navbar/Navbar";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar to={""} />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
