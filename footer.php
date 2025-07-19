<div class="main-box bg-black py-16">
    <div class="wrapper">
      <div id="footer-body" class="grid sm:grid-cols-2 lg:flex gap-5 gap-y-10">
        <div class="text-white">
          <a id="footer-logo" href="<?php echo site_url('/')?>">
            <div class="xl:pr-16 pr-6">
              <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.svg" />
            </div>
          </a>

          <div id="copyright" class="lg:text-left text-center mt-16 lg:mt-7 uppercase text-cap-2 text-white">
            &copy; Copyright <a class="hover:underline" href="<?php echo site_url('/') ?>"><?php echo get_bloginfo(); ?></a> <?php echo date('Y')?>
          </div>

          <div class="text-cap-2 mt-8">
            <a href="tel:(480) 555-0103" target="_blank" class="block hover:underline max-w-max">(480) 555-0103</a>
            <address class="not-italic">4517 Washington Ave.</address>
            <a href="mailto:boilerplate@example.com" target="_blank" class="block hover:underline max-w-max">boilerplate@example.com</a>
          </div>
        </div>

        <div class="flex gap-18 lg:ml-auto">
          <div class="text-white">
            <span>Quicklinks</span>
            <ul class="mt-5 text-cap-2">
              <li>
                <a href="#" class="uppercase hover:underline max-w-max opacity-78">About Us</a>
              </li>
              <li class="mt-6">
                <a href="#" class="uppercase hover:underline max-w-max opacity-78">Services</a>
              </li>
              <li class="mt-6">
                <a href="#" class="uppercase hover:underline max-w-max opacity-78">Events</a>
              </li>
              <li class="mt-6">
                <a href="#" class="uppercase hover:underline max-w-max opacity-78">Blog</a>
              </li>
            </ul>
          </div>

          <div class="text-white">
            <span>Connect</span>
            <div class="mt-5 flex gap-5">
              <a href="#" target="_blank" class="hover:opacity-78 w-4 h-4 display flex items-center justify-center">
                  <?php echo file_get_contents(get_template_directory_uri() . '/assets/images/facebook.svg')?>
              </a>

              <a href="#" target="_blank" class="hover:opacity-78 w-4 h-4 display flex items-center justify-center">
                  <?php echo file_get_contents(get_template_directory_uri() . '/assets/images/facebook.svg')?>
              </a>

              <a href="#" target="_blank" class="hover:opacity-78 w-4 h-4 display flex items-center justify-center">
                  <?php echo file_get_contents(get_template_directory_uri() . '/assets/images/facebook.svg')?>
              </a>
            </div>
          </div>
        </div>

        <div class="col-span-full lg:ml-auto xl:ml-29 text-center lg:text-left">
            <h2 class="text-h5 md:text-h4 mb-2 lg:mb-8 uppercase text-white">Subscribe to get Latest <span class="lg:block">Updates and News</span></h2>

            <form>
              <div class="mx-auto lg:mx-0 flex lg:flex-row flex-col items-center gap-5 max-w-[512px] w-full relative">
                <input type="email" name="email" placeholder="Yourmail@gmail.com" class="w-full border-white/15 border-1 lg:rounded-tl-xl lg:rounded-bl-xl lg:rounded-tr-[28px] lg:rounded-br-[28px] rounded-lg leading-16 lg:pl-5 lg:pr-55 px-5 text-white/80" />
                <button type="button" class="cursor-pointer lg:absolute lg:right-0 button-primary max-w-[201px] w-full">Subscribe</button>
              </div>
            </form>
        </div>
      </div>
    </div>
</div>

<?php wp_footer(); ?>
</body>
</html>
