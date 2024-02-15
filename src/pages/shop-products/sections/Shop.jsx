import React from "react";
import { Result, Spin } from "antd";
import Button from "../../../components/button/Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return isLoading ? (
    <div className="flex justify-center items-center min-h-screen w-full">
      <Spin size="large" />
    </div>
  ) : (
    <Result
      status="warning"
      title="We are fixing this page, try again later."
      extra={
        <Link to="/">
          {" "}
          <Button description="Back to Home" />
        </Link>
      }
      className="font-[exo] font-semibold min-h-screen"
    />
  );
};
export default Shop;
