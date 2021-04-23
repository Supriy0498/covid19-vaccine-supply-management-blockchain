import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';
//import '../App.css';
class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }
  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
  }
  render(){
    return (
      <div className="chart" style={{backgroundColor:'white'}}>
        <Line
          data={this.state.chartData}
          options={{
            legend:{
            display:this.props.displayLegend,
            position:this.props.legendPosition
          },
          scales: {
            xAxes: [{
                gridLines: {
                    display:false
                }
            }],
            yAxes: [{
                gridLines: {
                    display:false
                }   
            }]
        }
        }}    
        />
      </div>
    )
  }
}
export default Chart;
