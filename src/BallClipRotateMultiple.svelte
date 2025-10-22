<script lang="ts">
    export let classes: string = "";
    export let style: string = "";
    export let color: string = "black";
</script>

<div class={"ball-clip-rotate-multiple " + classes} {style}>
    <div style="border: 2px solid {color};"></div>
    <div style="border: 2px solid {color};"></div>
</div>

<style>
    .ball-clip-rotate-multiple {
        position: relative;
    }
    .ball-clip-rotate-multiple > div {
        position: absolute;
        left: -20px;
        top: -20px;
        border-bottom-color: transparent !important;
        border-top-color: transparent !important;
        border-radius: 100%;
        height: 35px;
        width: 35px;
        -webkit-animation: rotate 1s 0s ease-in-out infinite;
        animation: rotate 1s 0s ease-in-out infinite;
    }
    .ball-clip-rotate-multiple > div:last-child {
        display: inline-block;
        top: -10px;
        left: -10px;
        width: 15px;
        height: 15px;
        -webkit-animation-duration: 0.5s;
        animation-duration: 0.5s;
        -webkit-animation-direction: reverse;
        animation-direction: reverse;
    }
    @-webkit-keyframes rotate {
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
    @keyframes rotate {
        0% {
            -webkit-transform: rotate(0) scale(1);
            transform: rotate(0) scale(1);
        }
        50% {
            -webkit-transform: rotate(180deg) scale(0.6);
            transform: rotate(180deg) scale(0.6);
        }
        100% {
            -webkit-transform: rotate(360deg) scale(1);
            transform: rotate(360deg) scale(1);
        }
    }
</style>
