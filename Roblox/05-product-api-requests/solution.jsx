import React, { useEffect, useState } from "react";
import { mockAPI } from "./src/mockAPI.js";
function RequestSection({ title, method, productId, api }) {
  const [attempt, setAttempt] = useState(0);
  const [state, setState] = useState({ loading: true });
  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    setState({ loading: true });
    Promise.resolve()
      .then(() => api[method](productId, { signal: controller.signal }))
      .then(
        (data) => {
          if (active) setState({ data });
        },
        (error) => {
          if (active && error.name !== "AbortError") setState({ error });
        },
      );
    return () => {
      active = false;
      controller.abort();
    };
  }, [productId, api, method, attempt]);
  return (
    <section>
      <h3>{title}</h3>
      {state.loading ? (
        <p role="status">Loading…</p>
      ) : state.error ? (
        <>
          <p role="alert">{state.error.message}</p>
          <button onClick={() => setAttempt((value) => value + 1)}>
            Retry {title.toLowerCase()}
          </button>
        </>
      ) : !state.data || (Array.isArray(state.data) && !state.data.length) ? (
        <p>No {title.toLowerCase()} available.</p>
      ) : Array.isArray(state.data) ? (
        <ul>
          {state.data.map((item) => (
            <li key={item.id}>{item.text ?? item.name}</li>
          ))}
        </ul>
      ) : (
        <>
          <h4>{state.data.name}</h4>
          <p>{state.data.description}</p>
        </>
      )}
    </section>
  );
}
export default function ProductDetailsPage({ productId = "A", api = mockAPI }) {
  return (
    <div key={productId}>
      <h2>Product {productId}</h2>
      <RequestSection
        title="Info"
        method="getInfo"
        productId={productId}
        api={api}
      />
      <RequestSection
        title="Reviews"
        method="getReviews"
        productId={productId}
        api={api}
      />
      <RequestSection
        title="Related products"
        method="getRelated"
        productId={productId}
        api={api}
      />
    </div>
  );
}
