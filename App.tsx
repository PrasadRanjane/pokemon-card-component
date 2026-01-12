/**
 * Expo Snack: Pokemon Card Component
 * 
 * A beautiful, reusable card component for displaying Pokemon information.
 * Features gradient backgrounds, image display, type badges, and pressable support.
 * 
 * Features:
 * - Gradient backgrounds based on Pokemon types
 * - Multiple size variants (small, default, large)
 * - Pressable/clickable support
 * - Decorative background icons
 * - Responsive design
 * - Dark mode support
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useColorScheme,
} from 'react-native';
import { PokemonCard } from './components/PokemonCard';

// Sample Pokemon data
const samplePokemon = [
  {
    id: 1,
    name: 'bulbasaur',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    types: ['grass', 'poison'],
  },
  {
    id: 4,
    name: 'charmander',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    types: ['fire'],
  },
  {
    id: 7,
    name: 'squirtle',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
    types: ['water'],
  },
  {
    id: 25,
    name: 'pikachu',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    types: ['electric'],
  },
  {
    id: 150,
    name: 'mewtwo',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png',
    types: ['psychic'],
  },
  {
    id: 149,
    name: 'dragonite',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png',
    types: ['dragon', 'flying'],
  },
  {
    id: 94,
    name: 'gengar',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png',
    types: ['ghost', 'poison'],
  },
  {
    id: 143,
    name: 'snorlax',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png',
    types: ['normal'],
  },
];

export default function App() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? '#0f172a' : '#f8fafc' },
      ]}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.title, { color: isDark ? '#f1f5f9' : '#1e293b' }]}>
            Pokemon Card Component
          </Text>
          <Text
            style={[styles.subtitle, { color: isDark ? '#cbd5e1' : '#64748b' }]}
          >
            Beautiful cards with gradient backgrounds, images, and type badges
          </Text>
        </View>

        {/* Default Size */}
        <View style={styles.section}>
          <Text
            style={[styles.sectionTitle, { color: isDark ? '#f1f5f9' : '#1e293b' }]}
          >
            Default Size (Grid)
          </Text>
          <View style={styles.grid}>
            {samplePokemon.slice(0, 4).map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                imageUrl={pokemon.imageUrl}
                types={pokemon.types}
              />
            ))}
          </View>
        </View>

        {/* Small Size */}
        <View style={styles.section}>
          <Text
            style={[styles.sectionTitle, { color: isDark ? '#f1f5f9' : '#1e293b' }]}
          >
            Small Size (Compact Grid)
          </Text>
          <View style={styles.gridSmall}>
            {samplePokemon.slice(0, 6).map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                imageUrl={pokemon.imageUrl}
                types={pokemon.types}
                size="small"
              />
            ))}
          </View>
        </View>

        {/* Large Size */}
        <View style={styles.section}>
          <Text
            style={[styles.sectionTitle, { color: isDark ? '#f1f5f9' : '#1e293b' }]}
          >
            Large Size (Full Width)
          </Text>
          {samplePokemon.slice(0, 2).map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              imageUrl={pokemon.imageUrl}
              types={pokemon.types}
              size="large"
            />
          ))}
        </View>

        {/* Pressable Cards */}
        <View style={styles.section}>
          <Text
            style={[styles.sectionTitle, { color: isDark ? '#f1f5f9' : '#1e293b' }]}
          >
            Pressable Cards
          </Text>
          <Text
            style={[styles.description, { color: isDark ? '#cbd5e1' : '#64748b' }]}
          >
            Tap a card to see it in action
          </Text>
          <View style={styles.grid}>
            {samplePokemon.slice(0, 4).map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                imageUrl={pokemon.imageUrl}
                types={pokemon.types}
                onPress={() => {
                  console.log(`${pokemon.name} card pressed!`);
                  alert(`You selected ${pokemon.name}!`);
                }}
              />
            ))}
          </View>
        </View>

        {/* Without Background Icon */}
        <View style={styles.section}>
          <Text
            style={[styles.sectionTitle, { color: isDark ? '#f1f5f9' : '#1e293b' }]}
          >
            Without Background Icon
          </Text>
          <View style={styles.grid}>
            {samplePokemon.slice(4, 6).map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                imageUrl={pokemon.imageUrl}
                types={pokemon.types}
                showBackgroundIcon={false}
              />
            ))}
          </View>
        </View>

        {/* Usage Examples */}
        <View style={styles.section}>
          <Text
            style={[styles.sectionTitle, { color: isDark ? '#f1f5f9' : '#1e293b' }]}
          >
            Usage Examples
          </Text>
          <View
            style={[
              styles.codeBlock,
              { backgroundColor: isDark ? '#1e293b' : '#ffffff' },
            ]}
          >
            <Text
              style={[styles.codeText, { color: isDark ? '#cbd5e1' : '#1e293b' }]}
            >
              {'<PokemonCard\n'}
              {'  id={1}\n'}
              {'  name="bulbasaur"\n'}
              {'  imageUrl="https://..."\n'}
              {'  types={["grass", "poison"]}\n'}
              {'/>\n\n'}
              {'<PokemonCard\n'}
              {'  id={25}\n'}
              {'  name="pikachu"\n'}
              {'  imageUrl="https://..."\n'}
              {'  types={["electric"]}\n'}
              {'  size="large"\n'}
              {'  onPress={() => console.log("Pressed!")}\n'}
              {'/>'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  header: {
    marginBottom: 32,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridSmall: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 8,
  },
  codeBlock: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 14,
    lineHeight: 20,
  },
});
