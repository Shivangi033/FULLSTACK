import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext.jsx";

function Profile() {
    const { user, setUser, theme, setTheme } = useContext(GlobalContext);

    const toggleUserAndTheme = () => {
        if (user === "Boy") {
            setUser("Girl");
            setTheme("dark purple");
        } else {
            setUser("Boy");
            setTheme("light blue");
        }
    };

    return (
        <div>
            <h2>User: {user}</h2>
            <button onClick={toggleUserAndTheme}>
                Change User & Theme
            </button>
        </div>
    );
}

export default Profile;
