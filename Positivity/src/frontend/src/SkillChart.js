import React, { useState, useEffect } from "react";
import Chart from 'react-google-charts';
import {InMemoryCache} from "apollo-cache-inmemory";
import {HttpLink} from "apollo-link-http";
import {ApolloClient} from "apollo-client";
import gql from "graphql-tag";


const SkillChart = () => {

    const [hoursData, setData] = useState([]);
    const [dataToChart, setDataToChart] = useState([]);

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
    });


    var Lista = [["miko", "Lenght"], ["Miko", 10]]



useEffect(() => {
    var dataArray = [];
    var chartDataArray = [];
        chartDataArray.push(["People", "Lenght"])
        const supaData = hoursData.map(hours => {
            dataArray = [hours.name, hours.id]
            chartDataArray.push(dataArray)
            setDataToChart(chartDataArray)
        })



})

    const givemeStuff = () => {
        console.log(dataToChart, "Data to chart")
        console.log(Lista)
    }


 return (
<div>
    <Chart
        width={'500px'}
        height={'300px'}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={dataToChart}
        options={{
            title: 'Hours spent on',
            width: 600,
            height: 400,
            bar: { groupWidth: '95%' },
            legend: { position: 'none' },
        }}
        // For tests
        rootProps={{ 'data-testid': '6' }}
    />
    <h1 onClick={givemeStuff}>Jee jee</h1>
</div>

    )

}

export default SkillChart