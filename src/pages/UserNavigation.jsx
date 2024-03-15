import { useNavigate } from 'react-router-dom';
function NavigationButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return <button onClick={handleClick}>Go to Home Page</button>;
}
export default NavigationButton;