/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useCallback, useState, useEffect } from "react";
import clsx from "clsx";

import SearchBar from "@theme/SearchBar";
import Toggle from "@theme/Toggle";
import useThemeContext from "@theme/hooks/useThemeContext";
import { useThemeConfig } from "@docusaurus/theme-common";
import useHideableNavbar from "@theme/hooks/useHideableNavbar";
import useLockBodyScroll from "@theme/hooks/useLockBodyScroll";
import useWindowSize, { windowSizes } from "@theme/hooks/useWindowSize";
import NavbarItem from "@theme/NavbarItem";
import Logo from "../Logo";
import IconMenu from "@theme/IconMenu";

import styles from "./styles.module.css";

// retrocompatible with v1
const DefaultNavItemPosition = "right";

// If split links by left/right
// if position is unspecified, fallback to right (as v1)
function splitNavItemsByPosition(items) {
  const leftItems = items.filter(
    (item) => (item.position ?? DefaultNavItemPosition) === "left"
  );
  const rightItems = items.filter(
    (item) => (item.position ?? DefaultNavItemPosition) === "right"
  );
  return {
    leftItems,
    rightItems,
  };
}

function Navbar(): JSX.Element {
  const {
    navbar: { items, hideOnScroll, style },
    colorMode: { disableSwitch: disableColorModeSwitch },
  } = useThemeConfig();
  const [sidebarShown, setSidebarShown] = useState(false);
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);

  useLockBodyScroll(sidebarShown);

  const showSidebar = useCallback(() => {
    setSidebarShown(true);
  }, [setSidebarShown]);
  const hideSidebar = useCallback(() => {
    setSidebarShown(false);
  }, [setSidebarShown]);

  const onToggleChange = useCallback(
    (e) => (e.target.checked ? setDarkTheme() : setLightTheme()),
    [setLightTheme, setDarkTheme]
  );

  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize === windowSizes.desktop) {
      setSidebarShown(false);
    }
  }, [windowSize]);

  const hasSearchNavbarItem = items.some((item) => item.type === "search");
  const { leftItems, rightItems } = splitNavItemsByPosition(items);

  return (
    // <div className="relative bg-gray-50">
    //   <div className="relative pt-6 pb-4 sm:pb-24">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6">
    //       <nav
    //         className="relative flex items-center justify-between sm:h-10 md:justify-center"
    //         aria-label="Global"
    //       >
    //         <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
    //           <div className="flex items-center justify-between w-full md:w-auto">
    //             <a href="#">
    //               <span className="sr-only">Workflow</span>
    //               <img
    //                 className="h-8 w-auto sm:h-10"
    //                 src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
    //                 alt=""
    //               />
    //             </a>
    //             <div className="-mr-2 flex items-center md:hidden">
    //               <button
    //                 type="button"
    //                 className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
    //                 aria-expanded="false"
    //               >
    //                 <span className="sr-only">Open main menu</span>
    //                 <svg
    //                   className="h-6 w-6"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   fill="none"
    //                   viewBox="0 0 24 24"
    //                   stroke="currentColor"
    //                   aria-hidden="true"
    //                 >
    //                   <path
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     stroke-width="2"
    //                     d="M4 6h16M4 12h16M4 18h16"
    //                   />
    //                 </svg>
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="hidden md:flex md:space-x-10">
    //           <a
    //             href="/docs"
    //             className="font-medium text-gray-500 hover:text-gray-900"
    //           >
    //             Documentation
    //           </a>

    //           <a
    //             href="/features"
    //             className="font-medium text-gray-500 hover:text-gray-900"
    //           >
    //             Features
    //           </a>

    //           <a
    //             href="/pricing"
    //             className="font-medium text-gray-500 hover:text-gray-900"
    //           >
    //             Pricing
    //           </a>

    //           <a
    //             href="/ourwall"
    //             className="font-medium text-gray-500 hover:text-gray-900"
    //           >
    //             Our Wall
    //           </a>
    //         </div>
    //         <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
    //           <span className="inline-flex rounded-md shadow">
    //             <a
    //               href="#"
    //               className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
    //             >
    //               Log in
    //             </a>
    //           </span>
    //         </div>
    //       </nav>
    //     </div>
    //     <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
    //       <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
    //         <div className="px-5 pt-4 flex items-center justify-between">
    //           <div>
    //             <img
    //               className="h-8 w-auto"
    //               src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
    //               alt=""
    //             />
    //           </div>
    //           <div className="-mr-2">
    //             <button
    //               type="button"
    //               className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
    //             >
    //               <span className="sr-only">Close menu</span>
    //               <svg
    //                 className="h-6 w-6"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 aria-hidden="true"
    //               >
    //                 <path
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                   stroke-width="2"
    //                   d="M6 18L18 6M6 6l12 12"
    //                 />
    //               </svg>
    //             </button>
    //           </div>
    //         </div>
    //         <div className="px-2 pt-2 pb-3">
    //           <a
    //             href="#"
    //             className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
    //           >
    //             Product
    //           </a>

    //           <a
    //             href="#"
    //             className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
    //           >
    //             Features
    //           </a>

    //           <a
    //             href="#"
    //             className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
    //           >
    //             Marketplace
    //           </a>

    //           <a
    //             href="#"
    //             className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
    //           >
    //             Company
    //           </a>
    //         </div>
    //         <a
    //           href="#"
    //           className="block w-full px-5 py-3 text-center font-medium text-blue-600 bg-gray-50 hover:bg-gray-100"
    //         >
    //           Log in
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <nav
      ref={navbarRef}
      className={clsx("navbar", "navbar--fixed-top", {
        "navbar--dark": style === "dark",
        "navbar--primary": style === "primary",
        "navbar-sidebar--show": sidebarShown,
        [styles.navbarHideable]: hideOnScroll,
        [styles.navbarHidden]: hideOnScroll && !isNavbarVisible,
      })}
    >
      <div className="navbar__inner">
        <div className="navbar__items">
          {items != null && items.length !== 0 && (
            <button
              aria-label="Navigation bar toggle"
              className="navbar__toggle"
              type="button"
              tabIndex={0}
              onClick={showSidebar}
              onKeyDown={showSidebar}
            >
              <IconMenu />
            </button>
          )}
          <Logo
            className="navbar__brand"
            imageClassName="navbar__logo"
            titleClassName={clsx("navbar__title")}
          />
          {leftItems.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
        </div>
        <div className="navbar__items navbar__items--right">
          {rightItems.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
          {!disableColorModeSwitch && (
            <Toggle
              className={styles.displayOnlyInLargeViewport}
              aria-label="Dark mode toggle"
              checked={isDarkTheme}
              onChange={onToggleChange}
            />
          )}
          {!hasSearchNavbarItem && <SearchBar />}
        </div>
      </div>
      <div
        role="presentation"
        className="navbar-sidebar__backdrop"
        onClick={hideSidebar}
      />
      <div className="navbar-sidebar">
        <div className="navbar-sidebar__brand">
          <Logo
            className="navbar__brand"
            imageClassName="navbar__logo"
            titleClassName="navbar__title"
            onClick={hideSidebar}
          />
          {!disableColorModeSwitch && sidebarShown && (
            <Toggle
              aria-label="Dark mode toggle in sidebar"
              checked={isDarkTheme}
              onChange={onToggleChange}
            />
          )}
        </div>
        <div className="navbar-sidebar__items">
          <div className="menu">
            <ul className="menu__list">
              {items.map((item, i) => (
                <NavbarItem
                  mobile
                  {...(item as any)} // TODO fix typing
                  onClick={hideSidebar}
                  key={i}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
