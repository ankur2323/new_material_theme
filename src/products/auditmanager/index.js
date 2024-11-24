import AllItems from "./components/allItems";
import bgImage from "../../assets/images/4k_background_Blockchain.gif";
import MKBox from "../../components/MKBox";
import {Route, Routes} from "react-router-dom";
import Newproject from "./components/newproject";


function AuditManager() {
    return (
        <>
            <MKBox
                minHeight="10vh"
                width="100%"
                sx={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    display: "grid",
                    placeItems: "center",
                }}
            >
            </MKBox>
            <AllItems></AllItems>

        </>
    )

}

export default AuditManager;