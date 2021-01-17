<script lang="ts">
    export let classes: string = "";
    export let style: string = "";
</script>

<style>
    .ball-clip-rotate-pulse {
        position: relative;
        -webkit-transform: translateY(-15px);
        transform: translateY(-15px);
    }
    .ball-clip-rotate-pulse > div {
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        position: absolute;
        top: 0px;
        left: 0px;
        border-radius: 100%;
    }
    .ball-clip-rotate-pulse > div:first-child {
        background: #fff;
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
        border: 2px solid #fff;
        width: 30px;
        height: 30px;
        left: -16px;
        top: -2px;
        background: transparent;
        border: 2px solid;
        border-color: #fff transparent #fff transparent;
        -webkit-animation: rotate 1s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9)
            infinite;
        animation: rotate 1s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
    }
</style>

<div class={'ball-clip-rotate-pulse ' + classes} {style}>
    <div />
    <div />
</div>
