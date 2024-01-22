// index.js
import datphong from "./pages/datphong";
import lienhe from "./pages/lienhe";
import trangchu from "./pages/trangchu";
import Navigo from "navigo";

const render = (container, components) => {
    document.querySelector(container).innerHTML = components;
};

// Initial render on page load
render("#app", trangchu());

// Set up Navigo router
const router = new Navigo("/", { linkSelector: "a" });

// Define routes
router.on("/", function () {
    render("#app", trangchu());
});

router.on("/lienhe", function () {
    render("#app", lienhe());
});

router.on("/datphong", function () {
    render("#app", datphong());
});

// Resolve the routes
router.resolve();
