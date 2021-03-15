import React from "react";
import { Tag } from "antd";

const CTag = (props) => {
  const { type = "save" } = props;
  return (
    <Tag {...props} className={`custom-tag ${type}`}>
      {type}
    </Tag>
  );
};

export default CTag;
