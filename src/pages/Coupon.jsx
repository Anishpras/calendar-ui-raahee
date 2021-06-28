import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import CouponCard from "../components/Coupon/CouponCard";
import db from "../firebase.utils";
import { useAuth } from "../contexts/AuthContext";
import { FieldValue } from "../firebase.utils";

const Coupon = () => {
  const { currentUser } = useAuth();
  const [couponsUnused, setCouponsUnused] = useState([]);
  const [couponValue, setCouponValue] = useState();
  console.log(couponValue);
  const generateCouponValue = () => {
    const coupon = Math.random().toString(36).substring(2).toUpperCase();
    setCouponsUnused([...couponsUnused, { value: couponValue, code: coupon }]);
    setCouponValue("");
    db.collection("mhp")
      .doc(currentUser.uid)
      .set(
        {
          coupons: FieldValue.arrayUnion(...[...couponsUnused, { value: couponValue, code: coupon }]),
        },
        { merge: true },
      );
  };

  useEffect(() => {
    db.collection("mhp")
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.data().coupons) {
          setCouponsUnused(doc.data().coupons);
        } else {
          setCouponsUnused([]);
        }
      })
  // eslint-disable-next-line
  }, []);

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
      className="generate_input"
        type="number"
        value={couponValue}
        onChange={(e) => setCouponValue(e.target.value)}
        required
      />
      <button className="generate_coupon" onClick={handleClick}>Generate Coupon</button>
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
