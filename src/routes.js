import Icon from "@mui/material/Icon";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
import SignIn from "layouts/pages/authentication/sign-in";
import Cfodashboard from "./products/cfodashboard";

// Sections
import PageHeaders from "layouts/sections/page-sections/page-headers";
import Features from "layouts/sections/page-sections/featuers";
import Navbars from "layouts/sections/navigation/navbars";
import NavTabs from "layouts/sections/navigation/nav-tabs";
import Pagination from "layouts/sections/navigation/pagination";
import Inputs from "layouts/sections/input-areas/inputs";
import Forms from "layouts/sections/input-areas/forms";
import Alerts from "layouts/sections/attention-catchers/alerts";
import Modals from "layouts/sections/attention-catchers/modals";
import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
import Avatars from "layouts/sections/elements/avatars";
import Badges from "layouts/sections/elements/badges";
import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
import Buttons from "layouts/sections/elements/buttons";
import Dropdowns from "layouts/sections/elements/dropdowns";
import ProgressBars from "layouts/sections/elements/progress-bars";
import Toggles from "layouts/sections/elements/toggles";
import Typography from "layouts/sections/elements/typography";
import AuditManager from "./products/auditmanager";


const routes = [
    {
        name: "Products",
        icon: <Icon>dashboard</Icon>,
        columns: 1,
        rowsPerColumn: 2,
        collapse: [
            {
                name: "products",
                collapse: [
                    {
                        name: "cfo dashboard",
                        route: "/products/cfodashboard",
                        component: <Cfodashboard/>,
                    },
                    {
                        name: "audit manager",
                        route: "/products/auditmanager",
                        component: <AuditManager/>,
                    },
                    {
                        name: "risk manager",
                        route: "/pages/landing-pages/author",
                        component: <Author/>,
                    },
                ],
            },

        ],
    },
    {
        name: "about us",
        icon: <Icon>school</Icon>,
        route: "/pages/authentication/sign-in",
        component: <SignIn/>
    }, {
        name: "contact us",
        icon: <Icon>call</Icon>,
        route: "/pages/authentication/sign-in",
        component: <SignIn/>
    },
    {
        name: "account",
        icon: <Icon>person</Icon>,
        collapse: [
            {
                name: "log in",
                route: "/pages/authentication/sign-in",
                component: <SignIn/>,
            },
            {
                name: "create account",
                route: "/pages/authentication/sign-in",
                component: <SignIn/>,
            }
        ],
    },
];

export default routes;
