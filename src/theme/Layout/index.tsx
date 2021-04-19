/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AnnouncementBar from "@theme/AnnouncementBar";
// import type { Props } from "@theme/Layout";
import useKeyboardNavigation from "@theme/hooks/useKeyboardNavigation";
import LayoutHead from "@theme/LayoutHead";
import LayoutProviders from "@theme/LayoutProviders";
import SkipToContent from "@theme/SkipToContent";
import clsx from "clsx";
import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./styles.css";

function Layout(props: any): JSX.Element {
  const { children, noFooter, wrapperClassName } = props;

  useKeyboardNavigation();

  return (
    <LayoutProviders>
      <LayoutHead {...props} />

      <SkipToContent />

      <AnnouncementBar />

      <Navbar />

      <div className={clsx("main-wrapper", wrapperClassName)}>{children}</div>

      {!noFooter && <Footer />}
    </LayoutProviders>
  );
}

export default Layout;
