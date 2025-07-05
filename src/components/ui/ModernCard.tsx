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
    <div className={`card-modern group h-full flex flex-col ${className}`}>
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {tags && tags.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-accent-600/90 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="flex flex-col flex-grow p-4 sm:p-5">
        {subtitle && (
          <span className="text-accent-600 dark:text-accent-400 text-sm font-medium mb-1">
            {subtitle}
          </span>
        )}
        <h3 className="text-lg sm:text-xl font-bold text-primary-800 dark:text-white mb-2 line-clamp-2">
          {title}
        </h3>
        {description && (
          <p className="text-neutral-600 dark:text-neutral-300 text-sm line-clamp-3 mb-4">
            {description}
          </p>
        )}
        <div className="mt-auto pt-4">
          <motion.div 
            className="bg-accent-600 text-white text-center py-2 rounded-lg font-medium text-sm"
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
          >
            Explore
          </motion.div>
        </div>
      </div>
    </div>
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