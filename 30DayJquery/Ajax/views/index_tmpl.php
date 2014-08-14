<?php include '_partials/header.php';?>
    <h1>Search countries</h1>
    <form action="index.php" method="post">
        <select name="q" id="q">
            <?php
                $alphabet = str_split('abcdefghijklmnopqrstuvwxyz');
                foreach( $alphabet as $letter ){
                    echo "<option value='$letter'>$letter</option>";
                }
             ?>
        </select>
        <input type="submit" text="Go" />
    </form>

<?php if(isset($countries)): ?>
    <ul class="country_list">
        <?php
            foreach( $countries as $country ){
                echo "<li data-country_id='{$country->Code}'><a href='country.php?country_id={$country->Code}'>{$country->Name}</a></li>";
            }
         ?>
    </ul>
<?php endif; ?>
<?php include '_partials/footer.php';?>
