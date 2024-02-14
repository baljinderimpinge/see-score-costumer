import React, { Component, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { API_BASE_URL } from "../../lib/constant";
import axios from "axios";

const ApexChart = ({ getLastUpdate }) => {
    const [chartData, setChartData] = useState();
    const [apexData, setApexData] = useState();
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        getChartData();
    }, []);

    const getChartData = async () => {
        const getEmail = localStorage.getItem("email");
        const payload = {
            email: getEmail,
        };
        const data = await axios.post(
            `${API_BASE_URL}/user/graphdata`,
            payload
        );
        console.log(data.data.data, "chart data");

        // setChartData({
        //     // series: [{
        //     //     name: "STOCK ABC",
        //     //     data: data?.data?.data
        //     // }],
        //     series: [{
        //         name: 'series-1',
        //         data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        //       }],
        //     options: {
        //         chart: {
        //             type: 'area',
        //             height: 350,
        //             zoom: {
        //                 enabled: false
        //             }
        //         },
        //         dataLabels: {
        //             enabled: false
        //         },
        //         stroke: {
        //             curve: 'straight'
        //         },

        //         title: {
        //             text: 'Fundamental Analysis of Stocks',
        //             align: 'left'
        //         },
        //         subtitle: {
        //             text: 'Price Movements',
        //             align: 'left'
        //         },
        //         labels: "chart",
        //         xaxis: {
        //             type: 'text',
        //         },
        //         yaxis: {
        //             opposite: true
        //         },
        //         legend: {
        //             horizontalAlign: 'left'
        //         }
        //     },
        // }

        // )
        setChartData({
            options: {
                chart: {
                    id: "apexchart-example",
                    toolbar: {
                        show: false,
                    },
                    zoom: {
                        enabled: false,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                xaxis: {
                    labels: {
                        show: false,
                    },
                },
                yaxis: {
                    labels: {
                        show: false,
                    },
                },
                grid: {
                    show: false,
                },

                markers: {
                    size: 0, // Disables markers for all points
                    discrete: [
                        {
                            seriesIndex: 0,
                            dataPointIndex: data?.data?.data.length - 1, // Adjust this index as needed for your data
                            fillColor: "#0000ff",
                            strokeColor: "#fff",
                            size: 10, // Customize the marker size and appearance as needed
                        },
                    ],
                },
            },

            series: [
                {
                    name: "Score",
                    data: data?.data?.data,
                },
            ],
        });
        getLastUpdate(data?.data?.last_update);
        console.log("data");
        setLoader(true);
    };

    return (
        <div>
            {loader ? (
                <>
                    <div id="chart">
                        <Chart
                            options={chartData?.options}
                            series={chartData?.series}
                            type="area"
                            height={150}
                        />
                    </div>
                    <div id="html-dist"></div>
                </>
            ) : (
                <p>loading</p>
            )}
        </div>
    );
};

export default ApexChart;