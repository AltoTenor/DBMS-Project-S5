import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth/authProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Logout = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken();
    navigate("/login", { replace: true });
  };

  setTimeout(() => {
    handleLogout();
  }, 1 * 1000);

  return (
    <div className="logout-simple" style={{
        display:'flex',justifyContent:'center',alignItems:'center',height:"100vh"
    }}>
        <FontAwesomeIcon icon={faSpinner} spinPulse size='2xl' style={{marginRight:"10px"}}/>Loading...
    </div>
  );
};

export default Logout;