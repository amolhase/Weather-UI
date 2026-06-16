import "../style/WeatherForm.css";

export const WeatherForm = ({
    weather,
    handleChange,
    addWeather,
    errors,
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
                    {errors.city && <span className="error-msg">{errors.city}</span>}
                </div>

                <div className="form-group">
                    <label>Condition</label>
                    <input
                        type="text"
                        name="condition"
                        value={weather.condition}
                        onChange={handleChange}
                    />
                    {errors.condition && <span className="error-msg">{errors.condition}</span>}
                </div>

                <div className="form-group">
                    <label>Temperature</label>
                    <input
                        type="number"
                        name="temperature"
                        value={weather.temperature}
                        onChange={handleChange}
                    />
                    {errors.temperature && <span className="error-msg">{errors.temperature}</span>}
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