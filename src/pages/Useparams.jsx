import { useParams } from "react-router-dom";
function UserProfile() {
  const { Id } = useParams();
  return (
    <div>
      Welcome,
      <h1> {Id}! this is my dynamic route</h1>
    </div>
  );
}
export default UserProfile;
