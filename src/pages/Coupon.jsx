import React, { useState } from "react";
import { Link } from "react-router-dom";
import CouponCard from "../components/Coupon/CouponCard";
const Coupon = () => {
  const [couponsUnused, setCouponsUnused] = useState([]);
  const [couponValue, setCouponValue] = useState();
  console.log(couponValue);
  const generateCouponValue = () => {
    const coupon = Math.random().toString(36).substring(2).toUpperCase();
    setCouponsUnused([...couponsUnused, { value: couponValue, code: coupon }]);
    setCouponValue("");
  };
  const handleClick = () => {
    if (couponValue === undefined) {
      console.log("Enter a coupon value");
    } else {
      generateCouponValue();
    }
    console.log(couponsUnused);
  };

  return (
    <div>
      <input
        type="number"
        value={couponValue}
        onChange={(e) => setCouponValue(e.target.value)}
        required
      />
      <button onClick={handleClick}>Generate Coupon</button>
      <div className="couponsList">
        <table>
          <thead>
            <tr>
              <th>Coupon code</th>
              <th>Discount price</th>
            </tr>
          </thead>
          <tbody>
            {couponsUnused.map((coupon) => {
              return <CouponCard couponDetails={coupon} />;
            })}
          </tbody>
        </table>
      </div>
      <Link to="/admin">Go Back To Profile</Link>
    </div>
  );
};

export default Coupon;
