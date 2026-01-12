# Pokemon Card Component - Expo Snack

A beautiful, reusable card component for displaying Pokemon information with gradient backgrounds, images, type badges, and pressable support.

## Features

- ✅ **Gradient Backgrounds** - Dynamic gradients based on Pokemon types
- ✅ **Multiple Sizes** - Small, default, and large variants
- ✅ **Pressable Support** - Optional onPress callback
- ✅ **Type Badges** - Integrated type badge display
- ✅ **Decorative Icons** - Optional Pokeball background icon
- ✅ **Responsive Design** - Adapts to screen width
- ✅ **Dark Mode Support** - Automatic theme detection
- ✅ **Image Loading** - Uses expo-image for optimized loading

## Installation in Expo Snack

1. Copy `components/PokemonCard.tsx` and `components/TypeBadge.tsx` to your Snack
2. Copy `App.tsx` for examples
3. Add dependencies: `expo-image`, `expo-linear-gradient`, `@expo/vector-icons`
4. Run!

## Usage

### Basic Usage

```tsx
import { PokemonCard } from './components/PokemonCard';

<PokemonCard
  id={1}
  name="bulbasaur"
  imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  types={["grass", "poison"]}
/>
```

### With Press Handler

```tsx
<PokemonCard
  id={25}
  name="pikachu"
  imageUrl="https://..."
  types={["electric"]}
  onPress={() => console.log('Card pressed!')}
/>
```

### Size Variants

```tsx
<PokemonCard {...props} size="small" />
<PokemonCard {...props} size="default" />
<PokemonCard {...props} size="large" />
```

### Without Background Icon

```tsx
<PokemonCard {...props} showBackgroundIcon={false} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `number` | **required** | Pokemon ID number |
| `name` | `string` | **required** | Pokemon name |
| `imageUrl` | `string` | **required** | URL to Pokemon image |
| `types` | `string[]` | **required** | Array of Pokemon types |
| `onPress` | `() => void` | `undefined` | Callback when card is pressed |
| `size` | `'small' \| 'default' \| 'large'` | `'default'` | Card size variant |
| `showBackgroundIcon` | `boolean` | `true` | Show decorative Pokeball icon |

## Supported Types

All 18 Pokemon types are supported with their official colors:
- normal, fire, water, electric, grass, ice
- fighting, poison, ground, flying, psychic, bug
- rock, ghost, dragon, dark, steel, fairy

## Component Structure

```
PokemonCard
├── LinearGradient (background)
│   ├── Pokemon ID (top-right)
│   ├── Pokemon Image (center)
│   ├── Pokemon Name (bottom)
│   ├── Type Badges (bottom)
│   └── Background Icon (decorative)
```

## Dependencies

- `expo-image` - Optimized image loading
- `expo-linear-gradient` - Gradient backgrounds
- `@expo/vector-icons` - Icon library

## Example Snack

See `App.tsx` for complete examples showcasing all features and variants.

## Customization

The component automatically generates gradient colors based on Pokemon types. To customize colors, modify the `typeColors` object in `PokemonCard.tsx`.

## License

Free to use in your projects!
