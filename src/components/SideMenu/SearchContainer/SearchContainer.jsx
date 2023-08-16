import { useState } from "react";

import styles from "../SearchContainer/SearchContainer.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export default function SearchContainer() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchBar}>
        <FontAwesomeIcon
          className={styles.magnifyingGlassIcon}
          icon={faMagnifyingGlass}
        />
        <FontAwesomeIcon className={styles.arrowLeft} icon={faArrowLeft} />
        <input
          type="search"
          placeholder="Search or start new chat"
          className={styles.searchInput}
        />
      </div>
      <FontAwesomeIcon className={styles.icon} icon={faBars} />
    </div>
  );
}
