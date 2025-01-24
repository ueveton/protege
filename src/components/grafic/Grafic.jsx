import React from 'react'
import { Chart } from 'react-google-charts'
import './Grafic.css'

export const Grafic = (props) => {

    const options = {
        legend: {position: 'name'}
    }

    return (
        <div>
            <h3 className='title'>{props.title}</h3>
            <Chart
                chartType={props.chartType}
                data={props.data}
                width='100%'
                height='175px'
                options={options}
                legendToggle
            />
        </div>
    )
}
