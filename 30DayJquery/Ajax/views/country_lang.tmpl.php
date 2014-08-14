<?php include '_partials/header.php';?>

<?php if(isset($info)): ?>
    <ul class="country_list">
        <?php
            foreach( $info as $i ){
                echo "<li><h2>{$i->Language}</h2><p>Percentage: {$i->Percentage}</p></li>";
            }
         ?>
    </ul>
<?php endif; ?>
<?php include '_partials/footer.php';?>
