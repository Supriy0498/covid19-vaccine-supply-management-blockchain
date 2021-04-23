import React, { Component } from 'react';
import Chart from './Chart';
class Line extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }
  componentWillMount(){
    this.getChartData(); 
  }
  getChartData(){
    this.setState({
      chartData:{
        labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '1:00','2:00','3:00','4:00','5:00','6:00'],
        datasets:[
          {
            label:'Total',
            data:[378,5401,61479,208184,352456,415794,334326,32345],
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(255, 159, 64, 1)'],
          borderWidth: 1
          },
          {
            label:'Dose 1',
            data:[14,2959,32629,99831,151424,162012,123844,13213],
          backgroundColor: ['rgba(139, 253, 151, 0.9)'],
          borderColor: ['rgba(255, 99, 132, 1)'],
          borderWidth: 1 },
          {
          label:'Dose 2',
          data:[238,2442,28850,108353,201032,253782,210482,6321],
          backgroundColor: ['rgba(139, 210, 253, 0.2)'],
          borderColor: ['rgba(139, 210, 253, 1)'],
          borderWidth: 2},],}
    });
  }
  render() {
    return (
      <div className="Line">
        <div className="map-header">      
        <h2 style={{marginLeft:'700px'}}>Today's Vaccine Registeration</h2>  
        </div>
        <Chart chartData={this.state.chartData}  legendPosition="bottom"/>
      </div>
    );
  }
}
export default Line;
