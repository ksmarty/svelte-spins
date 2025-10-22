<script lang="ts">
    export let classes: string = "";
    export let style: string = "";
    export let color: string = "black";
</script>

<div class={"ball-rotate " + classes} {style}>
    <div style="background-color: {color};"></div>
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
    .ball-rotate > div {
        margin: 2px;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }
    .ball-rotate > div:first-child {
        -webkit-animation: rotate 1s 0s cubic-bezier(0.7, -0.13, 0.22, 0.86)
            infinite;
        animation: rotate 1s 0s cubic-bezier(0.7, -0.13, 0.22, 0.86) infinite;
    }
    .ball-rotate > div:after,
    .ball-rotate > div:before {
        margin: 2px;
        content: "";
        position: absolute;
        opacity: 0.8;
    }
    .ball-rotate > div:before {
        top: 0;
        left: -28px;
    }
    .ball-rotate > div:after {
        top: 0;
        left: 25px;
    }
    .ball-rotate,
    .ball-rotate > div {
        position: relative;
    }
    .ball-rotate > div,
    .ball-rotate > div:after,
    .ball-rotate > div:before {
        width: 15px;
        height: 15px;
        border-radius: 100%;
    }
    .ball-rotate > div:after,
    .ball-rotate > div:before {
        background-color: inherit;
    }
</style>
