import React, { useState } from 'react';

const ImageWithFallback = ({ src, alt, className, style: externalStyle, ...props }) => {
  const [imgSrc, setImgSrc] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // High-quality local jewelry placeholder (Consistent with brand aesthetic)
  const fallbackSrc = `${process.env.PUBLIC_URL || ''}/assets/images/bridal.png`;

  React.useEffect(() => {
    // If src is a local path, ensure it has PUBLIC_URL
    let finalSrc = src;
    if (finalSrc && finalSrc.startsWith('/assets/')) {
      finalSrc = `${process.env.PUBLIC_URL || ''}${finalSrc}`;
    }
    setImgSrc(finalSrc);
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <div
      className={`image-fallback-wrapper${className ? ' ' + className : ''}`}
      style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', ...externalStyle }}
    >
      {/* Shimmer shown only while loading */}
      {!isLoaded && (
        <div
          className="loading-shimmer"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, #f0f0f0 25%, #f8f8f8 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite linear',
            zIndex: 1,
          }}
        />
      )}
      <img
        {...props}
        src={imgSrc}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 1,
          transform: isLoaded ? 'scale(1)' : 'scale(1.04)',
          transition: 'transform 0.5s ease',
          position: 'relative',
          zIndex: 2,
        }}
      />
    </div>
  );
};

export default ImageWithFallback;
