<script lang="ts">
    export let classes: string = "";
    export let style: string = "";
    export let color: string = "black";
</script>

<style>
    .ball-pulse > div:nth-child(1) {
        -webkit-animation: scale 0.75s -0.24s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
        animation: scale 0.75s -0.24s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
    }

    .ball-pulse > div:nth-child(2) {
        -webkit-animation: scale 0.75s -0.12s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
        animation: scale 0.75s -0.12s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
    }

    .ball-pulse > div:nth-child(3) {
        -webkit-animation: scale 0.75s 0s infinite
            cubic-bezier(0.2, 0.68, 0.18, 1.08);
        animation: scale 0.75s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
    }

    .ball-pulse > div {
        background-color: #fff;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        margin: 2px;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        display: inline-block;
    }
</style>

<div class={'ball-pulse ' + classes} {style}>
    <div style="background-color: {color};" />
    <div style="background-color: {color};" />
    <div style="background-color: {color};" />
</div>
