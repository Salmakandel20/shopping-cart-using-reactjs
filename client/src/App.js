import Header from "./componets/Header/Header";
import Footer from "./componets/footer/Footer";
import { words } from "./words";

function App() {
  return (
    <div className="layout">
      <Header/>
      <main>{words.content}</main>
      <Footer/>
    </div>
  );
}

export default App;
