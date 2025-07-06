import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ModernCardProps {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  link?: string;
  tags?: string[];
  onClick?: () => void;
  className?: string;
}

const ModernCard: React.FC<ModernCardProps> = ({
  image,
  title,
  subtitle,
  description,
  link,
  tags,
  onClick,
  className = ''
}) => {
  const CardContent = () => (
    <motion.div 
      className={`card-modern group h-full flex flex-col ${className}`}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {tags && tags.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.span 
                key={index}
                className="bg-accent-600/90 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="flex flex-col flex-grow p-4 sm:p-5">
        {subtitle && (
          <motion.span 
            className="text-accent-600 dark:text-accent-400 text-sm font-medium mb-1"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1, x: 3 }}
            transition={{ duration: 0.2 }}
          >
            {subtitle}
          </motion.span>
        )}
        <motion.h3 
          className="text-lg sm:text-xl font-bold text-primary-800 dark:text-white mb-2 line-clamp-2"
          initial={{ opacity: 0.9 }}
          whileHover={{ opacity: 1, x: 3 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        {description && (
          <p className="text-neutral-600 dark:text-neutral-300 text-sm line-clamp-3 mb-4">
            {description}
          </p>
        )}
        <div className="mt-auto pt-4">
          <motion.div 
            className="bg-accent-600 text-white text-center py-2 rounded-lg font-medium text-sm hover-shine"
            whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(234, 88, 12, 0.4)' }}
            whileTap={{ y: 0 }}
          >
            <span className="relative z-10">Explore</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  if (link) {
    return (
      <Link to={link} className="block h-full">
        <CardContent />
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className="block w-full text-left h-full">
        <CardContent />
      </button>
    );
  }

  return <CardContent />;
};

export default ModernCard;