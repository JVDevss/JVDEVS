import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-[calc(100vh-6rem)] flex items-center justify-center px-4 py-16 overflow-hidden">
      <div className="liquid-glass relative z-10 max-w-lg w-full p-8 sm:p-12 rounded-3xl text-center flex flex-col items-center shadow-2xl">
        <span className="text-6xl sm:text-8xl font-black tracking-wider bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
          404
        </span>

        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-[var(--text-heading)]">
          Página no encontrada
        </h1>

        <p className="mt-3 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          Lo sentimos, la página que buscas no existe, ha sido movida o el enlace es incorrecto.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 bg-[var(--btn-sec-bg)] hover:bg-[var(--btn-sec-hover)] text-[var(--btn-sec-text)] border border-[var(--btn-sec-border)] shadow-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}