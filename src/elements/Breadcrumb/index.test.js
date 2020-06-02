import React from 'react';
import { render } from '@testing-library/react';
import Breadcrumb from './index';
import { BrowserRouter as Router } from "react-router-dom";

const setup = () => {
    const breadcrumbList = [
        { pageTitle: "Home", pageHref:""},
        { pageTitle: "House Details", pageHref:""},
    ];
    const { container } = render(
        <Router>
            <Breadcrumb data={breadcrumbList} />
        </Router>
    );

    return{
        Breadcrumb
    };
};

test("Should have <ol> with className .breadcrumb and have text Home & house Details", () =>{
    const{ Breadcrumb } = setup();

    expect(Breadcrumb).toBeInTheDocument();
    expect(Breadcrumb).toHaveTextContent("Home");
    expect(Breadcrumb).toHaveTextContent("House Details");
});