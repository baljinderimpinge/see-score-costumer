import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { API_BASE_URL } from "../../lib/constant";
import axios from "axios";

const ApexChart = ({ getLastUpdate }) => {
    const [chartData, setChartData] = useState();
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

        setChartData({
            options: {
                colors:['#6ba364', '#E91E63', '#9C27B0'],
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
                        show: true,
                    },
                },
                grid: {
                    show: true,
                },

                markers: {
                    size: 0, // Disables markers for all points
                    discrete: [
                        {
                            seriesIndex: 0,
                            dataPointIndex: data?.data?.data.length - 1, // Adjust this index as needed for your data
                            fillColor: "#6ba364",
                            strokeColor: "#6ba364",
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
