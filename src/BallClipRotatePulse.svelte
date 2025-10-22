<script lang="ts">
    export let classes: string = "";
    export let style: string = "";
    export let color: string = "black";
</script>

<div class={"ball-clip-rotate-pulse " + classes} {style}>
    <div style="background-color: {color};"></div>
    <div style="border-color: {color} transparent;" />
</div>

<style>
    @keyframes rotate {
        0% {
            -webkit-transform: rotate(0);
            transform: rotate(0);
        }
        50% {
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes scale {
        30% {
            -webkit-transform: scale(0.3);
            transform: scale(0.3);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
    .ball-clip-rotate-pulse {
        position: relative;
        -webkit-transform: translateY(-15px);
        transform: translateY(-15px);
    }
    .ball-clip-rotate-pulse > div {
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 100%;
    }
    .ball-clip-rotate-pulse > div:first-child {
        height: 16px;
        width: 16px;
        top: 7px;
        left: -7px;
        -webkit-animation: scale 1s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9)
            infinite;
        animation: scale 1s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
    }
    .ball-clip-rotate-pulse > div:last-child {
        position: absolute;
        width: 30px;
        height: 30px;
        left: -16px;
        top: -2px;
        background: 0 0;
        border: 2px solid;
        -webkit-animation: rotate 1s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9)
            infinite;
        animation: rotate 1s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
    }
</style>
