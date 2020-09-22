import React, { Component } from 'react';
import { connect } from "react-redux";

import Header from 'parts/Header';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';
import Categories from 'parts/Categories';
import Testimoni from 'parts/Testimoni';
import Footer from 'parts/Footer';

import { fetchPage } from "store/actions/page"
class LandingPage extends Component {
    constructor(props){
        super(props);
        this.refMostPicked = React.createRef();
    }
        componentDidMount() {
            window.title = "Staycation | Home"
            window.scrollTo(0, 0);

            if(!this.props.page.landingPage)
            this.props.fetchPage('https://admin-mern-staycation.herokuapp.com/api/v1/member/landing-page', 'landingPage');
        }
    render() {

        const { page } = this.props;

        console.log(page);
        if(!page.hasOwnProperty("landingPage")) return "Tidak ada";

        return (
            
            <>
                 <Header {...this.props}></Header>
                 <Hero refMostPicked={this.refMostPicked} data={page.hero}/>
                 <MostPicked refMostPicked={this.refMostPicked} data={page.mostPicked}/>
                 <Categories data={page.categories}/>
                 <Testimoni data={page.testimonial} />
                 <Footer />
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    page : state.page,
})

export default connect(mapStateToProps, {
    fetchPage
})(LandingPage)
