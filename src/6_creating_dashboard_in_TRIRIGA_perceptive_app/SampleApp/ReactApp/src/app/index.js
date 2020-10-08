/*
  Copyright 2020 IBM Corp. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
import React from "react";
import {
  HeaderContainer,
  Header,
  SideNav,
  PageTitleBar,
  Tabs,
  Tab
} from "carbon-addons-iot-react";
import Home from "@carbon/icons-react/lib/home/24";
import Dashboard from "@carbon/icons-react/lib/dashboard/24";

import { Table, Tiles } from "./components";

const conf = {
  appName: "Sample Application",
  actionItems: []
};
const links = [
  {
    icon: Home,
    isEnabled: true,
    metaData: {
      label: "Devices",
      href: "#",
      element: "a"
    },
    linkContent: "Home"
  },
  {
    isEnabled: true,
    icon: Dashboard,
    metaData: {
      label: "Devices",
      href: "#",
      element: "a"
    },
    linkContent: "Dashboard"
  }
];
export function App() {
  return (
    <>
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <React.Fragment>
            <Header
              {...conf}
              isSideNavExpanded={isSideNavExpanded}
              onClickSideNavExpand={onClickSideNavExpand}
            />
            <SideNav
              links={links}
              isSideNavExpanded={isSideNavExpanded}
              onClickSideNavExpand={onClickSideNavExpand}
            />
          </React.Fragment>
        )}
      />
      <div style={{ paddingTop: "3rem", paddingLeft: "3rem" }}>
        <PageTitleBar
          breadcrumb={[
            <a href="/">Home</a>,
            <a href="/">Type</a>,
            <span>Instance</span>
          ]}
          isLoading={false}
          title={"Page Title"}
          collapsed={false}
          editable={false}
        />

        <div style={{ paddingLeft: "2rem" }}>
          <Tabs
            ariaLabel="listbox"
            iconDescription="show menu options"
            role="navigation"
            selected={0}
            tabContentClassName="tab-content"
            triggerHref="#"
          >
            <Tab
              href="#"
              label="Tab label 1"
              role="presentation"
              selected={false}
              tabIndex={0}
            >
              <Table />
            </Tab>
            <Tab
              href="#"
              label="Tab label 2"
              role="presentation"
              selected={false}
              tabIndex={0}
            >
              <Tiles />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
