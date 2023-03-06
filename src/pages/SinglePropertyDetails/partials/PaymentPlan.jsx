import React from "react";
import Skeleton from "../../../components/Skeleton/Skeleton";
import HeadingText from "./HeadingText";
import PaymentItem from "./PaymentItem";

const PaymentPlan = (props) => {
  const paymentPlan = props.paymentPlan;

  return (
    <section className="mb-5">
      <Skeleton>
        <HeadingText innerText="Payment Plan" />
        <div className="w-full relative overflow-clip">
          <div className="w-full absolute top-9 left-1/2 -z-50">
            <div className="border border-dashed w-[70%] mx-auto relative -left-1/2 -z-50"></div>
          </div>
          <div className="flex justify-between w-full">
            {paymentPlan.map((item, index) => (
              <div className="basis-1/2 text-center" key={`payment-${index}`}>
                <PaymentItem
                  title={
                    item.percentage
                      ? item.percentage
                      : item.installment
                      ? item.installment
                      : item.date
                  }
                  description={item.milestone}
                />
              </div>
            ))}
          </div>
        </div>
      </Skeleton>
    </section>
  );
};

export default PaymentPlan;
