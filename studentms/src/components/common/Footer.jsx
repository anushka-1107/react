export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2026 YourBrand. All rights reserved.
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400">
          Built with React & Tailwind CSS
        </p>
        </div>
      </div>
    </footer>
  );
}
