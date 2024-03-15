import { useLocation } from "react-router-dom";
function CurrentPath() {
  const location = useLocation();
  return <h2>Current Path: {location.pathname}</h2>;
}
export default CurrentPath;
