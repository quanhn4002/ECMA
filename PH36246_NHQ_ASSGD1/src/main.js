// index.js

import Listdm from "./pages/admin/listdm";
import datphong from "./pages/datphong";
import lienhe from "./pages/lienhe";
import trangchu from "./pages/trangchu";
import{render,router} from './libs';

const app = document.querySelector("#app");


router.on("/", function () {
    render(app, trangchu);
});

router.on("/lienhe", function () {
    render(app, lienhe);
});

router.on("/datphong", function () {
    render(app, datphong);
});

router.on("/admin/listdm", function () {
    render(app, Listdm);
});

// Resolve the routes
router.resolve();
