import React, { useState, useEffect } from "react";
import axios from "axios";
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from "graphql-tag";

const Messagelist = () => {

    const [data, setData] = useState([]);

    const cache = new InMemoryCache();
    const link = new HttpLink({
        uri: 'http://localhost:8080/v1/graphql'
    });

    const client = new ApolloClient({
        cache,
        link
    });

    useEffect(() => {
            try {
                client
                    .query({
                        query: gql`
{
  positivitydbschema_person {
    name
    id
  }
}
    `
                    })
                    .then(result => setData(result.data.positivitydbschema_person));

            } catch (e) {
                console.log(e)

            }
    })


const logita = () => {
        console.log(data)
}

    return (
        <div>

            <ul>
                {data.map(ihminen => {
                return (
                <li
                key={ihminen.id}
                >
                <h1>{ihminen.name}</h1>
                </li>
                );
            })}
            </ul>
        </div>
    );
};

export default Messagelist;