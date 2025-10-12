/* eslint-disable react/prop-types */
import { LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function PageHeading({ title }) {
  return (
    <div className="flex !items-center  justify-between">
      <Link to={-1}>
        <h1 className="font-semibold text-2xl flex items-center justify-start gap-2">
          <LeftOutlined /> {title}
        </h1>
      </Link>
    </div>
  );
}

export default PageHeading;
