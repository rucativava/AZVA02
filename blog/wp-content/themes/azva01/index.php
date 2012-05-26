<?php get_header(); ?>  
  
<ul id="sidebar">	
	
	<li class="sideitems">
		<?php get_search_form( ); ?>
	</li>
	
	<?php if ( function_exists('wp_tag_cloud') ) : ?>
	<li class="sideitems tagcloud">
		<h3> Tags: </h3>
		<ul>
			<?php wp_tag_cloud('smallest=7&largest=13'); ?>
		</ul>
	</li>
	<?php endif; ?>

	<li class="sideitems" id="archives"><?php _e('Archives:'); ?>
	     <ul>
			<li>
				<?php wp_get_archives('type=monthly'); ?>
			</li>
	     </ul>
	</li>
	
	
</ul>

<?php if ( ! have_posts() ) : ?>  
        <h1>Not Found</h1>  
            <p>Apologies, but no results were found for the requested archive. Perhaps searching will help find a related post</p>  
<?php endif; ?>  
  
<?php while ( have_posts() ) : the_post(); ?>


<div class="post">  
		<h2 class="posttime"><?php the_time('F j'); ?> <span class="year"><?php the_time('Y'); ?></span></h2>
        <h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
  		

        <?php if ( is_archive() || is_search() ) : // Only display excerpts for archives and search. ?>  
                <?php the_excerpt(); ?>  
        <?php else : ?>  
                <?php the_content('Read More'); ?>  
        <?php endif; ?>


        <div class="post-details">  
            <div class="post-details-left">  
                by <span class="author"><?php the_author_meta( 'user_firstname' ); ?> <?php the_author_meta( 'user_lastname' ); ?></span>
				 <!-- <br> <span class="category"><?php the_category(', '); ?></span>   -->
                </div>


		  
                <div class="post-details-right">  
<?php edit_post_link('Edit ', '<span class="comment-count">  ' , '</span>'); ?><span class="comment-count"><?php comments_popup_link('Leave a comment', '1 Comment', '% Comments'); ?></span>  
</div>  
        </div>  
  

  
        <div class="dots"></div>  
    </div><!-- post -->


<?php endwhile; ?> 

<?php if ( $wp_query->max_num_pages > 1 ) : ?>  
        <div id="older-posts"><?php next_posts_link('Older Posts'); ?></div>  
        <div id="newer-posts"><?php previous_posts_link('Newer Posts'); ?></div>  
<?php else: ?>  
        <div id="only-page">No newer/older posts</div>  
<?php endif; ?>
 

<?php get_footer(); ?>