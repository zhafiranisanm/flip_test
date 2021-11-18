/// <reference types="cypress" />

let arr_text =[
    {
        "text": "Bantuan",
        "title": "Pusat Bantuan"
    },
    {
        "text": "Karir",
        "title": " Flip Careers "
    },
    {
        "text": "Biaya",
        "title": "Pilihan Hemat Untuk Layanan Transfer Uang Antar Bank - Flip"
    },
    {
        "text": "Masuk",
        "title": "Login dan Mulai Kirim Uang Tanpa Biaya Admin - Flip"
    },

]

describe('Web UI Element test,', () => {
    beforeEach(() => {
      cy.visit('https://flip.id/');
    })

    it('As a User, I should be able to view buttons menu by text and click it', () => {
        for (let i=0; i<arr_text.length; i++) {
            //get element by attribute
            cy.get('a.btn-grey-flip').eq(i)
            //assertions to have exact text
            .should('have.text',arr_text[i].text)
            //click each button
            .click()
            //assert navigation to next page by title
            .get('title').should('have.text',arr_text[i].title);

            cy.go('back')
            
        }
    })
 })