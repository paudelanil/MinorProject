import React from 'react';

function Login() {
    return (
        <div className="App">
            <header className="App-header">
                <a className="btn-spotify" href="http://127.0.0.1:8000/auth/token" >
                    Login with Spotify 
                </a>
            </header>
        </div>
    );
}

export default Login;
