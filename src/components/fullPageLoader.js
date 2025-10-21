// app/components/FullPageLoader.js
'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FullPageLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center font-mono"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="text-5xl mb-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              🧠
            </motion.div>
            <div className="text-xl flex gap-1">
              <span>Thinking</span>
              <motion.span
                className="animate-bounce"
                transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
              >
                .
              </motion.span>
              <motion.span
                className="animate-bounce"
                transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
              >
                .
              </motion.span>
              <motion.span
                className="animate-bounce"
                transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
              >
                .
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={loading ? 'pointer-events-none' : ''}
      >
        {children}
      </motion.div>
    </>
  );
};

export default FullPageLoader;
