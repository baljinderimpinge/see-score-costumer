import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../lib/constant';
import { useNavigate } from 'react-router-dom';

const MicrosoftLoing = () => {
    const [tenantId, setTenantId] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateInput = () => {
        // Implement your validation criteria here
        if (!tenantId.trim()) {
            setError('Please enter a valid azure tenant id or domain');
            return false;
        }
        return true;
    };
    const getScore = async () => {
        if (validateInput()) {
            navigate(`/Dashboard/${tenantId}`);
        }
    };
    return (
        <div className="login-box">
            <label style={{ color: "#fff", fontSize: "16px" }}>Please enter your azure tenant id or domain</label>
            <input style={{ width: "75%" }}
                placeholder='Please enter your azure tenant id / domain'
                value={tenantId}
                onChange={(e) => {
                    setTenantId(e.target.value);
                    setError(''); // Clear error message when input changes
                }}
            />
            {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
            <button disabled={tenantId ? false : true} onClick={getScore} className="btn btn-primary">
                Submit
            </button>
        </div>
    );
};

export default MicrosoftLoing;
