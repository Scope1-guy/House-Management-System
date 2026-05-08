export const dashboardPageHTML = 
    `
<!-- HEADER -->
    <header class="header">
      <h2>Dashboard</h2>
      <div class="user">Admin</div>
    </header>

    <!-- CARDS -->
    <section class="cards">
      <div class="card">
        <h4>Total Houses</h4>
        <h2 class="house-total"></h2>
      </div>
      <div class="card">
        <h4>Total Flats</h4>
        <h2 class="flats-total"></h2>
      </div>
      <div class="card green">
        <h4>Occupied Flats</h4>
        <h2 class="occupied-flats-total"></h2>
      </div>
      <div class="card orange">
        <h4>Vacant Flats</h4>
        <h2 class="vacant-total"></h2>
      </div>
    </section>

    <!-- OVERVIEW -->
    <section class="overview">

      <div class="houses">
        <h3>Houses Overview</h3>

        <div class="house-grid">

        </div>
      </div>

      <!-- OCCUPANCY -->
      <div class="occupancy">
        <h3>Occupancy Overview</h3>
        <div class="circle">
          <div class="inner">60%</div>
        </div>
        <p>Occupied: 12</p>
        <p>Vacant: 8</p>
      </div>

    </section>

    <!-- TABLES -->
    <section class="tables">

      <div class="table">
        <h3>Recent Tenants</h3>
        <table>
          <tr>
            <th>Name</th>
            <th>Flat</th>
            <th>House</th>
            <th>Date</th>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>A2</td>
            <td>Lekki Heights</td>
            <td>2024-05-01</td>
          </tr>
          <tr>
            <td>Mary Jane</td>
            <td>B1</td>
            <td>Greenland Estate</td>
            <td>2024-05-03</td>
          </tr>
        </table>
      </div>

      <div class="table">
        <h3>Recent Payments</h3>
        <table>
          <tr>
            <th>Name</th>
            <th>Flat</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>A2</td>
            <td class="green-text">₦250,000</td>
            <td>2024-05-01</td>
          </tr>
          <tr>
            <td>Mary Jane</td>
            <td>B1</td>
            <td class="green-text">₦200,000</td>
            <td>2024-05-03</td>
          </tr>
        </table>
      </div>

    </section>
`;



export const houseViewDetails = [{
    image: "Pictures/images (2).jpeg",
    alt: "Lekki building",
    name: "Lekki Heights",
    location: "Lekki Phase 1, Lagos, Nigeria",
    flats: {
      flat1: "A1",
      flat2: "A2",
      flat3: "A3",
      flat4: "A4"
    },
    occupied: 4
},{
    image: "Pictures/images (2).jpeg",
    alt: "Lekki building",
    name: "Orions House",
    location: "Yaba Tech District, Lagos, Nigeria",
    flats: {
      flat1: "A1",
      flat2: "A2",
      flat3: "A3",
      flat4: "A4",
      flat5: "A5",
      flat6: "A6",
      flat7: "A7"
    },
    occupied: 4
},{
    image: "Pictures/images (2).jpeg",
    alt: "Lekki building",
    name: "Pulse Residences",
    location: "Wuse 2, Abuja, Nigeria",
    flats: {
      flat1: "A1",
      flat2: "A2",
      flat3: "A3",
      flat4: "A4"
    },
    occupied: 3
},{
    image: "Pictures/images (2).jpeg",
    alt: "Lekki building",
    name: "Skyline Villa",
    location: "Ikeja GRA, Lagos, Nigeria",
    flats: {
      flat1: "A1",
      flat2: "A2",
      flat3: "A3",
      flat4: "A4",
      flat5: "A5",
      flat6: "A6",
      flat7: "A7",
      flat8: "A8",
      flat9: "A9",
      flat10: "A10"
    },
    occupied: 7
}]

export const initDashboard = () => {

  let houseReview = "";

  houseViewDetails.forEach((house) => {
      houseReview += `
            <div class="house">
              <img src="${house.image}" alt="${house.alt}">
              <div>
                <h4>${house.name}</h4>
                <p>Flats: ${Object.keys(house.flats).length}</p>
                <p>Occupied: ${house.occupied}</p>
              </div>
            </div>
      `;

      console.log(house.flats, typeof house.flats, Object.keys(house.flats).length)
  })

  

  document.querySelector('.house-grid').innerHTML = houseReview;

  document.querySelector('.house-total').innerHTML = houseViewDetails.length;

  const totalFlat = houseViewDetails.reduce((sum, flat) => {
    return sum + Object.keys(flat.flats).length
  }, 0)
  document.querySelector('.flats-total').innerHTML = totalFlat;

  const totalOccupiedFlats = houseViewDetails.reduce((sum, flat) => {
    return sum + flat.occupied
  }, 0)
  document.querySelector('.occupied-flats-total').innerHTML = totalOccupiedFlats;

  const totalVacant = houseViewDetails.reduce((sum, flat) => {
    const vacant = Object.keys(flat.flats).length - flat.occupied
    return sum + vacant
  }, 0)
  document.querySelector('.vacant-total').innerHTML = totalVacant;
};







const jug = [{
  name: "scope",
  numbers: {
    first: "A1",
    second: "G1",
    third: "R1",
  }
},{
  name: "sugar",
  numbers: {
    first: "A1",
    second: "G1",
    third: "R1",
  }
},{
  name: "sam",
  numbers: {
    first: "K1",
    second: "L1",
    third: "R1",
  }
}]

console.log(Object.keys(jug[0].numbers).length);