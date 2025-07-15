import { ErrorBoundary } from 'react-error-boundary';

export function ComponentErrorBoundary({
  children,
  fallback,
  onError,
  onReset,
}: {
  children: React.ReactNode;
  fallback: React.ReactNode;
  onError?: (error: Error) => void;
  onReset?: () => void;
}) {
  return (
    <ErrorBoundary onError={onError} onReset={onReset} fallbackRender={({ error }) => fallback}>
      {children}
    </ErrorBoundary>
  );
}
