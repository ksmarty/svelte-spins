<script lang="ts">
    export let classes: string = "";
    export let style: string = "";
</script>

<style>
    .ball-clip-rotate-multiple {
        position: relative;
    }
    .ball-clip-rotate-multiple > div {
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        position: absolute;
        left: -20px;
        top: -20px;
        border: 2px solid #fff;
        border-bottom-color: transparent;
        border-top-color: transparent;
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
        border-color: #fff transparent #fff transparent;
        -webkit-animation-direction: reverse;
        animation-direction: reverse;
    }
</style>

<div class={'ball-clip-rotate-multiple ' + classes} {style}>
    <div />
    <div />
</div>
