import LayoutBody from "../../src/components/commons/layout/body/LayoutBody.index";
import LayoutHeader from "../../src/components/commons/layout/header/LayoutHeader.index";
import EditProfileForm from "../../src/components/units/editProfileForm/EditProfileForm.index";
import UserProfile from "../../src/components/units/userProfile/UserProfile.index";

export default function MyPage(): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <LayoutBody>
        <>
          <UserProfile />
        </>
      </LayoutBody>
    </>
  );
}
