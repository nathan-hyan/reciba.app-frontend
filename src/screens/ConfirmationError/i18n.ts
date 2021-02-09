import i18next from "i18next";

i18next.addResources("es", "ConfirmError", {
  bigNoValidatedText:
    "Parece que tu cuenta no está verificada. ¿Te fijaste en tu e-mail? ",
  bigInvalidText:
    "Aparentemente el link que usaste no es válido... Raro, ¿no? ",
  smallInvalidText: "No importa, ya te estamos mandando otro mail ",
  smallNoValidatedText:
    "Si no te llegó, no te preocupés. Ya te mandamos un mail nuevo ",
  login: "Iniciar sesión",
});

i18next.addResources("en", "ConfirmError", {
  bigNoValidatedText:
    "It looks like your account isn't verified. Have you checked your e-mail? ",
  smallNoValidatedText:
    "If theres nothing in your inbox, don't worry! We've sent a new mail ",
  bigInvalidText:
    "Apparently the link you used is invalid... that's kinda odd ",
  smallInvalidText: "Anyway, we're sending another link right now ",

  login: "Login",
});
