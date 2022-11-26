import React from "react";
import '../index.css';

function Profile() {
    return (
        <div className="profile">
            <div>
                <h1>Profile</h1>
                <section id="characters">
                    <p><strong>Name:</strong><span id="user">Midnight6949</span></p>
                    <p><strong>Main: </strong> <span id="main">Monk</span></p>
                    <p><strong>Role: </strong><span id="mainrole">Tank</span></p>
                    <p><strong>Offspec: </strong><span id="mainoffspec">Melee</span></p>
                    <p><strong>Alt: </strong><span id="alt">Hunter</span></p>
                    <p><strong>Role: </strong><span id="altrole">Ranged</span></p>
                    <p><strong>Offspec: </strong><span id="altoffspec">Ranged</span></p>
                </section>
                <section id="items">
                    <p><strong>Items: </strong><span id="itemList">Item 1, Item 2, Item 3</span></p>
                </section>
            </div>
        </div>
    );
}

export default Profile;