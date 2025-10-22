<script module lang="ts">
    export let classes: string = "";
    export let style: string = "";
    export let color: string = "black";
</script>

<div class={"ball-beat " + classes} {style}>
    <div style="background-color: {color};"></div>
    <div style="background-color: {color};"></div>
    <div style="background-color: {color};"></div>
</div>

<style>
    @-webkit-keyframes ball-beat {
        50% {
            opacity: 0.2;
            -webkit-transform: scale(0.75);
            transform: scale(0.75);
        }
        100% {
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    @keyframes ball-beat {
        50% {
            opacity: 0.2;
            -webkit-transform: scale(0.75);
            transform: scale(0.75);
        }
        100% {
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    .ball-beat > div {
        background-color: #fff;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        margin: 2px;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        display: inline-block;
        -webkit-animation: ball-beat 0.7s 0s infinite linear;
        animation: ball-beat 0.7s 0s infinite linear;
    }
    .ball-beat > div:nth-child(2n-1) {
        -webkit-animation-delay: -0.35s !important;
        animation-delay: -0.35s !important;
    }
</style>
