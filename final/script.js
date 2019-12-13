/**
 * @author Don Li (A00735227)
 * @version 1.0
 * @time December 13, 2019
 */

/**
 * Creates business posts and appends to the DOM
 * @param {Object} business contains all business information
 */
function elementForBusiness(business) {
  const businesses = document.querySelector('#businesses');
  const businessElement = document.createElement('div');
  businessElement.classList.add("business");

  const businessHeader = document.createElement('header');
  businessHeader.classList.add("business-header");
  businessElement.appendChild(businessHeader);

  const businessTitle = document.createElement('h2');
  businessTitle.classList.add("business-title");
  businessTitle.innerText = business.name;
  businessHeader.appendChild(businessTitle);

  const businessContent = document.createElement('section')
  businessContent.classList.add("business-content")
  businessElement.appendChild(businessContent)

  const businessImageContainer = document.createElement('div')
  businessImageContainer.classList.add("business-image-container")
  businessContent.appendChild(businessImageContainer)

  const businessImage = document.createElement('img')
  businessImage.classList.add("business-image")
  businessImage.setAttribute('src', business.image_url)
  businessImage.setAttribute('alt', business.alias)
  businessImageContainer.appendChild(businessImage)

  //rating
  const businessRatingContainer = document.createElement('div');
  businessRatingContainer.setAttribute('class', 'rating-container');

  const businessRating = document.createElement('div');
  businessRating.setAttribute('class', 'ratings');
  businessRating.innerText = business.rating + `⭐️`;
  businessRatingContainer.appendChild(businessRating);
  businessElement.appendChild(businessRatingContainer);

  //price
  const businessPriceContainer = document.createElement('div');
  businessPriceContainer.setAttribute('class', 'price-container');

  const businessPrice = document.createElement('div');
  businessPrice.setAttribute('class', 'price');
  if (business.price === undefined) {
    businessPrice.innerText = 'Pricing to be determined...'
  } else {
    businessPrice.innerText = `＄ = ` + business.price;
  }
  businessPriceContainer.appendChild(businessPrice);
  businessElement.appendChild(businessPriceContainer);

  //phone
  const businessDisplayPhoneContainer = document.createElement('div');
  businessDisplayPhoneContainer.setAttribute('class', 'display-phone-container');

  const businessDisplayPhone = document.createElement('div');
  businessDisplayPhone.setAttribute('class', 'display-phone');
  if(business.display_phone === "") {
    businessDisplayPhone.innerText = 'Not yet available';
  } else {
    businessDisplayPhone.innerText = business.display_phone;
  }
  businessDisplayPhoneContainer.appendChild(businessDisplayPhone);
  businessElement.appendChild(businessDisplayPhoneContainer);

  //appends business to businesses
  businesses.appendChild(businessElement);
  return businessElement
}


main();

/**
 * Calls all functions
 */
function main () {
  try {
    fetchFromDB("bubble tea");
    searchFunctionality();
  } catch (error) {
    alert(error);
  }
}

/**
 * Makes a fetch request from API
 * @param {String} search search term
 */
function fetchFromDB(search) {
  try {
    fetch(`https://yelp-places.herokuapp.com/api/${search}`)
    .then(response => response.json()
      .then(str => loop(str)))
    // .catch(onrejected => (console.log(onrejected.message)));
  } catch (msg) {
    console.log(msg);
  }
}

/**
 * Loops through array of businesses in from response
 * @param {Object} obj giant object parsed from fetch
 */
function loop(obj) {
  if(obj !== undefined && obj !== null) {
    const arr = obj.businesses
    for(ele of arr) {
      elementForBusiness(ele);
      console.log(ele);
    }
  } else {
    console.log("Fetch result form API was not expected.")
  }
}

/**
 * Function adds search functionality
 */
function searchFunctionality() {
  const footerSearch = document.querySelector('#search-field');
  const footerSearchSubmit = document.querySelector('.footer-form');
  footerSearchSubmit.addEventListener('submit', event => {
    event.preventDefault();
    const searchTerm = footerSearch.value;
    console.log(searchTerm);

    const check = [];
    if(searchTerm === undefined) {
      check.push(1);
    }
    if (searchTerm === null) {
      check.push(2);
    }
    if (searchTerm.length < 2) {
      check.push(3);
    }
    console.log(check);

    // if(!check.includes('1' || '2' || '3')) {
    if(searchTerm !== "  ") {
      const businesses = document.querySelector('#businesses');

      if(searchTerm !== "") {
        businesses.innerHTML = "";
        fetchFromDB(searchTerm);
      }else {
        alert("what?")
      }

      const headerSelector = document.querySelector('#site-heading');
      headerSelector.innerText = `${searchTerm} Establishments in Vancouver 🙃`;

      footerSearch.value='';
    } else {
      alert("Somehow you bypassed the HTML form validators, shame on you.");
    }
  });
}


