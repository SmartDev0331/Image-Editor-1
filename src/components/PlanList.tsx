import Plan from "@/components/Plan";

type Plan = {
  id: number;
  name: string;
  features: [];
  prices: Price[];
};

type Price = {
  id: number;
  price: number;
  price_formatted: string;
  billing_period: string;
};

export default function PlanList({ plans }: { plans: Plan[] }) {

  console.log('plans--------->', plans)
  return (
    <div className="flex gap-2">
      {plans.map((plan: Plan) => {
        const firstPrice = plan.prices[0];
        return (
          <Plan
            key={plan.id}
            name={plan.name}
            features={plan.features}
            price={firstPrice?.price_formatted || "N/A"}
            billingPeriod={firstPrice?.billing_period || "N/A"}
            subscriptionID={firstPrice?.id || 0}
          />
        );
      })}
      {/* {
        plans.map((plan: Plan) => (
          <Plan
            key={plan.id}
            name={plan.name}
            features={plan.features}
            price={plan.prices[0].price_formatted}
            billingPeriod={plan.prices[0].billing_period}
            subscriptionID={plan.prices[0].id}
          />
        ))
      } */}
    </div>
  );
}
