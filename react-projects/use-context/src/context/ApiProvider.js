import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";
import { commitGraphData } from "../data/commit-data";

const ApiContext = createContext(null);

export function ApiProvider({ children }){
    const [commits, setCommits] = useState([]);
    const [status, setStatus] = useState("idle");   // idle | loading | success | error
    const [error, setError] = useState(null);

    const loadCommits = useCallback(async (signal) => {
        setStatus("loading");
        setError(null);
    
        try {
          const res = await commitGraphData()
          // if (!res.ok) throw new Error(`Request failed: ${res.status}`);
          // const data = await res.json();
          setCommits(res);
          setStatus("success");
        } catch (err) {
          console.log("E:", err)
          if (err.name === "AbortError") return;
          setError(err);
          setStatus("error");
        }
      }, []);

      useEffect(() => {
        const controller = new AbortController();
        loadCommits(controller.signal);
        return () => controller.abort();
      }, [loadCommits]);

      const refetch = useCallback(() => loadCommits(), [loadCommits]);

    const value = useMemo(
        () => ({ commits, status, error, refetch }),
        [commits, status, error, refetch]
    );

    return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}

export function useApi() {
    const ctx = useContext(ApiContext);
    if (!ctx) throw new Error("useApi must be used within <ApiProvider>");
    return ctx;
}