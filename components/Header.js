import React, { useEffect, useState } from "react";

const Header = () => {
    let listener = null;
    const [scrollState, setScrollState] = useState("top");

    useEffect(() => {
        listener = document.addEventListener("scroll", (e) => {
            var scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 50) {
                if (scrollState !== "bottom") {
                    setScrollState("bottom");
                }
            } else {
                if (scrollState !== "top") {
                    setScrollState("top");
                }
            }
        });
        return () => {
            document.removeEventListener("scroll", listener);
        };
    }, [scrollState]);

    return (
        <div
            className={`${
                scrollState !== "top" ? "bg-white shadow-xl" : ""
            } fixed top-0 left-0 right-0`}
        >
            <div className="container">
                <div className="flex justify-between items-center my-5">
                    <div className="flex items-center">
                        <svg
                            width="30"
                            height="27"
                            viewBox="0 0 30 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-4"
                        >
                            <path
                                d="M29.4899 1.34249C29.3733 1.13919 29.2051 0.970253 29.0023 0.852743C28.7996 0.735234 28.5694 0.673309 28.335 0.673218L21.7075 0.668005L21.6976 0.666672L16.8396 0.668005C16.6257 0.668228 16.4151 0.719789 16.2253 0.818355C16.0355 0.91692 15.8722 1.05961 15.7491 1.23442L15.0043 2.29562L14.2517 1.23182C14.1287 1.05757 13.9658 0.915408 13.7764 0.81729C13.5871 0.719172 13.377 0.667974 13.1638 0.668005L8.30244 0.666672H8.30179L8.29984 0.666912L8.29788 0.666672H8.29072L1.65987 0.703125C1.42562 0.704295 1.19582 0.767165 0.993603 0.885401C0.791385 1.00364 0.62389 1.17307 0.507983 1.37663C0.392077 1.58019 0.331852 1.8107 0.333372 2.04495C0.334892 2.27919 0.398103 2.5089 0.516642 2.71094L13.876 25.5183C13.9937 25.7188 14.1618 25.8851 14.3636 26.0007C14.5654 26.1163 14.7939 26.1771 15.0264 26.1772H15.0277C15.2606 26.177 15.4894 26.1158 15.6914 25.9998C15.8933 25.8837 16.0613 25.7168 16.1788 25.5157L29.486 2.67848C29.6039 2.47573 29.6663 2.24552 29.667 2.01101C29.6676 1.77649 29.6066 1.54593 29.4899 1.34249ZM12.473 3.3347L13.9197 5.37898C14.0427 5.55329 14.2058 5.6955 14.3952 5.79361C14.5846 5.89173 14.7949 5.94289 15.0082 5.94278H15.0102C15.2238 5.94226 15.4341 5.89056 15.6236 5.79201C15.8132 5.69346 15.9763 5.55093 16.0994 5.37636L17.533 3.3347L19.3499 3.33336L15.0245 10.605L10.6579 3.33341L12.473 3.3347ZM15.0231 22.2006L3.98604 3.35684L7.54594 3.33731L13.8838 13.8946C14.0024 14.092 14.17 14.2552 14.3703 14.3686C14.5706 14.482 14.7969 14.5417 15.0271 14.5418H15.0296L15.031 14.5416L15.0323 14.5418H15.035C15.2657 14.5412 15.4923 14.4809 15.6927 14.3665C15.8931 14.2522 16.0604 14.0878 16.1782 13.8894L22.4555 3.33476L26.0149 3.33867L15.0231 22.2006Z"
                                fill="#3E2E83"
                            />
                        </svg>
                        <h2 className="font-bold text-lg md:text-xl text-purple-dark">
                            Logo Here
                        </h2>
                    </div>
                    <div>
                        <p className="text-purple-dark font-bold md:text-base text-sm">
                            Resourceful Indonesia
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
