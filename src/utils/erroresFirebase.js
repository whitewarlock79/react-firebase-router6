export const erroresFirebase = (code) => {
  switch (code) {
    case "auth/email-already-in-use":
      return "Usuario ya registrado";
    case "auth/invalid-email":
      return "Formato email no válido";
    case "auth/claims-too-large":
      return "La carga útil de la reclamación que se entregó a setCustomUserClaims() supera el tamaño máximo de 1,000 bytes.";
    case "auth/email-already-exists":
      return "Otro usuario ya está utilizando el correo electrónico proporcionado. Cada usuario debe tener un correo electrónico único.";
    case "auth/id-token-expired":
      return "El token de ID de Firebase que se proporcionó está vencido.";
    case "auth/id-token-revoked":
      return "Se revocó el token de ID de Firebase.";
    case "auth/insufficient-permission":
      return "La credencial que se usó para inicializar el SDK de Admin no tiene permisos suficientes para acceder al recurso de Authentication solicitado.";
    case "auth/internal-error":
      return "El servidor de Authentication encontró un error inesperado cuando se intentaba procesar la solicitud.";
    case "auth/invalid-argument":
      return "Se proporcionó un argumento no válido al método de Authentication.";
    case "auth/invalid-claims":
      return "Los atributos personalizados del reclamo que se entregaron a setCustomUserClaims() no son válidos.";
    case "auth/invalid-continue-uri":
      return "La URL de continuación debe ser una string de URL válida.";
    case "auth/invalid-creation-time":
      return "La hora de creación debe ser una string de fecha en formato UTC válida.";
    case "auth/invalid-credential":
      return "La credencial que se usa en la autenticación de los SDK de Admin no se puede emplear para realizar la acción deseada.";
    case "auth/invalid-disabled-field":
      return "El valor que se proporcionó para la propiedad del usuario disabled no es válido. Debe ser un booleano.";
    case "auth/invalid-display-name":
      return "El valor que se proporcionó para la propiedad del usuario displayName no es válido. Debe ser una string que no esté vacía.";
    case "auth/invalid-dynamic-link-domain":
      return "El dominio del vínculo dinámico proporcionado no se configuró o no se autorizó para el proyecto actual.";
    case "auth/invalid-email-verified":
      return "El valor que se proporcionó para la propiedad del usuario emailVerified no es válido. Debe ser un booleano.";
    case "auth/invalid-hash-algorithm":
      return "El algoritmo de hash debe coincidir con las strings de la lista de algoritmos compatibles.";
    case "auth/invalid-hash-block-size":
      return "El tamaño del conjunto de hash debe ser un número válido.";
    case "auth/invalid-hash-derived-key-length":
      return "La longitud de la clave derivada de hash debe ser un número válido.";
    case "auth/invalid-hash-key":
      return "La clave de hash debe ser un búfer de bytes válido.";
    case "auth/invalid-hash-memory-cost":
      return "El costo de la memoria de hash debe ser un número válido.";
    case "auth/invalid-hash-parallelization":
      return "La paralelización de hash debe ser un número válido.";
    case "auth/invalid-hash-rounds":
      return "Las rondas de hash deben ser un número válido.";
    case "auth/invalid-hash-salt-separator":
      return "El campo del separador de sal del algoritmo de hash debe ser un búfer de bytes válido.";
    case "auth/invalid-id-token":
      return "El token de ID que se proporcionó no es un token de ID de Firebase válido.";
    case "auth/invalid-last-sign-in-time":
      return "La hora del último acceso debe ser una string de fecha en formato UTC válida.";
    case "auth/invalid-page-token":
      return "El token de página siguiente que se entregó en listUsers() no es válido. Debe ser una string válida que no esté vacía.";
    case "auth/invalid-password":
      return "El valor que se proporcionó para la propiedad del usuario password no es válido. Debe ser una string con al menos seis caracteres.";
    case "auth/invalid-password-hash":
      return "El hash de contraseñas debe ser un búfer de bytes válidos.";
    case "auth/invalid-password-salt":
      return "La contraseña con sal debe ser un búfer de bytes válido.";
    case "auth/invalid-phone-number":
      return "El valor que se proporcionó para phoneNumber no es válido. Debe ser una string de identificador que no esté vacía y que cumpla con el estándar E.164.";
    case "auth/invalid-photo-url":
      return "El valor que se proporcionó para la propiedad del usuario photoURL no es válido. Debe ser una URL de string.";
    case "auth/invalid-provider-data":
      return "providerData debe ser una serie de objetos UserInfo.";
    case "auth/invalid-provider-id":
      return "providerId debe ser una string del identificador del proveedor compatible válida.";
    case "auth/invalid-oauth-responsetype":
      return "Se debe configurar solo un responseType de OAuth como verdadera.";
    case "auth/invalid-session-cookie-duration":
      return "La duración de la cookie de sesión debe ser un número válido en milisegundos que vaya entre los 5 minutos y las 2 semanas.";
    case "auth/invalid-uid":
      return "El uid proporcionado debe ser una string no vacía con un máximo de 128 caracteres.";
    case "auth/invalid-user-import":
      return "El registro de usuarios para importar no es válido.";
    case "auth/maximum-user-count-exceeded":
      return "Se excedió la cantidad máxima de usuarios permitidos para importar.";
    case "auth/missing-android-pkg-name":
      return "Si es obligatorio instalar la app para Android, debe proporcionarse un nombre de paquete de Android.";
    case "auth/missing-continue-uri":
      return "Se debe proporcionar una URL de continuación válida en la solicitud.";
    case "auth/missing-hash-algorithm":
      return "Para importar usuarios con hash de contraseñas, es necesario proporcionar el algoritmo de hash y sus parámetros.";
    case "auth/missing-ios-bundle-id":
      return "Falta un ID del paquete en la solicitud.";
    case "auth/missing-uid":
      return "Se requiere un identificador uid para la operación actual.";
    case "auth/missing-oauth-client-secret":
      return "El secreto de cliente de la configuración de OAuth es obligatorio para habilitar el flujo de código de OIDC.";
    case "auth/operation-not-allowed":
      return "El proveedor de acceso proporcionado está inhabilitado para tu proyecto de Firebase. Habilítalo en la sección Método de acceso de Firebase console.";
    case "auth/phone-number-already-exists":
      return "Otro usuario ya utiliza el phoneNumber proporcionado. Cada usuario debe tener un phoneNumber único.";
    case "auth/project-not-found":
      return "No se encontró ningún proyecto de Firebase para la credencial que se usó para inicializar los SDK de Admin.";
    case "auth/reserved-claims":
      return "Una o más reclamaciones personalizadas de usuarios que se entregaron a setCustomUserClaims() están reservadas.";
    case "auth/session-cookie-expired":
      return "La cookie proporcionada de la sesión de Firebase venció.";
    case "auth/session-cookie-revoked":
      return "Se revocaron las cookies de la sesión de Firebase.";
    case "auth/too-many-requests":
      return "La cantidad de solicitudes supera el máximo permitido.";
    case "auth/uid-already-exists":
      return "Otro usuario ya utiliza el uid proporcionado. Cada usuario debe tener un uid único.";
    case "auth/unauthorized-continue-uri":
      return "El dominio de la URL de continuación no está en la lista blanca. Inclúyelo en la lista en Firebase console.";
    case "auth/user-not-found":
      return "No existe ningún registro de usuario que corresponda al identificador proporcionado.";
    default:
      return "Ocurrio un error en el server";
  }
};

export default erroresFirebase;
