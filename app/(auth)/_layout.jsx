import { Stack } from "expo-router";
import { useUser } from "../../hooks/useUser";
import GuestOnly from "../../components/auth/GuestOnly";

const AuthLayout = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <GuestOnly>
      <Stack screenOptions={{ headerShown: false, animation: "none" }} />
    </GuestOnly>
  );
};

export default AuthLayout;
