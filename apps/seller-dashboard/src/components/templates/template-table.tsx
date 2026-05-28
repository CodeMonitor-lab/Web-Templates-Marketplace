export function TemplateTable() {
    return (
      <div className="overflow-hidden rounded-2xl border">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-4 py-3 text-left">Template</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
  
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-3">Portfolio Template</td>
              <td className="px-4 py-3">$49</td>
              <td className="px-4 py-3">Published</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }