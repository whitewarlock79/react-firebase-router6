export const erroresFirebase = (code) => {
  switch (code) {
    case "auth/email-already-in-use":
      return {
        code: "email",
        message: "Usuario ya registrado",
      };
    case "auth/invalid-email":
      return {
        code: "email",
        message: "Formato email no válido",
      };
    case "auth/claims-too-large":
      return {
        code: "claims",
        message:
          "La carga útil de la reclamación que se entregó a setCustomUserClaims() supera el tamaño máximo de 1,000 bytes.",
      };
    case "auth/email-already-exists":
      return {
        code: "email",
        message:
          "Otro usuario ya está utilizando el correo electrónico proporcionado. Cada usuario debe tener un correo electrónico único.",
      };
    case "auth/id-token-expired":
      return {
        code: "token",
        message: "El token de ID de Firebase que se proporcionó está vencido.",
      };
    case "auth/id-token-revoked":
      return {
        code: "token",
        message: "Se revocó el token de ID de Firebase.",
      };
    case "auth/insufficient-permission":
      return {
        code: "permission",
        message:
          "La credencial que se usó para inicializar el SDK de Admin no tiene permisos suficientes para acceder al recurso de Authentication solicitado.",
      };
    case "auth/internal-error":
      return {
        code: "server",
        message:
          "El servidor de Authentication encontró un error inesperado cuando se intentaba procesar la solicitud.",
      };
    case "auth/invalid-argument":
      return {
        code: "argument",
        message:
          "Se proporcionó un argumento no válido al método de Authentication.",
      };
    case "auth/invalid-claims":
      return {
        code: "claims",
        message:
          "Los atributos personalizados del reclamo que se entregaron a setCustomUserClaims() no son válidos.",
      };
    case "auth/invalid-continue-uri":
      return {
        code: "uri",
        message: "La URL de continuación debe ser una string de URL válida.",
      };
    case "auth/invalid-creation-time":
      return {
        code: "time",
        message:
          "La hora de creación debe ser una string de fecha en formato UTC válida.",
      };
    case "auth/invalid-credential":
      return {
        code: "email",
        message:
          "La credencial que se usa en la autenticación de los SDK de Admin no se puede emplear para realizar la acción deseada.",
      };
    case "auth/invalid-disabled-field":
      return {
        code: "field",
        message:
          "El valor que se proporcionó para la propiedad del usuario disabled no es válido. Debe ser un booleano.",
      };
    case "auth/invalid-display-name":
      return {
        code: "name",
        message:
          "El valor que se proporcionó para la propiedad del usuario displayName no es válido. Debe ser una string que no esté vacía.",
      };
    case "auth/invalid-dynamic-link-domain":
      return {
        code: "domain",
        message:
          "El dominio del vínculo dinámico proporcionado no se configuró o no se autorizó para el proyecto actual.",
      };
    case "auth/invalid-email-verified":
      return {
        code: "email",
        message:
          "El valor que se proporcionó para la propiedad del usuario emailVerified no es válido. Debe ser un booleano.",
      };
    case "auth/invalid-hash-algorithm":
      return {
        code: "hash",
        message:
          "El algoritmo de hash debe coincidir con las strings de la lista de algoritmos compatibles.",
      };
    case "auth/invalid-hash-block-size":
      return {
        code: "hash",
        message: "El tamaño del conjunto de hash debe ser un número válido.",
      };
    case "auth/invalid-hash-derived-key-length":
      return {
        code: "hash",
        message:
          "La longitud de la clave derivada de hash debe ser un número válido.",
      };
    case "auth/invalid-hash-key":
      return {
        code: "hash",
        message: "La clave de hash debe ser un búfer de bytes válido.",
      };
    case "auth/invalid-hash-memory-cost":
      return {
        code: "hash",
        message: "El costo de la memoria de hash debe ser un número válido.",
      };
    case "auth/invalid-hash-parallelization":
      return {
        code: "hash",
        message: "La paralelización de hash debe ser un número válido.",
      };
    case "auth/invalid-hash-rounds":
      return {
        code: "hash",
        message: "Las rondas de hash deben ser un número válido.",
      };
    case "auth/invalid-hash-salt-separator":
      return {
        code: "hash",
        message:
          "El campo del separador de sal del algoritmo de hash debe ser un búfer de bytes válido.",
      };
    case "auth/invalid-id-token":
      return {
        code: "token",
        message:
          "El token de ID que se proporcionó no es un token de ID de Firebase válido.",
      };
    case "auth/invalid-last-sign-in-time":
      return {
        code: "time",
        message:
          "La hora del último acceso debe ser una string de fecha en formato UTC válida.",
      };
    case "auth/invalid-page-token":
      return {
        code: "token",
        message:
          "El token de página siguiente que se entregó en listUsers() no es válido. Debe ser una string válida que no esté vacía.",
      };
    case "auth/invalid-password":
      return {
        code: "password",
        message:
          "El valor que se proporcionó para la propiedad del usuario password no es válido. Debe ser una string con al menos seis caracteres.",
      };
    case "auth/invalid-password-hash":
      return {
        code: "password",
        message: "El hash de contraseñas debe ser un búfer de bytes válidos.",
      };
    case "auth/invalid-password-salt":
      return {
        code: "password",
        message: "La contraseña con sal debe ser un búfer de bytes válido.",
      };
    case "auth/invalid-phone-number":
      return {
        code: "phone",
        message:
          "El valor que se proporcionó para phoneNumber no es válido. Debe ser una string de identificador que no esté vacía y que cumpla con el estándar E.164.",
      };
    case "auth/invalid-photo-url":
      return {
        code: "photo",
        message:
          "El valor que se proporcionó para la propiedad del usuario photoURL no es válido. Debe ser una URL de string.",
      };
    case "auth/invalid-provider-data":
      return {
        code: "provider",
        message: "providerData debe ser una serie de objetos UserInfo.",
      };
    case "auth/invalid-provider-id":
      return {
        code: "provider",
        message:
          "providerId debe ser una string del identificador del proveedor compatible válida.",
      };
    case "auth/invalid-oauth-responsetype":
      return {
        code: "oauth",
        message:
          "Se debe configurar solo un responseType de OAuth como verdadera.",
      };
    case "auth/invalid-session-cookie-duration":
      return {
        code: "session",
        message:
          "La duración de la cookie de sesión debe ser un número válido en milisegundos que vaya entre los 5 minutos y las 2 semanas.",
      };
    case "auth/invalid-uid":
      return {
        code: "uid",
        message:
          "El uid proporcionado debe ser una string no vacía con un máximo de 128 caracteres.",
      };
    case "auth/invalid-user-import":
      return {
        code: "import",
        message: "El registro de usuarios para importar no es válido.",
      };
    case "auth/maximum-user-count-exceeded":
      return {
        code: "users",
        message:
          "Se excedió la cantidad máxima de usuarios permitidos para importar.",
      };
    case "auth/missing-android-pkg-name":
      return {
        code: "android",
        message:
          "Si es obligatorio instalar la app para Android, debe proporcionarse un nombre de paquete de Android.",
      };
    case "auth/missing-continue-uri":
      return {
        code: "uri",
        message:
          "Se debe proporcionar una URL de continuación válida en la solicitud.",
      };
    case "auth/missing-hash-algorithm":
      return {
        code: "hash",
        message:
          "Para importar usuarios con hash de contraseñas, es necesario proporcionar el algoritmo de hash y sus parámetros.",
      };
    case "auth/missing-ios-bundle-id":
      return {
        code: "ios",
        message: "Falta un ID del paquete en la solicitud.",
      };
    case "auth/missing-uid":
      return {
        code: "uid",
        message: "Se requiere un identificador uid para la operación actual.",
      };
    case "auth/missing-oauth-client-secret":
      return {
        code: "oauth",
        message:
          "El secreto de cliente de la configuración de OAuth es obligatorio para habilitar el flujo de código de OIDC.",
      };
    case "auth/operation-not-allowed":
      return {
        code: "operation",
        message:
          "El proveedor de acceso proporcionado está inhabilitado para tu proyecto de Firebase. Habilítalo en la sección Método de acceso de Firebase console.",
      };
    case "auth/phone-number-already-exists":
      return {
        code: "phone",
        message:
          "Otro usuario ya utiliza el phoneNumber proporcionado. Cada usuario debe tener un phoneNumber único.",
      };
    case "auth/project-not-found":
      return {
        code: "project",
        message:
          "No se encontró ningún proyecto de Firebase para la credencial que se usó para inicializar los SDK de Admin.",
      };
    case "auth/reserved-claims":
      return {
        code: "claims",
        message:
          "Una o más reclamaciones personalizadas de usuarios que se entregaron a setCustomUserClaims() están reservadas.",
      };
    case "auth/session-cookie-expired":
      return {
        code: "session",
        message: "La cookie proporcionada de la sesión de Firebase venció.",
      };
    case "auth/session-cookie-revoked":
      return {
        code: "session",
        message: "Se revocaron las cookies de la sesión de Firebase.",
      };
    case "auth/too-many-requests":
      return {
        code: "requests",
        message: "La cantidad de solicitudes supera el máximo permitido.",
      };
    case "auth/uid-already-exists":
      return {
        code: "uid",
        message:
          "Otro usuario ya utiliza el uid proporcionado. Cada usuario debe tener un uid único.",
      };
    case "auth/unauthorized-continue-uri":
      return {
        code: "uri",
        message:
          "El dominio de la URL de continuación no está en la lista blanca. Inclúyelo en la lista en Firebase console.",
      };
    case "auth/user-not-found":
      return {
        code: "user",
        message:
          "No existe ningún registro de usuario que corresponda al identificador proporcionado.",
      };
    default:
      return "Ocurrio un error en el server";
  }
};

export default erroresFirebase;
