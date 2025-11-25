export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-7xl mx-auto text-center space-y-2">
        <p className="text-muted-foreground">
          © {currentYear} Hemanth Raju N. Designed & built by Hemanth — Available for internships & projects.
        </p>
        <p className="text-sm text-muted-foreground">
          Built with React, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
