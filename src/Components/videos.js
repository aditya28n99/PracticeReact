import React from "react";

function Videos({title,thumnail,logo,channel,views,time,discription}) {

    return (
        <>

        <div className="vidContainer">
            <img className='thumnail' src={thumnail} alt="thumnail" />
            <div className='flx '>
                <div className='m'><img className='logo' src={logo} alt="logo" /></div>
                <div className="titleContainer">
                    <div className='title-name m'>{title}</div>
                    <div className='c m'>{channel}</div>
                    <div className='c m'>{views} views . <span>{time} ago</span></div>
                </div>
            </div>
            <p className='discription'>{discription}</p>
        </div>
        </>
    )

}
export default Videos;