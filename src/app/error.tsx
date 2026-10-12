"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative min-h-[calc(100vh-6rem)] flex items-center justify-center px-4 py-16 overflow-hidden">
      <div className="liquid-glass relative z-10 max-w-lg w-full p-8 sm:p-12 rounded-3xl text-center flex flex-col items-center shadow-2xl">
        <span className="text-5xl sm:text-7xl font-black tracking-wider bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">
          ¡Ups!
        </span>

        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-[var(--text-heading)]">
          Algo salió mal
        </h1>

        <p className="mt-3 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          Ocurrió un error inesperado en el sistema. Puedes intentar recargar la sección o volver al inicio.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 bg-cyan-600 hover:bg-cyan-700 text-white shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            Intentar de nuevo
          </button>
          
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 bg-[var(--btn-sec-bg)] hover:bg-[var(--btn-sec-hover)] text-[var(--btn-sec-text)] border border-[var(--btn-sec-border)] shadow-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}