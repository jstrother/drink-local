<script>
  import Tailwind from './Tailwind.svelte';
  import Header from './components/Header.svelte';
  import Main from './components/Main.svelte';
  import Footer from './components/Footer.svelte';
</script>

<Tailwind />

<div class="flex flex-col min-h-screen">
  <Header />
  <Main />
  <Footer />
</div>
