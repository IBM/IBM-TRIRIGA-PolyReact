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
  StatefulTable,
  StatefulTileCatalog,
  CatalogContent
} from "carbon-addons-iot-react";
import Add from "@carbon/icons-react/lib/add/32";

//Sample table component
export function Table(props) {
  return (
    <StatefulTable
      columns={[
        {
          filter: {
            placeholderText: "pick a string"
          },
          id: "string",
          name: "String"
        },
        {
          filter: {
            placeholderText: "pick a date"
          },
          id: "date",
          name: "Date"
        },
        {
          filter: {
            options: [
              {
                id: "option-A",
                text: "option-A"
              },
              {
                id: "option-B",
                text: "option-B"
              },
              {
                id: "option-C",
                text: "option-C"
              }
            ],
            placeholderText: "pick an option"
          },
          id: "select",
          name: "Select"
        },
        {
          id: "secretField",
          name: "Secret Information"
        },
        {
          id: "status",
          name: "Status"
        },
        {
          filter: {
            placeholderText: "pick a number"
          },
          id: "number",
          name: "Number"
        }
      ]}
      data={[
        {
          id: "row-1",
          rowActions: undefined,
          values: {
            date: "1973-03-14T23:33:20.000Z",
            number: 1,
            secretField: "OewGc0QsMs",
            select: "option-B",
            status: "NOT_RUNNING",
            string: "helping whiteboard as 1"
          }
        },
        {
          id: "row-4",
          rowActions: undefined,
          values: {
            date: "1973-09-04T14:13:20.000Z",
            number: 16,
            secretField: "46GYyWC0w0",
            select: "option-B",
            status: "NOT_RUNNING",
            string: "can pinocchio whiteboard 4"
          }
        },
        {
          id: "row-16",
          rowActions: undefined,
          values: {
            date: "1981-04-13T08:53:20.000Z",
            number: 256,
            secretField: "muYiOaIWGW",
            select: "option-B",
            status: "NOT_RUNNING",
            string: "eat whiteboard pinocchio 16"
          }
        },
        {
          id: "row-22",
          rowActions: undefined,
          values: {
            date: "1988-07-04T06:13:20.000Z",
            number: 484,
            secretField: "8oCI6cqmQm",
            select: "option-B",
            status: "NOT_RUNNING",
            string: "whiteboard can eat 22"
          }
        },
        {
          id: "row-31",
          rowActions: undefined,
          values: {
            date: "2003-08-16T02:13:20.000Z",
            number: 961,
            secretField: "AAAAAAAAAA",
            select: "option-B",
            status: "NOT_RUNNING",
            string: "helping whiteboard as 31"
          }
        },
        {
          id: "row-34",
          rowActions: undefined,
          values: {
            date: "2009-10-20T00:53:20.000Z",
            number: 1156,
            secretField: "qcUSWgwIkI",
            select: "option-B",
            status: "NOT_RUNNING",
            string: "can pinocchio whiteboard 34"
          }
        },
        {
          id: "row-46",
          rowActions: undefined,
          values: {
            date: "2040-03-22T03:33:20.000Z",
            number: 2116,
            secretField: "YQmcwk2o4o",
            select: "option-B",
            status: "NOT_RUNNING",
            string: "eat whiteboard pinocchio 46"
          }
        },
        {
          id: "row-52",
          rowActions: undefined,
          values: {
            date: "2058-11-08T16:53:20.000Z",
            number: 2704,
            secretField: "uKQCema4E4",
            select: "option-B",
            status: "NOT_RUNNING",
            string: "whiteboard can eat 52"
          }
        },
        {
          id: "row-61",
          rowActions: undefined,
          values: {
            date: "2091-01-30T12:53:20.000Z",
            number: 3721,
            secretField: "wgO4iKuSyS",
            select: "option-B",
            status: "NOT_RUNNING",
            string: "helping whiteboard as 61"
          }
        },
        {
          id: "row-64",
          rowActions: undefined,
          values: {
            date: "2102-12-19T19:33:20.000Z",
            number: 4096,
            secretField: "c8iM4qgaYa",
            select: "option-B",
            status: "NOT_RUNNING",
            string: "can pinocchio whiteboard 64"
          }
        },
        {
          id: "row-76",
          rowActions: undefined,
          values: {
            date: "2156-03-15T06:13:20.000Z",
            number: 5776,
            secretField: "Kw0WUum6s6",
            select: "option-B",
            status: "NOT_RUNNING",
            string: "eat whiteboard pinocchio 76"
          }
        },
        {
          id: "row-82",
          rowActions: undefined,
          values: {
            date: "2186-03-30T11:33:20.000Z",
            number: 6724,
            secretField: "gqe6CwKM2M",
            select: "option-B",
            status: "NOT_RUNNING",
            string: "whiteboard can eat 82"
          }
        },
        {
          id: "row-91",
          rowActions: undefined,
          values: {
            date: "2235-08-02T07:33:20.000Z",
            number: 8281,
            secretField: "iCcyGUekmk",
            select: "option-B",
            status: "NOT_RUNNING",
            string: "helping whiteboard as 91"
          }
        },
        {
          id: "row-94",
          rowActions: undefined,
          values: {
            date: "2253-03-03T22:13:20.000Z",
            number: 8836,
            secretField: "OewGc0QsMs",
            select: "option-B",
            status: "NOT_RUNNING",
            string: "can pinocchio whiteboard 94"
          }
        }
      ]}
      secondaryTitle="Sample Table"
      id="Table"
      lightweight={false}
      options={{
        hasFilter: true,
        hasPagination: true,
        hasRowSelection: "multi"
      }}
      useZebraStyles={false}
      view={{
        pagination: {
          pageSize: 10,
          pageSizes: [10, 15],
          page: 1,
          totalItems: 14
        },
        table: {
          ordering: [
            {
              columnId: "string",
              isHidden: false
            },
            {
              columnId: "date",
              isHidden: false
            },
            {
              columnId: "select",
              isHidden: false
            },
            {
              columnId: "secretField",
              isHidden: true
            },
            {
              columnId: "status",
              isHidden: false
            },
            {
              columnId: "number",
              isHidden: false
            }
          ]
        },
        toolbar: {
          activeBar: "filter"
        }
      }}
    />
  );
}

