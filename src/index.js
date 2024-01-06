import { renderLayout, renderNoProjectSelected } from "./modules/domManipulation";
import { getFromLocalStorage ,removeFromLocalStorage } from "./modules/localStorage";

renderNoProjectSelected();
renderLayout(); 


//
// WIPE LOCAL STORAGE BELOW //


// removeFromLocalStorage('taskLibrary');
// removeFromLocalStorage('projectLibrary');

