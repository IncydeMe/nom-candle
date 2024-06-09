"use client";

import { useEffect } from "react";
import EditProfile from "./edit-profile/page";
import { useRouter } from "next/navigation";

function UserProfile() {
  const router = useRouter();
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
