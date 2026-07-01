interface CustomerInfoProps {
    name?: string;
    email?: string;
    phone?: string;
  }
  
  export default function CustomerInfo({
    name = "John Doe",
    email = "john@example.com",
    phone = "+1 234 567 890",
  }: CustomerInfoProps) {
    return (
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">
          Customer Information
        </h2>
  
        <div className="space-y-3 text-sm">
          <div>
            <p className="text-gray-500">Name</p>
            <p className="font-medium">{name}</p>
          </div>
  
          <div>
            <p className="text-gray-500">Email</p>
            <p>{email}</p>
          </div>
  
          <div>
            <p className="text-gray-500">Phone</p>
            <p>{phone}</p>
          </div>
        </div>
      </div>
    );
  }