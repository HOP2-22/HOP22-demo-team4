import { useContext, useState } from "react";

import { Container } from "@/components/Container";
import { Guard } from "@/components/Guard";
import { Layout } from "@/components/layout/Layout";
import { AuthContext } from "@/provider/AuthContext";
import { ProfileTitles } from "@/components/profile/ProfileTitles";
import { ProfileCards } from "@/components/profile/ProfileCards";
import { ProfileBackgroundForDivide } from "@/components/profile/ProfileBackgroundForDivide";

export const Profile = () => {
  const { user } = useContext(AuthContext);
  const [typeAccounts, setTypeAccounts] = useState(false);

  return (
    // <Guard>
    <Layout title={"Profile"}>
      <Container className="pt-[70px]">
        <ProfileTitles
          typeAccounts={typeAccounts}
          setTypeAccounts={setTypeAccounts}
          user={user}
        />
        <ProfileBackgroundForDivide />
        <ProfileCards user={user} typeAccounts={typeAccounts} />
      </Container>
    </Layout>
    // </Guard>
  );
};

export default Profile;
