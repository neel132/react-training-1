import { useLocation, useMatches, useParams } from "react-router-dom";

const Profile = () => {
  const matches = useMatches();
  const {id} = useParams();
  const location = useLocation();
  console.log("Matches -", matches); 
  console.log("Param id -", matches[0].params.id); // It will provide dynamic value from route

  console.log("Location - ", location.search); // It will be providing query params and followed by key value pair
  return (
    <>
    <h3>Profile Screen id - {id}</h3>
    <h3>Token - {location.search}</h3>
    </>
  )
};

export default Profile;