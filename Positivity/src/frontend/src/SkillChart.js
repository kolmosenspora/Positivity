import React from 'react'
import Chart from 'react-google-charts';

const SkillChart = () => {

    return (
    <Chart
        width={'500px'}
        height={'300px'}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={[
            [
                'Element',
                'Density',
                { role: 'style' },
                {
                    sourceColumn: 0,
                    role: 'annotation',
                    type: 'string',
                    calc: 'stringify',
                },
            ],
            ['Copper 8,94', 8.94, '#b87333', null],
        ]}
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

    )

}

export default SkillChart