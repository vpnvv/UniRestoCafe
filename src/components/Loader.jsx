import React from 'react';

const Loader = () => {
    return (
        <>
            <div className="text-center mt-10">
                <div className="animate-spin inline-block size-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Loader;

