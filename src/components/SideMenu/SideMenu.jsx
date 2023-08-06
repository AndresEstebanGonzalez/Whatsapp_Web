import styles from '../SideMenu/SideMenu.module.scss';

import SideMenuHeader from './SideMenuHeader/SideMenuHeader.jsx';
import SearchContainer from './SearchContainer/SearchContainer.jsx';
import CurrentChatTabs from './CurrentChatTabs/CurrentChatTabs.jsx'

export default function SideMenu() {
    return (
        <>
            <SideMenuHeader />
            <SearchContainer />
            <CurrentChatTabs />
        </>
    )
}