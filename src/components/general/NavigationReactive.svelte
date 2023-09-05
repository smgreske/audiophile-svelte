<script >

  const navArray = [
    { name: 'home', path: '/' },
    { name: 'headphones', path: '/headphones' },
    { name: 'speakers', path: '/speakers' },
    { name: 'earphones', path: '/earphones' },
  ];

</script>

<nav class='flex items-center gap-32 w-full mdMax:hidden lg:ms-200 | tracking-2 font-bold'>
  {#each navArray as current}
    <a href={current.path} 
      class={(window.location.pathname === current.path)
        ? 'text-clr-1'
        : 'hover:text-clr-hover'}>     
      {current.name}
    </a>
  {/each}
</nav>