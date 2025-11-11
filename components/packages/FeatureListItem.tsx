import React from 'react';
import { PackageFeature } from '../../types';
import { CheckIcon, XMarkIcon } from '../Icons';

interface FeatureListItemProps {
    feature: PackageFeature;
    colorClass: string;
}

/**
 * Komponen untuk menampilkan satu item fitur dalam kartu paket.
 * Menampilkan ikon yang berbeda (centang/silang) dan gaya teks
 * berdasarkan ketersediaan fitur.
 */
const FeatureListItem: React.FC<FeatureListItemProps> = ({ feature, colorClass }) => {
    return (
        <li className="flex items-start">
            {feature.available ? (
                <CheckIcon className={`flex-shrink-0 w-6 h-6 mr-2 ${colorClass}`} />
            ) : (
                <XMarkIcon className="flex-shrink-0 w-6 h-6 mr-2 text-gray-500" />
            )}
            <span className={feature.available ? 'text-gray-300' : 'text-gray-500 line-through'}>
                {feature.text}
            </span>
        </li>
    );
};

export default FeatureListItem;
