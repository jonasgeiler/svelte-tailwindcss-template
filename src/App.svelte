<script>
	import { add } from '@app/utils';
	import Button from './components/Button.svelte';

	let times = 0;

	function handleClick() {
		times = add(times, 1);
	}
</script>

<div class="flex flex-col justify-center items-center w-screen h-screen">
	<h1 class="text-2xl font-semibold font-mono text-gray-800 mb-4">clicked button {times} times!</h1>

	<Button on:click={handleClick} />
</div>

<style global>
	@import "./styles/global.css";
</style>