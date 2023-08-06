import styles from '../CurrentChatContainer/CurrentChatContainer.module.scss';

import CurrentChatHeader from './CurrentChatHeader/CurrentChatHeader.jsx';
import CurrentChatContent from './CurrentChatContent/CurrentChatContent.jsx';
import CurrentChatInputSector from './CurrentChatInputSector/CurrentChatInputSector.jsx';

export default function CurrentChatContainer() {
    return (
        <>
            <CurrentChatHeader />
            <CurrentChatContent />
            <CurrentChatInputSector />
        </>
    )
}