/**
 * TypeBadge Component
 * 
 * A minimal badge component for displaying Pokemon types.
 * Used within the PokemonCard component.
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Pokemon type colors
const typeColors: { [key: string]: string } = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

interface TypeBadgeProps {
  type: string;
  style?: any;
}

export const TypeBadge: React.FC<TypeBadgeProps> = ({ type, style }) => {
  const backgroundColor = typeColors[type.toLowerCase()] || typeColors.normal;
  const formattedType = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <View style={[styles.badge, { backgroundColor }, style]}>
      <Text style={styles.text}>{formattedType}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  text: {
    fontSize: 11,
    fontWeight: '600',
    color: '#FFFFFF',
    textTransform: 'capitalize',
  },
});
