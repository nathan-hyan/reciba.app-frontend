import i18next from "i18next";

i18next.addResources("es", "NavBar", {
  actualUser: "Usuario actual",
  guest: "Invitado",
});
i18next.addResources("en", "NavBar", {
  actualUser: "Current user",
  guest: "Guest",
});

i18next.addResources("es", "LoggedInOpts", {
  home: "Principal",
  newInvoice: "Nuevo comprobante",
  dashboard: "Tablero",
  profile: "Perfil",
  changePassword: "Cambiar contraseña",
  closeSession: "Cerrar sesión",
});
i18next.addResources("en", "LoggedInOpts", {
  home: "Home",
  newInvoice: "New invoice",
  dashboard: "Dashboard",
  profile: "Profile",
  changePassword: "Change password",
  closeSession: "Log out",
});

i18next.addResources("es", "LoggedOutOpts", {
  login: "Iniciar sesión",
  signUp: "Crear usuario",
});

i18next.addResources("en", "LoggedOutOpts", {
  login: "Log in",
  signUp: "Sign up",
});
