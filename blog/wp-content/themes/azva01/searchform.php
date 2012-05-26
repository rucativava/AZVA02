<form role="search" method="get" id="searchform" action="<?php bloginfo('siteurl'); ?>">
  <div>
    <!-- <label class="screen-reader-text" for="s">Search for:</label> -->
    <input type="text" value="" name="s" id="s" />
    <!-- in <?php wp_dropdown_categories( 'show_option_all=All Categories' ); ?> -->
    <input type="submit" id="searchsubmit" value="Search" />
  </div>
</form>