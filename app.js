



    const team_member = document.querySelector('.all-member');


    team.map( data => {

        team_member.innerHTML += `

        <div class="member">
            <div class="img">
                <img src="${data.photo}" alt="">
            </div>
            <div class="description">
                <h2>${data.name}</h2>
                <h1>${data.skill}</h1>
                <h4>Adress  : ${data.adress}</h4>
                <h4>Age     : ${data.age} </h4>
                <p>I'm Full Stack Developers Lorem ipsum dolor sit amet.</p>
            </div>
        </div>

        `;
    })