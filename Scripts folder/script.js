import { dashboardPageHTML, initDashboard } from "./dashboard.js";
import { houseHTML, initHouse } from "./house.js";
import { flatHTML, initFlat } from "./Flat.js";
import { tenantHTML } from "./tenant.js";
import { recordPaymentHTML } from "./record-payment.js";

const pages = {
    dashboard: {
        html:dashboardPageHTML,
        init: initDashboard
    },
    houses: {
        html: houseHTML,
        init: initHouse
    },
    flats: {
        html: flatHTML,
        init: initFlat
    },
    tenants: {
        html: tenantHTML
    },
    payments: {
        html: recordPaymentHTML
    }
}

const contentPageViewer = document.querySelector('.main');
const menuItems = document.querySelectorAll('.sidebar ul li');

const pageRender = (pageContent) => {
    contentPageViewer.innerHTML = pageContent.html

    if (pageContent.init) {pageContent.init()};
    
};

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        const page = item.dataset.page;
        console.log(page)

        menuItems.forEach(i => {
            i.classList.remove("active")
        })
        item.classList.add("active")

        pageRender(pages[page])
    })
})

pageRender(pages.dashboard);



