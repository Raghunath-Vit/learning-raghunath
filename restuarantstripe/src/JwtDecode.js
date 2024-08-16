import { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode'; 
import axios from 'axios';

const JwtDecode = () => {
    const [decodedToken, setDecodedToken] = useState(null);
    const [userDetail, setUserDetail] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const response = await axios.post('http://localhost:1337/api/auth/local', {
                    username: 'RaghunathSinghji',
                    password: 'Singh1234567',
                    identifier: 'raghunath@gmail.com'
                });

                console.log(response);

                const token = response.data.jwt;
                const decoded = jwtDecode(token);
                const user = response.data.user;

                
                setDecodedToken(decoded);
                setUserDetail(user);
            } catch (error) {
                console.error('Error during login:', error);
                setError('Failed to fetch or decode the token.');
            }
        };

        fetchToken();
    }, []);

    return (
        <div>
            <h1>Decoded Token Values</h1>
            {error && <p>{error}</p>}
            {decodedToken && userDetail ? (
                <div>
                    <h2>User Details</h2>
                    <p><strong>Username:</strong> {userDetail.username}</p>
                    <p><strong>Email:</strong> {userDetail.email}</p>

                    {Object.entries(userDetail).map(([key, value], index) => (
                        <p key={index}><strong>{key}:</strong> {value}</p>
                    ))}

                    <h2>Token Details</h2>
                    <p><strong>Token ID:</strong> {decodedToken.id}</p>
                    <p><strong>Issued At:</strong> {new Date(decodedToken.iat * 1000).toLocaleString()}</p>
                    <p><strong>Expiration:</strong> {new Date(decodedToken.exp * 1000).toLocaleString()}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default JwtDecode;
