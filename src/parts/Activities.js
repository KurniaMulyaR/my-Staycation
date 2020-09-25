import React from 'react';
import Button from 'elements/button';
import Fade from 'react-reveal/Fade';

export default function Activities({ data }) {
        if(data.length === 0) return null;
        return(
             <section className="container">
            <Fade bottom>
                <h4 className="mb-3 font-weight-medium">
                    Activities
                </h4>
                <div className="container-grid">
                    { data.map( (item, index2) =>{
                    return (<div className="item column-3 row-1" key={`categories-item-${index2}`}>
                            <Fade bottom delay={300 * index2}>
                                <div className="card">
                                    {item.isPopular && (
                                    <div className="tag"> 
                                        Popular{" "} <span className="font-weight-light">Choice</span>
                                    </div>
                                    )}
                                    <figure className="img-wrapper" style={{height: 180}}>
                                        <img src={
                                            item.imageUrl ? `${process.env.REACT_APP_HOST}/${item.imageUrl}`: ""
                                            } className="img-cover" alt={item.name}/>
                                    </figure>
                                    <div className="meta-wrapper">
                                        <Button className="stretched-link d-block text-gray-800" type="link" href={`/properties/${item._id}`}>
                                            <h5 className="h4">
                                                {item.name}
                                            </h5>
                                        </Button>
                                        <span className="text-gray-500">
                                            {item.type}
                                        </span>
                                    </div>
                                </div>
                                </Fade>
                            </div>
                            );
                        })

                    }
                </div>
                </Fade>
            </section>
    )
}
