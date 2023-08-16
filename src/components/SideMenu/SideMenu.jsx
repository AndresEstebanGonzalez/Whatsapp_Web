import styles from "../SideMenu/SideMenu.module.scss";

import SideMenuHeader from "./SideMenuHeader/SideMenuHeader.jsx";
import SearchContainer from "./SearchContainer/SearchContainer.jsx";
import CurrentChatTabsContainer from "./CurrentChatTabsContainer/CurrentChatTabsContainer.jsx";

export default function SideMenu() {
  return (
    <>
      <SideMenuHeader />
      <SearchContainer />
      <CurrentChatTabsContainer />
    </>
  );
}
