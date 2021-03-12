import i18next from "i18next";

i18next.addResources("es", "ProfilePage", {
  resetCounter: "Reiniciar contador",
  confirmResetCounter: "¿Estás seguro de reiniciar el contador?",
  logoTitle: "Logo empresarial",
  logoDescription:
    "Esta es la imágen que se imprimirá automáticamente en todos los comprobantes",
  change: "Cambiar",
  name: "Nombre",
  email: "Dirección de correo",
  submit: "Guardar cambios",
  getError: "Ocurrió un error trayendo sus datos, por favor reintente",
  saveSuccess: "Los datos se guardaron correctamente",
  counterReseted: "Contador reiniciado",
  emailConfirmationAlert:
    "Al cambiar el email, deberá confirmar la nueva dirección.",
  confirmEmailChange:
    "Al cambiar el email, será deslogueado y deberá confirmar el nuevo email para poder volver a ingresar. ¿Seguro que desea continar?",
});

i18next.addResources("en", "ProfilePage", {
  resetCounter: "Reset counter",
  confirmResetCounter: "Reset counter back to 0?",
  logoTitle: "Enterprise logo",
  logoDescription:
    "This is the image that will be automatically printed on every bill",
  change: "Change",
  name: "Name",
  email: "E-mail address",
  submit: "Save changes",
  getError: "There was an error fetching your data. Please retry",
  saveSuccess: "Profile updated!",
  counterReseted: "Counter resetted",
  emailConfirmationAlert:
    "When changing email address, you must confirm the new one.",
  confirmEmailChange:
    "After the email change is done, you will be logged out and you must confirm the new address in order to log back in. Are you sure to continue?",
});
