import React from "react";

const Card = (props) => {
    return (
        <div className="rounded-xl bg-white shadow-xl">{props.children}</div>
    );
};

export default Card;
