import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import i18next from "i18next";
import Axios from "axios";
import { notify } from "react-notify-toast";
import LoadingScreen from "components/LoadingScreen";
import { endpoints } from "constants/endpoints";

function Confirmation() {
  const history = useHistory();
  const { token } = useParams<{ token: string }>();

  useEffect(() => {
    Axios.post(`${endpoints.backend}api/user/confirm`, { token })
      .then(({ data }) => {
        if (data.success) {
          notify.show(i18next.t("Confirm:success"), "success");
          history.push("/login");
        } else {
          notify.show(i18next.t("Confirm:error"), "error");
          history.push("/confirmError/invalid");
        }
      })
      .catch(() => {
        notify.show(i18next.t("Confirm:error"), "error");
        history.push("/confirmError/invalid");
      });
  }, [token, history]);

  return <LoadingScreen text={i18next.t("Confirm:text")} />;
}

export default Confirmation;
