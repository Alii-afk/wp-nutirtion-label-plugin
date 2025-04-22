<?php

/**
 * Plugin Name: My Nutrition Label Plugin
 * Plugin URI: https://alihaiderhamadani.com/wp-nutirtion-label-plugin
 * Description: A plugin to display a nutrition label form via a shortcode.
 * Version: 1.7
 * Author: Syed Ali Haider
 * Author URI: https://alihaiderhamadani.com/
 * License: GPL v2 or later
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

// Enqueue Styles and Scripts
function nutrition_label_enqueue_scripts()
{
    wp_enqueue_style('nutrition-label-style-new', plugin_dir_url(__FILE__) . 'css/styleNew.css', [], filemtime(plugin_dir_path(__FILE__) . 'css/styleNew.css'));
    wp_enqueue_style('nutrition-label-theme-new', plugin_dir_url(__FILE__) . 'css/themeNew.css', [], filemtime(plugin_dir_path(__FILE__) . 'css/themeNew.css'));
    wp_enqueue_style('nutrition-label-label-new', plugin_dir_url(__FILE__) . 'css/labelNew.css', [], filemtime(plugin_dir_path(__FILE__) . 'css/labelNew.css'));
    
    wp_enqueue_script('html2pdf', 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js', [], null, true);
    wp_enqueue_script('html2canvas', 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js', [], null, true);
    wp_enqueue_script('nutrition-label-script-js-new', plugin_dir_url(__FILE__) . 'js/indexJsNew.js', [], filemtime(plugin_dir_path(__FILE__) . 'js/indexJsNew.js'), true);

}
add_action('wp_enqueue_scripts', 'nutrition_label_enqueue_scripts');

// Shortcode to Display the Nutrition Label Form
function nutrition_label_shortcode()
{
    ob_start(); ?>
    <section class="Nutration_Step_one">
        <h3>Step 1. Choose a Nutrition Label Format</h3>
        <!-- basic nutartion  -->
        <div class="Nutration_Basic_Nutration">
            <input type="radio" id="Standard_Nutration_Checkbox" name="gender" />
            <img width="45px" src="<?php echo plugins_url('imgs/captured-image 1.png', __FILE__);?>" alt="Image" />
            <p>Standard nutrition label with extra fields for misc. vitamins.
                Vertical layout.</p>
        </div>
        <div class="Nutration_Basic_Nutration">
            <input type="radio" id="Standard_Nutration_Checkbox_Vietnamese" name="gender" />
            <img width="60px" src="<?php echo plugins_url('imgs/captured-image 2.png', __FILE__);?>" alt="Image" />
            <p>Standard nutrition label with extra fields for misc. vitamins.
                Vertical layout.(English/Vietnamese)</p>
        </div>
        <div class="Nutration_Standard_Nutration">
            <input type="radio" id="Tabbed_Nutration_Checkbox" name="gender" />
            <img width="170px" src="<?php echo plugins_url('imgs/captured-image 3.png', __FILE__);?>" alt="Image" />
            <p>
                Standard nutrition label with extra fields for misc. vitamins.
                Vertical layout.
            </p>
        </div>
        <div class="Nutration_Standard_Nutration">
            <input type="radio" id="linear_Nutation_CheckBox" name="gender" />
            <img width="170px" src="<?php echo plugins_url('imgs/captured-image 4.png', __FILE__);?>" alt="Image" />
            <p>
                Standard nutrition label with extra fields for misc. vitamins.
                Linear layout.
            </p>
        </div>
    </section>
    <section class="Nutration_Step_2" id="Nutration_Step_2">
        <h3>
            Step 2. Fill out the following information <br>
            <span class="Nutration_Span_Step2">(leave a field blank to skip) </span>
        </h3>
        <div class="Input_Div_Step2">
            <div>
                <label>Servings per Container:</label>
                <div class="Nutration_Having_que">
                    <input type="number" value="0" id="servings_per_container" placeholder="Example: 7"
                        class="Nutration_Inputs" />
                    <span>?</span>
                </div>
            </div>
            <div>
                <label>Serving Size Quantity:</label>
                <div class="Nutration_Having_que">
                    <input type="number" value="0" id="serving_size_quantity" placeholder="Example: 1/2 ,10"
                        class="Nutration_Inputs" />
                    <span>?</span>
                </div>
            </div>
            <div>
                <label>Serving Size Quantity Units:</label>
                <div class="Nutration_Having_que">
                    <select name="abc" id="serving_size_units">
                        <option value="Cup">Cup(s)</option>
                        <option value="Tablespoon">Tablespoon(s)</option>
                        <option value="Teaspoon">Teaspoon(s)</option>
                        <option value="Fluid">Fluid Ounce(s)</option>
                        <option value="Gram">Gram(s)</option>
                        <option value="Milligram">Milligram(s)</option>
                        <option value="Ounce">Ounce(s)</option>
                        <option value="Piece">Piece(s)</option>
                        <option value="Slice">Slice(s)</option>
                        <option value="Bar">Bar(s)</option>
                        <option value="Package">Package(s)</option>
                        <option value="Stick">Stick(s)</option>
                    </select>
                </div>
            </div>
            <div>
                <label>Serving Size Weight:</label>
                <div class="Nutration_Having_que">
                    <input type="number" value="0" id="serving_size_weight" class="Nutration_Inputs" placeholder="Example: 55" />
                    <span>?</span>
                </div>
            </div>
            <div>
                <label>Serving Size Unit:</label>
                <div class="Nutration_Having_que">
                    <select name="abc" id="serving_size_unit">
                        <option value="g">Gram (G)</option>
                        <option value="ml">Mililiters (ml)</option>
                        <option value="Default">Default</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="Nutration_Divs_Step2">
            <div>
                <label>Calories:</label>
                <div class="Nutration_Having_que">
                    <input type="number" id="calories" value="0" name="added-calories" class="Nutration_Inputs" />
                </div>
            </div>
        </div>
        <div class="Part_Div3" id="Part_Div3">
            <div>
                <label>Total Fat (g):</label>
                <div class="Nutration_Having_que">
                    <input type="number" id="total_fat" value="0" name="fat" class="Nutration_Inputs" />
                </div>
            </div>
            <div>
                <label>Saturated Fat (g):</label>
                <div class="Nutration_Having_que">
                    <input type="number" id="saturated_fat" value="0" name="sat-fat" class="Nutration_Inputs" />
                </div>
            </div>
            <div>
                <label>Trans Fat (g):</label>
                <div class="Nutration_Having_que">
                    <input type="number" id="trans_fatt" value="0" name="trans-fat" class="Nutration_Inputs" />
                </div>
            </div>
            <div>
                <label>Cholesterol (mg):</label>
                <div class="Nutration_Having_que">
                    <input type="number" id="cholesterol" value="0" class="Nutration_Inputs" />
                </div>
            </div>
            <div>
                <label>Sodium (mg):</label>
                <div class="Nutration_Having_que">
                    <input type="number" id="sodium" value="0" class="Nutration_Inputs" />
                </div>
            </div>
            <div>
                <label>Total Carbohydrates (g):</label>
                <div class="Nutration_Having_que">
                    <input type="number" id="total_carbohydrates" value="0" class="Nutration_Inputs" />
                </div>
            </div>
            <div>
                <label>Dietary Fiber (g):</label>
                <div class="Nutration_Having_que">
                    <input type="number" id="dietary_fiber" value="0" class="Nutration_Inputs" />
                </div>
            </div>
            <div>
                <label>Sugars (g):</label>
                <div class="Nutration_Having_que">
                    <input type="number" id="sugars" value="0" class="Nutration_Inputs" />
                </div>
            </div>
            <div>
                <label>Added Sugar (g):</label>
                <div class="Nutration_Having_que">
                    <input type="number" id="added_sugar" value="0" class="Nutration_Inputs" />
                </div>
            </div>
            <div>
                <label>Protein (g):</label>
                <div class="Nutration_Having_que">
                    <input type="number" id="protein" value="0" class="Nutration_Inputs" />
                </div>
            </div>
        </div>
        <div class="Nutration_Last_Div" id="Vitamans_Div">
            <div>
                <label>Vitamin Data Format: </label>
                <div class="Nutration_Having_que">
                    <select id="vitamin_data_format">
                        <option value="percentage">Percentage</option>
                        <option value="units">Units Of measure</option>
                    </select>
                </div>
            </div>
            <div>
                <label>Calcium (<span id="inner_txt1">%</span>):</label>
                <div class="Nutration_Having_que">
                    <input type="number" id="calcium" value="0" class="Nutration_Inputs" />
                </div>
            </div>
            <div>
                <label> Iron (<span id="inner_txt2">%</span>):</label>
                <div class="Nutration_Having_que">
                    <input type="number" id="iron" value="0" class="Nutration_Inputs" />
                </div>
            </div>
            <div>
                <label>Vitamin D (<span id="inner_txt3">%</span>):</label>
                <div class="Nutration_Having_que">
                    <input type="number" id="vitamin_d" value="0" class="Nutration_Inputs" />
                </div>
            </div>
            <div>
                <label> Potassium (<span id="inner_txt4">%</span>):</label>
                <div class="Nutration_Having_que">
                    <input type="number" id="potassium" value="0" class="Nutration_Inputs" />
                </div>
            </div>
        </div>
        <div class="Last_Button_Div">
            <button class="Nutration_Left_Button" onclick="clearValues()">Clear</button>
            <button id="Nutration_Right_Button" onclick="call()" class="Nutration_Right_Button">
                Submit
            </button>
        </div>
    </section>

    <section class="Nutration_Step_4" id="Nutration_Step_4">
        <h2>Step 3. Download your Label</h2>
        <div class="Image_Div_Step4">
            <div id="result_div1" style="display: flex; justify-content: center;"></div>
            <div id="outputImage" style="text-align: center;"></div>
        </div>
        <div class="Downlods_Button" id="Downlods_Buttons">
            <button onclick="download_pdf()">Download PDF</button>
        </div>
    </section>

<?php return ob_get_clean();
}
add_shortcode('nutrition_label_form', 'nutrition_label_shortcode');
