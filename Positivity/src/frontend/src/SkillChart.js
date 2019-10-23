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

    var dataArray = [];
    var chartDataArray = [];
    chartDataArray.push(["People", "Lenght"])

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
  positivitydbschema_developedskill(where: {personid: {_eq: 1}}) {
    hours
    skill {
      name
      id
    }
  }
}
    `
                })
                .then(result => result.data.positivitydbschema_developedskill.map(hours => {
                    dataArray = [hours.skill.name, hours.hours]
                    chartDataArray.push(dataArray)
                    setDataToChart(chartDataArray)
                }))

        } catch (e) {
            console.log(e)

        }




    }, []);




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
    <h1>Jee jee</h1>
</div>

    )

}

export default SkillChart