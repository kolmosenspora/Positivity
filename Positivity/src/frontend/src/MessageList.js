import React, { useState, useEffect } from "react";
import axios from "axios";

const Messagelist = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/messages/all")
            .then(result => setData(result.data));
    }, []);

    console.log(data)
    return (
        <div>

            <ul>
                {data.map(message => {
                    return (
                        <li
                        key={message.id}
                        >
                        <h1>{message.message}</h1>
                        </li>
                    )
                })}
                <li>

                </li>
            </ul>
        </div>
    );
};

export default Messagelist;