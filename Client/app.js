//To get the bathroom value
function getBathroomValue() {
    var uiBathrooms = document.getElementsByName("UiBathroom");
    for (var i = 0, length = uiBathrooms.length; i < length; i++) {
      if(uiBathrooms[i].checked) {
          return parseInt(uiBathrooms[i].value);
      }
    }

  }

  //To get the bedroom value
  function getBedroomValue() {
    var UiBedrooms = document.getElementsByName("UiBedroom");
    for (var i = 0, length = UiBedrooms.length; i < length; i++) {
      if(UiBedrooms[i].checked) {
          return parseInt(UiBedrooms[i].value);
      }
    }

  }
    // Get the value of the Services
  function getServicesValue() {
    var UiServices = document.getElementsByName("UiServices");
    for (var i = 0, length = UiServices.length; i < length; i++) {
      if(UiServices[i].checked) {
          return parseInt(UiServices[i].value);
      }
    }

  }
    // Get the value of the Furnished
  function getFurnishedValue() {
    var UiFurnished = document.getElementsByName("UiFurnished");
    for (var i = 0, length = UiFurnished.length; i < length; i++) {
      if(UiFurnished[i].checked) {
          return parseInt(UiFurnished[i].value);
      }
    }

  }
    // Get the value of the hotel
  function getHotelValue() {
    var UiHotel = document.getElementsByName("UiHotel");
    for (var i = 0, length = UiHotel.length; i < length; i++) {
      if(UiHotel[i].checked) {
          return parseInt(UiHotel[i].value);
      }
    }

  }

  // Get the value of the compound UiCompound
  function getCompoundValue() {
    var UiCompound = document.getElementsByName("UiCompound");
    for (var i = 0, length = UiCompound.length; i < length; i++) {
      if(UiCompound[i].checked) {
          return parseInt(UiCompound[i].value);
      }
    }

  }

  //this function will return the estimated price.
  function onClickEstimatePrice()
  {
    console.log("Estimate price button clicked");
    var area = document.getElementById("UiArea");
    var bedroom = getBedroomValue();
    var bathroom = getBathroomValue();
    var floor = document.getElementById("UiFloor");
    var services = getServicesValue();
    var furnished = getFurnishedValue();
    var hotel = getHotelValue();
    var compound = getCompoundValue();
    var EstimatedPrice = document.getElementById('UiEstimatedPrice');

    var url = "http://127.0.0.1:5000/predict_home_price";
    $.post(url, {
        area: parseInt(area.value),
        bedroom :bedroom,
        bathroom:bathroom,
        floor:parseInt(floor.value),
        services:services,
        furnished:furnished,
        hotel:hotel,
        compound:compound
       
    },function(data, status) {
        console.log(data.predicted_price);
        EstimatedPrice.innerHTML = "<h2>" + data.predicted_price.toString() + " EGP</h2>";
        console.log(status);
    });
  }

 
  


