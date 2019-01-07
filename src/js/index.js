import store from "./store/index";
import { setLocation} from "./actions/index"

window.store = store;
window.setLocation = setLocation;