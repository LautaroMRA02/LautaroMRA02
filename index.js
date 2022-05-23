import ScreenError from "./components/Screens/ScreenError.js";
import { ScreenHome }  from "./components/Screens/ScreenHome.js";
import { parseRequestUrl } from "./utils.js";

const routes = {
    "/": ScreenHome,
    "/home": ScreenHome,
} 
function actionFakeServer(){
    const request = parseRequestUrl()
    const parseUrl = (request.resource ? `/${request.resource}` : '/') + (request.id ? '/:id' : '') + (request.verb ? `/${request.verb}` : '');
    const screen = routes[parseUrl] ? routes[parseUrl] : ScreenError;
    const main = document.getElementById("root")
    main.innerHTML = screen.render()
}
window.addEventListener('load',actionFakeServer)
window.addEventListener('hashchange', actionFakeServer);
