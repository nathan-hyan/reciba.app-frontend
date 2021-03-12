import i18next from "i18next";

i18next.addResources("es", "ChangePassword", {
  currentPassword: "Contraseña actual",
  currentPasswordValidation: "La contraseña no puede estar vacía",
  newPassword: "Nueva contraseña",
  newPasswordValidation: "Ingrese una nueva contraseña",
  repeatNewPassword: "Repetir nueva contraseña",
  repeatNewPasswordValidation:
    "Verifique que la contraseña que ingresó coincida",
  submit: "Enviar",
  dontMatch: "Las contraseñas no coinciden",
  confirm:
    "¿Seguro que querés cambiar la contraseña? Deberás volver a ingresar luego",
});

i18next.addResources("en", "ChangePassword", {
  currentPassword: "Current password",
  currentPasswordValidation: "This field can't be empty",
  newPassword: "New password",
  newPasswordValidation: "You must enter a new password",
  repeatNewPassword: "Repeat new password",
  repeatNewPasswordValidation: "Repeat the new password",
  submit: "Send",
  dontMatch: "Passwords don't match",
  confirm:
    "Are you sure you want to change your password? You have to log back in later",
});
