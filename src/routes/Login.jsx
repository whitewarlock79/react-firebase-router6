import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { useForm } from "react-hook-form";
import { erroresFirebase } from "../utils/erroresFirebase";
import FormInput from "../components/FormInput";
import FormError from "../components/FormError";
import { formValidate } from "../utils/formValidate";
import Title from "../components/Title";
import FormSubmit from "../components/FormSubmit";

const Login = () => {
  const { loginUser } = useContext(UserContext);

  const navegate = useNavigate();

  const { required, patternEmail, minLength, validateTrim } = formValidate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    setError,
  } = useForm({
    defaultValues: {
      email: "bluuweb1@test.com",
      password: "123123",
    },
  });

  const onSubmit = async ({ email, password }) => {
    try {
      await loginUser(email, password);
      navegate("/");
    } catch (error) {
      console.log(error.code);
      const { code, message } = erroresFirebase(error.code);
      setError(code, { message });
    }
  };

  return (
    <>
      <Title title="Login" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          placeholder="Ingrese email"
          {...register("email", {
            required,
            pattern: patternEmail,
            onChange: () => clearErrors("firebase"),
          })}
          label="Ingresa tu correo"
          error={errors.email}
        >
          <FormError error={errors.email} />
        </FormInput>

        <FormInput
          type="password"
          placeholder="Ingrese Password"
          {...register("password", {
            minLength,
            validate: validateTrim,
            onChange: () => clearErrors("firebase"),
          })}
          label="Ingresa tu contraseña"
          error={errors.password}
        >
          <FormError error={errors.password} />
        </FormInput>
        <FormSubmit text="Acceder" />
      </form>
    </>
  );
};

export default Login;
