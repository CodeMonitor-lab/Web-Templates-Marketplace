interface ShippingInfoProps {
    address?: string;
    city?: string;
    country?: string;
    postalCode?: string;
  }
  
  export default function ShippingInfo({
    address = "221B Baker Street",
    city = "London",
    country = "United Kingdom",
    postalCode = "NW16XE",
  }: ShippingInfoProps) {
    return (
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">
          Shipping Information
        </h2>
  
        <div className="space-y-3 text-sm">
          <div>
            <p className="text-gray-500">Address</p>
            <p>{address}</p>
          </div>
  
          <div>
            <p className="text-gray-500">City</p>
            <p>{city}</p>
          </div>
  
          <div>
            <p className="text-gray-500">Country</p>
            <p>{country}</p>
          </div>
  
          <div>
            <p className="text-gray-500">
              Postal Code
            </p>
            <p>{postalCode}</p>
          </div>
        </div>
      </div>
    );
  }