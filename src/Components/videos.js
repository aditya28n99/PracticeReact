import React from "react";

function Videos({title,channel,views,time,discription}) {

    return (
        <>
            <img className='thumnail' src='https://img.etimg.com/photo/msid-93619818/apple-laptops.jpg' />
            <div className='flx '>
                <div className='m'><img className='logo' src='https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/arrows-2889040_1920.jpg' /></div>
                <div>
                    <div className='title-name m'>{title}</div>
                    <div className='c m'>{channel}</div>
                    <div className='c m'>{views} views . <span>{time} ago</span></div>
                </div>
            </div>
            <p className='discription'>{discription}</p>
        </>
    )

}
export default Videos;