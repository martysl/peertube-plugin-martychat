export function Input({ ...props }) {
  return <input className="border p-2 rounded" {...props} />;
}

export function Button({ children, ...props }) {
  return (
    <button className="bg-blue-500 text-white p-2 rounded" {...props}>
      {children}
    </button>
  );
}
