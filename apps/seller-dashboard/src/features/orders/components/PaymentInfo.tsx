interface PaymentInfoProps {
    method?: string;
    status?: string;
    transactionId?: string;
    amount?: number;
  }
  
  export default function PaymentInfo({
    method = "Credit Card",
    status = "Paid",
    transactionId = "TXN-894512",
    amount = 49,
  }: PaymentInfoProps) {
    return (
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">
          Payment Information
        </h2>
  
        <div className="space-y-3 text-sm">
          <div>
            <p className="text-gray-500">Method</p>
            <p>{method}</p>
          </div>
  
          <div>
            <p className="text-gray-500">Status</p>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              {status}
            </span>
          </div>
  
          <div>
            <p className="text-gray-500">
              Transaction ID
            </p>
            <p>{transactionId}</p>
          </div>
  
          <div>
            <p className="text-gray-500">Amount</p>
            <p className="font-semibold">${amount}</p>
          </div>
        </div>
      </div>
    );
  }