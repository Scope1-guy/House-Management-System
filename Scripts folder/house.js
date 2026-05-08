import { houseViewDetails } from "./dashboard.js";


export const houseHTML = `
    <div class="main">
    <div class="topbar">
        <h1>Houses</h1>
        <button class="btn">+ Add House</button>
    </div>

    <div class="table-box">
        <table class="houses-table-list">
        <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Total Flats</th>
            <th>Occupied</th>
            <th>Vacant</th>
            <th>Actions</th>
        </tr>

        </table>
    </div>
    </div>
`;



export const initHouse = () => {
    const updatedHousesDetail = houseViewDetails.map((house) => ({
        ...house,
        vacant: Object.keys(house.flats).length - house.occupied
    }))

    let housesTable = "";

    updatedHousesDetail.forEach((house) => {
        housesTable += `
            <tr>
                <td>${house.name}</td>
                <td>${house.location}</td>
                <td>${Object.keys(house.flats).length}</td>
                <td>${house.occupied}</td>
                <td>${house.vacant}</td>
                <td>Edit</td>
            </tr>
        `
    });

    document.querySelector('.houses-table-list').insertAdjacentHTML("beforeend", housesTable);
};