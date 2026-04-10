export default function Error({ message }) {
  return (
    <div className="text-center text-red-500 mt-10">
      {message}
    </div>
  );
}