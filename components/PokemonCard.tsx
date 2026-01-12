/**
 * PokemonCard Component
 * 
 * A beautiful, reusable card component for displaying Pokemon information.
 * Features gradient backgrounds, image display, type badges, and pressable support.
 * 
 * @param id - Pokemon ID number
 * @param name - Pokemon name
 * @param imageUrl - URL to Pokemon image
 * @param types - Array of Pokemon types (e.g., ['fire', 'flying'])
 * @param onPress - Optional callback when card is pressed
 * @param size - Card size variant: 'small' | 'default' | 'large'
 * @param showBackgroundIcon - Show decorative Pokeball icon in background
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  useColorScheme,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TypeBadge } from './TypeBadge';

const { width } = Dimensions.get('window');

// Pokemon type colors for gradient backgrounds
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

export type PokemonCardSize = 'small' | 'default' | 'large';

interface PokemonCardProps {
  id: number;
  name: string;
  imageUrl: string;
  types: string[];
  onPress?: () => void;
  size?: PokemonCardSize;
  showBackgroundIcon?: boolean;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({
  id,
  name,
  imageUrl,
  types,
  onPress,
  size = 'default',
  showBackgroundIcon = true,
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  // Get gradient colors based on types
  const primaryColor = typeColors[types[0]?.toLowerCase()] || typeColors.normal;
  const secondaryColor = types[1]
    ? typeColors[types[1].toLowerCase()] || primaryColor
    : primaryColor;

  // Add opacity for gradient effect
  const gradientColors = [
    `${primaryColor}CC`, // 80% opacity
    `${secondaryColor}CC`,
  ];

  // Size configurations
  const sizeConfig = {
    small: {
      cardWidth: (width - 48) / 3,
      padding: 12,
      imageSize: (width - 48) / 3 * 0.5,
      nameSize: 14,
      idSize: 10,
      iconSize: 50,
    },
    default: {
      cardWidth: (width - 48) / 2,
      padding: 16,
      imageSize: (width - 48) / 2 * 0.6,
      nameSize: 18,
      idSize: 12,
      iconSize: 80,
    },
    large: {
      cardWidth: width - 32,
      padding: 20,
      imageSize: (width - 32) * 0.4,
      nameSize: 24,
      idSize: 14,
      iconSize: 100,
    },
  };

  const config = sizeConfig[size];

  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
  const formattedId = `#${String(id).padStart(3, '0')}`;

  const cardContent = (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[
        styles.card,
        {
          width: config.cardWidth,
          padding: config.padding,
          aspectRatio: size === 'large' ? undefined : 1,
          minHeight: size === 'large' ? 200 : undefined,
        },
      ]}
    >
      {/* Pokemon ID */}
      <Text
        style={[
          styles.pokemonId,
          {
            fontSize: config.idSize,
          },
        ]}
      >
        {formattedId}
      </Text>

      {/* Pokemon Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={[
            styles.pokemonImage,
            {
              width: config.imageSize,
              height: config.imageSize,
            },
          ]}
          contentFit="contain"
        />
      </View>

      {/* Pokemon Info */}
      <View style={styles.infoContainer}>
        <Text
          style={[
            styles.pokemonName,
            {
              fontSize: config.nameSize,
            },
          ]}
          numberOfLines={1}
        >
          {formattedName}
        </Text>

        {/* Type Badges */}
        <View style={styles.typesContainer}>
          {types.slice(0, 2).map((type, index) => (
            <TypeBadge key={index} type={type} />
          ))}
        </View>
      </View>

      {/* Decorative Pokeball Background */}
      {showBackgroundIcon && (
        <MaterialIcons
          name="catching-pokemon"
          size={config.iconSize}
          color="rgba(255, 255, 255, 0.1)"
          style={styles.backgroundIcon}
        />
      )}
    </LinearGradient>
  );

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={styles.wrapper}
      >
        {cardContent}
      </TouchableOpacity>
    );
  }

  return <View style={styles.wrapper}>{cardContent}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  card: {
    borderRadius: 20,
    position: 'relative',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  pokemonId: {
    position: 'absolute',
    top: 12,
    right: 12,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.8)',
    zIndex: 2,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  pokemonImage: {
    zIndex: 2,
  },
  infoContainer: {
    gap: 8,
    zIndex: 2,
  },
  pokemonName: {
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'capitalize',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  typesContainer: {
    flexDirection: 'row',
    gap: 6,
    flexWrap: 'wrap',
  },
  backgroundIcon: {
    position: 'absolute',
    bottom: -10,
    right: -10,
    zIndex: 1,
  },
});
