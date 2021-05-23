Feature: users karate test script

  Background:
    * url 'https://jsonplaceholder.typicode.com'

  Scenario: get all users and then get the first user by id
    Given path 'users'
    When method get
    Then status 200

    * def first = response[0]

    Given path 'users', first.id
    When method get
    Then status 200

  Scenario: create a user and then get it by id
    * def user =
      """
      {
        "firstName": "testuser",
        "lastName": "Test User",
        "email": "test@user.com",
        "image":"https://www.thomasmaestas.net/dist/img/tmm.png"
        }
      }
      """

    Given url 'https://jsonplaceholder.typicode.com/users'
    And request user
    When method post
    Then status 201

    * def id = response.id
    * print 'created id is: ', id

    Given path id
    # When method get
    # Then status 200
    # And match response contains user
  