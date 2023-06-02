import React from 'react'

const HeadingMain = ({ content }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className='main-heading-text'>{content}</h1>
                </div>
            </div>
        </div>
    )
}

export default HeadingMain