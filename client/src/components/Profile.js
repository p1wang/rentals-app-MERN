import React, { useState } from "react";
import { Button, Image, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";

import UpdateUserForm from "./Forms/UpdateUserForm";
import defaultPfp from "../assets/images/blank-pfp.png";

const Profile = () => {
  const [showEditUserForm, setShowEditUserForm] = useState(false);
  const { user } = useSelector((state) => state.users);
  const [target, setTarget] = useState("");

  const handleUpdate = (field) => {
    setShowEditUserForm(true);
    setTarget(field);
  };

  return (
    <Stack gap={2}>
      <UpdateUserForm
        showEditUserForm={showEditUserForm}
        setShowEditUserForm={setShowEditUserForm}
        target={target}
      />

      <div>
        <Image
          src={user?.result?.profilePic ? user?.result?.profilePic : defaultPfp}
          width="60px"
          height="60px"
          alt="profile pic"
          className="mb-4"
          style={{ cursor: "pointer", borderRadius: "50%", objectFit: "cover" }}
          onClick={() => handleUpdate("profilePic")}
        />
        <p className="fw-light">{user?.result.email}</p>
      </div>

      <div
        className="d-flex align-items-center justify-content-between"
        style={{ width: "200px" }}
      >
        <span>
          <h6>Name</h6>
          <p className="fw-light">{user?.result.name}</p>
        </span>

        <Button onClick={() => handleUpdate("name")}>Update</Button>
      </div>

      <div
        className="d-flex align-items-center justify-content-between"
        style={{ width: "200px" }}
      >
        <span>
          <h6>Password</h6>
          <p className="fw-light"> ..............</p>
        </span>

        <Button onClick={() => handleUpdate("password")}>Update</Button>
      </div>
    </Stack>
  );
};

export default Profile;
