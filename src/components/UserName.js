import React from "react";

const UserName = ({ greet, userId }) => {
    return <span>{greet}, {userId}!</span>;
};

export default UserName;