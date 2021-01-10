import i18next from 'i18next';

i18next.addResources('es', 'GenerateInvoice', {
  signatureNeeded: 'Se necesita la firma para continuar',
  verifyForm: 'Por favor, verifique el formulario y reintente',
  errorCreatingInvoice:
    'Ocurrió un error creando el comprobante. Por favor, reintente',
  phoneConnected: 'Teléfono conectado',
  markAsPending: 'Marcar para firmar luego',
  QR: 'Mostrar código QR',
  cancel: 'Cancelar',
  save: 'Guardar',
});

i18next.addResources('en', 'GenerateInvoice', {
  signatureNeeded: 'The signature is required to continue',
  verifyForm: 'Please verify the form before continuing',
  errorCreatingInvoice:
    'There was an error creating the invoice. Please, retry',
  phoneConnected: 'Phone connected',
  markAsPending: 'Mark as pending',
  QR: 'Show QR code',
  cancel: 'Cancel',
  save: 'Save',
});

i18next.addResources('es', 'GIError', {
  date: 'La fecha es necesaria',
});

i18next.addResources('es', 'GIError', {
  date: 'The date is required',
});

i18next.addResources('es', 'Radio', {
  cash: 'Efectivo',
  check: 'Cheque',
  creditcard: 'Tarjeta de crédito',
  transfer: 'Transferencia',
});
i18next.addResources('en', 'Radio', {
  cash: 'Cash',
  check: 'Check',
  creditcard: 'Credit card',
  transfer: 'Bank Transfer',
});
