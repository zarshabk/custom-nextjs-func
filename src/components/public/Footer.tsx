export default function Footer() {
  return (
    <footer className="shadow">
      <div className="max-w-5xl m-auto h-20 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          ALL Right Reserved {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