//Sample tile component
const longDescription =
  "Really long string with lots of lots of text too much to show on one line and when it wraps it might cause some interesting issues especially if it starts vertically wrapping outside of tile bounds at the bottom of the tile";

const tileRenderFunction = ({ values }) => (
  <CatalogContent {...values} icon={<Add />} />
);

const commonTileCatalogProps = {
  title: "My Tile Catalog",
  id: "entityType",
  tiles: [
    {
      id: "test1",
      values: {
        title: "Test Tile with really long title that should wrap",
        description: longDescription
      },
      renderContent: tileRenderFunction
    },
    {
      id: "test2",
      values: { title: "Test Tile2", description: longDescription },
      renderContent: tileRenderFunction
    },
    {
      id: "test3",
      values: { title: "Test Tile3", description: "Tile contents" },
      renderContent: tileRenderFunction
    },
    {
      id: "test4",
      values: { title: "Test Tile4", description: longDescription },
      renderContent: tileRenderFunction
    },
    {
      id: "test5",
      values: { title: "Test Tile5", description: longDescription },
      renderContent: tileRenderFunction
    },
    {
      id: "test6",
      values: { title: "Test Tile6", description: longDescription },
      renderContent: tileRenderFunction
    },
    {
      id: "test7",
      values: { title: "Test Tile7", description: longDescription },
      renderContent: tileRenderFunction
    }
  ]
};

export function Tiles(props) {
  return (
    <StatefulTileCatalog
      {...commonTileCatalogProps}
      search={{
        placeHolderText: "Search catalog"
      }}
      pagination={{ pageSize: 6 }}
    />
  );
}
