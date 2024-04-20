import React from 'react';
import cvPdf from '../photos/mikiyasKorecv.pdf';

const CV = () => {
    return (
        <div className="container" id='cv'>
            <h1 className="mt-5 mb-4 text-center">My CV</h1>
            <div className="text-center">
                <a href={cvPdf} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View CV</a>
            </div>
        </div>
    );
};

export default CV;
