import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFeatures, createCar } from '../services/CarsAPI.jsx';

const CreateCar = () => {
    const [features, setFeatures] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [carName, setCarName] = useState('');
    const [isConvertible, setIsConvertible] = useState(false); // 🔹 added
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFeatures = async () => {
            try {
                const data = await getFeatures();
                setFeatures(data);
                const initialSelections = {};
                data.forEach(feature => {
                    if (feature.options.length > 0) {
                        initialSelections[feature.id] = feature.options[0].id;
                    }
                });
                setSelectedOptions(initialSelections);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchFeatures();
    }, []);

    const handleOptionChange = (featureId, option) => {
        if (!isConvertible && option.name.toLowerCase().includes('convertible soft top')) {
            alert("Can't choose the Convertible Soft Top unless the car is convertible!");
            return;
        }

        setSelectedOptions(prev => ({
            ...prev,
            [featureId]: option.id
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!carName.trim()) {
            alert('Please give your car a name.');
            return;
        }

        const newCarData = {
            name: carName,
            optionIds: Object.values(selectedOptions),
            isConvertible // optional, send if backend supports it
        };

        try {
            await createCar(newCarData);
            navigate('/cars');
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <div className="loading-message">Loading customization options...</div>;
    if (error) return <div className="error-message">Error: {error}</div>;

    return (
        <div className="container">
            <div className="form-container">
                <h1>Create Your Custom Car</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>
                            Car Name:
                            <input
                                type="text"
                                value={carName}
                                onChange={(e) => setCarName(e.target.value)}
                                required
                            />
                        </label>
                    </div>

                    <div className="form-group">
                        <label className="option-label inline-checkbox">
                            <input
                                type="checkbox"
                                checked={isConvertible}
                                onChange={() => setIsConvertible(!isConvertible)}
                            />
                            Is Convertible?
                        </label>
                    </div>

                    {features.map(feature => (
                        <div key={feature.id} className="feature-section">
                            <h3>{feature.name}</h3>
                            <div className="options-grid">
                                {feature.options.map(option => {
                                    const isSelected = selectedOptions[feature.id] === option.id;
                                    return (
                                        <label
                                            key={option.id}
                                            className={`option-label ${isSelected ? 'checked' : ''}`}
                                        >
                                            <input
                                                type="radio"
                                                name={`feature-${feature.id}`}
                                                value={option.id}
                                                checked={isSelected}
                                                onChange={() => handleOptionChange(feature.id, option)}
                                            />
                                            <img
                                                src={option.image}
                                                alt={option.name}
                                                className="option-image"
                                            />
                                            <span className="option-name">{option.name}</span>
                                            <small className="option-price">(+${(option.price_in_cents / 100).toLocaleString()})</small>
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                    <div className="form-group" style={{ textAlign: 'right', marginTop: '1.5rem' }}>
                        <button type="submit" className="btn btn-primary">Save Car</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateCar;
