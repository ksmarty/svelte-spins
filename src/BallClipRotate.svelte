<script lang="ts">
    export let classes: string = "";
    export let style: string = "";
    export let color: string = "black";
</script>

<div class={"ball-clip-rotate " + classes} {style}>
    <div style="border: 2px solid {color};"></div>
</div>

<style>
    .ball-clip-rotate > div {
        border-radius: 100%;
        margin: 2px;
        border-bottom-color: transparent !important;
        height: 26px;
        width: 26px;
        background: 0 0 !important;
        display: inline-block;
        -webkit-animation: rotate 0.75s 0s linear infinite;
        animation: rotate 0.75s 0s linear infinite;
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
