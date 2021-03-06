import React from 'react';
import Button from 'elements/button';
import Fade from 'react-reveal/Fade';

export default function Category({ data }) {
    return data.map( (categories, index1) => {
        if(categories.itemId.length === 0) return null;
        return <section className="container" key={`categories-${index1}`}>
            <Fade bottom>
                <h4 className="mb-3 font-weight-medium">
                    {categories.title}
                </h4>
                <div className="container-grid">
                    {
                    categories.itemId.length === 0 ? 
                    <div className="row">
                        <div className="col-auto align-items-center">
                            There is no property at this categories
                        </div>
                    </div>  : ( categories.itemId.map( (item, index2) =>{
                    return (<div className="item column-3 row-1" key={`categories-${index1}-item-${index2}`}>
                            <Fade bottom delay={300 * index2}>
                                <div className="card">
                                    {item.isPopular && (
                                    <div className="tag"> 
                                        Popular{" "} <span className="font-weight-light">Choice</span>
                                    </div>
                                    )}
                                    <figure className="img-wrapper" style={{height: 180}}>
                                        <img src={
                                            item.imageId[0] ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`: ""
                                            } className="img-cover" alt={item.title}/>
                                    </figure>
                                    <div className="meta-wrapper">
                                        <Button className="stretched-link d-block text-gray-800" type="link" href={`/properties/${item._id}`}>
                                            <h5 className="h4">
                                                {item.title}
                                            </h5>
                                        </Button>
                                        <span className="text-gray-500">
                                            {item.city},{item.country}
                                        </span>
                                    </div>
                                </div>
                                </Fade>
                            </div>
                            );
                        })

                    )}
                </div>
                </Fade>
            </section>
    })
}
