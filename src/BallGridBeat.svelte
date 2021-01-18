<script lang="ts">
    export let classes: string = "";
    export let style: string = "";
    export let color: string = "black";
</script>

<style>
    @-webkit-keyframes ball-grid-beat {
        50% {
            opacity: 0.7;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes ball-grid-beat {
        50% {
            opacity: 0.7;
        }
        100% {
            opacity: 1;
        }
    }

    .ball-grid-beat {
        width: 57px;
    }
    .ball-grid-beat > div:nth-child(1) {
        -webkit-animation-delay: 0.15s;
        animation-delay: 0.15s;
        -webkit-animation-duration: 1.45s;
        animation-duration: 1.45s;
    }
    .ball-grid-beat > div:nth-child(2) {
        -webkit-animation-delay: -0.02s;
        animation-delay: -0.02s;
        -webkit-animation-duration: 0.97s;
        animation-duration: 0.97s;
    }
    .ball-grid-beat > div:nth-child(3) {
        -webkit-animation-delay: 0.66s;
        animation-delay: 0.66s;
        -webkit-animation-duration: 1.23s;
        animation-duration: 1.23s;
    }
    .ball-grid-beat > div:nth-child(4) {
        -webkit-animation-delay: 0.64s;
        animation-delay: 0.64s;
        -webkit-animation-duration: 1.24s;
        animation-duration: 1.24s;
    }
    .ball-grid-beat > div:nth-child(5) {
        -webkit-animation-delay: -0.19s;
        animation-delay: -0.19s;
        -webkit-animation-duration: 1.13s;
        animation-duration: 1.13s;
    }
    .ball-grid-beat > div:nth-child(6) {
        -webkit-animation-delay: 0.69s;
        animation-delay: 0.69s;
        -webkit-animation-duration: 1.42s;
        animation-duration: 1.42s;
    }
    .ball-grid-beat > div:nth-child(7) {
        -webkit-animation-delay: 0.58s;
        animation-delay: 0.58s;
        -webkit-animation-duration: 1.14s;
        animation-duration: 1.14s;
    }
    .ball-grid-beat > div:nth-child(8) {
        -webkit-animation-delay: 0.21s;
        animation-delay: 0.21s;
        -webkit-animation-duration: 1.17s;
        animation-duration: 1.17s;
    }
    .ball-grid-beat > div:nth-child(9) {
        -webkit-animation-delay: -0.18s;
        animation-delay: -0.18s;
        -webkit-animation-duration: 0.65s;
        animation-duration: 0.65s;
    }
    .ball-grid-beat > div {
        background-color: #fff;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        margin: 2px;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        display: inline-block;
        float: left;
        -webkit-animation-name: ball-grid-beat;
        animation-name: ball-grid-beat;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-delay: 0;
        animation-delay: 0;
    }
</style>

<div class={'ball-grid-beat ' + classes} {style}>
    <div style="background-color: {color};" />
    <div style="background-color: {color};" />
    <div style="background-color: {color};" />
    <div style="background-color: {color};" />
    <div style="background-color: {color};" />
    <div style="background-color: {color};" />
    <div style="background-color: {color};" />
    <div style="background-color: {color};" />
    <div style="background-color: {color};" />
</div>
