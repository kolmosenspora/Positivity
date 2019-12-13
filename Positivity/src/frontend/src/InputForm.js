import React, {useEffect, useState} from 'react'
import useForm from 'react-hook-form'
import {InMemoryCache} from "apollo-cache-inmemory";
import {HttpLink} from "apollo-link-http";
import {ApolloClient} from "apollo-client";
import gql from "graphql-tag";
import Select from "react-select";

const InputForm = initialState =>  {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data)
    const [dropdowndata, setDropDownData] = useState();
    const [selected, setselected] = useState();
    const [selectedNumber, setselectedNumber] = useState();


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
  skill {
    name
    id
  }
}
    `
                })
                .then(result => setDropDownData(result.data.skill.map(skills => ({
                    value: skills.id,
                    label: skills.name
                }))))


        } catch (e) {
            console.log(e)

        }
    }, [])


    const makeGraphqlQueryToInsertDevelopedSkill = () => {

        client
            .mutate({
                mutation: gql`
mutation {
  insert_developedskill(objects: {hours: ${selectedNumber}, skillid: ${selected}, personid: 1}) {
    affected_rows
  }
}`

            }).then(result => console.log(result, "Resulttina oli tämä"))}



    return (
        <form onSubmit={makeGraphqlQueryToInsertDevelopedSkill}>
            <Select name="DropDownSelect" ref={register({ required: true, maxlength: 20 })} options={dropdowndata}
                    values={[]}
                    onChange={(value) => setselected(value.value)}
                    />
            <input name="hours" type="number" ref={register({ min: 0, max: 100 })}
                   onChange={(event) => setselectedNumber(event.target.value)}/>
            <input type="submit" />
        </form>
    );
}

export default InputForm