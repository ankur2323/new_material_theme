import {useEffect} from "react";


import {Routes, Route, Navigate, useLocation} from "react-router-dom";


import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


import theme from "assets/theme";

import routes from "routes";
import Home from "./pages/home";
import DefaultNavbar from "./examples/Navbars/DefaultNavbar";
import Newproject from "./products/auditmanager/components/newproject";

import ViewProject from "./products/auditmanager/components/viewproject";

export default function App() {
    const {pathname} = useLocation();

    // Setting page scroll to 0 when changing the route
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }, [pathname]);

    const getRoutes = (allRoutes) =>
        allRoutes.map((route) => {
            if (route.collapse) {
                return getRoutes(route.collapse);
            }

            if (route.route) {
                return <Route exact path={route.route} element={route.component} key={route.key}/>;
            }

            return null;
        });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <DefaultNavbar
                routes={routes}
                action={{
                    type: "external",
                    route: "",
                    label: "view demo",
                    color: "default",
                }}
                transparent
                light
            />

            <Routes>
                {getRoutes(routes)}
                <Route path="/home" element={<Home/>}/>
                <Route path="/newproject" element={<Newproject/>}/>
                <Route path="/viewproject" element={<ViewProject/>}/>
                <Route path="*" element={<Navigate to="/home"/>}/>
            </Routes>


        </ThemeProvider>
    );
}
