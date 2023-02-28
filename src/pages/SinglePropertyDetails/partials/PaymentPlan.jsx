import React from "react";
import Skeleton from "../../../components/Skeleton/Skeleton";
import HeadingText from "./HeadingText";
import PaymentItem from "./PaymentItem";

const PaymentPlan = (props) => {
  // const paymentPlan = props.paymentPlan;

  return (
    <section className="mb-5">
      <Skeleton>
        <HeadingText innerText="Payment Plan" />
        <div className="w-full relative">
          <div className="border border-dashed w-[90%] mx-auto absolute top-9 translate-x-9 -z-50"></div>
          <div className="flex justify-between w-full">
            <PaymentItem title="80%" description="During Construction" />
            <PaymentItem title="20%" description="Upon Handover" />
            <PaymentItem title="2026" description="Handover" />
            <PaymentItem title="aed 3m" description="Price Starting" />
          </div>
        </div>
      </Skeleton>
    </section>
  );
};

export default PaymentPlan;
