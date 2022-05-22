import { useEffect, useState } from "react";
import { fetchProfile } from "../api";

export default function Profile ({ token, username }) {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const loadProfile = async ()=> {
      const profile = await fetchProfile(token);
      setProfiles(profile)
    };
    loadProfile();
  }, [])
  console.log(profiles)

  return (
    <>
      <h1>Welcome {username}!</h1>
      {profiles.map((profile) =>{
        return (
          <div key={profile._id}>
            <h3>Sent message about {profile.post.title}</h3>
            <h5>{profile.content}</h5>
          </div>
        )
      } )}
    </>
  )

}