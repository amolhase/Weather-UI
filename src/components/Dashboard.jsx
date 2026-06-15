import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import '../style/DashBoard.css';

export const DashBoard = () => {

    const [weatherRecords, setWeatherRecords] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/weather", {
            headers: {
                "X-API-KEY": "api-key"
            }
        })
            .then((response) => {
                console.log("res -> ", response.data);
                setWeatherRecords(response.data)
            })
            .catch((error) => {
                console.log("Status:", error.response?.status);
                console.log("Data:", error.response?.data);
                console.log("Headers:", error.response?.headers);
            })
    }, []);

    return (
        <>
            <div className="dashboard-container">
                <div className="left-panel">
                    <h3>Menu</h3>
                    <ul>
                        <li>Dashboard</li>
                        <li>Weather</li>
                        <li>Reports</li>
                    </ul>
                </div>

                <div className="right-panel">
                    <h2>Weather Records</h2>

                    <table border="1">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>City</th>
                                <th>Condition</th>
                                <th>Temperature</th>
                            </tr>
                        </thead>
                        <tbody>
                            {weatherRecords.map((record) => (
                                <tr key={record.id}>
                                    <td>{record.id}</td>
                                    <td>{record.city}</td>
                                    <td>{record.condition}</td>
                                    <td>{record.temperature}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    );
}