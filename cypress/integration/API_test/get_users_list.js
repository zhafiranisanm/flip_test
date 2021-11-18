/// <reference types = "Cypress" />

let arr_data = [
    {
        "id": 1,
        "email": "george.bluth@reqres.in",
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    {
        "id": 3,
        "email": "emma.wong@reqres.in",
        "first_name": "Emma",
        "last_name": "Wong",
        "avatar": "https://reqres.in/img/faces/3-image.jpg"
    },
    {
        "id": 4,
        "email": "eve.holt@reqres.in",
        "first_name": "Eve",
        "last_name": "Holt",
        "avatar": "https://reqres.in/img/faces/4-image.jpg"
    },
    {
        "id": 5,
        "email": "charles.morris@reqres.in",
        "first_name": "Charles",
        "last_name": "Morris",
        "avatar": "https://reqres.in/img/faces/5-image.jpg"
    },
    {
        "id": 6,
        "email": "tracey.ramos@reqres.in",
        "first_name": "Tracey",
        "last_name": "Ramos",
        "avatar": "https://reqres.in/img/faces/6-image.jpg"
    },
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg"
    }
];

describe('Get user list by valid page', () => {

    it('As a User, I should be able to get users list by page = 1', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=1'
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.page).to.eq(1)
        })
    })

    it('As a User, I should be able to get users list by page = 2', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.page).to.eq(2)
        })
    })

    it('As a User, I should be able to get users list by per page = 5', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?per_page=5'
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.per_page).to.eq(5)
        })
    })
})

describe('Get user list by valid id', () => {

    it('[Outline] As a User, I should be able to get users list by id', () => {
        
        for (let i=0; i<arr_data.length; i++){
            const urlLoop = Cypress.config('baseUrlId') + (i+1)
            cy.request({
                method: 'GET',
                url: urlLoop
            }).then((response) => {
                cy.log(JSON.stringify(response))
                expect(response.status).to.eq(200)
                expect(response.body.data.id).to.eq(arr_data[i].id)
                expect(response.body.data.email).to.eq(arr_data[i].email)
                expect(response.body.data.first_name).to.eq(arr_data[i].first_name)
                expect(response.body.data.last_name).to.eq(arr_data[i].last_name)
                expect(response.body.data.avatar).to.eq(arr_data[i].avatar)
    
            });
        }

    })
})

describe(' Get users list by invalid input ', () => {

    it('As a User, I should not be able to get user list by invalid id = null', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?id=null',
            failOnStatusCode : false

        }).then((response) => {
            expect(response.status).to.eq(404)
        })
    })

    it('As a User, I should not be able to get user list by invalid id = string', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?id="halo"',
            failOnStatusCode : false

        }).then((response) => {
            expect(response.status).to.eq(404)
            
        })
    })

    it('As a User, I should not be able to get user list by invalid id = empty', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?id=""',
            failOnStatusCode : false
            
        }).then((response) => {
            expect(response.status).to.eq(404)
            
        })
    })

    it('As a User, I should not be able to get user list by invalid id = minus', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?id=-1',
            failOnStatusCode : false
            
        }).then((response) => {
            expect(response.status).to.eq(404)
        })
    })
})