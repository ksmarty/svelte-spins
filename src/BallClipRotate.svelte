<script lang="ts">
    export let classes: string = "";
    export let style: string = "";
</script>

<style>
    .ball-clip-rotate > div {
        background-color: #fff;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        margin: 2px;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        border: 2px solid #fff;
        border-bottom-color: transparent;
        height: 26px;
        width: 26px;
        background: transparent !important;
        display: inline-block;
        -webkit-animation: rotate 0.75s 0s linear infinite;
        animation: rotate 0.75s 0s linear infinite;
    }
</style>

<div class={'ball-clip-rotate ' + classes} {style}>
    <div />
</div>
