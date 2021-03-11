/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { notify } from "react-notify-toast";
import i18next from "i18next";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { endpoints } from "constants/endpoints";
import { axiosHeaders } from "constants/headers";
import ButtonWithIcon from "components/ButtonWithIcon";
import { UserContext } from "configs/UserContext";
import Header from "./components/Header";
import InfoForm from "./components/InfoForm";
import ProfilePicture from "./components/ProfilePicture";
import { IMG } from "./components/ProfilePicture/constants";

interface Props {
  lastInvoiceNumber: number;
  name: string;
  enterprise: string;
  email: string;
  ogPassword: string;
  newPassword: string;
  repeatPassword: string;
  logo: string;
}

function Profile() {
  const history = useHistory();
  const { id } = useContext(UserContext);
  const [state, setState] = useState<Partial<Props>>({
    lastInvoiceNumber: 0,
    name: "",
    enterprise: "",
    email: "",
    ogPassword: "",
    newPassword: "",
    repeatPassword: "",
    logo: IMG,
  });

  const handleLogoChange = (logo: string) => {
    setState({ ...state, logo });
  };

  const handleInfoChange = (data: { name?: string; email?: string }) => {
    setState({ ...state, ...data });
  };

  useEffect(() => {
    if (id) {
      axios
        .get(`${endpoints.backend}api/user/getUser/${id}`, axiosHeaders)
        .then(({ data }) => {
          setState(data.data);
        })
        .catch(() => notify.show(i18next.t("ProfilePage:getError"), "error"));
    }
  }, [id]);

  const sendData = () => {
    axios
      .put(
        `${endpoints.backend}api/user/editProfile/${id}`,
        state,
        axiosHeaders
      )
      .then((saveResponse) => {
        notify.show(i18next.t("ProfilePage:saveSuccess"), "success");
        history.push("/");
      });
  };

  const resetCounter = () => {
    if (confirm(i18next.t("ProfilePage:confirmResetCounter"))) {
      axios
        .put(
          `${endpoints.backend}api/user/resetInvoiceCounter/${id}`,
          state,
          axiosHeaders
        )
        .then((saveResponse) => {
          notify.show(i18next.t("ProfilePage:counterReseted"), "success");
        });
    }
  };

  return (
    <Container className="h-100-minus mt-5">
      <Row className="align-items-center">
        <Col>
          <Header
            username={state.name!}
            enterprise={state.enterprise}
            resetCounter={resetCounter}
          />
          <Row>
            <ProfilePicture
              handleLogoChange={handleLogoChange}
              currentLogo={state.logo!}
            />
            <InfoForm
              handleChange={handleInfoChange}
              currentData={{ name: state.name!, email: state.email! }}
            />
          </Row>
          <Row className="my-5">
            <Col className="w-100 text-center">
              <ButtonWithIcon
                onClick={sendData}
                label={i18next.t("ProfilePage:submit")}
                icon={faSave}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
