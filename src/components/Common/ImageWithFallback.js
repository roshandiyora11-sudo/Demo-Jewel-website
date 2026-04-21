import React, { useState } from 'react';

const ImageWithFallback = ({ src, alt, className, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // High-quality local jewelry placeholder (Consistent with brand aesthetic)
  const fallbackSrc = "/assets/images/bridal.png";

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <div 
      className={`image-fallback-wrapper ${isLoaded ? 'loaded' : 'loading'} ${className}`}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <img
        {...props}
        src={imgSrc}
        alt={alt}
        className={`fallback-img ${isLoaded ? 'visible' : 'hidden'}`}
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'scale(1)' : 'scale(1.05)',
        }}
      />
      {!isLoaded && (
        <div 
          className="loading-shimmer" 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, #f0f0f0 25%, #f8f8f8 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite linear',
          }}
        />
      )}
    </div>
  );
};

export default ImageWithFallback;
