import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label
} from 'recharts';

import axios from 'axios';

var data = [
];


export default class NesreceTip extends PureComponent {

    state = {
        datac: [],
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/graph/30').then(res => {
            this.setState({datac: res.data});
            for(var key in this.state) {
                data.push(this.state[key]);
            }
        });
    }

    render() {
        return (
            <BarChart
                width={1200}
                height={300}
                data={this.state.datac.podatki}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="tip" interval={0} fontSize={8}/>
                <YAxis/>
                <Tooltip />
                <Legend />
                <Bar dataKey="nesrece" fill="#52bf90" label={{ fill: 'white', fontSize: 12 }}/>
            </BarChart>
        );
    }
}