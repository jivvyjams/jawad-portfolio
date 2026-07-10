interface SectionErrorProps {
  error: unknown;
  resetErrorBoundary: () => void;
}

export function SectionError({ error, resetErrorBoundary }: SectionErrorProps) {
  const message = error instanceof Error ? error.message : String(error);

  return (
    <div
      role="alert"
      className="rounded-lg border border-red-200 bg-red-50 p-6 text-center"
    >
      <p className="font-medium text-red-800">This section failed to load</p>
      <p className="mt-1 text-sm text-red-600">{message}</p>
      <button
        onClick={resetErrorBoundary}
        className="mt-4 rounded-md bg-red-100 px-4 py-2 text-sm font-medium text-red-800 hover:bg-red-200"
      >
        Try again
      </button>
    </div>
  );
}
