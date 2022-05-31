// assert.strictEqual(4, '4', 'Not Strictly Equal')
it('Create a Table', function () {
    cy.task('queryDb', "CREATE TABLE Employee (ID int, FirstName varchar(255), Address varchar(255), City varchar(255))")
})

