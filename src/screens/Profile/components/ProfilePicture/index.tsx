import i18next from "i18next";
import React, { useEffect, useState } from "react";
import { Col, Image } from "react-bootstrap";

interface Props {
  handleLogoChange: (arg0: string) => void;
  currentLogo: string;
}

function ProfilePicture({ handleLogoChange, currentLogo }: Props) {
  const [img, setImg] = useState("");

  const toBase64: any = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const setNewProfile = async (newImg: File) => {
    const CONVERTED = await toBase64(newImg);

    setImg(CONVERTED);
    handleLogoChange(CONVERTED);
  };

  useEffect(() => {
    setImg(currentLogo);
  }, [currentLogo]);

  return (
    <Col className="bg-white rounded shadow p-5 d-flex flex-column align-items-center">
      <Image src={img} roundedCircle height="200" width="200" />
      <p className="lead mt-3 mb-0">{i18next.t("ProfilePage:logoTitle")}</p>
      <small>{i18next.t("ProfilePage:logoDescription")}</small>
      <div className="form-group">
        <input
          type="file"
          className="form-control-file mt-3"
          accept="image/png, image/jpeg"
          onChange={(e) => setNewProfile(e.target.files![0])}
        />
      </div>
    </Col>
  );
}

export default ProfilePicture;
