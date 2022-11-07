/*!
 * Copyright 2021, Staffbase GmbH and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import CSS from "csstype";

import { Card } from "../Card";

export interface LoadingCardProperties {
  color: string;
  smallWidth: boolean;
}

export const LoadingBox: React.FC<LoadingCardProperties> = (props) => {
  const cardLoadingStyle: CSS.Properties = {
    display: "block",
    position: "absolute",
    left: "0",
    top: "0",
    bottom: "0",
    right: "0",
    textAlign: "center",
    verticalAlign: "middle",
    backdropFilter: "blur(10px)",
  };

  const cardLoadingContentStyle: CSS.Properties = {
    color: "white",
    position: "relative",
    padding: "2rem",
    fontSize: "1rem",
    lineHeight: "1.2rem",
    fontWeight: "bold",
  };

  return (
    <Card color={props.color} smallWidth={props.smallWidth}>
      <div style={cardLoadingStyle}>
        <div style={cardLoadingContentStyle}>Loading...</div>
      </div>
    </Card>
  );
};
