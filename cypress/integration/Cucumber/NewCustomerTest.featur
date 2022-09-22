Feature: Place an order for the first time with a new customer
  As a YL new customer,
  I want to add some items to the shopping cart,
  So I can place a one-time first order.


  Background:
    Given I am at the Login page

  @focus
  Scenario Outline: New customer placing a one-time order for the first time
    Given I am a new customer with "<first_name>", "<last_name>", "<phone_number>" and "<password>"

    And I add a new adddress
      | first_name | last_name | address              | city     | state    | country | zipcode | phone_number | default_address |
      | Mauricio   | Ramirez   | 1411 6th Ave         | New York | New York | US      | 10019   | 3003206240   | Yes             |
      | Andrea     | Cuervo    | 1538 w Sandalwood Dr | Lehi     | Utah     | US      | 84043   | 3013270157   | No              |

    And I add a new credit card
      | first_name | last_name  | card_number      | month | year | cvv | default_payment | billing_address |
      | YL         | Visa       | 4440000009900010 | 01    | 2023 | 111 | Yes             | Yes             |
      | YL         | Mastercard | 5500005555555559 | 01    | 2023 | 111 | No              | Yes             |

    When I place a one-time first order with "<shipping_method>", "<payment_method>", "<donation>" and "<referral_id>"
      | sku  | item                  | quantity | price | pv   |
      | 3500 | Basil Essential Oil   | 2        | 26.50 | 26.5 |
      | 5178 | Lip Balm - Grapefruit | 3        | 4.50  | 4.5  |
      | 5203 | Lavender Lip Balm     | 1        | 4.25  | 4.25 |


    Then I should see the order confirmation "THANK YOU FOR SHOPPING YOUNG LIVING."

    Examples:
      | first_name | last_name | phone_number | password  | shipping_method            | payment_method | donation | referral_id |
      | Mauricio   | Ramirez   | 3003206240   | Password1 | Lehi, UT Will Call Pick-up | Credit Card    | Yes      | 1056692     |
