import HomeCss from "./Home.module.css";
import Todos from "../components/Todos";
export default function Home() {
  return (
    <div>
      <h1 className={HomeCss.title}>TODO List</h1>
      <Todos />
    </div>
  );
}
