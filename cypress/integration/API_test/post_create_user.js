/// <reference types = "Cypress"/>

let arr_users = [
{ 
    name: 'Morpheus', 
    job: 'Leader'
},
{ 
    name: 'Sammy', 
    job: 'Manager'
},
{ 
    name: 'Paula', 
    job: 'Staff'
}
];

describe('As a User, I should be able to crete user by valid payload', () => {

    it('create single users', () => {

        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body:{
                "name": "morpheus",
                "job": "leader"
            }
        
        }).then((response) => {
            cy.log(JSON.stringify(response))
            expect(response.status).to.eq(201)

            expect(response.body).has.property('id')
            expect(response.body).has.property('name','morpheus')
            expect(response.body).has.property('job','leader')
            expect(response.body).has.property('createdAt')
        })
            
    })
    
})

describe('As a User, I should be able to crete user by valid multiple payload', () => {

    it('crete multiple users', () => {
        for (let i=0; i<arr_users.length; i++){
            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/users',
                body: arr_users[i]
            
            }).then((response) => {
                cy.log(JSON.stringify(response))
                expect(response.status).to.eq(201)
                expect(response.body).has.property('id')
                expect(response.body).has.property('name',arr_users[i].name)
                expect(response.body).has.property('job',arr_users[i].job)
                expect(response.body).has.property('createdAt')
            })
        }
    })

})


describe('As a User, I should not be able to crete user by invalid payload : failed case', () => {

    it('create invalid users', () => {

        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body:{
                tanggal :'hari ini',
                task : 'testing api automations'
            },
            failOnStatusCode : false
        
        }).then((response) => {
            cy.log(JSON.stringify(response))
            expect(response.body).has.property('name', false)
            expect(response.body).has.property('job')
            expect(response.body).has.property('createdAt')
        })
            
    })
    
})
