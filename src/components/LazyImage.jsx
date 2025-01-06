import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LazyImage = ({ src, alt, className, priority = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(
    priority ? src : 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
  );

  useEffect(() => {
    if (!priority) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
    }
  }, [src, priority]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded || priority ? 1 : 0.5 }}
      transition={{ duration: 0.3 }}
      className={`relative ${className}`}
    >
      <img
        src={imageSrc}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
      />
    </motion.div>
  );
};

export default LazyImage;
