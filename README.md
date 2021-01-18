# svelte-spins

> [loaders.css](https://github.com/ConnorAtherton/loaders.css) as Svelte components.

A **zero dependency** spinner/loader library using [loaders.css](https://github.com/ConnorAtherton/loaders.css) as Svelte components.

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

```svelte
<script>
  import { BallPulseSync } from "svelte-spins";
  let color = "red";
  let classes = "button-loader";
  let style="background: green; padding: 3rem;";

</script>

<BallPulseSync {color} {classes} {style} />
```

## API

### Props

All props are optional.

| Name    | Value    | Default Value | Function                           |
| :------ | :------- | :------------ | :--------------------------------- |
| classes | `string` | `null`        | Classes to be applied              |
| style   | `string` | `null`        | Inline styles to be applied        |
| color   | `string` | `black`       | The foreground color of the loader |

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
