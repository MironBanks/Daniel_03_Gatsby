import React from "react"
import RightArrow from "../../static/arrow-right.svg"




const Banner = () => (
    <>
        <section className="main">
            <div className="container">
                <div className="row">
                    <h2>
                        <div className="line">
                            <span>Creating unique video is</span>
                        </div>
                        <div className="line">
                            <span>what we do</span>
                        </div>
                    </h2>
                    <div className="btn-row">
                        <a href="/">
                            More about Us
                            <RightArrow />
                        </a>
                    </div>
                </div>
            </div>

        </section>
    </>
)

export default Banner