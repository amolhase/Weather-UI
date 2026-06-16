import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import '../style/DashBoard.css';
import { WeatherForm } from "./WeatherForm";

export const DashBoard = () => {

    const [weatherRecords, setWeatherRecords] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const [weather, setWeather] = useState({
        city: "",
        condition: "",
        temperature: ""
    });

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

    const handleChange = (e) => {
        const { name, value } = e.target;

        setWeather(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const addWeather = () => {

        axios.post(
            "http://localhost:8080/weather",
            weather,
            {
                headers: {
                    "X-API-KEY": "api-key"
                }
            })
            .then(response => {
                setWeatherRecords(prev => [
                    ...prev,
                    response.data
                ]);

                setShowModal(false);

                setWeather({
                    city: "",
                    condition: "",
                    temperature: ""
                });

            })
            .catch(error => {
                console.error(error);
            });
    };

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
                    <div className="table-header">
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Search by city..."
                                className="search-input"
                            />
                            <button className="search-btn">Search</button>
                        </div>

                        <div className="action-buttons">
                            <button className="update-btn">Update</button>
                            <button className="add-btn" onClick={() => setShowModal(true)}>Add Weather</button>
                        </div>
                    </div>

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
            {
                showModal && (
                    <WeatherForm
                        weather={weather}
                        handleChange={handleChange}
                        addWeather={addWeather}
                        closeModal={() => setShowModal(false)}
                    />
                )
            }
        </>

    );
}