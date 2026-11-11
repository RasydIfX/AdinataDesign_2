'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="id">
      <body className="bg-[#faf8f5] text-zinc-900 flex items-center justify-center min-h-screen">
        <div className="text-center p-6 space-y-4">
          <h2 className="text-xl font-bold">Terjadi Kesalahan Sistem</h2>
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-zinc-950 text-white text-xs uppercase font-mono tracking-wider"
          >
            Muat Ulang
          </button>
        </div>
      </body>
    </html>
  );
}
