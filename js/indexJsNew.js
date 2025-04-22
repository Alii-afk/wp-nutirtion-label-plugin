const Nutrients = {
  added_sugars: {
    id: "ADDED_SUGARS",
    default: true,
    value: 50,
    unit: "g",
  },
  biotin: {
    value: 30,
    unit: "mcg",
  },
  calcium: {
    id: "CALCIUM",
    default: true,
    value: 1300,
    unit: "mg",
  },
  chloride: {
    value: 2300,
    unit: "mg",
  },
  choline: {
    value: 550,
    unit: "mg",
  },
  cholesterol: {
    id: "CHOLESTEROL",
    default: true,
    value: 300,
    unit: "mg",
  },
  chromium: {
    value: 35,
    unit: "mcg",
  },
  copper: {
    value: 0.9,
    unit: "mg",
  },
  dietary_fiber: {
    id: "DIETARY_FIBER",
    default: true,
    value: 28,
    unit: "g",
  },
  fat: {
    id: "TOTAL_FAT",
    default: true,
    value: 78,
    unit: "g",
  },
  folate_folic_Acid: {
    value: 400,
    unit: "mcg",
  },
  iodine: {
    value: 150,
    unit: "mcg",
  },
  iron: {
    id: "IRON",
    default: true,
    value: 18,
    unit: "mg",
  },
  magnesium: {
    value: 420,
    unit: "mg",
  },
  manganese: {
    value: 2.3,
    unit: "mg",
  },
  molybdenum: {
    value: 45,
    unit: "mcg",
  },
  niacin: {
    value: 16,
    unit: "mg",
  },
  pantothenic_acid: {
    value: 5,
    unit: "mg",
  },
  phosphorus: {
    value: 1250,
    unit: "mg",
  },
  potassium: {
    id: "POTASSIUM",
    default: true,
    value: 4700,
    unit: "mg",
  },
  protein: {
    id: "PROTEIN",
    default: true,
    value: 50,
    unit: "g",
  },
  riboflavin: {
    value: 1.3,
    unit: "mg",
  },
  saturated_fat: {
    id: "SATURATED_FAT",
    default: true,
    value: 20,
    unit: "g",
  },
  selenium: {
    value: 55,
    unit: "mcg",
  },
  sodium: {
    id: "SODIUM",
    default: true,
    value: 2300,
    unit: "mg",
  },
  thiamin: {
    value: 1.2,
    unit: "mg",
  },
  total_carbohydrate: {
    id: "TOTAL_CARBS",
    default: true,
    value: 275,
    unit: "g",
  },
  vitamin_a: {
    value: 900,
    unit: "mcg",
  },
  vitamin_b6: {
    value: 1.7,
    unit: "mg",
  },
  vitamin_b12: {
    value: 2.4,
    unit: "mcg",
  },
  vitamin_c: {
    value: 90,
    unit: "mg",
  },
  vitamin_d: {
    id: "VITAMIN_D",
    default: true,
    value: 20,
    unit: "mcg",
  },
  vitamin_e: {
    value: 15,
    unit: "mg",
  },
  vitamin_k: {
    value: 120,
    unit: "mcg",
  },
  zinc: {
    value: 11,
    unit: "mg",
  },
};

var Checkbox_Radio1 = document.getElementById("Standard_Nutration_Checkbox");
var Checkbox_Radio2 = document.getElementById("Standard_Nutration_Checkbox_Vietnamese");
var Checkbox_Radio3 = document.getElementById("Tabbed_Nutration_Checkbox");
var Checkbox_Radio4 = document.getElementById("linear_Nutation_CheckBox");

var Optional_Nutration = document.getElementById("Optional_Nutration");

// Steps Var
var Step2 = document.getElementById("Nutration_Step_2");
var Step3 = document.getElementById("Nutration_Step_4");
var Open_Opptional_Menu = document.getElementById("Open_Opptional_Menu");
var Vitamans_Div = document.getElementById("Vitamans_Div");
// Script For Radio 1

const checkboxesRadios = [Checkbox_Radio1, Checkbox_Radio2, Checkbox_Radio3, Checkbox_Radio4];
checkboxesRadios.forEach(element => {
  element.addEventListener("click", () => {
    Step2.style.display = "grid";
    Vitamans_Div.style.display = "grid";
  });
});


