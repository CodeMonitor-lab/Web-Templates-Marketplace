interface TemplateCardProps {
    title: string;
    price: string;
  }
  
  export default function TemplateCard({
    title,
    price,
  }: TemplateCardProps) {
    return (
      <div className="rounded-2xl border p-4 shadow-sm">
        <div className="mb-4 h-40 rounded-xl bg-muted" />
  
        <h3 className="text-lg font-semibold">{title}</h3>
  
        <p className="mt-1 text-sm text-muted-foreground">{price}</p>
  
        <button className="mt-4 rounded-lg bg-black px-4 py-2 text-white">
          Edit
        </button>
      </div>
    );
  }