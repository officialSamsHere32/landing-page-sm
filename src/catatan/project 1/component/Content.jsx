import React from "react";

function Content() {
    return (
        <div className="absolute w-[1162px] h-[598px] top-[92px] left-[164px]">
            <div className="container mx-auto flex items-center justify-between">
                <div className="w-1/2">
                    <h1 className="text-4xl mb-8 font-semibold text-[#e75313d4]">Shop for adidas shoes, clothing and collections, adidas Originals, Running, Football!</h1>
                    <h2 className="text-5xl mb-8 font-extrabold text-[#d63d32d2]">Training and more on the official adidas Indonesia website.</h2>
                    <div className="text xl mb-10 font-normal text-black">BUY now.<br/>See Deals.<br/>See More.</div>
                    </div>
                <div className="w-1/2">
                    <img src="A_shoes.webp" alt="Shoes Image" />
                </div>
            </div>
        </div>
    );
}
export default Content;