import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Hook seguro de hidratação (React 19 / Next.js) usando useSyncExternalStore.
 * Retorna false no servidor (SSR) e true no cliente após a montagem,
 * eliminando erros de hidratação e evitando setState em useEffect.
 */
export function useIsMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}
