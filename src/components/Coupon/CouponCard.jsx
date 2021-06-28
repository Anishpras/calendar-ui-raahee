import React from "react";

const Coupon = ({ couponDetails }) => {
  return (
    <tr>
      <td>{couponDetails.code}</td>
      <td>{couponDetails.value}</td>
    </tr>
  );
};

export default Coupon;
