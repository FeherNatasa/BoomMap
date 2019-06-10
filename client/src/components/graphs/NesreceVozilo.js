import React, {PureComponent} from 'react';
import axios from 'axios';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


var data = [
];

export default class NesreceVozilo extends PureComponent {

    state = {
        datag: [],
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/graph/27').then(res => {
            this.setState({datag: res.data});
            console.log(res.data);
            for(var key in this.state) {
                data.push(this.state[key]);
            }
        });
    }

    render() {
        return (
            <BarChart
                width={500}
                height={300}
                data={this.state.datag.podatki}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="vozilo" interval={0} fontSize={11}/>
                <YAxis domain={[0, 70000]}/>
                <Tooltip/>
                <Legend/>
                <Bar layout="horizontal" dataKey="nesrece" fill="#008080" fillOpacity="0.7" label={{ fill: 'black', fontSize: 10 }}/>
            </BarChart>
        );
    }
}