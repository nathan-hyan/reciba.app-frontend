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
});
