import "./comps/App.jsx";
import "./comps/Footer.jsx";
import "./comps/Header.jsx";
import { createRoot } from "react-dom/client";


const root = createRoot(document.getElementById("root"));



root.render(<>
  <Header />
  <App />
  <Footer />
</>)