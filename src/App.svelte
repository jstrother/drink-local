<script>
  import Tailwind from './Tailwind.svelte';
  import Header from './components/Layout/Header.svelte';
  import Main from './components/Layout/Main.svelte';
  import Footer from './components/Layout/Footer.svelte';
</script>

<Tailwind />

<div class="flex flex-col min-h-screen">
  <Header />
  <Main />
  <Footer />
</div>
