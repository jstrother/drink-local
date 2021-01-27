<script>
  import Icon from '../Base/Icon.svelte';

  const github = './images/github.png';
  const twitter = './images/twitter.png';
  const linkedin = './images/linkedin.png';
  const web = './images/web.png';

  const contacts = [
        {
          icon: github,
          link: 'https://github.com/jstrother',
          name: 'GitHub'
        },
        {
          icon: twitter,
          link: 'https://twitter.com/Jim_Codes_JS',
          name: 'Twitter'
        },
        {
          icon: linkedin,
          link: 'https://www.linkedin.com/in/jimstrother/',
          name: 'LinkedIn'
        },
        {
          icon: web,
          link: 'http://www.jimstrother.com',
          name: 'Website'
        },
      ];
</script>

<footer class="flex justify-around border-t-2 items-center p-4">
  <p class="font-medium text-center">A Jim Strother Creation</p>
  <div class="flex">
    {#each contacts as contact}
      <Icon link={contact.link} icon={contact.icon} name={contact.name} />
    {/each}
  </div>
</footer>