import { ScreenHome }  from "./components/Screens/ScreenHome.js";
import { parseRequestUrl } from "./utils.js";

window.location.hash = '/#'
const routes = {
    "/": ScreenHome,
    "/home": Compo,
} 

function actionFakeServer(){
    const request = parseRequestUrl()
    const parseUrl = (request.resource ? `/${request.resource}` : '/') + (request.id ? '/:id' : '') + (request.verb ? `/${request.verb}` : '');
    const screen = routes[parseUrl] ? routes[parseUrl] : `<>nada</>`;
    const main = document.getElementById("root")
    main.innerHTML = screen.render()
}

window.addEventListener('load',actionFakeServer)
window.addEventListener('hashchange', actionFakeServer);
