# svelte-spins

> [loaders.css](https://github.com/ConnorAtherton/loaders.css) as Svelte components.

A **zero dependency** spinner/loader library using [loaders.css](https://github.com/ConnorAtherton/loaders.cs) as Svelte components.

## [Demo](https://svelte-spins-demo.vercel.app)

## Install

`svelte-spins` can be installed using `yarn` or `npm`.

```bash
yarn add svelte-spins
```

```bash
npm i svelte-spins
```

## Usage

### Import

```svelte
<script>
  import { BallPulseSync } from "svelte-spins";
</script>

<BallPulseSync />
```

## API

### Props

All props are optional.

| Name    | Value    | Function                    |
| :------ | :------- | :-------------------------- |
| classes | `string` | Classes to be applied       |
| style   | `string` | Inline styles to be applied |

## Loaders

-   BallBeat
-   BallClipRotate
-   BallClipRotateMultiple
-   BallClipRotatePulse
-   BallGridBeat
-   BallGridPulse
-   BallPulse
-   BallPulseRise
-   BallPulseSync
-   BallRotate
-   BallScale
-   BallScaleMultiple
-   BallScaleRipple
-   BallScaleRippleMultiple
-   BallSpinFadeLoader
-   BallTrianglePath
-   BallZigZag
-   BallZigZagDeflect
-   CubeTransition
-   LineScale
-   LineScaleParty
-   LineScalePulseOut
-   LineScalePulseOutRapid
-   LineSpinFadeLoader
-   Pacman
-   SemiCircleSpin
-   SquareSpin
-   TriangleSkewSpin

## License

[MIT](LICENSE)
