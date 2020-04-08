import React from "react";

const TriCol=()=>{
    return(
        <section className={'triCol'}>
            <div className={`col`}>
                <h1>10</h1>
                <h3>Oddanych worków</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className={`col`}>
                <h1>5</h1>
                <h3>Wspartych organizacji</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className={`col`}>
                <h1>7</h1>
                <h3>Zorganizowanych zbiórek</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
        </section>
    )
};

export default TriCol;