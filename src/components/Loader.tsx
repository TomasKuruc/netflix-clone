import React from 'react';

interface Props {}

const Loader = (props: Props) => {
    return (
        <div className="Loader">
            <div className="Loader__wrap">
                <div className="loader"> </div>
            </div>
        </div>
    );
};

export default Loader;