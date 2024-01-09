import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        return (
            <div>
                <button 
                    className="btn btn-primary mx-5 my-5 px-4 logoutBtn"
                    onClick={() => {
                        logout({ returnTo: window.location.origin });
                        localStorage.clear("token");
                    }}
                >
                    Log Out
                </button>
                <br />
            </div>
        );
    }

    // If not authenticated, you might want to return null or some other UI.
    return null;
};

export default LogoutButton;
