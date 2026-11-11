/* Original: /Users/roger/Sites/coding-algorithms/practice/multiFetchReact.tsx | https://github.com/rogerprz/coding-algorithms/blob/main/practice/multiFetchReact.tsx */
import React, { useState, useEffect, useCallback } from "react";

const ProductDetailsPage = ({ productId }) => {
  // State for each data type
  const [productInfo, setProductInfo] = useState(null);
  const [productReviews, setProductReviews] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState(null);

  // Loading states
  const [loadingInfo, setLoadingInfo] = useState(true);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [loadingRelated, setLoadingRelated] = useState(true);

  // Error states
  const [infoError, setInfoError] = useState(null);
  const [reviewsError, setReviewsError] = useState(null);
  const [relatedError, setRelatedError] = useState(null);

  // Retry counter refs
  const infoRetries = React.useRef(0);
  const reviewsRetries = React.useRef(0);
  const relatedRetries = React.useRef(0);

  // Function to fetch with retry logic
  const fetchWithRetry = useCallback(
    async (fetchFn, setData, setLoading, setError, retryCount) => {
      setLoading(true);

      try {
        // Add AbortController for cleanup
        const controller = new AbortController();
        const signal = controller.signal;

        // Store controller in ref for cleanup
        const abortControllerRef = { current: controller };

        try {
          const data = await fetchFn(productId, signal);
          if (!signal.aborted) {
            setData(data);
            setLoading(false);
          }
        } catch (error) {
          // Don't retry or set error state if aborted
          if (error.name === "AbortError") return;

          // Retry logic
          if (retryCount.current < 3) {
            retryCount.current += 1;
            console.log(`Retrying... Attempt ${retryCount.current}`);

            // Wait 1 second before retrying
            setTimeout(() => {
              fetchWithRetry(
                fetchFn,
                setData,
                setLoading,
                setError,
                retryCount,
              );
            }, 1000);
          } else {
            setError(
              `Failed after ${retryCount.current} retries: ${error.message}`,
            );
            setLoading(false);
          }
        }

        return () => {
          // Cleanup function to abort fetch if component unmounts
          abortControllerRef.current.abort();
        };
      } catch (error) {
        setError(`Unexpected error: ${error.message}`);
        setLoading(false);
      }
    },
    [productId],
  );

  // Mock API fetch functions that accept signal for abort functionality
  const fetchProductInfo = useCallback((id, signal) => {
    return fetch(`https://api.example.com/products/${id}`, { signal }).then(
      (response) => {
        if (!response.ok) throw new Error(`HTTP error ${response.status}`);
        return response.json();
      },
    );
  }, []);

  const fetchProductReviews = useCallback((id, signal) => {
    return fetch(`https://api.example.com/products/${id}/reviews`, {
      signal,
    }).then((response) => {
      if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      return response.json();
    });
  }, []);

  const fetchRelatedProducts = useCallback((id, signal) => {
    return fetch(`https://api.example.com/products/${id}/related`, {
      signal,
    }).then((response) => {
      if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      return response.json();
    });
  }, []);

  useEffect(() => {
    // Reset retry counters when product ID changes
    infoRetries.current = 0;
    reviewsRetries.current = 0;
    relatedRetries.current = 0;

    // Start the three independent fetch operations
    const cleanupInfo = fetchWithRetry(
      fetchProductInfo,
      setProductInfo,
      setLoadingInfo,
      setInfoError,
      infoRetries,
    );

    const cleanupReviews = fetchWithRetry(
      fetchProductReviews,
      setProductReviews,
      setLoadingReviews,
      setReviewsError,
      reviewsRetries,
    );

    const cleanupRelated = fetchWithRetry(
      fetchRelatedProducts,
      setRelatedProducts,
      setLoadingRelated,
      setRelatedError,
      relatedRetries,
    );

    // Return cleanup function to prevent memory leaks
    return () => {
      cleanupInfo && cleanupInfo();
      cleanupReviews && cleanupReviews();
      cleanupRelated && cleanupRelated();
    };
  }, [
    productId,
    fetchWithRetry,
    fetchProductInfo,
    fetchProductReviews,
    fetchRelatedProducts,
  ]);

  return (
    <div className="product-details-page">
      <h1>Product Details</h1>

      {/* Product Info Section */}
      <section>
        <h2>Product Information</h2>
        {loadingInfo && <p>Loading product information...</p>}
        {infoError && <p className="error">Error: {infoError}</p>}
        {productInfo && (
          <div>
            <h3>{productInfo.name}</h3>
            <p>Price: ${productInfo.price}</p>
            <p>{productInfo.description}</p>
          </div>
        )}
      </section>

      {/* Reviews Section */}
      <section>
        <h2>Customer Reviews</h2>
        {loadingReviews && <p>Loading reviews...</p>}
        {reviewsError && <p className="error">Error: {reviewsError}</p>}
        {productReviews && (
          <ul>
            {productReviews.map((review, index) => (
              <li key={index}>
                <p>{review.text}</p>
                <div>Rating: {review.rating}/5</div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Related Products Section */}
      <section>
        <h2>Related Products</h2>
        {loadingRelated && <p>Loading related products...</p>}
        {relatedError && <p className="error">Error: {relatedError}</p>}
        {relatedProducts && (
          <div className="related-products-grid">
            {relatedProducts.map((product) => (
              <div key={product.id} className="product-card">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductDetailsPage;
