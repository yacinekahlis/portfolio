export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-600">© {new Date().getFullYear()} Yacine Kahlis. Tous droits réservés.</p>
        <p className="mt-2 text-sm text-slate-500">Développé avec Next.js, Tailwind CSS et Framer Motion</p>
      </div>
    </footer>
  )
}

