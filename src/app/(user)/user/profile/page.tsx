"use client";

import { useEffect } from "react";
import EditProfile from "./edit-profile/page";
import { useRouter } from "next/navigation";

function UserProfile() {
  const router = useRouter();
  //For localStorage
  if ( typeof localStorage === 'undefined' || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }
  useEffect(() => {
    const accessToken = localStorage.getItem("access-token");
    if (!accessToken) {
      router.push("/login");
    }
  });
  return (
    <div>
      <EditProfile />
    </div>
  );
}

export default UserProfile;
