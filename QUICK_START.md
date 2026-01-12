# Quick Start Guide - Pokemon Card Component

## How to Use in Expo Snack

### Step 1: Create a New Snack
1. Go to [snack.expo.dev](https://snack.expo.dev)
2. Click "Create Snack" or sign in

### Step 2: Add Dependencies
In your Snack's `package.json`, add:
```json
{
  "dependencies": {
    "expo-image": "~3.0.10",
    "expo-linear-gradient": "~15.0.7",
    "@expo/vector-icons": "^15.0.3"
  }
}
```

### Step 3: Copy Components
1. Copy `components/TypeBadge.tsx` to your Snack
2. Copy `components/PokemonCard.tsx` to your Snack

### Step 4: Copy the App
Copy the contents of `App.tsx` to replace the default `App.tsx` in your Snack.

### Step 5: Run!
Click "Run" or press `Cmd+R` (Mac) / `Ctrl+R` (Windows)

## Minimal Example

```tsx
// App.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PokemonCard } from './components/PokemonCard';

export default function App() {
  return (
    <View style={styles.container}>
      <PokemonCard
        id={1}
        name="bulbasaur"
        imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        types={["grass", "poison"]}
        onPress={() => alert('Card pressed!')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
```

## Files to Copy

For full functionality:
- ✅ `components/TypeBadge.tsx` - Type badge component
- ✅ `components/PokemonCard.tsx` - Main Pokemon card component
- ✅ `App.tsx` - Example usage and showcase

## Dependencies Required

- `expo-image` - For optimized image loading
- `expo-linear-gradient` - For gradient backgrounds
- `@expo/vector-icons` - For decorative icons

That's it! 🎉
