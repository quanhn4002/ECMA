// index.js

import Listdm from "./pages/admin/listdm";
import datphong from "./pages/datphong";
import lienhe from "./pages/lienhe";
import trangchu from "./pages/trangchu";
import ListDp from "./pages/admin/listDp";
import ListKS from "./pages/admin/listKs";
import{render,router} from './libs';
import addDm from "./pages/admin/adddm";
import updatedm from "./pages/admin/updatedm";

const app = document.querySelector("#app");


router.on("/trangchu", function () {
    render(app, trangchu);
});

router.on("/lienhe", function () {
    render(app, lienhe);
});

router.on("/datphong", function () {
    render(app, datphong);
});

router.on("/admin/listDp", function () {
    render(app, ListDp);
});
router.on("/admin/listKs", function () {
    render(app, ListKS);
});
router.on("/admin/listdm", function () {
    render(app, Listdm);
});
router.on("/admin/adddm", function () {
    render(app, addDm);
});
router.on('/admin/updatedm/:id',function({data}){
    render(app,() => updatedm(data.id))
})

// Resolve the routes
router.resolve();