function call() {

  const Standard_Nutration_Checkbox = document.getElementById(
    "Standard_Nutration_Checkbox"
  ).checked;
  const Standard_Nutration_Checkbox_Vietnamese = document.getElementById(
    "Standard_Nutration_Checkbox_Vietnamese"
  ).checked;
  const Tabbed_Nutration_Checkbox = document.getElementById(
    "Tabbed_Nutration_Checkbox"
  ).checked;
  const linear_Nutation_CheckBox = document.getElementById(
    "linear_Nutation_CheckBox"
  ).checked;
  
  if (Standard_Nutration_Checkbox) {
    create_Standard_Nutration_Table();
  }else if(Standard_Nutration_Checkbox_Vietnamese){
    create_Standard_Nutration_Vietnamese_Table();
  } else if (Tabbed_Nutration_Checkbox) {
    create_Tabbed_Nutration_Table();
  } else if (linear_Nutation_CheckBox) {
    createlinear_Nutation_Table();
  } else{
    console.log("No format selected.");
  }

  const servingsPerContainer = document.getElementById(
    "servings_per_container"
  ).value;
  const servingSizeQuantity = document.getElementById(
    "serving_size_quantity"
  ).value;
  const servingSizeUnits = document.getElementById("serving_size_units").value;
  const servingSizeWeight = document.getElementById(
    "serving_size_weight"
  ).value;
  const servingSizeUnit = document.getElementById("serving_size_unit").value;
  const calories = document.getElementById("calories");
  const totalFat = document.getElementById("total_fat");
  const saturatedFat = document.getElementById("saturated_fat");
  const transFat = document.getElementById("trans_fatt");
  const cholesterol = document.getElementById("cholesterol");
  const sodium = document.getElementById("sodium");
  const totalCarbohydrates = document.getElementById("total_carbohydrates");
  const dietaryFiber = document.getElementById("dietary_fiber");
  const sugars = document.getElementById("sugars");
  const addedSugar = document.getElementById("added_sugar");
  const protein = document.getElementById("protein");
  const calcium = document.getElementById("calcium");
  const iron = document.getElementById("iron");
  const vitaminD = document.getElementById("vitamin_d");
  const potassium = document.getElementById("potassium");
  const vitamin_data_format = document.getElementById("vitamin_data_format");
  document.getElementById("SERVINGS").innerText = servingsPerContainer;
  document.getElementById("SERVING-SIZE-CUP").innerText = servingSizeQuantity;
  document.getElementById("SERVING-SIZE-GRAMS").innerText = servingSizeWeight;
  document.getElementById("SERVING-SIZE-Unit").innerText = servingSizeUnit;
  
  if(Standard_Nutration_Checkbox_Vietnamese){
    document.getElementById("SERVINGS2").innerText = servingsPerContainer;
    document.getElementById("SERVING-SIZE-CUP-2").innerText = servingSizeQuantity;
    document.getElementById("SERVING-SIZE-TYPE-2").innerText = servingSizeUnits;

    if(servingSizeUnits == "Cup"){ 
      document.getElementById("SERVING-SIZE-TYPE").innerText = "Cốc";
    } else if(servingSizeUnits == "Tablespoon"){
      document.getElementById("SERVING-SIZE-TYPE").innerText = "Muỗng canh";
    } else if(servingSizeUnits == "Teaspoon"){
      document.getElementById("SERVING-SIZE-TYPE").innerText = "Muỗng cà phê";
    } else if(servingSizeUnits == "Fluid"){
      document.getElementById("SERVING-SIZE-TYPE").innerText = "Ounce lỏng";
    } else if(servingSizeUnits == "Gram"){
      document.getElementById("SERVING-SIZE-TYPE").innerText = "Gram";
    } else if(servingSizeUnits == "Milligram"){
      document.getElementById("SERVING-SIZE-TYPE").innerText = "Milligram";
    } else if(servingSizeUnits == "Ounce"){
      document.getElementById("SERVING-SIZE-TYPE").innerText = "Ounce";
    } else if(servingSizeUnits == "Piece"){
      document.getElementById("SERVING-SIZE-TYPE").innerText = "Miếng";
    } else if(servingSizeUnits == "Slice"){
      document.getElementById("SERVING-SIZE-TYPE").innerText = "Lát";
    } else if(servingSizeUnits == "Bar"){
      document.getElementById("SERVING-SIZE-TYPE").innerText = "Thanh";
    } else if(servingSizeUnits == "Package"){
      document.getElementById("SERVING-SIZE-TYPE").innerText = "Gói";
    } else if(servingSizeUnits == "Stick"){
      document.getElementById("SERVING-SIZE-TYPE").innerText = "Thanh";
    }
  }
  else{
    document.getElementById("SERVING-SIZE-TYPE").innerText = servingSizeUnits;
  }
  if(calories.value)
  {
    calculateCalories();
  }
  if (totalFat.value) {
    changeNutritionValue(totalFat.value, "fat", "fat");
  }
  if (saturatedFat.value) {
    changeNutritionValue(saturatedFat.value, "saturated_fat");
  }
  if (transFat.value) {
    changeNutritionValue(transFat.value, "TRANS_FAT", "TRANS_FAT");
  }
  if (cholesterol.value) {
    changeNutritionValue(cholesterol.value, "cholesterol");
  }
  if (sodium.value) {
    changeNutritionValue(sodium.value, "sodium");
  }
  if (totalCarbohydrates.value) {
    changeNutritionValue(totalCarbohydrates.value, "total_carbohydrate", "total_carbohydrate");
  }
  if (dietaryFiber.value) {
    changeNutritionValue(dietaryFiber.value, "dietary_fiber");
  }
  if (sugars.value) {
    changeNutritionValue(sugars.value, "TOTAL_SUGARS", "TOTAL_SUGARS");
  }
  if (addedSugar.value) {
    changeNutritionValue(addedSugar.value, "added_sugars");
  }
  if (protein.value) {
    changeNutritionValue(protein.value, "protein");
  }
  if (calcium.value > 0) {
    changeNutritionValue(calcium.value, "calcium");
  }
  if (iron.value > 0) {
    changeNutritionValue(iron.value, "iron");
  }
  if (vitaminD.value > 0) {
    changeNutritionValue(vitaminD.value, "vitamin_d");
  }
  if (potassium.value > 0) {
    changeNutritionValue(potassium.value, "potassium");
  }
  if(Standard_Nutration_Checkbox_Vietnamese)
  {
    var incl = document.getElementById("incl-val").innerHTML;
    document.getElementById("vitm-val").innerHTML = incl;
  }
  
  
  function calculateCalories() {
    const addedCals = Number.parseInt(
      document.querySelector("[name=added-calories]").value
    );
    const calories = document.getElementById("NUM_CALORIES");
    let roundedCalories;
    if (addedCals < 5) {
        roundedCalories = 0;
    } else if (addedCals <= 50) {
        roundedCalories = Math.round(addedCals / 5) * 5;
    } else {
        roundedCalories = Math.round(addedCals / 10) * 10;
    }
    calories.innerHTML = roundedCalories;
  }

  function changeNutritionValue(value, nutrient, id) {
    if (nutrient === "fat" 
      || nutrient === "saturated_fat" 
      || nutrient === "TRANS_FAT" 
      || nutrient === "cholesterol" 
      || nutrient === "sodium" 
      || nutrient === "added_sugars" 
      || nutrient === "TOTAL_SUGARS"
      || nutrient === "total_carbohydrate"
      || nutrient === "dietary_fiber"
      || nutrient === "protien") 
      {
      value = roundNutrientValue(nutrient, value);
    }
    const nutr = Nutrients[nutrient];
    let label, percentage;
    if (nutr) {
      label = document.getElementById(nutr.id);
      percentage = label.querySelector(".percentage");
    } else {
      label = document.getElementById(id);
    }
    const vitVal = label.querySelector(".vitamin-value");
if (nutrient === "cholesterol") 
      {
	if(value == "<5")
		 var value1 = value;
		value = value.replace("<", "");
		label.setAttribute("value", value1);
		}
else{
	 label.setAttribute("value", value);
}
    label.setAttribute("value", value);
    if (nutr) {
      if (percentage) {
        if(nutrient == "vitamin_d" || nutrient == "iron"  || nutrient == "calcium" || nutrient == "potassium")
        {
          if(vitamin_data_format.value == "units")
            {
              var newval = value;
              newval = percentageOfDailyValue(newval, nutr.value, nutrient);
              if (newval < 2) {
                  if (newval >= 1) {
                    percentage.innerHTML = `2%`; // If actual amount is 1% or more, express as 2% DV
                  } else {
                    percentage.innerHTML = `0%`;
                  }
              } else if (newval <= 10) {
                percentage.innerHTML = `${Math.round(newval / 2) * 2}%`; // Nearest 2% DV increment
              } else if (newval <= 50) {
                percentage.innerHTML =  `${Math.round(newval / 5) * 5}%`; // Nearest 5% DV increment
              } else {
                percentage.innerHTML =  `${Math.round(newval / 10) * 10}%`; // Nearest 10% DV increment
              }
              
            }
            else{
              if (value < 2) {
                if (value >= 1) {
                      percentage.innerHTML = `2%`; // If actual amount is 1% or more, express as 2% DV
                    } else {
                      percentage.innerHTML = `0%`;
                    }
                } else if (value <= 10) {
                  percentage.innerHTML = `${Math.round(value / 2) * 2}%`; // Nearest 2% DV increment
                } else if (value <= 50) {
                  percentage.innerHTML =  `${Math.round(value / 5) * 5}%`; // Nearest 5% DV increment
                } else {
                  percentage.innerHTML =  `${Math.round(value / 10) * 10}%`; // Nearest 10% DV increment
                }
            }
        }
        else
        {
          percentage.innerHTML = `${percentageOfDailyValue(value, nutr.value, nutrient)}%`;
        }
      }
      if(vitVal)
      {
        if(nutrient == "vitamin_d" || nutrient == "iron"  || nutrient == "calcium" || nutrient == "potassium")
        {
          if(vitamin_data_format.value == "units")
            {
              vitVal.innerHTML = `${value}${nutr.unit}`;
            }
            else{
              vitVal.innerHTML = `${valueOfDailyValue(value, nutr.value)}${nutr.unit}`;
            }
        }
        else
        {
            vitVal.innerHTML = `${value}${nutr.unit}`;
        }
      }
    } else {
      vitVal.innerHTML = value.toString() + "g";
    }
  }

  function roundNutrientValue(nutrient, value) {
    if (nutrient === "fat" || nutrient === "saturated_fat" || nutrient === "TRANS_FAT") {
      if (value < 0.5) {
            return "0";
        } else if (value < 5) {
            return `${(Math.round(value * 2) / 2).toFixed(1)}`; // Nearest 0.5g, formatted to 1 decimal
        } else {
            return `${Math.round(value)}`; // Nearest 1g
        }
    }
    else if(nutrient === "cholesterol" ){
        if (value < 2) {
            return "0";
        } else if (value >= 2 && value <= 5) {
            return "<5";
        } else {
            return `${Math.round(value / 5) * 5}`;
        }
    }
    else if(nutrient === "sodium"|| nutrient === "potassium"){
        if (value < 5) {
            return "0";
        } else if (value <= 140) {
            return `${Math.round(value / 5) * 5}`; // Nearest 5 mg increment
        } else {
            return `${Math.round(value / 10) * 10}`; // Nearest 10 mg increment
        }
    } 
    else if (nutrient === "added_sugars" || nutrient === "TOTAL_SUGARS" || nutrient === "total_carbohydrate" || nutrient === "dietary_fiber") {
      if (value < 0.5) {
        return "0";
      } else{
          // Always round to the nearest 1g for sugars
          return Math.round(value);
      }
    }
    else if (nutrient === "protien")
    {
      if (value < 0.5) {
          return "0";
      } else if (value < 1) {
          return "<1"; // or "less than 1g" based on preference
      } else {
          return `${Math.round(value)}`; // Nearest 1g increment
      }
    }      
    return value;
  }

  function percentageOfDailyValue(value, dailyValue, nutrient) {
    const percentage = (value / dailyValue) * 100;
    if(nutrient == "vitamin_d" || nutrient == "iron"  || nutrient == "calcium" || nutrient == "potassium")
      {
        return percentage;
      }
      else{
        if (percentage < 1 && percentage > 0) {
            return "<1";
        } else if (percentage <= 0) {
            return "0";
        } else {
            return Math.round(percentage);
        }
      }
    
  }

  function valueOfDailyValue(valuePercentage, dailyValue) {
    let proportion = valuePercentage / 100;
    let actualValue = proportion * dailyValue;
    return actualValue;
  }
  
  Step3.style.display = "grid";
  var Downlods_Buttons = document.getElementById("Downlods_Buttons");
  Downlods_Buttons.innerHTML = "";
  if (Standard_Nutration_Checkbox) {
    Downlods_Buttons.innerHTML =  `<button onclick="download_pdf('result_div', 'inline-block')">Download PDF</button>
    <button onclick="download_image('result_div')">Download Images</button>`;
    make_image('result_div', '300px');
  } else if (Standard_Nutration_Checkbox_Vietnamese) {
    Downlods_Buttons.innerHTML =  `<button onclick="download_pdf('result_div', 'inline-block')">Download PDF</button>
    <button onclick="download_image('result_div')">Download Images</button>`;
    make_image('result_div', '500px');
  } else if (Tabbed_Nutration_Checkbox) {
    Downlods_Buttons.innerHTML =  `<button onclick="download_pdf('temp_parent_div_result', 'grid')">Download PDF</button>
    <button onclick="download_image('temp_parent_div_result')">Download Image</button>`;
    make_image('temp_parent_div_result', '600px');
  } else if(linear_Nutation_CheckBox){
    Downlods_Buttons.innerHTML =  `<button onclick="download_pdf('temp_parent_div_result', 'inline-block')">Download PDF</button>
    <button onclick="download_image('temp_parent_div_result')">Download Image</button>`;
    make_image('temp_parent_div_result', '500px');
  }
}
function clearValues()
{
document.getElementById("serving_size_units").selectedIndex = 0;
document.getElementById("serving_size_unit").selectedIndex = 0;
document.getElementById("vitamin_data_format").selectedIndex = 0;
document.getElementById("servings_per_container").value = 0;
document.getElementById("serving_size_quantity").value = 0;
document.getElementById("serving_size_weight").value = 0;
document.getElementById("calories").value = 0;
document.getElementById("total_fat").value = 0;
document.getElementById("saturated_fat").value = 0;
document.getElementById("trans_fatt").value = 0;
document.getElementById("cholesterol").value = 0;
document.getElementById("sodium").value = 0;
document.getElementById("total_carbohydrates").value = 0;
document.getElementById("dietary_fiber").value = 0;
document.getElementById("sugars").value = 0;
document.getElementById("added_sugar").value = 0;
document.getElementById("protein").value = 0;
document.getElementById("Vitamans_Div").value = 0;
document.getElementById("calcium").value = 0;
document.getElementById("iron").value = 0;
document.getElementById("vitamin_d").value = 0;
document.getElementById("potassium").value = 0;
}

  function create_Standard_Nutration_Table() {
    const result_div1 = document.getElementById("result_div1");
    result_div1.innerHTML = "";
    const result_div = document.createElement("div");
    result_div.id = "result_div";
    result_div1.appendChild(result_div);
    const table = document.createElement("table");
    table.id = "nutritional_facts";
	table.style.width = "290px";
    table.innerHTML = `
              <tr>
                  <td colspan="2" id="TITLE">Nutrition Facts</td>
              </tr>
              <tr>
                <td colspan="2" style="border-bottom: 0.5pt black solid;"></td>
              </tr>
              <tr>
                  <td colspan="2" class="serving-font servings" id="SERVING_PER"><p id="SERVINGS">0</p> servings per container</td>
              </tr>
              <tr>
                  <td class="serving-size serving-font-size" id="SERVING_SIZE">Serving size</td>
                  <td class="serving-size serving-font-size" id="NUM_SERVING_SIZE" style="line-height: 25px;"><p id="SERVING-SIZE-CUP">0</p> <p id="SERVING-SIZE-TYPE">cup</p> (<p id="SERVING-SIZE-GRAMS">0</p><p id="SERVING-SIZE-Unit">g</p>)</td>
              </tr>
              <tr>
                <td colspan="2" style="border-bottom: 7pt black solid; "></td>
              </tr>
              <tr>
                  <td colspan="1" id="AMOUNT_SERVING">Amount per serving</td>
                  <td rowspan="2" id="NUM_CALORIES">0</td>
              </tr>
              <tr>
                  <td id="CALORIES">Calories</td>
              </tr>
              <tr>
                <td colspan="2" style="border-bottom: 3pt black solid; "></td>
              </tr>
              <tr class="basic-border-bottom">
                  <td></td>
                  <td id="PER_DAILY_VALUE">% Daily Value*</td>
              </tr>
              <tr id="TOTAL_FAT" class="fat-parent basic-border-bottom">
                  <td class="vitamin-top-label"><span class="vitamin-top-label">Total Fat</span> <span class="vitamin-value">0g</span></td>
                  <td class="percentage">0%</td>
              </tr>
              <tr id="SATURATED_FAT" class="basic-border-bottom">
                  <td class="sub-1 vitamin-bottom-label"><span class="vitamin-top-level">Saturated Fat</span> <span class="vitamin-value">0g</span></td>
                  <td class="percentage">0%</td>
              </tr>
              <tr id="TRANS_FAT" class="basic-border-bottom">
                  <td colspan="2" class="sub-1 vitamin-bottom-label"><span class="vitamin-bottom-label">Trans Fat</span> <span class="vitamin-value">0g</span></td>
              </tr>
              <tr id="CHOLESTEROL" class="basic-border-bottom">
                  <td class="vitamin-top-label"><span class="vitamin-top-label">Cholesterol</span> <span class="vitamin-value">0mg</span></td>
                  <td class="percentage">0%</td>
              </tr>
              <tr id="SODIUM" class="basic-border-bottom">
                  <td class="vitamin-top-label"><span class="vitamin-top-label">Sodium</span> <span class="vitamin-value">0mg</span></td>
                  <td class="percentage">0%</td>
              </tr>
              <tr id="TOTAL_CARBS" class="total_carbohydrate-parent basic-border-bottom">
                  <td class="vitamin-top-label"><span class="vitamin-top-label">Total carbohydrate</span> <span class="vitamin-value">0g</span></td>
                  <td class="percentage">0%</td>
              </tr>
              <tr id="DIETARY_FIBER" class="basic-border-bottom">
                  <td class="sub-1 vitamin-bottom-label"><span class="vitamin-bottom-label">Dietary Fiber</span> <span class="vitamin-value">0g</span></td>
                  <td class="percentage">0%</td>
              </tr>
              <tr id="TOTAL_SUGARS" class="TOTAL_SUGARS-parent">
                  <td colspan="2" class="sub-1 vitamin-bottom-label" style=" border: none !important;"><span>Total Sugars</span> <span class="vitamin-value">0g</span></td>
              </tr>
              <tr id="ADDED_SUGARS" class="basic-border-bottom">
                  <td class="vitamin-bottom-label" style="padding-right:0;margin-top:0.25pt"><div class="sub-2">Includes <span class="vitamin-value">0g</span> Added Sugars</div></td>
                  <td style="padding-left:0;padding-right:0;border-top: none" class="basic-border-top"><div style="width:100%;margin:0" class="percentage sub-2">0%</div></td>
              </tr>
              <tr id="PROTEIN"  style="line-height: 20px;" class="large-border-bottom" id="BEFORE_CUSTOM_VITAMINS">
                  <td colspan="2" class="vitamin-bottom-label"><span style="font-weight:bold">Protein</span> <span class="vitamin-value">0g</span></td>
              </tr>
              <tr id="VITAMIN_D" class="basic-border-bottom">
                  <td class="vitamin-bottom-label">Vitamin D <span class="vitamin-value">0mcg</span></td>
                  <td class="percentage">0%</td>
              </tr>
              <tr id="CALCIUM" class="basic-border-bottom">
                  <td class="vitamin-bottom-label">Calcium <span class="vitamin-value">0mg</span></td>
                  <td class="percentage">0%</td>
              </tr>
              <tr id="IRON" class="basic-border-bottom">
                  <td class="vitamin-bottom-label">Iron <span class="vitamin-value">0mg</span></td>
                  <td class="percentage">0%</td>
              </tr>
              <tr id="POTASSIUM" class="basic-border-bottom">
                  <td class="vitamin-bottom-label">Potassium <span class="vitamin-value">0mg</span></td>
                  <td class="percentage">0%</td>
              </tr>
              <tr id="AFTER_CUSTOM_VITAMINS">
                  <td colspan="2" class="medium-border-top footnote">*The % Daily Value tells you how much a nutrient in a<br> serving of food contributes to a daily diet. 2000 calories<br> a day is used for general nutrition advice.</td>
              </tr>`;
    result_div.appendChild(table);
  }
  function create_Standard_Nutration_Vietnamese_Table() {
    const result_div11 = document.getElementById("result_div1");
    result_div11.innerHTML = "";
    const result_divv = document.createElement("div");
    result_divv.id = "result_div";
    result_div11.appendChild(result_divv);
    const table = document.createElement("table");
    table.id = "nutritional_facts";
	table.style.width = "535px";
    table.innerHTML = `
            <tr>
              <td colspan="2" id="TITLE">Nutrition Facts</td>
            </tr>
            <tr>
              <td colspan="2" id="TITLE">Thành Phần Dinh Dưỡng</td>
            </tr>
            <tr>
              <td colspan="2" style="border-bottom: 0.5pt black solid;"></td>
            </tr>
            <tr>
              <td colspan="2" class="serving-font servings" id="SERVING_PER">
                <p id="SERVINGS2">0</p> servings per container/Dành cho 
                <p id="SERVINGS">0</p> khẩu phần
              </td>
            </tr>
            <tr >
                <td class="serving-size serving-font-size" id="SERVING_SIZE">Serving size/Mỗi khẩu phần</td>
                <td class="serving-size serving-font-size" id="NUM_SERVING_SIZE" style="line-height: 25px;">
                  <p id="SERVING-SIZE-CUP-2">0</p>
                  <p id="SERVING-SIZE-TYPE-2">cốc</p>/
                  <p id="SERVING-SIZE-CUP">0</p> 
                  <p id="SERVING-SIZE-TYPE">cốc</p> 
                  (<p id="SERVING-SIZE-GRAMS">0</p>
                  <span id="SERVING-SIZE-Unit">g</span>)
                </td>
            </tr>
            <tr>
              <td colspan="2" style="border-bottom: 7pt black solid; "></td>
            </tr>
            <tr>
                <td colspan="1" id="AMOUNT_SERVING">Amount per serving/Giá trị dinh dưỡng trong mỗi khẩu phần</td>
                <td rowspan="2" id="NUM_CALORIES">0</td>
            </tr>
            <tr >
                <td id="CALORIES">Calories/Hàm lượng Calo</td>
            </tr>
            <tr>
              <td colspan="2" style="border-bottom: 3pt black solid; "></td>
            </tr>
            <tr class="basic-border-bottom">
                <td id="PER_DAILY_VALUE" colspan="2"><span style="float: right">% Daily Value*/% Giá trị dinh dưỡng hàng ngày*</span></td>
            </tr>
            <tr id="TOTAL_FAT" class="fat-parent basic-border-bottom">
                <td class="vitamin-top-label"><span class="vitamin-top-label temp_8pt_bold">Total Fat/Tổng lượng chất béo</span> <span class="vitamin-value">0g</span></td>
                <td class="percentage">0%</td>
            </tr>
            <tr id="SATURATED_FAT" class="basic-border-bottom">
                <td class="sub-1 vitamin-bottom-label"><span class="vitamin-top-level">Saturated Fat/Chất béo bão hòa</span> <span class="vitamin-value">0g</span></td>
                <td class="percentage">0%</td>
            </tr>
            <tr id="TRANS_FAT" class="basic-border-bottom">
                <td colspan="2" class="sub-1 vitamin-bottom-label"><span class="vitamin-bottom-label"><i>Trans</i> Fat/Chất béo chuyển hóa</span> <span class="vitamin-value">0g</span></td>
            </tr>
            <tr id="CHOLESTEROL" class="basic-border-bottom">
                <td class="vitamin-top-label"><span class="vitamin-top-label temp_8pt_bold">Cholesterol/Cholesterol</span> <span class="vitamin-value">0mg</span></td>
                <td class="percentage">0%</td>
            </tr>
            <tr id="SODIUM" class="basic-border-bottom">
                <td class="vitamin-top-label"><span class="vitamin-top-label temp_8pt_bold">Sodium/Muối</span> <span class="vitamin-value">0mg</span></td>
                <td class="percentage">0%</td>
            </tr>
            <tr id="TOTAL_CARBS" class="total_carbohydrate-parent basic-border-bottom">
                <td class="vitamin-top-label"><span class="vitamin-top-label temp_8pt_bold">Total Carbohydrate/Tổng lượng carbonhydrate</span> <span class="vitamin-value">0g</span></td>
                <td class="percentage">0%</td>
            </tr>
            <tr id="DIETARY_FIBER" class="basic-border-bottom">
                <td class="sub-1 vitamin-bottom-label"><span class="vitamin-bottom-label">Dietary Fiber/Chất xơ</span> <span class="vitamin-value">0g</span></td>
                <td class="percentage">0%</td>
            </tr>
            <tr id="TOTAL_SUGARS" class="TOTAL_SUGARS-parent">
                <td colspan="2" class="sub-1 vitamin-bottom-label" style=" border: none !important;"><span>Total Sugars/Tổng lượng đường</span> <span class="vitamin-value">0g</span></td>
            </tr>
            <tr id="ADDED_SUGARS" class="basic-border-bottom">
                <td class="vitamin-bottom-label" style="padding-right:0;margin-top:0.25pt"><div class="sub-2">Includes <span class="vitamin-value" id="incl-val">0g</span> Added Sugar/Gồm <span class="vitamin-value" id="vitm-val">0g</span> đường phụ gia</div></td>
                <td style="padding-left:0;padding-right:0;border-top: none" class="basic-border-top"><div style="width:100%;margin:0" class="percentage sub-2">0%</div></td>
            </tr>
            <tr id="PROTEIN" style="line-height: 20px;" id="BEFORE_CUSTOM_VITAMINS">
                <td colspan="2" class="vitamin-bottom-label"><span class="temp_8pt_bold">Protein/Chất đạm</span> <span class="vitamin-value">0g</span></td>
            </tr>
            <tr>
              <td colspan="2" style="border-bottom: 7pt black solid; "></td>
            </tr>
            <tr id="VITAMIN_D" class="basic-border-bottom">
                <td class="vitamin-bottom-label">Vitamin D/Vitamin D <span class="vitamin-value">0mcg</span></td>
                <td class="percentage">0%</td>
            </tr>
            <tr id="CALCIUM" class="basic-border-bottom">
                <td class="vitamin-bottom-label">Calcium/Canxi <span class="vitamin-value">0mg</span></td>
                <td class="percentage">0%</td>
            </tr>
            <tr id="IRON" class="basic-border-bottom">
                <td class="vitamin-bottom-label">Iron/Sắt <span class="vitamin-value">0mg</span></td>
                <td class="percentage">0%</td>
            </tr>
            <tr id="POTASSIUM" class="basic-border-bottom">
                <td class="vitamin-bottom-label">Potassium/Kali <span class="vitamin-value">0mg</span></td>
                <td class="percentage">0%</td>
            </tr>
            <tr>
              <td colspan="2" class="medium-border-top footnote">*The % Daily Value tells you how much a nutrient in a serving of food contributes to a daily diet. 2000 calories a day is used for general nutrition advice.</td>
            </tr>
            <tr id="AFTER_CUSTOM_VITAMINS">
                <td colspan="2" class=" footnote">* Phần trăm giá trị dinh dưỡng hàng ngày (DV) phản ánh hàm lượng dinh dưỡng của một khẩu phần ăn trong chế độ ăn hàng ngày.<br> Nên hấp thụ 2.000 calo mỗi ngày.</td>
            </tr>`;
    result_divv.appendChild(table);
  }
  function create_Tabbed_Nutration_Table() {
    const result_div = document.getElementById("result_div1");
    result_div.innerHTML = "";
    result_div.innerHTML = `
    <div class="temp_parent_div" id="temp_parent_div_result" style="width: 511pt;">
        <div class="temp_child_div">
          <span class="temp_nutrition_heading temp_bold temp_20pt" style="line-height: 21px;">Nutrition Facts</span>
          <div class="temp_line"></div>
			<div style="line-height: 20px;">
          <span class="temp_Serving_Container"><span id="SERVINGS">0</span> servings per container</span>
          <span class="temp_paragraph_h temp_bold">Serving size</span>
          <span class="temp_paragraph_h temp_bold"><span id="SERVING-SIZE-CUP">0</span> <span id="SERVING-SIZE-TYPE">cup</span> (<span id="SERVING-SIZE-GRAMS">0</span><span id="SERVING-SIZE-Unit">g</span>)</span>
          </div>
<div class="temp_line"></div>
          <div class="temp_child_p">
            <div style="line-height: 18px;">
              <span class="temp_h2">Calories</span>
              <span class="temp_paragraph_h">per serving</span>
            </div>
            <div style="line-height: 18px;     text-align: center">
              <span class="temp_nutrition_heading" id="NUM_CALORIES">170</span>
            </div>
          </div>
        </div>
        <div class="temp_MyDiv_Center">
          <div class="temp_Center_Div_Child">
            <div class="temp_child_div">
              <div class="temp_child_h1">
                <div style="line-height: 17px;">
                  <span style="float: left;" class="temp_paragraph_h2 temp_6pt_bold">Amount/serving</span>
                  <span style="float: right;" class="temp_paragraph_h2 temp_6pt_bold"
                    >% Daily Value*</span
                  >
                  <div class="temp_line_2" style="padding-top: 15.5px;"></div>
                </div>
                <div>
                  <span class="temp_paragraph_h2 fat-parent" id="TOTAL_FAT" style="grid-template-columns: 55px 90px 40px;display: grid;width: 100%;line-height: 20px;" >Total Fat <span class="temp_8pt vitamin-value" style="font-weight: normal;">1.5g</span> <span style="text-align: end;" class="temp_paragraph_h2 percentage">2%</span></span>
                  <div class="temp_line_3"></div>
                  <span id="SATURATED_FAT" class="temp_8pt" style="grid-template-columns: 72px 54px 46px;display: grid;width: 100%;line-height: 20px;padding-left: 13px;">&nbsp; Saturated Fat  
                    <span class="temp_8pt vitamin-value">0g</span>
                    <span style="text-align: end;" class="temp_paragraph_h2 percentage">0%</span>
                  </span>
                  <div class="temp_line_3"></div>
                  <span class=" temp_8pt " id="TRANS_FAT" style="grid-template-columns: 29px 17px 40px;display: grid;width: 100%;line-height: 20px;margin-left: 18px;"><i>Trans</i> 
                    <span class="temp_8pt">Fat</span>
                    <span class="temp_8pt vitamin-value">0g</span>
                  </span>
                  <div class="temp_line_3"></div>
                  <span class="temp_paragraph_h2" id="CHOLESTEROL" style="grid-template-columns: 71px 70px 44px;display: grid;width: 100%;line-height: 20px;">Cholesterol
                    <span class="temp_8pt vitamin-value">0mg</span>
                    <span class="temp_paragraph_h2 percentage" style="text-align: end;" >0%</span>
                  </span>
                  <div class="temp_line_3"></div>
                  <span class="temp_paragraph_h2" id="SODIUM" style="grid-template-columns: 47px 90px 48px;display: grid;width: 100%;line-height: 20px;">Sodium
                    <span class="temp_8pt vitamin-value">0mg</span>
                    <span class="temp_paragraph_h2 percentage" style="text-align: end;">0%</span>
                  </span>
                  <div class="temp_line_2"></div>
                </div>
              </div>
            </div>
            <div class="temp_child_div">
              <div class="temp_child_h1">
                <div style="line-height: 17px;">
                  <span style="float: left;" class="temp_paragraph_h2 temp_6pt_bold">Amount/serving</span>
                  <span style="float: right;" class="temp_paragraph_h2 temp_6pt_bold">% Daily Value*</span>
                  <div class="temp_line_2" style="padding-top: 15.5px;"></div>
                </div>
                <div>
                  <span class="temp_paragraph_h2 total_carbohydrate-parent" id="TOTAL_CARBS" style="grid-template-columns: 115px 31px 40px;display: grid;width: 100%;line-height: 20px;">Total Carbohydrate
                    <span class="temp_8pt vitamin-value">0g</span>
                    <span style="text-align: end;" class="temp_paragraph_h2 percentage">0%</span>
                  </span>
                  <div class="temp_line_3"></div>
                  <span class="temp_8pt" id="DIETARY_FIBER" style="padding-left: 13px;grid-template-columns: 65px 62px 42px;display: grid;width: 100%;line-height: 20px;">Dietary Fiber
                    <span class="temp_8pt vitamin-value">0g</span>
                    <span style="text-align: end;" class="temp_paragraph_h2 percentage">0%</span>
                  </span>
                  <div class="temp_line_3"></div>
                  <span style="padding-left: 13px;grid-template-columns: 62px 103px;display: grid;width: 100%;line-height: 20px;" class="temp_8pt TOTAL_SUGARS-parent" id="TOTAL_SUGARS">Total Sugars
                    <span class="temp_8pt vitamin-value">0g</span>
                  </span>
                  <div class="temp_line_4"></div>
                  <span style="padding-left: 17px;grid-template-columns: 43px 25px 68px 33px;display: grid;width: 100%;line-height: 20px;" class="temp_8pt" id="ADDED_SUGARS">Includes
                    <span class="temp_8pt vitamin-value">0g</span>
                    <span class="temp_8pt">Added Sugars</span>
                    <span style="text-align: end;"  class="temp_paragraph_h2 percentage">2%</span>
                  </span>
                  <div class="temp_line_3"></div>
                  <span class="temp_paragraph_h2" id="PROTEIN" style="grid-template-columns: 23% 14%;display: grid;width: 100%;line-height: 20px;">Protein
                    <span class="temp_8pt vitamin-value">0g</span>
                  </span>
                  <div class="temp_line_2"></div>
                </div>
              </div>
            </div>
         </div>
          <div class="temp_Vitamin_D_Div temp_8pt" style="    line-height: 18px;">
            <span id="VITAMIN_D">Vitamin D 
              <span class="vitamin-value">0mcg</span> 
              <span class="percentage">0%</span>
            </span> 
            • <span id="CALCIUM">Calcium 
                <span class="vitamin-value">0mg</span> 
                <span class="percentage">0%</span>
              </span> 
            • <span id="IRON">Iron 
                <span class="vitamin-value">0mg</span> 
                <span class="percentage">0%</span>
              </span>
            • <span id="POTASSIUM">Potassium <span class="vitamin-value">0mg</span>
              <span class="percentage">0%</span>
              </span>
          </div>
        </div>
        <div class="temp_child_div temp_Percent_Value">
          <span style="    line-height: 12px;
    display: flex;">*The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</span>
        </div>
      </div>`;
  }
  function createlinear_Nutation_Table() {
    const result_div = document.getElementById("result_div1");
    result_div.innerHTML = "";
    result_div.innerHTML = `
     <div class="parent" id="temp_parent_div_result" style="width: 370pt;">
        <div class="paragraph_1">
            <span class="temp_size">Nutrition Facts</span>
            <span class="temp_9pt">Servings: <span id="SERVINGS">0</span>,</span>
            <span class="temp_bold temp_9pt">Serv. size: 
                <span id="SERVING-SIZE-CUP">0</span>
                <span id="SERVING-SIZE-TYPE">cup</span>
                (<span id="SERVING-SIZE-GRAMS">0</span>
                <span id="SERVING-SIZE-Unit">g</span>),
            </span>
        </div>
        <div class="paragraph_2">
            <span class="temp_6pt">Amount per serving:</span>
            <span class="temp_bold temp_10pt">Calories 
                <span id="NUM_CALORIES" class="linear_cal">0</span>,
            </span>
            <span class="temp_bold temp_8pt">Total Fat</span>
            <span class="fat-parent temp_8pt" id="TOTAL_FAT">
                <span class="temp_8pt vitamin-value">0g</span>
                (<span class="temp_8pt percentage">0%</span> DV)
            </span>, 
            <span id="SATURATED_FAT" class="temp_8pt">Sat. Fat
                <span class="temp_8pt vitamin-value">0g</span>
                (<span class="temp_8pt percentage">0%</span> DV),
            </span><br>
            <span class="temp_italic temp_8pt ">Trans </span>
            <span id="TRANS_FAT" class="temp_8pt"> 
                <span class="temp_8pt">Fat</span>
                <span class="temp_8pt vitamin-value">0g</span>
            </span>
            <span class="temp_paragraph_h2">Cholest.</span>
            <span id="CHOLESTEROL" class="temp_8pt">
              <span class="temp_8pt vitamin-value">0mg</span>
             (<span class="temp_8pt percentage">0%</span> DV),
            </span>
            <span class="temp_paragraph_h2">Sodium</span>
            <span id="SODIUM" class="temp_8pt">
                <span class="temp_8pt vitamin-value">0mg</span>
                (<span class="temp_8pt percentage" >0%</span> DV),
            </span>
            <span class="temp_paragraph_h2 ">Total Carb.</span>
            <span class="total_carbohydrate-parent temp_8pt" id="TOTAL_CARBS">
                <span class="temp_8pt vitamin-value">0g</span>
                (<span class="temp_8pt percentage">0%</span> DV),
            </span><br>
            <span class="temp_8pt" id="DIETARY_FIBER">Fiber
                <span class="temp_8pt vitamin-value">0g</span>
                (<span class="temp_8pt percentage">0%</span> DV),
            </span>
            <span class="temp_8pt TOTAL_SUGARS-parent" id="TOTAL_SUGARS">Total Sugars
                <span class="temp_8pt vitamin-value">0g</span>
            </span>
            <span class="temp_8pt" id="ADDED_SUGARS">(Incl.
                <span class="temp_8pt vitamin-value">0g</span>
                <span class="temp_8pt">Added Sugars,</span>
                <span class="percentage">2%</span> DV),
            </span>
            <span class="temp_paragraph_h2">Protein</span>
            <span id="PROTEIN">
                <span class="temp_8pt vitamin-value">0g</span>,
            </span><br>
            <span id="VITAMIN_D" class="temp_8pt">Vit D.
                (<span class="percentage">0%</span> DV),
            </span> 
            <span id="CALCIUM" class="temp_8pt">Calcium 
                (<span class="percentage">0%</span> DV),
            </span> 
            <span id="IRON" class="temp_8pt">Iron 
                (<span class="percentage">0%</span> DV),
            </span>
            <span id="POTASSIUM" class="temp_8pt">Potas.
                (<span class="percentage">0%</span> DV),
            </span>
        </div>
    </div> `;
  }

  function download_pdf(element, type)
  {
    document.getElementById('capturedImage').style.display = "none";
    document.getElementById(element).style.display = type;
    var div_to_downlaod = document.getElementById(element);
    html2pdf(div_to_downlaod);
    // document.getElementById('capturedImage').style.display = "none";
    // document.getElementById(element).style.display = type;
    // var elements = document.getElementById(element);
    //   // Get element width and height in pixels
    //   var width = elements.offsetWidth;
    //   var height = elements.offsetHeight;
    //   // Convert pixels to millimeters (1 px = 0.264583 mm)
    //   var mmWidth = width * 0.264583;
    //   var mmHeight = height * 0.264583;
    //   console.log(mmWidth, mmHeight)
    //   var orientation = (mmWidth > mmHeight) ? 'landscape' : 'portrait';
    //   var opt = {
    //     margin: 0,
    //     filename: 'myfile.pdf',
    //     image: { type: 'jpeg', quality: 0.98 },
    //     html2canvas: { scale: 2 },
    //     jsPDF: { unit: 'mm', format: [mmWidth, mmHeight], orientation: orientation }
    //   };
    // html2pdf().from(elements).set(opt).save();
  }
  function download_image(element)
  {    
    document.getElementById('capturedImage').style.display = "inline-block";
    document.getElementById(element).style.display = "none";
    let imgElement = document.getElementById('capturedImage');
      if (imgElement) {
        let link = document.createElement('a');
        link.href = imgElement.src;
        link.download = 'captured-image.png';
        link.click();
      } else {
        alert("No image found to download!");
      }
  }

  function make_image(element, size)
  {
    html2canvas(document.getElementById(element)).then(function(canvas) {
      let img = canvas.toDataURL("image/png");
      let imgElement = document.createElement('img');
      imgElement.src = img;
      imgElement.style.width = size;
      imgElement.id = 'capturedImage'; 
      document.getElementById('outputImage').innerHTML = ''; // Clear previous images
      document.getElementById('outputImage').appendChild(imgElement);
      document.getElementById(element).style.display = "none";
    });
  }


  const formatSelect = document.getElementById('vitamin_data_format');
  formatSelect.addEventListener('change', function() {
    const selectedValue = formatSelect.value;
    if(selectedValue == "percentage")
    {
      document.getElementById('inner_txt1').textContent = "%";
      document.getElementById('inner_txt2').textContent = "%";
      document.getElementById('inner_txt3').textContent = "%";
      document.getElementById('inner_txt4').textContent = "%";

    }else if(selectedValue == "units")
    {
      document.getElementById('inner_txt1').textContent = "mg";
      document.getElementById('inner_txt2').textContent = "mg";
      document.getElementById('inner_txt3').textContent = "mcg";
      document.getElementById('inner_txt4').textContent = "mg";
    }
  });
