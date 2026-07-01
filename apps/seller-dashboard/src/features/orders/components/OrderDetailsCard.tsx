import CustomerInfo from "./CustomerInfo";
import PaymentInfo from "./PaymentInfo";
import ShippingInfo from "./ShippingInfo";

interface OrderDetailsCardProps {
  orderId?: string;
}

export default function OrderDetailsCard({
  orderId = "1001",
}: OrderDetailsCardProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              Order #{orderId}
            </h1>

            <p className="text-gray-500">
              Complete order information
            </p>
          </div>

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Completed
          </span>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <CustomerInfo />

        <PaymentInfo />

        <ShippingInfo />

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">
            Order Summary
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Template</span>
              <span>Portfolio Website</span>
            </div>

            <div className="flex justify-between">
              <span>Quantity</span>
              <span>1</span>
            </div>

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$49</span>
            </div>

            <div className="flex justify-between">
              <span>Tax</span>
              <span>$0</span>
            </div>

            <hr />

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>$49</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}