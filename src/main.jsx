import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 

ModuleRegistry.registerModules([AllCommunityModule]); //Register the AllCommunityModule to access all Community features:

createRoot(document.getElementById("root")).render(<App />);
