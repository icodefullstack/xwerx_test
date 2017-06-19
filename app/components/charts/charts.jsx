var React = require('react');
import {Line} from 'react-chartjs-2';

import {Bar} from 'react-chartjs-2';

var Charts = React.createClass({

  render: function() {
        var chartData = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor:'rgba(105,163,229, 0.2)',
            pointBorderColor: 'rgba(255,255,229,1)',
            borderColor: 'rgba(105,163,229,1)'

        }]
    };
        var chartOptions =  {
                    legend: {
                      labels: {
                          // This more specific font property overrides the global property
                          fontColor: 'white'
                      }
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                              fontColor: "white",
                              beginAtZero:true

                            }
                        }],
                        xAxes: [{
                            ticks: {
                              fontColor: "white",
                              beginAtZero:true

                            }
                        }]
                    }
                };
                return(
                      <div className = "charts">
                        <div className = "col-md-12">CLIENTS</div>


                        <div className = "col-md-5">
                          <Line data={chartData} options={chartOptions} />
                          <p>
                          ACTIVE CLIENTS
                          </p>

                        </div>


                        <div className = "col-md-5">
                          <Bar data={chartData} options={chartOptions} />
                          <p>
                            LAST 12 MONTHS
                          </p>


                        </div>
                        <div className = "col-md-2">
                          <i className="fa fa-angle-double-up" aria-hidden="true"></i>
                          <span className = "increase">104</span>
                          <p>
                            INCREASE
                          </p>


                        </div>
                      </div>
                    );
    }

});
module.exports = Charts;
