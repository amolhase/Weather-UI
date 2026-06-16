import "../style/WeatherForm.css";

export const WeatherForm = ({
    weather,
    handleChange,
    addWeather,
    closeModal
}) => {

    return (
        <div className="modal-overlay">
            <div className="modal">

                <h2>Add Weather</h2>

                <div className="form-group">
                    <label>City</label>
                    <input
                        type="text"
                        name="city"
                        value={weather.city}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Condition</label>
                    <input
                        type="text"
                        name="condition"
                        value={weather.condition}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Temperature</label>
                    <input
                        type="number"
                        name="temperature"
                        value={weather.temperature}
                        onChange={handleChange}
                    />
                </div>

                <div className="modal-buttons">
                    <button
                        className="save-btn"
                        onClick={addWeather}
                    >
                        Add
                    </button>

                    <button
                        className="cancel-btn"
                        onClick={closeModal}
                    >
                        Cancel
                    </button>
                </div>

            </div>
        </div>
    );
};