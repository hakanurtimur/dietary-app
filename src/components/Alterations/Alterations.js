import React from "react";
import AlterationsSummary from "./AlterationsSummary";
import AvailableAlterations from "./AvailableAlterations";

export default function Alterations() {


    return (
        <React.Fragment>
            <AlterationsSummary></AlterationsSummary>
            <AvailableAlterations></AvailableAlterations>
        </React.Fragment>
    )
}