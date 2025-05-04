import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://img.freepik.com/free-photo/hey-come-hug-me-friend-charming-playful-emotional-redhead-female-extanding-palms-forward_1258-136115.jpg?ga=GA1.1.659211927.1744885202&semt=ais_hybrid&w=740" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://img.freepik.com/free-photo/excited-lively-goodlooking-redhead-ecstatic-girl-smiling-fascinated-amused-showing-big-large-obj_1258-143235.jpg?ga=GA1.1.659211927.1744885202&semt=ais_hybrid&w=740" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://img.freepik.com/free-photo/girl-asking-come-here-give-cheerup-hug-cute-touched-tender-redhead-woman-yellow-sweater-extend-armsstretch-hands-forward-cuddle-embrace-friend-smiling-lovely-orange-background_1258-309920.jpg?ga=GA1.1.659211927.1744885202&semt=ais_hybrid&w=740" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://img.freepik.com/free-photo/tender-romantic-dreamy-redhead-woman-winter-hat-sweater-embrace-big-cute-red-heart-sign-as-sy_1258-143225.jpg?ga=GA1.1.659211927.1744885202&semt=ais_hybrid&w=740" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;